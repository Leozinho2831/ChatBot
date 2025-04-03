// aqui faço a requisição do banco de dados, dando um nome para buscar e a versão dele, caso o banco não exisitir ele irá criar um indexedDB de dados com esse nome
const requestDB = indexedDB.open("bancoChat", 1);

requestDB.onsuccess = (event) => {
    let db = event.target.result;
    console.log('Banco de dados aberto com sucesso!', db)
}

requestDB.onerror = (event) => {
    console.log('Erro ao abrir o banco de dados:', event.target.error);
}