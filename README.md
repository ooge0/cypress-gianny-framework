Good to know:
* Cypress projectId": "r7dgx9"
* Run this command now, or in CI
```js
cypress run --record --key {your Key}
```

# Cypress installation guide:


1. Cypres installing (by console)
```js
npm install cypress --save-dev
```
2. Cypress update (by console)
```js
npm install cypress@7.0.1
```

Install binary
Install a version different than the default npm package.
```js
CYPRESS_INSTALL_BINARY=2.0.1 npm install cypress@6.0.1
```
Specify an external URL (to bypass a corporate firewall).
```js
CYPRESS_INSTALL_BINARY=https://company.domain.com/cypress.zip npm install cypress
```
 * Specify a file to install locally instead of using the internet.
```js
CYPRESS_INSTALL_BINARY=/local/path/to/cypress.zip npm install cypress
```
 
# Basic Cypress  project
## Basic project  structure
* cypress <-- parent project folder  
* integration\examples <-- basic, parent folder, that will have different tests ordered by user defined categories
* pageObjects <-- folder which contains any defined *.js files which are decribed user defined page objects. Access to the defined functions in the js page object files are available by importing and decalring exact page object file using template: 
import { pageObjectFileName } from "../pageObjects/pageObjectFileName"
* plugins <--
* support <-- 
  * commands.js <-- place for custom commands
  * index.js <-- is processed and loaded automatically before your test files
* cypress.json <-- place for your custom configuration. All options will overwrite deafult setting in the test runner app.
* package.json <-- contains configuration  for your project
  
