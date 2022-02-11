# Form Verification
This is a test Project aimed at testing my proficiency in Express, Form validation, communication with FrontEnd.


## Screenshot :camera:
![screenshot](./src/assets/images/Form-verification.png)

## Built with :heart:
- Expressjs/Node
- PostgreSQL

## Dependencies
-- See package.json for full list of dependency.

## Live Link :link: :rocket: Coming Soon
 [Form Verification]()

## Set up Locally :wrench:
- [ ] Clone the repo using the git command <code> git clone https://github.com/Haroonabdulrazaq/form-verification-be.git</code>
- [ ] cd into the project directory <code> cd form-verification-be</code>
- [ ] To install all dependencies in package.json, Run <code> npm install </code>
- [ ] To start the project <code> npm run devstart </code>

## To run locally
NOTE: Make sure to Start the Backend before starting the FE; So that FE to start from http://localhost:3001

## Set Up Test
- [ ] After runnning <code> npm install </code>
- [ ] Run <code> npm run test </code>

## Prerequisite :hammer_and_wrench:
- Node  v16.13.2 or Higher version
- npm  6.14.13 or Higher version

## End points

METHODS       | ENDPOINT
------------- | -------------
POST          | /user
GET           | /user

## Work Done
- [ ] Set up Express Environment
- [ ] Create a user route
- [ ] Create a user Controller
- [ ] Add User input Sanitization (using Express-validator)
- [ ] Create a PostgreSQL Databse
- [ ] Hash Users Password
- [ ] Check if email already exist
- [ ] Send error/notification to FE
- [ ] Save Users in DB
- [ ] Sends an ID to FE after the POST request
- [ ] GETS User Obhject after a GET request is receive from FE


## App Functionality
The application accepts some user information like the Email Firstname LAstname and Password. 
The Application checks If the the users input conforms with the Validation Schema. If it does not, it will
show an Error just below the input tag.

The Application has 3 buttons, Which are displayed logocally. The Next button is shown on the first page while the Previous and Submit Button are shown on the Second page.

If the submit button is press and all the informationm is filled in, the application makes a POST request to the BE.

The BE sanitize user input and removes noises again to check if it conforms with the validation schema designed in the code.
It checks if email is already existing, and sends a Notifcation to FE accordingly

A notification pane is shown displaying a success message or a failure message according to what is returned from the BE.

The application then makes a GET request, if the POST request is successfull or the user information has been saved in the DB.

If the GET request is successfull it will then display the Users information with the success message.


 ## Deploy :rocket: Coming Soon!
This project would be deployed to [Heroku]()

## Author :man:

👤 **Haroon Abdulrazaq**

- Github: [@githubhandle](https://github.com/Haroonabdulrazaq)
- Twitter: [@twitterhandle](https://twitter.com/hanq_o)
- Linkedin: [linkedin](https://www.linkedin.com/in/haroonabdulrazaq)
- Portfolio: [Portfolio](https://www.haroonabdulrazaq.tech)

## Show your support

Give a ⭐️ if you like this project!

## Acknowledgments
- I acknowlege [Anonymous Bank] for giving a concise and straight forward specification.

## 📝 License

This project is [MIT](lic.url) licensed.