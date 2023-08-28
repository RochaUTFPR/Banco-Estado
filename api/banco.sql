--========================= Informações importantes para manter a conexão com o Banco =================================
-- Essas informações estão dentro da pasta index.js, precisa ser colocado as chaves de de acesso de configuração 
-- do seu banco de dados postgresql


--=========== chaves de acesso ===========--
--    user: 'postgres',
--    host: 'localhost',
--    database: 'Banco_Estado',
--    password: '123456',
--    port: 5432,  porta que configurou o postgree (caso não tenha alterado 5432 é a porta padrão)
 
--create database Banco_Estado;

create table cliente (
	Nome_cliente varchar(100) not null,
	CPF_cliente varchar(14) not null UNIQUE,
	Telefone varchar(10) not null,
	Estado_civil varchar(8) not null,
	sexo varchar(2) not null,
	Data_de_nascimento varchar (10) not null,
	Endereco varchar(100) not null,
	Id_conta varchar(14),  --vai ser chave primaria
	senha varchar(10) not null,
	Id_conta_corrente varchar(14) unique,  
	Id_conta_poupanca varchar(14) unique,   
	situacao varchar(12) not null  
);

create table Conta_Corrente (             
	Id_conta varchar(14), --chave estrangeira 
    saldo bigint not null,
	Id_funcionario varchar(14) not null  --chave estrangeira   
);

create table Conta_Poupanca (             
	Id_conta varchar(14) , --chave estrangeira 
    saldo bigint not null,
	Id_funcionario varchar(14) not null  --chave estrangeira   
);

create table funcionario ( 
	Id_funcionario varchar(14) not null,    --chave primaria
	senha varchar(10) not null,
	Cargo varchar(50) not null,				
	Nome_funcionario varchar(100) not null,
	CPF_funcionario varchar(14) not null UNIQUE,
	Telefone_funcionario varchar(10) not null,
	Estado_civil varchar(8) not null,
	sexo varchar(2) not null,
	Data_de_nascimento varchar (10) not null,
	Endereco varchar(100) not null,
	situacao varchar(12) not null
);

create table transacoes (
	Id_transacao SERIAL not null,     --chave primaria
	Valor bigint not null,
	Data_transacao TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
	Id_conta_corrente_poupanca varchar(14) not null,         
	valor_atualizado bigint not null,
	Valor_anterior bigint not null,
	descricao TEXT
);

create table emprestimo (
	Id_emprestimo SERIAL not null,    -- chave primaria
	Id_conta varchar(14) not null,    -- chave estrangeira
	Id_funcionario varchar(14) not null, -- chave estrangeira
  	Valor bigint not null,
	Taxa_Juros varchar(10) not null,
	Data_inicio varchar(10) not null,
	Data_final varchar(10) not null,
	Parcelas int not null
);


--===================================== Alter table ==================================================


alter table cliente add primary key (Id_conta);
alter table Conta_Corrente add primary key (Id_conta,Id_funcionario);
alter table Conta_poupanca add primary key (Id_conta,Id_funcionario);
alter table funcionario add primary key (Id_funcionario);
alter table transacoes add primary key (Id_transacao);
alter table emprestimo add primary key (Id_emprestimo,Id_conta,Id_funcionario);

ALTER TABLE Conta_Poupanca ADD FOREIGN KEY (Id_funcionario) REFERENCES funcionario(Id_funcionario);
ALTER TABLE Conta_Corrente ADD FOREIGN KEY (Id_funcionario) REFERENCES funcionario(Id_funcionario);
ALTER TABLE emprestimo ADD FOREIGN KEY (Id_conta) REFERENCES cliente(Id_conta);
ALTER TABLE emprestimo ADD FOREIGN KEY (Id_funcionario) REFERENCES funcionario(Id_funcionario);
ALTER TABLE Conta_Corrente ADD FOREIGN KEY (Id_conta) REFERENCES cliente(Id_conta);
ALTER TABLE Conta_Poupanca ADD FOREIGN KEY (Id_conta) REFERENCES cliente(Id_conta);


-- =============================================== Criação da tabela de backup =================================

CREATE TABLE clientesExcluidos (
	Nome_cliente varchar(100) not null,
	CPF_cliente varchar(14) not null UNIQUE,
	Telefone varchar(10) not null,
	Estado_civil varchar(8) not null,
	sexo varchar(2) not null,
	Data_de_nascimento varchar (10) not null,
	Endereco varchar(100) not null,
	Id_conta varchar(14),  --vai ser chave primaria
	senha varchar(10) not null,
	Id_conta_corrente varchar(14),  --vai ser chave primaria
	Id_conta_poupanca varchar(14),  --vai ser chave primaria 
	data_hora_exclusao TIMESTAMP NOT NULL,
	situacao varchar(12) not null  
);

alter table clientesExcluidos add primary key (Id_conta);


--======================================== Funções para transferencia ========================================
-- observação: por causa do tempo eu não modifiquei, mas dá para criar uma função só para atender a funcionalidade dessas 4,
-- pretendo implementar mais tarde.



-- conta corrente para corrente

CREATE OR REPLACE FUNCTION executar_updates_corrente_corrente(p_valor numeric, p_id_conta text, id_transfer text) RETURNS void AS $$
BEGIN
    UPDATE conta_corrente SET saldo = p_valor + (select saldo from conta_corrente where id_conta = id_transfer) where id_conta = id_transfer;
	UPDATE conta_corrente SET saldo = (select saldo from conta_corrente where id_conta = p_id_conta) - p_valor  where id_conta = p_id_conta;
    IF NOT FOUND THEN
        RAISE EXCEPTION 'Erro ao executar o update. Realizando rollback.';
    END IF;
