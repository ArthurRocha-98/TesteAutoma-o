import { When, Then } from "@badeball/cypress-cucumber-preprocessor";

let response;

When("realizo consulta na API Trello", () => {

 cy.request({
   method: "GET",
   url: "https://api.trello.com/1/actions/592f11060f95a3d3d46a987a"
 })
 .then((res) => {
   response = res;
 });

});

Then("o status code deve ser 200", () => {

 expect(response.status).to.eq(200);

});

Then("devo exibir o nome da lista", () => {

 cy.log(response.body.data.list.name);

 expect(response.body.data.list.name)
   .to.not.be.empty;

});