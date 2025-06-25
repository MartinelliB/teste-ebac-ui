/// <reference types="cypress"/>
const perfil = require('../../fixtures/perfil.json')

describe('Funcionalidade:login',() =>{

    beforeEach(() => {
        cy.visit('minha-conta')
    });
    
    afterEach(() => {
        cy.screenshot()
    });

    it('Deve fazer login com sucesso',()=>{
        cy.get('#username').type('brunomarti976@gmail.com')
        cy.get('#password').type('789632145@Bm@')
        cy.get('.woocommerce-form > .button').click()
        cy.get('.woocommerce-MyAccount-content > :nth-child(2)').should('contain','Olá, brunomarti976 (não é brunomarti976? Sair)')

    })

    it('Deve exibir uma mensagem de erro ao inserir usuário inválido', () => {
        cy.get('#username').type('brunomarti@gmail.com')
        cy.get('#password').type('789632145@Bm@')
        cy.get('.woocommerce-form > .button').click()
        cy.get('.woocommerce-error > li').should('exist')
    });
    it('Deve exibir uma mensagem de erro ao inserir senha inválida', () => {
        cy.get('#username').type('brunomarti976@gmail.com')
        cy.get('#password').type('789632145')
        cy.get('.woocommerce-form > .button').click()
        cy.get('.woocommerce-error > li').should('contain','Erro: A senha fornecida para o e-mail brunomarti976@gmail.com está incorreta. Perdeu a senha?')
        cy.get('.woocommerce-error > li').should('exist')
    });

    it('Deve fazer login com sucesso - usando massa de dados', () => {
        cy.get('#username').type(perfil.usuario)
        cy.get('#password').type(perfil.senha)
        cy.get('.woocommerce-form > .button').click()
        cy.get('.woocommerce-MyAccount-content > :nth-child(2)').should('contain','Olá, brunomarti976 (não é brunomarti976? Sair)')
    });
    it('Deve fazer login com sucesso - usando fixture', () => {
        cy.fixture('perfil').then(dados=>{
            cy.get('#username').type(dados.usuario)
            cy.get('#password').type(dados.senha, {log:false} )
            cy.get('.woocommerce-form > .button').click()
            cy.get('.woocommerce-MyAccount-content > :nth-child(2)').should('contain','Olá, brunomarti976 (não é brunomarti976? Sair)')
      })
    });

    it.only('Deve fazer login com sucesso-usando comandos customizados', () => {
        cy.login('brunomarti976@gmail.com','789632145@Bm@')
        cy.get('.woocommerce-MyAccount-content > :nth-child(2)').should('contain','Olá, brunomarti976 (não é brunomarti976? Sair)')
        
    });

})