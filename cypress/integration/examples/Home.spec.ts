// https://docs.cypress.io/api/introduction/api.html
/// <reference types="Cypress" />
//  import * as news_api from '/api/news'
let news_api = require('../../../src/api/news.ts')
let mockData = require('../../../tests/mockdata/news_api_mock.ts')
let leaguesModule = require('../../../src/store/leagues')
describe("Home.vue", () => {
  let fn,fn1;
  beforeEach(()=>{
    cy.log(mockData)
    cy.intercept('https://site.api.espn.com/apis/site/v2/sports/soccer/eng.1/news',mockData)
    // cy.intercept('https://site.api.espn.com/apis/site/v2/sports/soccer/esp.1/news',mockData)
    // cy.intercept('https://site.api.espn.com/apis/site/v2/sports/soccer/ita.1/news',mockData)
    // cy.intercept('https://site.api.espn.com/apis/site/v2/sports/soccer/ger.1/news',mockData)
    // cy.intercept('https://site.api.espn.com/apis/site/v2/sports/soccer/fra.1/news',mockData)


    // cy.intercept('/apis/site/v2/sports/soccer/esp.1/news',(mockData))
  })
  it("Visits the app root url", () => {
    cy.log(news_api)
    cy.visit("/");
    cy.contains("h1", "Feel Football");
    cy.get('a[href="/"]').click().should('have.class','router-link-exact-active')
    cy.get('.content').should('have.length.gt',0)
    // expect(news_api.getNews).to.have.been.calledOnce 
    // expect(fn1).to.be.calledOnce
  });
  it.skip('Should go to leagues page',()=>{
    cy.get('a[href="/leagues"]').click().should('have.class','router-link-exact-active')
  })
  it.skip('forms render properly',()=>{
    cy.get('a[href="/form"]').click().should('have.class','router-link-exact-active')
    cy.get('#email').should('have.css','border','2px solid rgb(255, 0, 0)')
    cy.get('#email').type('sai@').trigger('change')
    cy.get('#email').should('have.value','sai@').should('not.have.css','border','2px solid rgb(255, 0, 0)')
  })
});
