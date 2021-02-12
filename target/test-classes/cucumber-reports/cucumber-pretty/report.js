$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("TestCase.feature");
formatter.feature({
  "line": 1,
  "name": "Hepsiburada add and delete product my favorite",
  "description": "",
  "id": "hepsiburada-add-and-delete-product-my-favorite",
  "keyword": "Feature"
});
formatter.before({
  "duration": 4233721800,
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
  "comments": [
    {
      "line": 15,
      "value": "# !!! if exist ile biten stepler elementler eğer element display olmadı ise timeout süresince beklemektedir."
    },
    {
      "line": 16,
      "value": "# testlerin koşması sırasında element ekrana hiç gelmedi ise timeout sürelerinden kaynaklı testlerin süresinin uzun olduğu düşünlebilir."
    },
    {
      "line": 17,
      "value": "# burada öncelik testin doğru ve sağlıklı bir şekilde çalışması olduğundan senaryo performans kriterlerine göre dizayn edilmemiştir."
    },
    {
      "line": 19,
      "value": "# Sepet Kontrolü"
    },
    {
      "line": 20,
      "value": "# !!! Test çalışması sırasında testin fail etmesi yarıda kesilmesi veya olumsuz bir durumla sonuçlanması durumnda ürün sepetten silinmeden çıkabilir.Scenario:"
    },
    {
      "line": 21,
      "value": "# Bir sonraki testin çalışması sırasında ürün favarilerden çıkarılmadığından aynı ürün eklenmek istendiğinde bu favarilerde ise test birkez daha fail edecektir.Scenario:"
    },
    {
      "line": 22,
      "value": "# Login işlemi gerçekleştirildikten sonra favorileri kontrol edip eğer ürün varsa silerek clean bir şekilde teste başlamak daha sağlıklı olduğundan bu admları Backgroundda her test çalışması sırasında kontrol ediyorum."
    },
    {
      "line": 23,
      "value": "# Clean test mantığnı gözeterek çeşitli yöntemler kullanılabilir."
    },
    {
      "line": 24,
      "value": "# Cashin temizlenmesi incongito modda tarayıcıyı başlatma vs. fakat otomasyon kütüphanesine uygunluğundan kaynaklı olarak bu yöntem ile ilerledim, diğer bahsettiğim yöntemler ve buna benzer bir çok yöntemde kullanılabilir."
    }
  ],
  "line": 25,
  "name": "I mouse over myAccount element",
  "keyword": "When "
});
formatter.step({
  "line": 26,
  "name": "I click myFavorite element",
  "keyword": "And "
});
formatter.step({
  "line": 27,
  "name": "I see myFavoritePageTitle element",
  "keyword": "Then "
});
formatter.step({
  "line": 28,
  "name": "I click selectAllFavItem element if exist",
  "keyword": "When "
});
formatter.step({
  "line": 29,
  "name": "I click deleteSelectedFav element if exist",
  "keyword": "And "
});
formatter.step({
  "line": 30,
  "name": "I click confirmDeleteButton element if exist",
  "keyword": "And "
});
formatter.step({
  "line": 31,
  "name": "I click HepsiburadaMainTitle element",
  "keyword": "When "
});
formatter.step({
  "line": 32,
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
  "duration": 3697653000,
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
  "duration": 14681000,
  "status": "passed"
});
formatter.match({
  "location": "WebStep.ResetMousePosition()"
});
formatter.result({
  "duration": 200789300,
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
  "duration": 442170400,
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
  "duration": 1612850100,
  "status": "passed"
});
formatter.match({
  "location": "WebStep.login(DataTable)"
});
formatter.result({
  "duration": 3781408000,
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
  "duration": 5179935800,
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
  "duration": 15504251600,
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
  "duration": 168476700,
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
  "duration": 3356974400,
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
  "duration": 56147500,
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
  "duration": 15362680500,
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
  "duration": 15353389600,
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
  "duration": 15346283500,
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
  "duration": 3275071300,
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
  "duration": 46172500,
  "status": "passed"
});
formatter.scenario({
  "line": 35,
  "name": "Hepsiburada search the samsung brand product with using search bar and add product my favorite",
  "description": "",
  "id": "hepsiburada-add-and-delete-product-my-favorite;hepsiburada-search-the-samsung-brand-product-with-using-search-bar-and-add-product-my-favorite",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 34,
      "name": "@Run"
    },
    {
      "line": 34,
      "name": "@Chrome"
    }
  ]
});
formatter.step({
  "line": 36,
  "name": "I write text samsung text area searchBar",
  "keyword": "When "
});
formatter.step({
  "line": 37,
  "name": "I click searchButton element",
  "keyword": "And "
});
formatter.step({
  "line": 38,
  "name": "I click 3rdPage element",
  "keyword": "When "
});
formatter.step({
  "line": 39,
  "name": "I see samsungPageTitle element",
  "keyword": "Then "
});
formatter.step({
  "line": 40,
  "name": "I get 3rdProductTitle element text and keep temp variable",
  "keyword": "And "
});
formatter.step({
  "line": 41,
  "name": "I mouse over 3rdProduct element",
  "keyword": "And "
});
formatter.step({
  "line": 42,
  "name": "I click 3rdProductFavIcon element",
  "keyword": "And "
});
formatter.step({
  "line": 43,
  "name": "I mouse over myAccount element",
  "keyword": "When "
});
formatter.step({
  "line": 44,
  "name": "I click myFavorite element",
  "keyword": "And "
});
formatter.step({
  "line": 45,
  "name": "I see myFavoritePageTitle element",
  "keyword": "Then "
});
formatter.step({
  "line": 46,
  "name": "I compare 3rdFavoriteTitle text with temp variable text",
  "keyword": "Then "
});
formatter.step({
  "line": 47,
  "name": "I click selectAllFavItem element",
  "keyword": "When "
});
formatter.step({
  "line": 48,
  "name": "I click deleteSelectedFav element",
  "keyword": "And "
});
formatter.step({
  "line": 49,
  "name": "I click confirmDeleteButton element",
  "keyword": "And "
});
formatter.step({
  "line": 50,
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
  "duration": 660310700,
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
  "duration": 1340661400,
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
  "duration": 14727817500,
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
  "duration": 426957500,
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
  "duration": 70129400,
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
  "duration": 207673100,
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
  "duration": 151174100,
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
  "duration": 281515400,
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
  "duration": 2038579700,
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
  "duration": 73227900,
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
  "duration": 63000600,
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
  "duration": 175931100,
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
  "duration": 140633900,
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
  "duration": 101909200,
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
  "duration": 15392870500,
  "status": "passed"
});
formatter.after({
  "duration": 823213300,
  "status": "passed"
});
});