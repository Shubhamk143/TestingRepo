## 👋Automation BDD Framework

### Introduction:

This document will help you to setup Selenium WendriverIO-7 test framework on local machine and will give you a high level introduction of each component and features.

## KEY FEATURES IN FRAMEWORK:

1. UI Functional Testing
2. API testing.
3. Visual Regression testing for Desktop and Devices view.
4. Accessibility Testing using Axe-Core.
5. Lighthouse integration for below testing:
   - Page Performance
   - Code Best Practice
   - Accessibility
   - SEO
6. Lighthouse Custom Report for all pages.
7. Device testing using emulator.
8. X-Ray integration. (X-Ray plugin and Jira configuration required)
9. SauceLabs: (Parallel execution, Compatibility Testing, Page performance) (V2, In Progress)
10. UI validation using CSS properties.
11. Integration with Jenkin and Azure. (V2, In Progress)
12. Capture Network requests and perform validations. (V2, In Progress)
13. Parallel Execution:
14. Headless execution.
15. Report:
    - Console Report
    - Allure HTML Reporting.
    - Cucumber HTML report.


### Why node and TypeScript based framework:

##### 1. Technology:

1. Node.js and TypeScript is same technology that team is using for front development.
2. Both developer and QA can automate and test because of same technology. It resolves tech dependency and helps in load sharing between Dev and QA.

##### 2. Code Management:

We can manage automation code and Front End code in same repository to sync development and automation to follow proper BDD approach.

##### 3. Easy Test setup:

The wdio command line interface comes with a nice configuration utility that helps you to create your config file in less than a minute. It also gives an overview of all available 3rd party packages like framework adaptions, reporter and services and installs them for you.

##### 4. Extendable :

Adding helper functions, or more complicated sets and combinations of existing commands is

##### 5. Language:

Framework is using TypeScript simplifies JavaScript code, making it easier to read and debug.

##### 6. Open source: (Except X-Ray)

No cost and no additional license required.
Good support and content available online. (Git doc, youtube, Gitter, WebdriverIO site)
List of free add-on's are available online to support wdio and add additional capability. (Like: reporting, DB testing, API testing, SOAP testing, device testing)

##### 7. DevOps Integration:

Azure pipeline and Jenkin integration and build verification is very structured because we are managing Front End and BDD code in same repository.

##### 8. Device and OS support (Compatibility Testing):

It supports all device and OS combination testing that required for application testing.
Note: Sauce Labs sample configuration page for reference: https://saucelabs.com/platform/platform-configurator#/

##### 9. Cloud execution:

simple and single command integration with Saucelabs or other cloud service providers to access 100s of devices and browsers.

### Prerequisite : Check if you have following basic setup on your machine.

