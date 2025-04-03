// aqui faço a requisição do banco de dados, dando um nome para buscar e a versão dele, caso o banco não exisitir ele irá criar um indexedDB de dados com esse nome
const requestDB = indexedDB.open("bancoChat", 1);

requestDB.onupgradeneeded = (event) => {
    let db = event.target.result;

    // cria uma tabela, como uma caixa para gaurdar os itens
    db.createObjectStore('nav', { 
        keyPath: 'id',
        autoIncrement: true,
    });
}

// executa se abrir o banco com sucesso
requestDB.onsuccess = (event) => {
    
}

// executa se der erro para abrir o banco
requestDB.onerror = (event) => {
    console.log('Erro ao abrir o banco de dados:', event.target.error);
}