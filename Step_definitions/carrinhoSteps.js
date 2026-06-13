import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

import LoginPage from "../../pages/LoginPage";
import ProductsPage from "../../pages/ProductsPage";

Given("que estou logado", () => {

 cy.visit('/login');

 LoginPage.fillEmail("teste2021@teste.com.br");
 LoginPage.fillPassword("teste");
 LoginPage.clickLogin();

});

When("busco um produto", () => {

 ProductsPage.acessarProdutos();
 ProductsPage.buscarProduto("Blue Top");

});

When("adiciono o produto ao carrinho", () => {

 ProductsPage.adicionarCarrinho();

});

Then("devo visualizar o produto na tela de checkout", () => {

 cy.contains("Blue Top")
   .should("be.visible");

});