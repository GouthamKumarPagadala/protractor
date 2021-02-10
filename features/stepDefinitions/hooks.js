const { Before, After, BeforeAll,AfterAll } = require("cucumber");
const { browser } = require("protractor");

Before(function(){
    console.log("Before");
})

After(function(scenarioResult){
    console.log("After "+scenarioResult.result.status);
   
})

Before("@chrome",function(){
    console.log("Before Chrome");
})

After("@chrome",function(){
    console.log("After Chrome");
})

BeforeAll(function(){
    console.log("Before All");
})

AfterAll(function(){
    console.log("After All");
})
