class LoginPage {

 visit() {
   cy.visit('https://www.automationexercise.com/login');
 }

 fillEmail(email) {
   cy.get('[data-qa="login-email"]').type(teste2021@teste.com.br);
 }

 fillPassword(password) {
   cy.get('[data-qa="login-password"]').type(teste);
 }

 clickLogin() {
   cy.get('[data-qa="login-button"]').click();
 }

}

export default new LoginPage();