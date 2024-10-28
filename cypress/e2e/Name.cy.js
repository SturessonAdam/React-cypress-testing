import React from 'react';
import Name from '../../src/Name';

describe('testövning', () => {

  beforeEach(() => {
    cy.visit('/');
  })

  it('should exist a button on the page', () => {
    cy.get('button').should('exist');
  })

  it('should be a inputfield with a placeholder to type your name', () => {
    cy.get('input[placeholder="skriv ditt namn"]').should('exist')
  })

  it('should show your name as a header after you clicked on the button with save name', () => {
    cy.get('input[placeholder="skriv ditt namn"]').type('Adam');
    cy.contains('button', 'Spara namn').click();
    cy.get('h1').should('contain', 'Adam');
  })

  it('should change the button from save name to logout after you saved the name', () => {
    cy.get('input[placeholder="skriv ditt namn"]').type('Adam');
    cy.contains('button', 'Spara namn').click();
    cy.contains('button', 'Logga ut').should('exist');
  })

  it('should remove the name if you press button with logout', () => {
    cy.get('input[placeholder="skriv ditt namn"]').type('Adam');
    cy.contains('button', 'Spara namn').click();
    cy.get('h1').should('contain', 'Adam');
    cy.contains('button', 'Logga ut').click();
    cy.get('h1').should('contain', '');
  })

})

