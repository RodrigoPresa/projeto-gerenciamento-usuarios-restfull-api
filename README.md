<h1 align="center">Projeto de Gerenciamento de Usuários</h1>
<p align="center">Projeto desenvolvido em Javascript e Node.js utilizando Restify </p>

## Pré-requisitos

Antes de começar, você vai precisar ter instalado em sua máquina o [Node.js](https://nodejs.org/en/) e 
um editor de texto de sua preferência.

Neste projeto, foram utilizados:

- Express Generator: Framework utilizado para criar o servidor web;
- Restify: Framework utilizado para consumir a RESTFUL API;

## Excutando servidor

Para instalação das dependências:
```
npm install
```

Para executar o servidor, utilizar o seguinte comando:
```
npm start
```

## Rotas
### Obter todos os usuários:
```
GET /users
```
Exemplo de resultado:
```json
{
    "users":[]
}
```

### Cadastrar um novo usuário:
```
POST /users
```
Exemplo de resultado:
```json
{
    "_id":"FVS5l07KmOQFhFSi",
    "name":"Teste"
}
```

### Obter dados de um usuário:
```
GET /users/:id
```
Exemplo de resultado:
```json
{
    "_id":"FVS5l07KmOQFhFSi",
    "name":"Teste"
}
```

### Editar um usuário:
```
PUT /users/:id
```
Exemplo de resultado:
```json
{
    "_id":"FVS5l07KmOQFhFSi"
}
```

### Excluir um usuário:
```
DELETE /users/:id
```
Exemplo de resultado:
```json
{
    "_id":"FVS5l07KmOQFhFSi"
}
```
