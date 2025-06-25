/// <reference types="cypress"/>
import produtosPage from "../../support/page-objects/produtos.page";

describe('Funcionalidade:Produtos', () => {

    beforeEach(() => {
        produtosPage.visitUrl()
    });

    it('Deve selecionar um produto da lista', () => {
        produtosPage.buscarProdutoLista('Ariel Roll Sleeve Sweatshirt')
        cy.get('#tab-title-description > a').should('contain','Descrição')
    });
    it.only('deve buscar um produto com sucesso', () => {
        let produto = 'Aether Gym Pant'
        produtosPage.buscarProduto(produto)
        cy.get('.product_title').should('contain', produto )
    });
    it('deve visitar a pagina do produto', () => {
        
    });
    it('deve adicionar produto ao carrinho', () => {
        
    });
});