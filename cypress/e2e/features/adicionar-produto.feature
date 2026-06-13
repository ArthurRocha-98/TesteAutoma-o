Feature: Adicionar um produto ao carrinho
	Como um usuário de loja virtual
	Quero adicionar um produto ao carrinho
	Para finalizar minha compra posteriormente

Cenário: Adicionar um produto existente ao carrinho
	Dado que o usuário está na página de produtos
	E o produto “Blue Top” está disponível
	Quando o usuário clica no botão “Adicionar ao carrinho”
	Então o sistema deve exibir uma mensagem de confirmação de inclusão do produto
	E o carrinho deve conter o produto “Blue Top”
	E a quantidade do produto deve ser igual a 1