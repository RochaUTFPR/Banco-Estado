--popula tabela cliente

--insert into clientes values (nome,cpf,telefone,estado civil,sexo,nascimento,endereco,idconta,senha,id corrente, id poupanca)

insert into cliente values ('João da Silva','318-209-746-12','8549-9261','Casado','M','16/06/1970','Rua das Flores, 123 - Bairro Central, Cidade Alegre, Estado do Rio de Janeiro','62483-7','34892','5-948-361-027','9-502-764-081','Ativo');
insert into cliente values ('Maria Oliveira','465-820-173-98','3726-8134','Casado','F','20/09/1960','Avenida dos Bandeirantes, 456 - Bairro Bela Vista, Cidade Nova, Estado de São Paulo','98520-3','57106','8-072-913-465','3-187-659-420','Desativado');
insert into cliente values ('Pedro Santos','752-638-014-59','6193-5408','Solteiro','M','14/02/1990','Travessa das Palmeiras, 789 - Bairro Jardim das Acácias, Cidade Verde, Estado de Minas Gerais','30217-5','92648','0-624-593-178','1-856-047-239','Ativo');
insert into cliente values ('Ana Souza','893-407-526-15','2087-4953','Solteiro','F','08/04/1993','Rua dos Lírios, 321 - Bairro Centro Histórico, Cidade Antiga, Estado do Pernambuco','13645-8','20375','7-435-210-986','6-493-825-710','Ativo');
insert into cliente values ('Lucas Pereira','926-184-073-57','4316-9782','Casado','M','25/11/1980','Avenida das Castanheiras, 654 - Bairro Alphaville, Cidade Moderna, Estado de Goiás','75962-4','86719','4-769-038-215','2-310-786-549','Ativo');



--popula tabela funcionario

-- insert into funcionario (id_funcionario, senha,Cargo,Nome_funcionario,CPF_funcionario,Telefone_funcionario,Estado_civil,sexo,Data_de_nascimento,Endereco) values ()
insert into funcionario (id_funcionario, senha,Cargo,Nome_funcionario,CPF_funcionario,Telefone_funcionario,Estado_civil,sexo,Data_de_nascimento,Endereco,situacao) values ('98765', '51234','Gerente','Fernanda Costa','631-057-482-94','7850-2639','Casado','F','07/10/1994','Rua das Oliveiras, 987 - Bairro Bosque das Oliveiras, Cidade Serrana, Estado de Santa Catarina','Ativo');
insert into funcionario (id_funcionario, senha,Cargo,Nome_funcionario,CPF_funcionario,Telefone_funcionario,Estado_civil,sexo,Data_de_nascimento,Endereco,situacao) values ('24680', '98653','Assistente','Gabriel Rodrigues','407-329-815-26','5962-1748','Solteiro','M','23/05/1983','Avenida dos Ipês, 2345 - Bairro Praia Azul, Cidade Litorânea, Estado do Ceará','Ativo');
insert into funcionario (id_funcionario, senha,Cargo,Nome_funcionario,CPF_funcionario,Telefone_funcionario,Estado_civil,sexo,Data_de_nascimento,Endereco,situacao) values ('13579', '12457','Assistente','Beatriz Almeida','540-973-281-64','1024-6837','Casado','F','27/01/1998','Travessa dos Pinheiros, 876 - Bairro Residencial dos Lagos, Cidade Tranquila, Estado de Mato Grosso','Ativo');
insert into funcionario (id_funcionario, senha,Cargo,Nome_funcionario,CPF_funcionario,Telefone_funcionario,Estado_civil,sexo,Data_de_nascimento,Endereco,situacao) values ('56789', '73980','Gerente','Rafael Lima','862-541-390-75','3769-4158','Solteiro','M','21/04/1985','Rua da Liberdade, 543 - Bairro Centro Cultural, Cidade Moderna, Estado do Paraná','Ativo');
insert into funcionario (id_funcionario, senha,Cargo,Nome_funcionario,CPF_funcionario,Telefone_funcionario,Estado_civil,sexo,Data_de_nascimento,Endereco,situacao) values ('54321', '60284','Assistente','Isabela Ferreira','129-758-046-83','9582-6074','Casado','F','19/03/1996','Avenida das Acácias, 789 - Bairro Jardim das Flores, Cidade Serena, Estado de Alagoas','Ativo');

--popula tabela transacoes 

-- insert into transacoes (Valor,Data_transacao,Id_conta_corrente_poupanca,valor_atualizado,Valor_anterior) values () 

insert into transacoes (Valor,Data_transacao,Id_conta_corrente_poupanca,valor_atualizado,Valor_anterior) values ('200','16/04/2022','5-948-361-027','5200','5000');
insert into transacoes (Valor,Data_transacao,Id_conta_corrente_poupanca,valor_atualizado,Valor_anterior) values ('350','12/01/2022','8-072-913-465','7350','7000');
insert into transacoes (Valor,Data_transacao,Id_conta_corrente_poupanca,valor_atualizado,Valor_anterior) values ('734','22/01/2023','0-624-593-178','1234','500');
insert into transacoes (Valor,Data_transacao,Id_conta_corrente_poupanca,valor_atualizado,Valor_anterior) values ('20000','28/06/2021','1-856-047-239','40000','20000');
insert into transacoes (Valor,Data_transacao,Id_conta_corrente_poupanca,valor_atualizado,Valor_anterior) values ('-473','08/12/2022','7-435-210-98','827','1300');
insert into transacoes (Valor,Data_transacao,Id_conta_corrente_poupanca,valor_atualizado,Valor_anterior) values ('400','20/05/2023','6-493-825-710','400','0');
insert into transacoes (Valor,Data_transacao,Id_conta_corrente_poupanca,valor_atualizado,Valor_anterior) values ('-1568','09/05/2021','4-769-038-215','2432','4000');
insert into transacoes (Valor,Data_transacao,Id_conta_corrente_poupanca,valor_atualizado,Valor_anterior) values ('30000','25/12/2022','2-310-786-549','130000','100000');

--popula tabela Conta_Corrente

-- insert into Conta_Corrente values (Id_conta, saldo, Id_funcionario)

insert into Conta_Corrente values ('62483-7','5200','24680');
insert into Conta_Corrente values ('98520-3','7350','13579');
insert into Conta_Corrente values ('30217-5','1234','54321');
insert into Conta_Corrente values ('13645-8','827','24680');
insert into Conta_Corrente values ('75962-4','2432','54321');

--popula tabela Conta_Poupanca

-- insert into Conta_Poupanca values (Id_conta, saldo, Id_funcionario)
insert into Conta_Poupanca values ('62483-7','0','24680');
insert into Conta_Poupanca values ('98520-3','0','13579');
insert into Conta_Poupanca values ('30217-5','40000','54321');
insert into Conta_Poupanca values ('13645-8','400','24680');
insert into Conta_Poupanca values ('75962-4','130000','54321');
