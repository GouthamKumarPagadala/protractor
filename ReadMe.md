npm init
npm install protractor
npm install --save-dev @cucumber/cucumber
node node_modules/protractor/bin/webdriver-manager update

Execution:
node_modules\.bin\cucumber-js .\features --tags=@chrome
"test": "protractor conf\\conf.js && node conf\\report.js


locators
1. ng-model:
element(by.model('value')); -> ng-model attribute is an angular locator, It locates the element by model attribute value given

2. ng-bind:
element(by.binding('partialValue')); -> contains
element(by.exactbinding('exactValue')); -> exact match

3. ng-button/<button>:
element(by.buttonText('exactValue')); -> eaxct value of the inner text of button
element(by.partialButtonText('partialValue')); -> Partial Value of the inner test of button

4. ng-repeat:
<tr ng-repeat='product info'>
    <td>{{prod.id}}</td>
    <td>{{prod.name}}</td>
    <td>{{prod.quantity}}</td>
</tr>
let eleId = element.(by.repeater('partialValue').row(0));
let eleName = element.(by.repeater('partialValue').row(1));
let eleName = element.(by.exactRrepeater('exactValue').row(2));

5. cssContainingText: XXXXXXXX
element(by.cssContainingText('.name','Mike')); -> class attribute
element(by.cssContainingText('#name','Mike')); -> id attribute

6. ng-options:
let allOptions = element.all(by.options('options in list'));

7. common selenium : -> id,name,className,tagName,partialLinkText,linkText,CSS,XPath
element(by.id("value"));

Jenkins

Plugins -> cucumber report, chrome driver

API -> https://github.com/GouthamKumarPagadala/tau-api-testing.git