1. [Java JDK 8+](https://www.oracle.com/technetwork/java/javase/downloads/jdk8-downloads-2133151.html)
2. GIT on machine
3. Repository access.
4. [Node 12.22.9](https://nodejs.org/en/download/)
5. [Visual Studio Code](https://code.visualstudio.com/download) (or any other ID that support JS)
6. Yarn latest.

### Steps to setup framework on machine

Note: You can npm or yarn as per your choise. (Examples are given with yarn keyword only)

#### Step1:

Install "Node 12.22.9" on machine.

#### Step2:

Install latest GIT on your machine.

#### Step3:

Create a new folder on your machine then clone the framework repository

```shell
git clone https://pscode.lioncloud.net/engineering-community/quality-engineering/webautomation-js.git
```

Check success message.

cd webautomation-js

#### Step4:

1. Open git bach from folder.
2. run "yarn install" command to download node modules #it takes few minutes to download all modules. (1-5 munutes, according to network speed).

```shell
yarn install
```

To cross check if "node_module" folder has created under "../node_module" and subfolders are available.

#### Step5:

Run below command to execute tests.

```shell
ENV=bld yarn local
```

Note:

1. We need to pass environment name in environment variable during execution. like: (ENV=bld OR ENV=int or ENV=local)
2. You can rename environment names as per your project by changing file name in "testData" folder and in "src/config/environment.ts" file.

### Extensions and Setting

Following extensions are recommended to use

1. Cucumber (Gherkin) full support
2. GitLens
3. Prettier - Code formatter
4. vscode-icons

To link feature steps with stepdefination add below configuration in vscode settings file:

1. press (Control + ,) to open vscode settings.
   OR
   Click on settings icon from left botton on vscode.
2. search 'save'
3. click on "Edit in settings.json" link
4. add below setting with in settingsjson file and save.

"cucumberautocomplete.steps": ["src/steps/*.ts"],
"cucumberautocomplete.syncfeatures": "src/features/\*.feature",

#### Execute test on Safari on Mac

Framework is using Selenium selenium-standalone that does not support default Safari driver, So you have to start Safari driver manually on Mac using "safaridriver -p 4444".

### Managing Test Data:

Location: /src/testdata
TestData can be stored JS object format in .ts file.

### Managing Locators:

Location: /src/locators"
Locators are DOM object, we are using "bdd-data-selector='xxx'" or "data-ref='xxxx'
"Locators are Pagewise Webelement repositories.
YML files for each page stores all webelement locators of that page.

### Global test data:

Location: /src/testData/data.bld.js
You can create environment specific data files.

### CSS Properties :

Framework support CSS validation for browser and devices. CSS properties will be diffirent as per view port so we have to maintain sepatate file with expected properties.
All Elements CSS properties can be managed in given file.
Location: /src/cssCSSdesktopProperties/\*.ts (desktop, ipad or mobile)

### Content validation (Cope\Text): (TO DO)

Location: /boilerplate-bdd/src/content/content.yml
This specifies all values corresponding to strings for validating through assertions.

### Jenkin\Azure Integration: (TO DO)

Environment parameters can be passed from Jenkins to framework and can be used
e.g.-process.env.EnvironmentVar if contains dev then import different testdata and if sit then import different testdata

### Generic steps:

Location: \src\steps\*.steps.ts
These are the steps which are common steps for all applications.
e.g- I navigate to <url> page
I click on <element>
I enter <value> in <element>

### Environment File:

Location: /src/config/environment.ts
These are environment configurations e.g- application url, username, pwd

Other Configurations specify where we want our tests to execute e.g- if local environment then which device/platform, browser, browser version, instances etc.
grade1.conf.js is high priority env and grade2.conf.js is low prioirty env.

If we execute on saucelabs we can specify all platforms, browser, versions etc on which our test should run.

## Reporters

WebdriverIO uses several different types of test reporters to communicate pass/failure.

##### Dot

To use the dot reporter just add 'dot' to the reporters array in the config file. The dot reporter prints for each test spec a dot. If colors are enabled on your machine you will see three different colors for dots. Yellow dots mean that at least one browser has executed that spec. A green dot means all browser passed that spec and a red to means that at least one browser failed that spec. All config files have this turned on by default.

##### Spec

Test reporter, that prints detailed results to console.

##### Allure

The Allure Reporter creates [Allure](http://allure.qatools.ru/) test reports which is an HTML generated website with all necessary information to debug your test results and take a look on error screenshots. Add allure to the reporters array in config file and define the output directory of the allure reports.

To generate and view an allure report locally, run "yarn run allure-report".

Allure has several other reporting tools optimized for the CI server of your choice. You can [view the documentation here](http://wiki.qatools.ru/display/AL/Reporting).

##### JSON

The JSON reporter is especially versatile. Since it produces a literal in a key : value pair, help to read, translate execution results to any custom reporter / it can be used to transport reporter events to another process and format them there, or to store the execution results back to any standard RDBMS or to NoSQL like mongodb with very minimal effort.

### Device Testing:

1. We are doing device testing using Cheome simulator.
2. For CSS property validation framework maintain seperate CSS file.
3. Framework uses same locator for all devices.

Note: Sauce Labs sample configuration page for reference: https://saucelabs.com/platform/platform-configurator#/

## Automated Accessibility testing

Accessibility testing is to ensure that the application can be accessed by people who are differently abled. Following tools provides capability to test for A, AA and AAA standard guidelines.

#### AXE core

is integrated in framework to perform accessibility. There is simple configuration in framework to test for specific standards and generate report in csv or HTML format. Major capability of AXE-Core is that it can be integrated with feature steps and covers dynamic pages as well (Example. No result page for search). It can be executed on local machine, jenkin pipeline or cloud as well. It covers 87 rules of accessibility. [Rule coverage link](https://github.com/dequelabs/axe-core/blob/HEAD/doc/rule-descriptions.md)

## Lighthouse Integration

Lighthouse is an open-source, automated tool for improving the quality of web pages. You can run it against any web page, public or requiring authentication. It has audits for performance, accessibility, progressive web apps, SEO and more.

In this framework we enhanced lighthouse reporting to provide aggregated report for all pages and integrtaion within pipeline. Please refer [README.mz](test\lighthouse\README.md) for more retails.

#### Light Sample Report

##### Page specific Report

![LightHouse Page Report](https://lion.box.com/shared/static/l97tawqiuzubaa6gdyezfe54f0swaufv.png)

##### Summary Report

![LightHouse Summary Report](https://lion.box.com/shared/static/xicdo8704tsp493n289m86e89nicx6is.png)

### API/Service Testing:

axios node module is used in framework for rest service testing. (GET, POST etc).
Generic functions created under "src/utilities/apiCalls.ts" file.

Use https://www.jsonquerytool.com/ for jsonquery.

### GUI Visual Regression: (TO DO)

GUI Visual Regression is implemented as custom tool with following major features. Please refer [README.md](test\screenshots\README.md) file for detailed document.

Visual Regression configuration options.
https://github.com/wswebcreation/webdriver-image-comparison/blob/main/docs/OPTIONS.md#savefullpagescreen-or-savetabbablepage

#### Major features

1. Compare page for specific browser and fix resolution.
2. Compare image of specific element only using Xpath.
3. Device screen comparation.
4. Create custom report for browser and mobile with graph format.
5. This hole solution works as independent application with following capabilities:
   - Report Dashboard for Desktop and Mobile report.
   - Number of PASS\FAIL
   - Last execution date.
   - Links Open indivisual report in new tab.
6. Individual report opens in new tab with detailed comparation of expected image, Actual Image and diffirence image.
7. Report contains reason of failure as well.
8. Each failure image has option to replace Actual Image with expected image so next time comparation should happen updated image.

##### GUI Visual Sample Report

###### Dashboard Page

![Visual Regression Report](https://lion.box.com/shared/static/zo0ejbgciudnn8x8x9xlafe10zsibz5o.png)

###### Browser specific Report

![Visual Regression](https://lion.box.com/shared/static/nrjfcmz3wwyo8tytat10dxr12alzy75u.png)

#### Custom Reporting Regression Execution History

![Regression Execution History](https://lion.box.com/shared/static/19kyskz5fy73d3509ewuhwgpswm6hrxo.png)

### ### Hook me up

Hooks are an important instrument to get information about the running test process. In the new version we introduced a lot of new hooks that allow you to interfere with the test at any time. You can make async requests to 3rd party tools as well as log certain states to get a better overview about the system you are testing. These are all of the new hooks that were implemented: "beforeSession, beforeSuite, beforeHook, beforeTest, beforeCommand, afterCommand, afterTest, afterHook, afterSuite, afterSession, onError and for Cucumber tests: beforeFeature, beforeScenario, beforeStep, afterFeature, afterScenario, afterStep."
Each of these hooks will wait to continue with the test process until synchronous WebdriverIO commands have finished or the returning promise has been resolved.
