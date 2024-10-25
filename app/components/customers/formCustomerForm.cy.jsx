import React from 'react'
import 'tailwindcss/tailwind.css'; //For CSS tailwind to be used in Cypress, import the CSS file.
import CustomerForm from './form'



describe('<CustomerForm />', () => {
  it('Fill in all of the fields correctly.', () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<CustomerForm />)

    cy.getByData("input_client_name").type("DLSU Manila");
    cy.getByData("input_contact_person").type("Andrei Palonpon");
    cy.getByData("input_email_address").type("andrei_palonpon@dlsu.edu.ph");
    cy.getByData("input_address").type("2401 Taft Avenue, Manila");
    cy.getByData("input_status").select("Ongoing");
    cy.getByData("input_type").select("Industrial");
    cy.getByData("input_services_hygenic_pest_control").click();
    cy.getByData("input_contact_number").type("09199650046");
    cy.getByData("submit_button").click();
    //cy.log(cy.location());
  })
})