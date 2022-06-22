import { Given, When, And, Then } from "cypress-cucumber-preprocessor/steps";
import LoginPageObject from '../../pageObjects/LoginPageObject'

//creates LoginPageObject instance
const loginPage = new LoginPageObject();

//launch Lumina Test environment site
Given('User launch Lumina Test environment {string}',(site)=>
{
    cy.visit(site);
})
//enter username
When('User enter valid username as {string}',(username)=>
{   
    loginPage.getUsernameInputBox().should('be.visible');
    loginPage.getUsernameInputBox().clear();
    loginPage.getUsernameInputBox().type(username);
})
//enter password
And('User enter valid password as {string}',(password)=>
{
    loginPage.getPasswordInputBox().should('be.visible');
    loginPage.getPasswordInputBox().clear();
    loginPage.getPasswordInputBox().type(password);
})
//enter password
And('User enter invalid password as {string}',(password)=>
{
    loginPage.getPasswordInputBox().should('be.visible');
    loginPage.getPasswordInputBox().clear();
    loginPage.getPasswordInputBox().type(password);
})
//click sign in button
Then('User click sign in button',()=>
{
    loginPage.getSignInButton().should('be.visible');
    loginPage.getSignInButton().click();
})
