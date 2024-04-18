function details(){
    const name = document.getElementById("nameInput").value;
    
    const pass = document.getElementById("passInput").value;
    
    const age = document.getElementById("ageInput").value;
    
    if (confirm(`you sure your name is ${name} and your age is ${age}`)) {
    
        window.location.href = `/kidcalc/calc.html?name=${encodeURIComponent(name)}`;
   
    } else {
   
        return false;
    
    }

    }   
function loadCSS(filename) {
    const existingLink = document.getElementById("themeCSS");
    if (existingLink) {
         existingLink.remove();
    }

    const link = document.createElement("link");
    link.id = "themeCSS";
    link.rel = "stylesheet";
    link.href = filename;
    document.head.appendChild(link);
}

document.addEventListener("DOMContentLoaded", function() {
    const themeButton = document.getElementById("themeButton");
    let currentTheme = 1; // 1: Dark, 2: Light, 3: Velvet

    themeButton.addEventListener("click", function() {
        currentTheme = currentTheme === 3 ? 1 : currentTheme + 1;

            switch (currentTheme) {
                case 1:
                    loadCSS("assets/CSS/ThemeDark.css");
                    break;
                case 2:
                    loadCSS("assets/CSS/themeLight.css");
                    break;
                case 3:
                    loadCSS("assets/CSS/themeVelvette.css");
                    break;
                default:
                    break;
            }
        });
});  