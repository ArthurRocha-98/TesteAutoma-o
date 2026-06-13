class ProductsPage {

 acessarProdutos() {
   cy.contains('Products').click();
 }

 buscarProduto(produto) {
   cy.get('#search_product').type(produto);
   cy.get('#submit_search').click();
 }

 adicionarCarrinho() {

   cy.contains('Add to cart')
     .first()
     .click();

   cy.contains('View Cart')
     .click();
 }

}

export default new ProductsPage();