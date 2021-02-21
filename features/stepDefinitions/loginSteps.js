var { Given, When, Then, After } = require('cucumber');
//const { browser, element } = require('protractor');
var chai = require("chai");
var chaiAsPromised = require("chai-as-promised");
chai.use(chaiAsPromised);
var expect = chai.expect;
var Object = require('../pageobjects/objects');
var supertest = require('SuperTest');
var request;
var response;
// Then either:


Given('User open browser', async  function () {
    request = supertest("https://gorest.co.in");
    response =await request.get("/public-api/users").expect(201).then(response => {
        console.log(response.body);
        return response.body;
    });
    console.log("Response "+response.data[0].email);
    // Write code here that turns the phrase above into concrete actions
    //await browser.get("http://www.way2automation.com/angularjs-protractor/banking/#/login");
    //var actualTitle = browser.getTitle();
    //expect((await actualTitle).toString()).to.equal("Protractor practice website - Banking A");
    //return console.log("User open browser");
    //console.log(Object.trade(1));
});


When('user enter text',async function () {
    // Write code here that turns the phrase above into concrete actions
    /*await element(by.buttonText('Customer Login')).click();
    element.all(by.repeater('cust in Customers')).count().then(function (size){
        console.log(size);
    });
    await element.all(by.repeater('cust in Customers')).get(2).click();*/
    return console.log("user enter text");
});

Then('Application display messasge', function () {
    // Write code here that turns the phrase above into concrete actions
    return console.log("Application display messasge");
});

After(function(scenarioResult){
   /* console.log("After");
    if(scenarioResult.result.status === "failed"){

        let self = this;
        return browser.takeScreenshot().
        then(function(screenshot){
            const decodedImage = new Buffer.from(screenshot.replace(/^data:image\/png;base64,/,''),'base64');
            self.attach(decodedImage,'image/png');  
        });
    }*/
})