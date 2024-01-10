const { Pool } = require('pg');
const cors = require('cors');

// Configuração da conexão com o banco de dados
const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: '',
  password: '',
  port: , //  porta que configurou o postgree
});


// Verificando se a conexão com o banco de dados foi estabelecida
pool.connect((err) => {
  if (err) {
    console.error('Erro ao conectar ao banco de dados', err);
  } else {
    console.log('Conexão com o banco de dados estabelecida');
  }
});


const express = require('express');
const app = express();
const port = 8000; // Porta que esta rodando o server

app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});

app.use(express.json());


// Configurar o cabeçalho Access-Control-Allow-Origin para permitir todas as origens
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  next();
});

// Rota de exemplo
app.get('/', (req, res) => {
  res.send('API em execução!');
});


// Rotas do sistema ========================================================================================

app.get('/usuarios', async (req, res) => {
  try {
    const { rows } = await pool.query('select * from contas');
    res.json(rows);
  } catch (error) {
    console.error('Erro ao executar a consulta', error);
    res.status(500).json({ error: 'Erro ao executar a consulta' });
  }
});


// ================================= Busca para acessar o login ==========================================

app.get('/login', async (req, res) => {
  try {
    const idConta = req.query.id_conta;
    const senha = req.query.senha;
    const query = 'select * from cliente where Id_conta = $1 and senha = $2';
    const values = [idConta, senha];
    const result = await pool.query(query, values);
    const rows = result.rows;
    res.json(rows);
  } catch (error) {
    console.error('Erro ao executar a consulta', error);
    res.status(500).json({ error: 'Erro ao executar a consulta' });
  }
});

// ========================= Busca para acessar o login funcionario ========================================

app.get('/Loginfuncionario', async (req, res) => {
  try {
    const id_funcionario = req.query.id_funcionario;
    const senha = req.query.senha;
    const query = 'select * from funcionario where Id_funcionario = $1 and senha = $2';
    const values = [id_funcionario, senha];
    const result = await pool.query(query, values);
    const rows = result.rows;
    res.json(rows);
  } catch (error) {
    console.error('Erro ao executar a consulta', error);
    res.status(500).json({ error: 'Erro ao executar a consulta' });
  }
});

// ================================== Busca por saldo e id da conta corrente =======================================

app.get('/SaldoContaCorrente', async (req, res) => {
  try {
    const idConta = req.query.id_conta;
    const query = 'SELECT conta_corrente.saldo, cliente.Id_conta_corrente FROM conta_corrente JOIN cliente ON conta_corrente.id_conta = cliente.id_conta WHERE cliente.id_conta = $1';
    const values = [idConta];
    const result = await pool.query(query, values);
    const rows = result.rows;
    res.json(rows);
  } catch (error) {
    console.error('Erro ao executar a consulta', error);
    res.status(500).json({ error: 'Erro ao executar a consulta' });
  }
});

// ======================== Busca por saldo e id da conta poupanca ====================================

app.get('/SaldoContaPoupanca', async (req, res) => {
  try {
    const idConta = req.query.id_conta;
    const query = 'SELECT conta_poupanca.saldo, cliente.Id_conta_poupanca FROM conta_poupanca JOIN cliente ON conta_poupanca.id_conta = cliente.id_conta WHERE cliente.id_conta = $1';
    const values = [idConta];
    const result = await pool.query(query, values);
    const rows = result.rows;
    res.json(rows);
  } catch (error) {
    console.error('Erro ao executar a consulta', error);
    res.status(500).json({ error: 'Erro ao executar a consulta' });
  }
});


app.get('/ContasCorrenteFuncionario', async (req, res) => {
  try {
    const idFuncionario = req.query.idFuncionario;

    const query = `
      SELECT DISTINCT c.Nome_cliente, cc.Id_conta AS Conta_Corrente, c.CPF_cliente, c.Telefone
      FROM funcionario f
      INNER JOIN Conta_Corrente cc ON f.Id_funcionario = cc.Id_funcionario
      INNER JOIN cliente c ON cc.Id_conta = c.Id_conta
      WHERE f.Id_funcionario = $1
    `;
    console.log(req.params)
    const values = [idFuncionario];
    const result = await pool.query(query, values);
    const rows = result.rows;

    res.json(rows);
  } catch (error) {
    console.error('Erro ao executar a consulta', error);
    res.status(500).json({ error: 'Erro ao executar a consulta' });
  }
});

app.get('/SaldoContaPoupanca', async (req, res) => {
  try {
    const idConta = req.query.id_conta;
    const query = 'SELECT conta_poupanca.saldo, cliente.Id_conta_poupanca FROM conta_poupanca JOIN cliente ON conta_poupanca.id_conta = cliente.id_conta WHERE cliente.id_conta = $1';
    const values = [idConta];
    const result = await pool.query(query, values);
    const rows = result.rows;
    res.json(rows);
  } catch (error) {
    console.error('Erro ao executar a consulta', error);
    res.status(500).json({ error: 'Erro ao executar a consulta' });
  }
});

app.get('/transferindovalorescorrente', async (req, res) => {
  try {
    const idConta = req.query.id_conta;
    const valor = req.query.valor;
    const query = 'UPDATE conta_corrente SET saldo = $1 where id_conta = $2';
    const values = [valor, idConta];
    const result = await pool.query(query, values);
    const rows = result.rows;
    console.log(result);
    res.json(rows);
  } catch (error) {
    console.error('Erro ao executar a consulta', error);
    res.status(500).json({ error: 'Erro ao executar a consulta' });
  }
});

