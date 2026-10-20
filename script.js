
console.log("Welcome to Aryan's Portfolio!");

document.querySelectorAll('nav a').forEach(link => {
    link.addEventListener('click', () => {
        console.log("Navigation clicked:", link.textContent);
    });
});
