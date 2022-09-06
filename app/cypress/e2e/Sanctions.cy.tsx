import { API_ROUTE } from '../../src/globals';

describe('Sanctions Page', () => {
  it('It should go to the list, click on a sanction and go back using ', () => {
    cy.visit('/');
    cy.intercept('GET', `${API_ROUTE}aliases*`, {
      statusCode: 201,
      body: [
        {
          id: 10000,
          sanctionId: 100,
          alias: 'KCST',
          sanction: {
            id: 100,
            primaryName: 'KCST',
            issued: '2006-06-12T22:24:11.602Z',
          },
        },
      ],
    });

    cy.intercept('GET', `${API_ROUTE}sanctions/100?_embed=aliases`, {
      statusCode: 201,
      body: {
        aliases: [
          {
            id: 10000,
            sanctionId: 100,
            alias: 'KCST',
          },
        ],
        id: 100,
        issued: '2006-06-12T22:24:11.602Z',
        primaryName: 'KCST',
      },
    });

    cy.get('a').scrollIntoView().should('have.attr', 'href', '/sanctions/100').click();
    cy.get('a').scrollIntoView().should('have.attr', 'href', '/sanctions?alias=kcst').click();
  });

  it('It should display error message', () => {
    cy.visit('/');
    cy.intercept('GET', `${API_ROUTE}aliases*`, {
      statusCode: 500,
      body: { error: 'Uh oh! Something went wrong!' },
    });
    cy.contains('Search request failed');
  });

  it('It should display empty result', () => {
    cy.visit('/');
    cy.intercept('GET', `${API_ROUTE}aliases*`, {
      statusCode: 201,
      body: [],
    });
    cy.contains('No sanctions were found for this alias');
  });

  it('It should display loading and then results', () => {
    cy.visit('/');
    cy.intercept('GET', `${API_ROUTE}aliases*`, {
      statusCode: 201,
      body: [
        {
          id: 10000,
          sanctionId: 100,
          alias: 'KCST',
          sanction: {
            id: 100,
            primaryName: 'KCST',
            issued: '2006-06-12T22:24:11.602Z',
          },
        },
      ],
    });
    cy.intercept('GET', `${API_ROUTE}aliases*`, req => {
      req.on('response', res => {
        res.setThrottle(1000);
      });
    });
    cy.contains('Loading');
    cy.contains('KCST');
  });
});
