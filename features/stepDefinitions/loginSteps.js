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
var axios = require('axios').default;
const { element, browser } = require('protractor');
// Then either:


Given('User open browser', async function () {
    //request = supertest("https://gorest.co.in");
    //response = await axios.get("https://gorest.co.in" + "/public-api/users").then(response => {
       // console.log(response.data);
      //  return response.data;
    //});
    //console.log("Response " + response.data[0].email);
    // Write code here that turns the phrase above into concrete actions
    await browser.get(browser.params.env);
    var actualTitle = browser.getTitle();
    expect((await actualTitle).toString()).to.equal("Protractor practice website - Banking App");
    //return console.log("User open browser");
    //console.log(Object.trade(1));
});


When('user enter text', async function () {
    // Write code here that turns the phrase above into concrete actions
    await element(by.buttonText('Customer Login')).click();
    console.log("Size:"+await element.all(by.xpath('//div')).count());
    expect(await element.all(by.repeater('cust in Customers')).count()).to.be.greaterThan(0);
   
    var arr = ["Hermoine Granger","Harry Potter","Ron Weasly","Albus Dumbledore","Neville Longbottom"];
    var i = 0;
    await element.all(by.repeater('cust in Customers')).get(2).click();
    await element.all(by.repeater('cust in Customers')).each(async function(element){
        expect(await element.getText()).to.be.equals(arr[i]);
        i++;
        console.log(await element.getText());
    });
    return console.log("user enter text");
});

Then('Application display messasge', function () {
    // Write code here that turns the phrase above into concrete actions
    return console.log("Application display messasge");
});

When('User has missing step', async function (dataTable) {
    
   /* await Promise.all(dataTable.hashes().map(async function(each,index){
        var str = each.field;
       console.log("AHAHA"+each.field+"Size:"+ expect(await element.all(by.xpath(`//${str}`)).count()).to.be.greaterThan(0));
    })
    );*/
    
   
});

After(function (scenarioResult) {
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