getIngredients((ingredients) => {
    prepareBread(ingredients.bread, () => {
      getFillings(ingredients.fillings, (preparedFillings) => {
        assembleSandwich(preparedFillings, (sandwich) => {
          console.log('Enjoy your delicious sandwich:', sandwich);
          //below is what is called "callback hell". Callback hell happens when you have many tasks that need to be done one after the other, but they are organized in a way that makes them hard to understand.
        });
      });
    });
  });
  