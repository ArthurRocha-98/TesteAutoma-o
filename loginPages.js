class LoginPage {

 visit() {
   cy.visit('/login');
 }

 fillEmail(email) {
   cy.get('[data-qa="login-email"]').type(email);
 }

 fillPassword(password) {
   cy.get('[data-qa="login-password"]').type(password);
 }

 clickLogin() {
   cy.get('[data-qa="login-button"]').click();
 }

}

export default new LoginPage();