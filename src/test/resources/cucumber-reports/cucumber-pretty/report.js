$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("TestCase.feature");
formatter.feature({
  "line": 1,
  "name": "Hepsiburada add and delete product my favorite",
  "description": "",
  "id": "hepsiburada-add-and-delete-product-my-favorite",
  "keyword": "Feature"
});
formatter.before({
  "duration": 4933194300,
  "status": "passed"
});
formatter.background({
  "line": 3,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "I go to https://www.hepsiburada.com page",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "I url must be https://www.hepsiburada.com/",
  "keyword": "Then "
});
formatter.step({
  "line": 6,
  "name": "I move mouse reset position",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "I mouse over myAccount element",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "I click mainLogin element",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "I login with",
  "rows": [
    {
      "cells": [
        "username",
        "password"
      ],
      "line": 10
    },
    {
      "cells": [
        "test24950@gmail.com",
        "123456Qq"
      ],
      "line": 11
    },
    {
      "cells": [
        "login",
        ""
      ],
      "line": 12
    }
  ],
  "keyword": "When "
});
formatter.step({
  "line": 13,
  "name": "I see myAccount element",
  "keyword": "Then "
});
formatter.step({
  "line": 14,
  "name": "I click popupClose element if exist",
  "keyword": "When "
});
formatter.step({
  "line": 15,
  "name": "I mouse over myAccount element",
  "keyword": "When "
});
formatter.step({
  "line": 16,
  "name": "I click myFavorite element",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "I see myFavoritePageTitle element",
  "keyword": "Then "
});
formatter.step({
  "line": 18,
  "name": "I click selectAllFavItem element if exist",
  "keyword": "When "
});
formatter.step({
  "line": 19,
  "name": "I click deleteSelectedFav element if exist",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "I click confirmDeleteButton element if exist",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "I click HepsiburadaMainTitle element",
  "keyword": "When "
});
formatter.step({
  "line": 22,
  "name": "I url must be https://www.hepsiburada.com/",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "https://www.hepsiburada.com",
      "offset": 8
    }
  ],
  "location": "WebStep.GoToURL(String)"
});
formatter.result({
  "duration": 4326744100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "https://www.hepsiburada.com/",
      "offset": 14
    }
  ],
  "location": "WebStep.CheckUrl(String)"
});
formatter.result({
  "duration": 11878700,
  "status": "passed"
});
formatter.match({
  "location": "WebStep.ResetMousePosition()"
});
formatter.result({
  "duration": 227171800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "myAccount",
      "offset": 13
    }
  ],
  "location": "WebStep.MouseOver(String)"
});
formatter.result({
  "duration": 244750500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "mainLogin",
      "offset": 8
    }
  ],
  "location": "WebStep.Click(String)"
});
formatter.result({
  "duration": 2209404100,
  "status": "passed"
});
formatter.match({
  "location": "WebStep.login(DataTable)"
});
formatter.result({
  "duration": 4002500000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "myAccount",
      "offset": 6
    }
  ],
  "location": "WebStep.seeElement(String)"
});
formatter.result({
  "duration": 5212397400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "popupClose",
      "offset": 8
    }
  ],
  "location": "WebStep.ClickElementExist(String)"
});
formatter.result({
  "duration": 15583349100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "myAccount",
      "offset": 13
    }
  ],
  "location": "WebStep.MouseOver(String)"
});
formatter.result({
  "duration": 181010100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "myFavorite",
      "offset": 8
    }
  ],
  "location": "WebStep.Click(String)"
});
formatter.result({
  "duration": 2755645500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "myFavoritePageTitle",
      "offset": 6
    }
  ],
  "location": "WebStep.seeElement(String)"
});
formatter.result({
  "duration": 709000400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "selectAllFavItem",
      "offset": 8
    }
  ],
  "location": "WebStep.ClickElementExist(String)"
});
formatter.result({
  "duration": 15459796800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "deleteSelectedFav",
      "offset": 8
    }
  ],
  "location": "WebStep.ClickElementExist(String)"
});
formatter.result({
  "duration": 15328852600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "confirmDeleteButton",
      "offset": 8
    }
  ],
  "location": "WebStep.ClickElementExist(String)"
});
formatter.result({
  "duration": 15319241300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "HepsiburadaMainTitle",
      "offset": 8
    }
  ],
  "location": "WebStep.Click(String)"
});
formatter.result({
  "duration": 3642519800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "https://www.hepsiburada.com/",
      "offset": 14
    }
  ],
  "location": "WebStep.CheckUrl(String)"
});
formatter.result({
  "duration": 35989400,
  "status": "passed"
});
formatter.scenario({
  "line": 25,
  "name": "Hepsiburada search the samsung brand product with using search bar and add product my favorite",
  "description": "",
  "id": "hepsiburada-add-and-delete-product-my-favorite;hepsiburada-search-the-samsung-brand-product-with-using-search-bar-and-add-product-my-favorite",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 24,
      "name": "@Run"
    },
    {
      "line": 24,
      "name": "@Chrome"
    }
  ]
});
formatter.step({
  "line": 26,
  "name": "I write text samsung text area searchBar",
  "keyword": "When "
});
formatter.step({
  "line": 27,
  "name": "I click searchButton element",
  "keyword": "And "
});
formatter.step({
  "line": 28,
  "name": "I click 3rdPage element",
  "keyword": "When "
});
formatter.step({
  "line": 29,
  "name": "I see samsungPageTitle element",
  "keyword": "Then "
});
formatter.step({
  "line": 30,
  "name": "I get 3rdProductTitle element text and keep temp variable",
  "keyword": "And "
});
formatter.step({
  "line": 31,
  "name": "I mouse over 3rdProduct element",
  "keyword": "And "
});
formatter.step({
  "line": 32,
  "name": "I click 3rdProductFavIcon element",
  "keyword": "And "
});
formatter.step({
  "line": 33,
  "name": "I mouse over myAccount element",
  "keyword": "When "
});
formatter.step({
  "line": 34,
  "name": "I click myFavorite element",
  "keyword": "And "
});
formatter.step({
  "line": 35,
  "name": "I see myFavoritePageTitle element",
  "keyword": "Then "
});
formatter.step({
  "line": 36,
  "name": "I compare 3rdFavoriteTitle text with temp variable text",
  "keyword": "Then "
});
formatter.step({
  "line": 37,
  "name": "I click selectAllFavItem element",
  "keyword": "When "
});
formatter.step({
  "line": 38,
  "name": "I click deleteSelectedFav element",
  "keyword": "And "
});
formatter.step({
  "line": 39,
  "name": "I click confirmDeleteButton element",
  "keyword": "And "
});
formatter.step({
  "line": 40,
  "name": "I see deleteConfirmationMessage element",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "samsung",
      "offset": 13
    },
    {
      "val": "searchBar",
      "offset": 31
    }
  ],
  "location": "WebStep.SendKeys(String,String)"
});
formatter.result({
  "duration": 231670600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "searchButton",
      "offset": 8
    }
  ],
  "location": "WebStep.Click(String)"
});
formatter.result({
  "duration": 1537724800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "3rdPage",
      "offset": 8
    }
  ],
  "location": "WebStep.Click(String)"
});
formatter.result({
  "duration": 12071205900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "samsungPageTitle",
      "offset": 6
    }
  ],
  "location": "WebStep.seeElement(String)"
});
formatter.result({
  "duration": 623424700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "3rdProductTitle",
      "offset": 6
    }
  ],
  "location": "WebStep.getElementText(String)"
});
formatter.result({
  "duration": 68817700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "3rdProduct",
      "offset": 13
    }
  ],
  "location": "WebStep.MouseOver(String)"
});
formatter.result({
  "duration": 292366900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "3rdProductFavIcon",
      "offset": 8
    }
  ],
  "location": "WebStep.Click(String)"
});
formatter.result({
  "duration": 15416636900,
  "error_message": "java.lang.AssertionError: Element not found. Element is null\r\n\tat org.testng.Assert.fail(Assert.java:94)\r\n\tat Libs.WebStep.Click(WebStep.java:48)\r\n\tat ✽.And I click 3rdProductFavIcon element(TestCase.feature:32)\r\n",
  "status": "failed"
});
formatter.match({
  "arguments": [
    {
      "val": "myAccount",
      "offset": 13
    }
  ],
  "location": "WebStep.MouseOver(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "myFavorite",
      "offset": 8
    }
  ],
  "location": "WebStep.Click(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "myFavoritePageTitle",
      "offset": 6
    }
  ],
  "location": "WebStep.seeElement(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "3rdFavoriteTitle",
      "offset": 10
    }
  ],
  "location": "WebStep.getElementTextCompareTemp(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "selectAllFavItem",
      "offset": 8
    }
  ],
  "location": "WebStep.Click(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "deleteSelectedFav",
      "offset": 8
    }
  ],
  "location": "WebStep.Click(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "confirmDeleteButton",
      "offset": 8
    }
  ],
  "location": "WebStep.Click(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "deleteConfirmationMessage",
      "offset": 6
    }
  ],
  "location": "WebStep.seeElement(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.write("Current Page URL is https://www.hepsiburada.com/ara?q\u003dsamsung\u0026sayfa\u003d3");
formatter.after({
  "duration": 1481767200,
  "status": "passed"
});
});