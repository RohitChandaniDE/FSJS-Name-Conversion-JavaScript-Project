const btn = document.getElementById("convert-btn");

btn.addEventListener("click", () => {
// Get the input value
const input = document.getElementById("text").value;

// Convert to camel case
  let words = input.split(" ");
  for (let i = 1; i < words.length; i++) {
    words[i] = words[i].charAt(0).toUpperCase() + words[i].slice(1);
  }
  let result = words.join("");
  document.getElementById("camel-case").innerHTML = result;

// Convert to pascal case
  let words1 = input.split(" ");
  for (let i = 0; i < words1.length; i++) {
    words1[i] = words1[i].charAt(0).toUpperCase() + words1[i].slice(1);
  }
  let result1 = words1.join("");
  document.getElementById("pascal-case").innerHTML = result1;

// Convert to snake case
const snake = input.toLowerCase().replace(/\s+/g, '_'); // to remove the spaces from the string and replace space with "_"
document.getElementById("snake-case").textContent = snake;

// Convert to screaming snake case
const screamingSnake = input.toUpperCase().replace(/\s+/g, '_');
document.getElementById("screaming-snake-case").textContent = screamingSnake;

// Convert to kebab case
const kebab = input.toLowerCase().replace(/\s+/g, '-');
document.getElementById("kebab-case").textContent = kebab;

// Convert to screaming kebab case
const screamingKebab = input.toUpperCase().replace(/\s+/g, '-');
document.getElementById("screaming-kebab-case").textContent = screamingKebab;
});



  