# Tips and hints
#----------
## Jenkins instalation
1. Upload jenkins.war from https://www.jenkins.io/download/
2. Create 'work' (working directory) for Jenkins
3. Move jenkins.war to this folder
4. Execute commands 
```
C:\work>java -jar jenkins.war -httpPort=9090
``` 
[How to setup 'Jenkins' -aticle 1](https://city-energy-analyst.readthedocs.io/en/latest/installing-the-jenkins.html)
[How to setup 'Jenkins'-aticle 2](https://www.jenkins.io/doc/book/installing/windows/)
[How to fix Win10 credential issue during instalation by MSI file](https://stackoverflow.com/questions/63410442/jenkins-installation-windows-10-service-logon-credentials)

## Cucumber

[Cucumber -Cypress instruction](https://github.com/TheBrainFamily/cypress-cucumber-example)
[What is Cucumber- web site](https://cucumber.io)
[Cucumber GIT (Main  option to use Cucumber)](https://github.com/TheBrainFamily/cypress-cucumber-preprocessor)
[Cucumber js GIT (second option to use Cucumber)](https://github.com/cucumber/cucumber-js)

[Cucumber plagin for VS code](https://marketplace.visualstudio.com/items?itemName=alexkrechik.cucumberautocomplete)

### Running Cucumber tagged tests
[LINK](https://github.com/TheBrainFamily/cypress-cucumber-preprocessor#running-tagged-tests)

You can use tags to select which test should run using [cucumber's tag expressions](https://github.com/cucumber/cucumber/tree/master/tag-expressions). Keep in mind we are using newer syntax, eg. 'not @foo and (@bar or @zap)'. In order to initialize tests using tags you will have to run cypress and pass TAGS environment variable.

Example:
```
./node_modules/.bin/cypress-tags run -e TAGS='not @foo and (@bar or @zap)'
```
OR
```
npx/cypress-tags run -e TAGS='not @foo and (@bar or @zap)'
```

### Creating Cucumber JSON report and generating HTML reports from JSON
1. Creating Cucumber JSON report
[cypress-cucumber-preprocessor#output GIT link](https://github.com/TheBrainFamily/cypress-cucumber-preprocessor#output)

These files are intended to be used with one of the many available Cucumber report generator packages. 
Seems to work fine with both https://github.com/jenkinsci/cucumber-reports-plugin and https://github.com/wswebcreation/multiple-cucumber-html-reporter

2. Generating HTML reports from JSON
[multiple-cucumber-html-reporter](https://github.com/wswebcreation/multiple-cucumber-html-reporter)

## WebStorm (test runs)
Install plugin from 
```html
https://plugins.jetbrains.com/plugin/13819-cypress-support
```
or by command
```
npm i cypress-intellij-  reporter -D
```
and follow instruction.

## Run local tests specifying a single test file to run instead of all tests
```js
cypress run --spec cypress/integration/app.spec.js
```
## Run local tests specifying a glob of where to look for test files
```js
cypress run --spec cypress/integration/login/**/*
```
## Run local tests specifying multiple test files (by ',') to run
```js
cypress run --spec cypress/integration/filter.spec.js,cypress/integration/users.spec.js
```
## Run local tests specifying multiple test files to run
```js
cypress run --headless --b chrome --spec cypress\integration\examples\Platform\filter.spec.js,cypress/integration/users.spec.js
```

```js
cy.it.only()  <--  will run only tests in the JS test file
e.g.
it.only('login', () => {
  cy.visit('/login', {timeout: 5000})
  logout()
  login('user', 'password')
})
```
## runing in headless mode by specific browser
```js
cypress run --headless --b chrome

```
## by specific browser
```js
cypress run --b chrome
```

## Run all tests headlessly in the Electron browser.
```js
cypress run
```
## Passing --headed will force Electron to be shown.
```js
cypress run --headed

cypress run --config video=false
```
## Remote runing the test (Dashboard)
```js
cypress run --record --key e01e9dac-4f4f-4306-8fd2-354eae09bec1
```

# Debuging
## If Cypress cannot find the browser you should turn on debugging for additional output.
```js
DEBUG=cypress:launcher cypress run --browser chrome
```
## More DEBUG options:
```js
DEBUG=cypress:cli cypress run
```
## or even a 3rd level deep submodule
```js
DEBUG=cypress:server:project cypress run
DEBUG=cypress:server:scaffold cypress run
DEBUG=cypress:server:socket cypress run
DEBUG=cypress:server:bundle cypress run
```

##---------- Else
```js
cypress run --config pageLoadTimeout=100000,watchForFileChanges=false

cypress run --env host=api.dev.local

cypress run --port 8080
```
# Reporting 
## Run tests specifying different reporters
Before using generated reports you nee to install report generator, e.g. Mochasome: 
```js
npm install --save-dev mochawesome
```
How to use 'Mochasome' - [article](https://autom8able.com/blog/mocha-awesome)

and install Mocha as required part for using reporters
```js
npm install --save-dev mocha
```
```js
```

## Cypress report (mocha reporter) by command:
```js
cypress run --reporter json
```

## Cypress report (mochawesome reporter) by command:
```js
cypress run --reporter mochawesome
```

# Run tests specifying mocha's reporter (default) options
```js
cypress run --reporter-options mochaFile=result.xml,toConsole=true
```

# Recording video
```js
cypress run --record --key 
```
Or
```js
export CYPRESS_RECORD_KEY=abc-key-123
cypress run --record
```
# Storing screenshots in different folders by config file

[cypress-tests-in-multiple-enviroments](https://kevintuck.co.uk/how-to-run-your-cypress-tests-in-multiple-enviroments/)

## FIXES
* if you have some issues related to the 
  

  Could you upgrade to latest version ($ npm cypress@latest ) and make sure below parameters in cypress.json

```
"modifyObstructiveCode": true,

"experimentalSourceRewriting":true,

"chromeWebSecurity": true,
```
and or check articles:

1. [modifyObstructiveCode](https://docs.cypress.io/guides/references/configuration.html#modifyObstructiveCode)

2. [Configuration](https://docs.cypress.io/guides/references/experiments.html#Configuration)

3. [Set-chromeWebSecurity-to-false](https://docs.cypress.io/guides/guides/web-security.html#Set-chromeWebSecurity-to-false)

