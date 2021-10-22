## Introduction
This project is a demo of the cypress automation tool for testing http://a.testaddressbook.com/ website and api test with https://reqres.in/ API. 
	
## Technologies
Project is created with:
* cypress: ^8.4.1
* cypress-file-upload: ^5.0.8
    - cypress-file-upload is a plugin for testing file uploading feature
* cypress-get-table: "^1.0.1
    - cypress-get-table is a plugin for verifying the correct details in a table 
* mocha: ^9.1.1
    - mocha is a required dependence for mochawesome
* mochawesome": ^6.2.2
    - mochawesome is a plugin for reporting.
    
## Setup
To start this project, you need the following:

## Install the following software:
1. install git (https://git-scm.com/)
2. install node (https://nodejs.org/en/)

## Clone the project from git
1. clone: https://github.com/himsontam/YouLend-Cypress-Automation-Demo.git
2. cd Cypress-Automation-Demo
3. install: npm install

## Run the test
There are few methods to run the tests in cypress
1. you can open a cypress application by using the command: npm run cy: open, 
   then you can run the test on the cypress UI by clicking the files under the integration section
   or you can run all tests by clicking Run 2 integration test on the righthand corner

2. you can run tests by using the command line, here is the command that you can use:
    - npm run test 
        -> for running all tests under the integration folder
    - npm run cy: headless 
        -> for running all tests under the integration folder in headless mode, which means it won't pop up any browser during the execution
    - npm run cy:webtest 
        -> for running specific QA_TEST_3.js test file http://a.testaddressbook.com/
    - npm run cy:apicalltest 
        -> for running specific APICallTest.js https://reqres.in/
    - npm run cy: chrome
        -> for running all tests by using chrome specifically

## Change Email address and password
you can change your sign-in or sign-up email on the data.json file under the fixtures folder.
You may need to change it if your email is signed up already in http://a.testaddressbook.com/

## Report & screenshot
it will generate a report if you run the tests with the command line, and it will automatically take a screenshot if there are some cases fail.

## API Call test
https://reqres.in/ is the API document used in APICallTest.js. It is a test for auto-testing the API call with cypress. 


## Test from new branch
Testing continue from new branch

## Test2 from new branch
Testing2 continue from new branch

## Test3 from new branch
Testing3 continue from new branch

## Test4 from new branch
Testing4 continue from new branch
