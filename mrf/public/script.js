const apiKey = '5cb3fe4c5e2f7323e3a27ccbd1debfab';
const appId = '32ea44d5';

async function searchRecipes() {
    const query = document.getElementById('searchInput').value;
    try {
        const response = await fetch(`https://api.edamam.com/search?q=${query}&app_id=${appId}&app_key=${apiKey}`);
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const data = await response.json();
        console.log('Fetched data:', data);
        displayRecipes(data.hits);
    } catch (error) {
        console.error('Error fetching data:', error);
    }
}

function displayRecipes(recipes) {
    const recipeResults = document.getElementById('recipeResults');
    recipeResults.innerHTML = '';
    recipes.forEach(recipeData => {
        const recipe = recipeData.recipe;
        const recipeElement = document.createElement('div');
        recipeElement.classList.add('recipe');
        recipeElement.innerHTML = `
            <img src="${recipe.image}" alt="${recipe.label}">
            <h3>${recipe.label}</h3>
            <p>${recipe.source}</p>
            <p class="price">${recipe.calories.toFixed(2)} kcal</p>
            <a href="${recipe.url}" class="buy-button" target="_blank" rel="noopener noreferrer">View Recipe</a>
        `;
        recipeResults.appendChild(recipeElement);
    });
}
/* script for the index.html */
// Open and close the side navigation
function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
}

function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
}

function logout() {
    // Clear user session data
    localStorage.removeItem('userData');
    alert('You have been logged out.');
    // Redirect to login page
    window.location.href = 'login.html';
}
// Function to update the date and time
function updateTime() {
    const now = new Date();
    const calendar = now.toLocaleDateString(undefined, { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' });
    const timer = now.toLocaleTimeString();
    document.getElementById('calendar').innerHTML = calendar;
    document.getElementById('timer').innerHTML = timer;
}

// Update time every second
setInterval(updateTime, 1000);

// Initial call to display time immediately on page load
updateTime();

// Function to search recipes using Edamam API
