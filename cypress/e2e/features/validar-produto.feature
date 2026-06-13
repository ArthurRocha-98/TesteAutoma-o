Feature: Validação de produtos na tela de pagamento
	Como um cliente da loja virtual
	Quero validar os produtos ao carrinho na tela de pagamento
	Para garantir que os itens selecionados para compra estejam corretos

Cenário: Validar produto incluído no carrinho na tela de pagamento
	Dado que o usuário possui o produto “Blue Top” adicionado ao carrinho
	Quando o usuário acessa o carrinho de compras
	E prossegue para a tela de pagamento
	Então o produto “Blue Top” deve ser exibido na tela de pagamento
	E a quantidade de produto deve ser igual a 1
	E o preço unitário do produto deve ser exibido corretamente
	E o valor total do produto deve ser exibido corretamente 