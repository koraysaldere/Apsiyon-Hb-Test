$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("TestCase.feature");
formatter.feature({
  "line": 1,
  "name": "Hepsiburada add / remove product my favorite",
  "description": "",
  "id": "hepsiburada-add-/-remove-product-my-favorite",
  "keyword": "Feature"
});
formatter.before({
  "duration": 4140479200,
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
  "comments": [
    {
      "line": 14,
      "value": "###"
    }
  ],
  "line": 15,
  "name": "I click popupClose element if exist",
  "keyword": "When "
});
formatter.step({
  "comments": [
    {
      "line": 16,
      "value": "###"
    }
  ],
  "line": 17,
  "name": "I mouse over myAccount element",
  "keyword": "When "
});
formatter.step({
  "line": 18,
  "name": "I click myFavorite element",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "I see myFavoritePageTitle element",
  "keyword": "Then "
});
formatter.step({
  "line": 20,
  "name": "I click selectAllFavItem element if exist",
  "keyword": "When "
});
formatter.step({
  "line": 21,
  "name": "I click deleteSelectedFav element if exist",
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "I click confirmDeleteButton element if exist",
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "I click HepsiburadaMainTitle element",
  "keyword": "When "
});
formatter.step({
  "line": 24,
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
  "duration": 3225970500,
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
  "duration": 15817400,
  "status": "passed"
});
formatter.match({
  "location": "WebStep.ResetMousePosition()"
});
formatter.result({
  "duration": 195920800,
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
  "duration": 268580500,
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
  "duration": 2111395500,
  "status": "passed"
});
formatter.match({
  "location": "WebStep.login(DataTable)"
});
formatter.result({
  "duration": 13503591400,
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
  "duration": 73133100,
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
  "duration": 15505326100,
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
  "duration": 174789500,
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
  "duration": 3117140700,
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
  "duration": 54372700,
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
  "duration": 15428844500,
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
  "duration": 15365374900,
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
  "duration": 15349681600,
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
  "duration": 2928603200,
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
  "duration": 48849200,
  "status": "passed"
});
formatter.scenario({
  "line": 27,
  "name": "Hepsiburada search with samsung keyword product and add / remove product my favorite",
  "description": "",
  "id": "hepsiburada-add-/-remove-product-my-favorite;hepsiburada-search-with-samsung-keyword-product-and-add-/-remove-product-my-favorite",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 26,
      "name": "@Run"
    },
    {
      "line": 26,
      "name": "@Chrome"
    }
  ]
});
formatter.step({
  "line": 28,
  "name": "I write text samsung text area searchBar",
  "keyword": "When "
});
formatter.step({
  "line": 29,
  "name": "I click searchButton element",
  "keyword": "And "
});
formatter.step({
  "line": 30,
  "name": "I click 3rdPage element",
  "keyword": "When "
});
formatter.step({
  "line": 31,
  "name": "I see samsungPageTitle element",
  "keyword": "Then "
});
formatter.step({
  "line": 32,
  "name": "I get 3rdProductTitle element text and keep temp variable",
  "keyword": "And "
});
formatter.step({
  "line": 33,
  "name": "I mouse over 3rdProduct element",
  "keyword": "And "
});
formatter.step({
  "line": 34,
  "name": "I click 3rdProductFavIcon element",
  "keyword": "And "
});
formatter.step({
  "line": 35,
  "name": "I mouse over myAccount element",
  "keyword": "When "
});
formatter.step({
  "line": 36,
  "name": "I click myFavorite element",
  "keyword": "And "
});
formatter.step({
  "line": 37,
  "name": "I see myFavoritePageTitle element",
  "keyword": "Then "
});
formatter.step({
  "line": 38,
  "name": "I compare 3rdFavoriteTitle text with temp variable text",
  "keyword": "Then "
});
formatter.step({
  "line": 39,
  "name": "I click selectAllFavItem element",
  "keyword": "When "
});
formatter.step({
  "line": 40,
  "name": "I click deleteSelectedFav element",
  "keyword": "And "
});
formatter.step({
  "line": 41,
  "name": "I click confirmDeleteButton element",
  "keyword": "And "
});
formatter.step({
  "line": 42,
  "name": "I see deleteConfirmationMessage element",
  "keyword": "Then "
});
formatter.step({
  "line": 43,
  "name": "I wait 10 second",
  "keyword": "And "
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
  "duration": 1245633100,
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
  "duration": 822667800,
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
  "duration": 10153775000,
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
  "duration": 513631400,
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
  "duration": 72893700,
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
  "duration": 215678300,
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
  "duration": 136828800,
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
  "duration": 249536300,
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
  "duration": 2232162000,
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
  "duration": 49979900,
  "status": "passed"
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
  "duration": 81538800,
  "status": "passed"
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
  "duration": 159583300,
  "status": "passed"
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
  "duration": 307475400,
  "status": "passed"
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
  "duration": 88649200,
  "status": "passed"
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
  "duration": 15372567600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "10",
      "offset": 7
    }
  ],
  "location": "WebStep.WaitTime(int)"
});
formatter.result({
  "duration": 10001639800,
  "status": "passed"
});
formatter.after({
  "duration": 811785700,
  "status": "passed"
});
});