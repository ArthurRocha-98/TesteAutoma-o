Feature: API Trello
    Como um usuário da API
    Quero realizar uma validação da API
    Para exibir o status code

Cenário: Validar retorno da API
    Dado que realizo uma requisição GET "https://api.trello.com/1/actions/592f11060f95a3d3d46a987a"
    Quando a requisição é realizada
    Então o status code deve ser 200
    E deve exibir o nome da lista