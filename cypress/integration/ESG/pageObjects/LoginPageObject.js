class LoginPageObject {
    //returns the email field css selector value
	getUsernameInputBox()
	{
		return cy.get('#email');
	}
	//returns the password field css selector value
	getPasswordInputBox()
	{
		return cy.get('#password');
	}
	//returns the sign in button css selector value
	getSignInButton() {
		return cy.get("button[id = 'next']");
	}
	
}
//exports the LoginPageObject class
export default LoginPageObject;