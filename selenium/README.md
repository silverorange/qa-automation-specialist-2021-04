# Automated Testing with Selenium IDE

## Installation

In your browser ([Firefox](https://addons.mozilla.org/en-US/firefox/addon/selenium-ide/), [Chrome](https://chrome.google.com/webstore/detail/selenium-ide/mooikfkahbdckldjjndioackbalphokd), maybe others), install the [Selenium IDE](https://www.selenium.dev/downloads/).

Once installed and enabled, click the Selenium IDE button that should be present on your browser's toolbar in the add-ons area.

`todo` (screenshots go here).

## Running the tests

You will need to be running these tests on a machine running the environment in dev mode. To run these tests against a production build, change the location in the Selenium IDE to point to the target site.

From the top level directory, run `yarn start` and the app should open in your web browser.

Open the IDE via the button in the browser's add-ons area.

From the new window that appears, click the "Open Project" File Folder Icon and navigate to "automation-task-b.side" located in this folder (i.e., `qa-automation-specialist/selenium`).

Click the Run All Tests button to the right of the list of tests and verify that the tests pass.