END;
$$ LANGUAGE plpgsql;

-- conta corrente para poupanca

CREATE OR REPLACE FUNCTION executar_updates_corrente_poupanca(p_valor numeric, p_id_conta text, id_transfer text) RETURNS void AS $$
BEGIN
    UPDATE conta_poupanca SET saldo = p_valor + (select saldo from conta_poupanca where id_conta = id_transfer) where id_conta = id_transfer;
	UPDATE conta_corrente SET saldo = (select saldo from conta_corrente where id_conta = p_id_conta) - p_valor  where id_conta = p_id_conta;
    IF NOT FOUND THEN
        RAISE EXCEPTION 'Erro ao executar o update. Realizando rollback.';
    END IF;
END;
$$ LANGUAGE plpgsql;

-- conta poupanca para corrente 

CREATE OR REPLACE FUNCTION executar_updates_poupanca_corrente(p_valor numeric, p_id_conta text, id_transfer text) RETURNS void AS $$
BEGIN
    UPDATE conta_corrente SET saldo = p_valor + (select saldo from conta_corrente where id_conta = id_transfer) where id_conta = id_transfer;
	UPDATE conta_poupanca SET saldo = (select saldo from conta_poupanca where id_conta = p_id_conta) - p_valor  where id_conta = p_id_conta;
    IF NOT FOUND THEN
        RAISE EXCEPTION 'Erro ao executar o update. Realizando rollback.';
    END IF;
END;
$$ LANGUAGE plpgsql;

-- conta poupanca para poupanca

CREATE OR REPLACE FUNCTION executar_updates_poupanca_poupanca(p_valor numeric, p_id_conta text, id_transfer text) RETURNS void AS $$
BEGIN
    UPDATE conta_poupanca SET saldo = p_valor + (select saldo from conta_poupanca where id_conta = id_transfer) where id_conta = id_transfer;
	UPDATE conta_poupanca SET saldo = (select saldo from conta_poupanca where id_conta = p_id_conta) - p_valor  where id_conta = p_id_conta;
    IF NOT FOUND THEN
        RAISE EXCEPTION 'Erro ao executar o update. Realizando rollback.';
    END IF;
END;
$$ LANGUAGE plpgsql;


-- =============================================== Criação da View ===========================================

CREATE VIEW clientesAtivos (Nome, CPF, Telefone, EstadoCivil, Sexo, Nasc, Endereco, Conta, Situacao) as
select nome_cliente, cpf_cliente, telefone, estado_civil, sexo, data_de_nascimento, endereco, id_conta, situacao
from cliente where situacao like 'Ativo';


-- =============================================== Criação da trigger ===========================================


CREATE TRIGGER backupClientes AFTER DELETE ON cliente FOR EACH ROW EXECUTE FUNCTION backupClientesDeletados();

CREATE FUNCTION backupClientesDeletados() RETURNS TRIGGER AS $$ BEGIN 
	INSERT INTO clientesExcluidos (Nome_cliente, CPF_cliente, Telefone, Estado_civil, sexo, Data_de_nascimento,
	Endereco, Id_conta, senha, Id_conta_corrente, Id_conta_poupanca, situacao, data_hora_exclusao) 
	VALUES (OLD.Nome_cliente, OLD.CPF_cliente, OLD.Telefone, OLD.Estado_civil, OLD.sexo, OLD.Data_de_nascimento,
	OLD.Endereco, OLD.Id_conta, OLD.senha, OLD.Id_conta_corrente, OLD.Id_conta_poupanca, OLD.situacao, CURRENT_TIMESTAMP);
	RETURN OLD;
END;
$$ LANGUAGE PLPGSQL;


--============================ View criado envolvendo duas tabelas ==============================================

CREATE VIEW conta_funcionario (id_conta, id_funcionario, nome_funcionario)  AS
SELECT conta_corrente.Id_conta, conta_corrente.Id_funcionario,funcionario.Nome_funcionario
from conta_corrente join funcionario on conta_corrente.Id_funcionario = funcionario.Id_funcionario


--=========================== Usuario criado apenas para exemplo didatico ========================================

CREATE USER usuario WITH PASSWORD '123456';

GRANT SELECT ON conta_funcionario TO usuario;
GRANT INSERT ON conta_funcionario TO usuario;

--======================== triger e função criados para inserção na view conta_funcionario ===================================

CREATE TRIGGER atualizar_nome_funcionario
INSTEAD OF UPDATE ON conta_funcionario
FOR EACH ROW
EXECUTE FUNCTION atualizar_nome_funcionario();

CREATE OR REPLACE FUNCTION atualizar_nome_funcionario()
RETURNS TRIGGER AS $$
BEGIN
  UPDATE funcionario
  SET nome_funcionario = NEW.nome_funcionario
  WHERE id_funcionario = NEW.id_funcionario;

  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

--======================== indices para buscas ===================================

create index idx_Cliente on cliente(Nome_cliente);
create index idx_Corrente on Conta_Corrente(Id_conta);
create index idx_poupanca on Conta_Poupanca(Id_conta);
create index idx_funcionario on funcionario(Id_funcionario);