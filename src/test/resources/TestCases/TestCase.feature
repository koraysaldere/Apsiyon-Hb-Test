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
    # !!! if exist ile biten stepler elementler eğer element display olmadı ise timeout süresince beklemektedir.
    # testlerin koşması sırasında element ekrana hiç gelmedi ise timeout sürelerinden kaynaklı testlerin süresinin uzun olduğu düşünlebilir.
    # burada öncelik testin doğru ve sağlıklı bir şekilde çalışması olduğundan senaryo performans kriterlerine göre dizayn edilmemiştir.

    # Sepet Kontrolü
    # !!! Test çalışması sırasında testin fail etmesi yarıda kesilmesi veya olumsuz bir durumla sonuçlanması durumnda ürün sepetten silinmeden çıkabilir.Scenario:
    # Bir sonraki testin çalışması sırasında ürün favarilerden çıkarılmadığından aynı ürün eklenmek istendiğinde bu favarilerde ise test birkez daha fail edecektir.Scenario:
    # Login işlemi gerçekleştirildikten sonra favorileri kontrol edip eğer ürün varsa silerek clean bir şekilde teste başlamak daha sağlıklı olduğundan bu admları Backgroundda her test çalışması sırasında kontrol ediyorum.
    # Clean test mantığnı gözeterek çeşitli yöntemler kullanılabilir.
    # Cashin temizlenmesi incongito modda tarayıcıyı başlatma vs. fakat otomasyon kütüphanesine uygunluğundan kaynaklı olarak bu yöntem ile ilerledim, diğer bahsettiğim yöntemler ve buna benzer bir çok yöntemde kullanılabilir.
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
    # !!! Raporlama için extent report kullanılmıştır. http://localhost:63342/Apsiyon-Hb-Test/cucumber-reports/report.html? adresinden koşum sonrası raporlar kontrol edilebilir veya fail edene bir senaryo var ise ekran görüntüsüne ulaşılabilir.




