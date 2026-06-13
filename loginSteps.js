import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import LoginPage from "../../pages/LoginPage";

Given("que estou na tela de login", () => {
 LoginPage.visit();
});

When("informo usuario e senha validos", () => {

 LoginPage.fillEmail("teste2021@teste.com.br");
 LoginPage.fillPassword("teste");
 LoginPage.clickLogin();

});

Then("devo visualizar o usuario logado", () => {

 cy.contains("Logged in as").should("be.visible");

});