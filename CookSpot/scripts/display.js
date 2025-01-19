document.addEventListener('DOMContentLoaded', () => {
    const recipesContainer = document.querySelector('.recipe-container'); // The container where recipes will be displayed
    const savedRecipes = JSON.parse(localStorage.getItem('recipes')) || []; // Retrieve recipes from localStorage

    if (recipesContainer && savedRecipes.length > 0) {
        savedRecipes.forEach(recipe => {
            const recipeCard = document.createElement('div');
            recipeCard.classList.add('recipe-card');

            recipeCard.innerHTML = `
                <div>
                    <img src="${recipe.image !== 'No image uploaded' ? recipe.image : 'assets/images/default_image.jpg'}" alt="${recipe.name}" class="recipe-image">
                    <h3>${recipe.name}</h3>
                    <p><strong>Category:</strong> ${recipe.category}</p>
                    <p><strong>Prep Time:</strong> ${recipe.prepTime}</p>
                    <p><strong>Cooking Time:</strong> ${recipe.cookingTime}</p>
                    <h4>Ingredients:</h4>
                    <ul>
                        ${recipe.ingredients.map(ingredient => `<li>${ingredient}</li>`).join('')}
                    </ul>
                    <h4>Instructions:</h4>
                    <ol>
                        ${recipe.instructions.map(instruction => `<li>${instruction}</li>`).join('')}
                    </ol>
                </div>
            `;

            recipesContainer.appendChild(recipeCard);
        });
    } else if (recipesContainer) {
        recipesContainer.innerHTML = '<p>No recipes found. Add some recipes to display them here!</p>';
    }
});
