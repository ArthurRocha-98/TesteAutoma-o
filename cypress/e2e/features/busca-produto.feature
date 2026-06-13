Feature: Busca de Produto
    Como um usuário da loja virtual
    Quero buscar por um produto
    Para localizar itens disponíveis para compra

Cenário: Realizar busca de um produto existente
    Dado que o usuário acessa a página de produtos
    Quando o usuário digita "Blue Top" no campo de busca
    E clica no botão de pesquisar
    Então o sistema deve exibir os resultados da pesquisa
    E o produto "Blue Top" deve ser exibido nos resultados