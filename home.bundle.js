"use strict";
(self["webpackChunktop_13_restaurant_page_webpack"] = self["webpackChunktop_13_restaurant_page_webpack"] || []).push([[521,962],{

/***/ 476:
/***/ ((__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) => {


// EXTERNAL MODULE: ./src/navigation.js
var navigation = __webpack_require__(564);
;// ./src/images/pasta_meatballs.png
const pasta_meatballs_namespaceObject = __webpack_require__.p + "47f641ca2c4041693e97.png";
;// ./src/images/oven-pizza.jpg
const oven_pizza_namespaceObject = __webpack_require__.p + "87b33d5d0c7b9edbcd69.jpg";
;// ./src/images/penne_broccoli.png
const penne_broccoli_namespaceObject = __webpack_require__.p + "052b154335a15f156b29.png";
;// ./src/images/salad-dish.jpg
const salad_dish_namespaceObject = __webpack_require__.p + "0362d9febbac40f5cfad.jpg";
;// ./src/images/ciabatta-bread.jpg
const ciabatta_bread_namespaceObject = __webpack_require__.p + "6339a66b884e2f021e34.jpg";
;// ./src/images/wine-bottle-glass.jpg
const wine_bottle_glass_namespaceObject = __webpack_require__.p + "9f6178c70c02fadd4553.jpg";
;// ./src/home.js











   
console.log("In home.js test message!");

function addContent() {
    const content = document.querySelector("#content");
    
    // TOP DIV
    const topDiv = document.createElement("div");
    topDiv.className = "home-images";

    const image1 = document.createElement("img");
    image1.src = pasta_meatballs_namespaceObject;
    const image2 = document.createElement("img");
    image2.src = oven_pizza_namespaceObject;
    const image3 = document.createElement("img");
    image3.src = penne_broccoli_namespaceObject;

    topDiv.appendChild(image1);
    topDiv.appendChild(image2);
    topDiv.appendChild(image3);
    
    // MIDDLE DIV
    const middleDiv = document.createElement("div");
    middleDiv.id = "home-middle";

    const h1 = document.createElement("h1");
    h1.textContent = "Welcome to Alberto's Eatery";

    const para1 = document.createElement("p");
    para1.textContent = "Authentic Italian flavors, crafted with passion. Enjoy handmade pasta, wood-fired pizzas, and classic dishes made from family recipes. Fresh ingredients, warm hospitality—just like Nonna's kitchen.";

    const para2 = document.createElement("p");
    para2.textContent = "Buon appetito!";

    middleDiv.appendChild(h1);
    middleDiv.appendChild(para1);
    middleDiv.appendChild(para2);

    // BOTTOM DIV
    const bottomDiv = document.createElement("div");
    bottomDiv.className = "home-images";

    const image4 = document.createElement("img");
    image4.src = salad_dish_namespaceObject;
    const image5 = document.createElement("img");
    image5.src = ciabatta_bread_namespaceObject;
    const image6 = document.createElement("img");
    image6.src = wine_bottle_glass_namespaceObject;   

    bottomDiv.appendChild(image4);
    bottomDiv.appendChild(image5);
    bottomDiv.appendChild(image6);

    content.appendChild(topDiv);
    content.appendChild(middleDiv);
    content.appendChild(bottomDiv);
    
}

(0,navigation/* setupNavigation */.m)(); 
addContent();




/***/ }),

/***/ 564:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   m: () => (/* binding */ setupNavigation)
/* harmony export */ });
// Handle header button clicks 
function setupNavigation() {
  const homeBtn = document.querySelector('#home-btn');  
  const menuBtn = document.querySelector('#menu-btn');  
  const aboutBtn = document.querySelector('#about-btn');
  
  homeBtn.addEventListener('click', () => {    
    window.location.href = 'index.html';
  });

  menuBtn.addEventListener('click', () => {
    window.location.href = 'menu.html';
  });

  aboutBtn.addEventListener('click', () => {
    window.location.href = 'about.html';
  });
}



/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__(476));
/******/ }
]);