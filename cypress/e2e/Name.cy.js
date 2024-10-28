import React from 'react';
import Name from '../../src/Name';

describe('testövning', () => {

  beforeEach(() => {
    cy.visit('/');
  })

  it('Det ska finnas en knapp', () => {
    cy.get('button').should('exist');
  })

  it('Det ska finnas ett inputfält där användaren skriver i sitt namn', () => {
    cy.get('input[placeholder="skriv ditt namn"]').should('exist')
  })

})

