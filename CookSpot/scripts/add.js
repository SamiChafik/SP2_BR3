import { recipes } from './data.js';

document.addEventListener('DOMContentLoaded', () => {
    const addRecipeButton = document.getElementById('addRecipe');
    const addIngredientButton = document.getElementById('addIngredient');
    const addInstructionButton = document.getElementById('addInstruction');
    const ingredientInput = document.getElementById('ingredientInput');
    const instructionInput = document.getElementById('instructionInput');

    let ingredients = [];
    let instructions = [];
    let recipeId = 0;

    addIngredientButton.addEventListener('click', () => {
        const ingredient = ingredientInput.value.trim();
        if (ingredient) {
            ingredients.push(ingredient);
            ingredientInput.value = '';
            alert(`Ingredient added: ${ingredient}`);
        }
    });

    addInstructionButton.addEventListener('click', () => {
        const instruction = instructionInput.value.trim();
        if (instruction) {
            instructions.push(instruction);
            instructionInput.value = '';
            alert(`Instruction added: ${instruction}`);
        }
    });

    addRecipeButton.addEventListener('click', () => {
        const recipeName = document.getElementById('recipeName').value.trim();
        const category = document.getElementById('category').value;
        const prepTime = document.getElementById('prepTime').value;
        const cookingTime = document.getElementById('cookingTime').value;
        const fileInput = document.getElementById('fileUpload');
        let imagePath = '';

        if (fileInput.files.length > 0) {
            const file = fileInput.files[0];
            const reader = new FileReader();

            reader.onload = function (e) {
                imagePath = e.target.result;
                addRecipe();
            };

            reader.readAsDataURL(file);
        } else {
            addRecipe();
        }

        function addRecipe() {
            if (!recipeName || !category || !ingredients || !instructions) {
                alert('Please fill out all required fields!');
                return;
            } else {
                recipeId++;
            }

            const recipe = {
                recipeId,
                name: recipeName,
                category,
                ingredients,
                instructions,
                prepTime: prepTime || 'Not specified',
                cookingTime: cookingTime || 'Not specified',
                image: imagePath || 'No image uploaded',
            };

            recipes.push(recipe);

            localStorage.setItem('recipes', JSON.stringify(recipes));

            alert('Recipe added successfully!');
            console.log(recipes);

            document.getElementById('recipeForm').reset();
            ingredients = [];
            instructions = [];
        }
    });
});