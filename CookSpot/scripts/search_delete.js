let recipes = JSON.parse(localStorage.getItem('recipes')) || [];

function renderRecipes(recipesArray) {
  let boxSummaryHtml = '';
  recipesArray.forEach((item) => {
    boxSummaryHtml += `
            <div class="col box" data-recipe-id="${item.id}">
              <img class="trash-icone"  src="trash.svg" alt="sup" data-id="${item.id}">
              <img src="${item.image}">
              <h5 class="name">${item.name}</h5>
              <h1 class="category">${item.category}</h1>
            </div>
          `;
  });

  document.querySelector(".js-boxes").innerHTML = boxSummaryHtml;

  document.querySelectorAll('.trash-icon').forEach((item) => {
    item.addEventListener('click', () => {
      const recipeId = Number(item.getAttribute('data-id'));
      deleteRecipe(recipeId);
    });
  });
}

function deleteRecipe(recipeId) {
  recipes = recipes.filter((recipe) => recipe.recipeId !== recipeId);
  localStorage.setItem('recipes', JSON.stringify(recipes));
  renderRecipes(recipes);
}

renderRecipes(recipes);

const recipeSearch = document.getElementById("Rechercher");
const submit = document.getElementById("search-button");
let message = document.getElementById("message");

submit.addEventListener("click", () => {
  const searchValue = recipeSearch.value.toLowerCase();
  const filteredRecipes = recipes.filter(recipe =>
    recipe.name.toLowerCase() === searchValue
  );

  if (filteredRecipes.length > 0) {
    message.innerHTML = "";
    renderRecipes(filteredRecipes);
  } else {
    message.innerHTML = `<p>No recipes with this name</p>`;
  }
});
