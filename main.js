function render() {
  const productsStore = localStorageUtil.getProducts();

  headerPage.render(productsStore.length);
  productsPage.render();

}

spinnerPage.render();


let CATALOG = [];

// fetch('https://api.jsonserve.com/7rKgnX')
fetch('server/catalog.json')
  .then(result => result.json()) 
  .then(body => {
    CATALOG = body;
    spinnerPage.handleClear();
    render();
  })
  .catch (error => {
    console.log(error);
  });
  