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
    it('deve buscar um produto com sucesso', () => {
        let produto = 'Aether Gym Pant'
        produtosPage.buscarProduto(produto)
        cy.get('.product_title').should('contain', produto )
    });
    it('deve visitar a pagina do produto', () => {
        produtosPage.visitarProduto('Aether Gym Pant')
        cy.get('.product_title').should('contain','Aether Gym Pant' )
        
    });
    it('deve adicionar produto ao carrinho', () => {
        let qtd = 7
        produtosPage.buscarProduto('Ajax Full-Zip Sweatshirt')
        produtosPage.addProdutoCarrinho('M','Green',qtd)
        cy.get('.woocommerce-message').should('contain','carrinho.')
        
    });
    it.only('deve adicionar produto ao carrinho buscando da massa de dados', () => {
        cy.fixture('produtos').then(dados => {
             
             produtosPage.buscarProduto(dados[1].nomeProduto)
             produtosPage.addProdutoCarrinho(
                dados[1].tamanho,
                dados[1].cor,
                dados[1].quantidade)

             cy.get('.woocommerce-message').should('contain', dados[1].nomeProduto)

        })
       
        
    });
    
    
});