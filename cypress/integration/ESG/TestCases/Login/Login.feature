Feature: Login 
    
   Verify if the user is able to login to Lumina Test environment site using valid credentials.

   Scenario Outline: Scenario Outline name: Test Login functionality with valid credentials
   Given User launch Lumina Test environment "<site>"
   When User enter valid username as "<username>"
   And User enter valid password as "<password>"
   Then User click sign in button
   #And User Logout


   Examples:
       | site | username | password |
       | https://test-app.isometrix.net/  | tebogongwenya96@gmail.com | Cathy#89  |









