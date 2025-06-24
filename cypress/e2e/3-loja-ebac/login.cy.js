/// <reference types="cypress"/>

describe('Funcionalidade:login',() =>{

    it('Deve fazer login com sucesso',()=>{
        cy.visit('http://lojaebac.ebaconline.art.br/minha-conta/')
        cy.get('#username').type('brunomarti976@gmail.com')
        cy.get('#password').type('789632145@Bm@')
        cy.get('.woocommerce-form > .button').click()

        cy.get('.woocommerce-MyAccount-content > :nth-child(2)').should('contain','Olá, brunomarti976 (não é brunomarti976? Sair)')

    })

})