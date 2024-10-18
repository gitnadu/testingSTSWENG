import React from 'react'
import 'tailwindcss/tailwind.css'; //For CSS tailwind to be used in Cypress, import the CSS file.
import CustomerForm from './form'



describe('<CustomerForm />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<CustomerForm />)
  })
})