app.get('/transferindovalorespoupanca', async (req, res) => {
  try {
    const idConta = req.query.id_conta;
    const valor = req.query.valor;
    const query = 'UPDATE conta_poupanca SET saldo = $1 where id_conta = $2';
    const values = [valor, idConta];
    const result = await pool.query(query, values);
    const rows = result.rows;
    console.log(result);
    res.json(rows);
  } catch (error) {
    console.error('Erro ao executar a consulta', error);
    res.status(500).json({ error: 'Erro ao executar a consulta' });
  }
});

app.get('/clientesAtivos', async (req, res) => {
  try {


    const query = `
        SELECT nome, cpf, telefone, EstadoCivil,
        sexo, nasc, conta, situacao, endereco 
        FROM clientesAtivos
        `;


    const result = await pool.query(query);
    // console.log(result)
    const rows = result.rows;

    res.json(rows);
  } catch (error) {
    console.error('Erro ao executar a consulta', error);
    res.status(500).json({ error: 'Erro ao executar a consulta' });
  }
});

app.use(cors());

app.delete('/clientesDelete/:cpf', async (req, res) => {
  try {
    const cpfCliente = req.params.cpf;

    const deleteContaCorrenteQuery = `
      DELETE FROM conta_corrente
      WHERE id_conta IN (
        SELECT id_conta
        FROM cliente
        WHERE CPF_cliente = $1
      )
    `;

    const deleteContaPoupancaQuery = `
      DELETE FROM conta_poupanca
      WHERE id_conta IN (
        SELECT id_conta
        FROM cliente
        WHERE CPF_cliente = $1
      )
    `;

    const deleteClienteQuery = `
      DELETE FROM cliente
      WHERE CPF_cliente = $1
      RETURNING *
    `;

    const deleteValues = [cpfCliente];

    // Excluir as referências do cliente na tabela conta_corrente
    await pool.query(deleteContaCorrenteQuery, deleteValues);

    // Excluir as referências do cliente na tabela conta_poupanca
    await pool.query(deleteContaPoupancaQuery, deleteValues);

    // Excluir o cliente da tabela cliente
    const deleteResult = await pool.query(deleteClienteQuery, deleteValues);
    const deletedCliente = deleteResult.rows[0];

    if (deletedCliente) {
      res.json({ message: 'Cliente excluído com sucesso' });
    } else {
      res.status(404).json({ error: 'Cliente não encontrado' });
    }
  } catch (error) {
    console.error('Erro ao excluir o cliente', error);
    res.status(500).json({ error: 'Erro ao excluir o cliente' });
  }
});



// ===================== transferencia =====================================================

  // corrente corrente
  // $1 valor, $2 conta que esta pagando, $2 conta que recebe
  app.get('/funcao_updates_corrente_corrente', async (req, res) => {
    try {
      const valor = req.query.valor;
      const idConta1 = req.query.id_conta1;
      const id_conta = req.query.id_conta;
      const query = 'select executar_updates_corrente_corrente($1,$2,$3)';
      const values = [valor,idConta1,id_conta];
      const result = await pool.query(query,values);
      const rows = result.rows;
      console.log(result);
      res.json(rows);
    } catch (error) {
      console.error('Erro ao executar a consulta', error);
      res.status(500).json({ error: 'Erro ao executar a consulta' });
    }
  });
  
  //corrente poupanca
  // $1 valor, $2 conta que esta pagando, $2 conta que recebe
  app.get('/funcao_updates_corrente_poupanca', async (req, res) => {
    try {
      const valor = req.query.valor;
      const idConta1 = req.query.id_conta1;
      const id_conta = req.query.id_conta;
      const query = 'select executar_updates_corrente_poupanca($1,$2,$3)';
      const values = [valor,idConta1,id_conta];
      const result = await pool.query(query,values);
      const rows = result.rows;
      console.log(result);
      res.json(rows);
    } catch (error) {
      console.error('Erro ao executar a consulta', error);
      res.status(500).json({ error: 'Erro ao executar a consulta' });
    }
  });

  //poupanca corrente
  app.get('/funcao_updates_poupanca_corrente', async (req, res) => {
    try {
      const valor = req.query.valor;
      const idConta1 = req.query.id_conta1;
      const id_conta = req.query.id_conta;
      const query = 'select executar_updates_poupanca_corrente($1,$2,$3)';
      const values = [valor,idConta1,id_conta];
      const result = await pool.query(query,values);
      const rows = result.rows;
      console.log(result);
      res.json(rows);
    } catch (error) {
      console.error('Erro ao executar a consulta', error);
      res.status(500).json({ error: 'Erro ao executar a consulta' });
    }
  });

  //poupanca poupanca 
  app.get('/funcao_updates_poupanca_poupanca', async (req, res) => {
    try {
      const valor = req.query.valor;
      const idConta1 = req.query.id_conta1;
      const id_conta = req.query.id_conta;
      const query = 'select executar_updates_poupanca_poupanca($1,$2,$3)';
      const values = [valor,idConta1,id_conta];
      const result = await pool.query(query,values);
      const rows = result.rows;
      console.log(result);
      res.json(rows);
    } catch (error) {
      console.error('Erro ao executar a consulta', error);
      res.status(500).json({ error: 'Erro ao executar a consulta' });
    }
  });

  // ========================================== fim das transferencias ==================================

  // select para nome da transferencia
  app.get('/Nome_transferencia', async (req, res) => {
    try {
      const idConta = req.query.id_conta;
      const query = 'SELECT Nome_cliente from cliente where id_conta = $1';
      const values = [idConta];
      const result = await pool.query(query,values);
      const rows = result.rows;
      res.json(rows);
    } catch (error) {
      console.error('Erro ao executar a consulta', error);
      res.status(500).json({ error: 'Erro ao executar a consulta' });
    }
  });
