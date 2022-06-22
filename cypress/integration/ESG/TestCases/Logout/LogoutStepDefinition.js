
import { Given } from "cypress-cucumber-preprocessor/steps";
import LogoutPageObject from '../../pageObjects/LogoutPageObject';

//creates LogoutPageObject instance
const logoutPage = new LogoutPageObject();

//logout from Lumina test environment site
Given('User Logout',()=>
{
    
    //check if the profile button is visible or not and click it
    logoutPage.getProfileButton().should('be.visible');
    logoutPage.getProfileButton().click();

    //check if the profile button is visible or not and click it
    logoutPage.getLogoutLink().should('be.visible');
    logoutPage.getLogoutLink().click();
    cy.wait(5000);
    cy.get('h2').contains('Sign in with your email address');         
    
})
