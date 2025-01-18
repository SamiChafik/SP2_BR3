document.addEventListener('DOMContentLoaded', () => {
    const displayArea = document.querySelector('.Displayrec');

    function displayRecipes() {
        const recipes = JSON.parse(localStorage.getItem('recipes')) || [];

        if (recipes.length === 0) {
            displayArea.innerHTML = '<p>No recipes to display yet!</p>';
            return;
        }

        displayArea.innerHTML = '';

        recipes.forEach((recipe) => {
            const recipeCard = document.createElement('div');
            recipeCard.classList.add('recipe-card');

            recipeCard.innerHTML = `
                <h2>${recipe.name}</h2>
                <img src="${recipe.image}" alt="${recipe.name}" class="recipe-image" />
                <p><strong>Category:</strong> ${recipe.category}</p>
                <p><strong>Prep Time:</strong> ${recipe.prepTime} min</p>
                <p><strong>Cooking Time:</strong> ${recipe.cookingTime} min</p>
                <h3>Ingredients:</h3>
                <ul>
                    ${recipe.ingredients.map(ing => `<li>${ing}</li>`).join('')}
                </ul>
                <h3>Instructions:</h3>
                <ol>
                    ${recipe.instructions.map(inst => `<li>${inst}</li>`).join('')}
                </ol>
            `;

            displayArea.appendChild(recipeCard);
        });
    }

    displayRecipes();
});
