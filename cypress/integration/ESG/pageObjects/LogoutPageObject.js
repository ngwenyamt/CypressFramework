class LogoutPageObject
{
    //returns the profile button css selector value
	getProfileButton()
	{
		return cy.get('#app-layout-navigation > header > nav > div > div > button > div > div');
	}
	//returns the logout link css selector value
    getLogoutLink()
	{
		return cy.get('#overlay_menu > ul > li:nth-child(2) > div');
	}

}
//exports the LoginPageObject class
export default LogoutPageObject;