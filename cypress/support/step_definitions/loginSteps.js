import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import LoginPage from "../../../Pages/loginPages";

Given("que estou na tela de login", () => {
  LoginPage.visit();
});

When("informo usuário e senha válidos", () => {
  LoginPage.fillEmail("teste2021@teste.com.br");
  LoginPage.fillPassword("teste");
});

When("clico no botão login", () => {
  LoginPage.clickLogin();
});

Then("devo visualizar o usuário logado", () => {
  cy.contains("Logged in as").should("be.visible");
});
