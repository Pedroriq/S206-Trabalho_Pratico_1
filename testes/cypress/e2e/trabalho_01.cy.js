/// <reference types="cypress"/>

//const { functionsIn } = require("cypress/types/lodash")

describe('Criando cenário de teste para a loja da Steam na web', ()=>{

it('Caso de teste: Adicionando algum jogo no carrinho da loja', ()=>{
  cy.visit('https://store.steampowered.com/?l=portuguese')
  cy.get('#store_nav_search_term').type('God of War')
  cy.get('#store_search_link > img').click()
  cy.get('[href="https://store.steampowered.com/app/1593500/God_of_War/?snr=1_7_7_151_150_1"] > .responsive_search_name_combined > .search_name > .title').should('contain.text', 'God of War')
  cy.get('[href="https://store.steampowered.com/app/1593500/God_of_War/?snr=1_7_7_151_150_1"] > .responsive_search_name_combined > .search_name > .title').click()
  cy.get('#ageDay').type('01')
  cy.get('#ageMonth').select('janeiro')
  cy.get('#ageYear').select('2000')
  cy.get('#view_product_page_btn > span').click()
  cy.get('#btn_add_to_cart_564166 > span').click()
})

it('Caso de teste: Acessando algum jogo com falha (individuo menor de idade)', ()=>{
  cy.visit('https://store.steampowered.com/?l=portuguese')
  cy.get('#store_nav_search_term').type('God of War')
  cy.get('#store_search_link > img').click()
  cy.get('[href="https://store.steampowered.com/app/1593500/God_of_War/?snr=1_7_7_151_150_1"] > .responsive_search_name_combined > .search_name > .title').should('contain.text', 'God of War')
  cy.get('[href="https://store.steampowered.com/app/1593500/God_of_War/?snr=1_7_7_151_150_1"] > .responsive_search_name_combined > .search_name > .title').click()
  cy.get('#ageDay').type('01')
  cy.get('#ageMonth').select('janeiro')
  cy.get('#ageYear').select('2020')
  cy.get('#view_product_page_btn > span').click()
  cy.get('.newmodal_content > :nth-child(1)').should('have.text', 'Lamentamos, mas você não tem permissão para ver esse conteúdo no momento.')

})

it('Caso de teste: Alterando idioma da página', ()=>{
  cy.visit('https://store.steampowered.com/?l=portuguese')
  cy.get('#language_pulldown').click()
  cy.get('[href="?l=english"]').click()
  cy.get('#foryou_tab > .pulldown > .pulldown_desktop').should('have.text', 'Your Store')
})

it('Caso de teste: Filtrando genero, preço, plataforma e ordenação', ()=>{
  cy.visit('https://store.steampowered.com/?l=portuguese')
  cy.get('#store_search_link > img').click()
  cy.get('#price_range')
    .invoke('val', 7.5)
    .trigger('change')
    .click()
  cy.get('div[data-value="win"] > .tab_filter_control > :nth-child(1) > .tab_filter_control_checkbox').click()
  cy.get('div[data-value="492"] > .tab_filter_control > :nth-child(1) > .tab_filter_control_checkbox').click()
  cy.get('#sort_by_trigger').click()
  cy.get('#Price_ASC').click()
})

it('Caso de teste: Pausando um vídeo de algum jogo', ()=>{
  cy.visit('https://store.steampowered.com/?l=portuguese')
  cy.get('#store_nav_search_term').type('Counter Strike')
  cy.get('#store_search_link > img').click()
  cy.get('[href="https://store.steampowered.com/app/730/CounterStrike_Global_Offensive/?snr=1_7_7_151_150_1"] > .responsive_search_name_combined > .search_name > .title').click()
  //cy.get('#thumb_movie_81958 > .highlight_movie_marker').click()
  cy.get('#movie_81958').trigger('mouseover') 
  cy.get('.play_button').click()
})

it('Caso de teste: Mudando os destaques da página inicial', ()=>{
  cy.visit('https://store.steampowered.com/?l=portuguese')
  for (let index = 0; index < 10; index++) {
    cy.get('#home_maincap_v7 > .right > div').click()
    cy.wait(500)  
  }
})

})