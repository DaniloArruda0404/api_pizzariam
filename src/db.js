const mysql = require ('mysql'); // IMPORTANDO MYSQL

const db = mysql.createConnection({
    host: 'localhost',
    port: '3306',
    user: 'root',
    password: 'root',
    database: 'pizzariaM',
})
// Testar conexão com o mysql 
db.connect ((err) => {
    if (err) {
        console.error ('Erro ao conectar ao MySQL', err);
    } else {
        console.log('Conectando ao MySQL');
    }
});

module.exports = db;