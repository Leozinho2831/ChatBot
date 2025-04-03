let db;

// aqui faço a requisição do banco de dados, dando um nome para buscar e a versão dele, caso o banco não exisitir ele irá criar um indexedDB de dados com esse nome
const requestDB = indexedDB.open("bancoChat", 1);