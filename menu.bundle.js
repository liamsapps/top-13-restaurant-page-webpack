"use strict";
(self["webpackChunktop_13_restaurant_page_webpack"] = self["webpackChunktop_13_restaurant_page_webpack"] || []).push([[521,704,854],{

/***/ 313:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   r: () => (/* binding */ addContent)
/* harmony export */ });
/* harmony import */ var _navigation_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(564);
/* harmony import */ var _menuNavigation_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(779);






console.log("In menu.js test message!");

function addContent() {
    const content = document.querySelector("#content");    

    // MENU NAV - ensure buttons only created once
    if (!document.querySelector('#menu-heading') && !document.querySelector('.menu-nav')) {
        const h1 = document.createElement("h1");
        h1.id = "menu-heading";
        h1.textContent = "Alberto's Eatery - Menu";

        content.appendChild(h1);

        const menuNav = document.createElement("nav");
        menuNav.className = "menu-nav";

        // MENU NAV - NAV BUTTONS
        const saladsBtn = document.createElement("button");
        saladsBtn.id = "salads-btn";
        saladsBtn.textContent = "Salads";

        const pastaBtn = document.createElement("button");
        pastaBtn.id = "pasta-btn";
        pastaBtn.textContent = "Pasta";

        const pizzaBtn = document.createElement("button");
        pizzaBtn.id = "pizza-btn";
        pizzaBtn.textContent = "Pizza";

        const dessertsBtn = document.createElement("button");
        dessertsBtn.id = "desserts-btn";
        dessertsBtn.textContent = "Desserts";

        const wineBtn = document.createElement("button");
        wineBtn.id = "wine-btn";
        wineBtn.textContent = "Wine";

        menuNav.appendChild(saladsBtn);
        menuNav.appendChild(pastaBtn);
        menuNav.appendChild(pizzaBtn);
        menuNav.appendChild(dessertsBtn);
        menuNav.appendChild(wineBtn);
        content.appendChild(menuNav);    
    }
}

(0,_navigation_js__WEBPACK_IMPORTED_MODULE_0__/* .setupNavigation */ .m)();
addContent();
(0,_menuNavigation_js__WEBPACK_IMPORTED_MODULE_1__/* .setupMenuNavigation */ .p)();



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



/***/ }),

/***/ 779:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   p: () => (/* binding */ setupMenuNavigation)
/* harmony export */ });
// Handle menu item button clicks
function setupMenuNavigation() {
  const saladsBtn = document.querySelector("#salads-btn");
  const pastaBtn = document.querySelector("#pasta-btn");
  const pizzaBtn = document.querySelector("#pizza-btn");
  const dessertsBtn = document.querySelector("#desserts-btn");
  const wineBtn = document.querySelector("#wine-btn")
    
  saladsBtn.addEventListener('click', () => {
    window.location.href = "salads.html";
  });

  pastaBtn.addEventListener('click', () => {
    window.location.href = "pasta.html";
  });

  pizzaBtn.addEventListener('click', () => {
    window.location.href = "pizza.html";
  });

  dessertsBtn.addEventListener('click', () => {
    window.location.href = "desserts.html";    
  });

  wineBtn.addEventListener('click', () => {
    window.location.href = "wine.html";
  });
  
}

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__(313));
/******/ }
]);