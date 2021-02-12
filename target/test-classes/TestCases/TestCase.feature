Feature: Hepsiburada add and delete product my favorite

  Background:
    Given I go to https://www.hepsiburada.com page
    Then  I url must be https://www.hepsiburada.com/
    And   I move mouse reset position
    When  I mouse over myAccount element
    And   I click mainLogin element
    When  I login with
      | username            | password |
      | test24950@gmail.com | 123456Qq |
      | login               |          |
    Then  I see myAccount element
    When  I click popupClose element if exist
    When  I mouse over myAccount element
    And   I click myFavorite element
    Then  I see myFavoritePageTitle element
    When  I click selectAllFavItem element if exist
    And   I click deleteSelectedFav element if exist
    And   I click confirmDeleteButton element if exist
    When  I click HepsiburadaMainTitle element
    Then  I url must be https://www.hepsiburada.com/

  @Run @Chrome
  Scenario: Hepsiburada search the samsung brand product with using search bar and add product my favorite
    When  I write text samsung text area searchBar
    And   I click searchButton element
    When  I click 3rdPage element
    Then  I see samsungPageTitle element
    And   I get 3rdProductTitle element text and keep temp variable
    And   I mouse over 3rdProduct element
    And   I click 3rdProductFavIcon element
    When  I mouse over myAccount element
    And   I click myFavorite element
    Then  I see myFavoritePageTitle element
    Then  I compare 3rdFavoriteTitle text with temp variable text
    When  I click selectAllFavItem element
    And   I click deleteSelectedFav element
    And   I click confirmDeleteButton element
    Then  I see deleteConfirmationMessage element





