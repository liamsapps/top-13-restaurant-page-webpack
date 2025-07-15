"use strict";
(self["webpackChunktop_13_restaurant_page_webpack"] = self["webpackChunktop_13_restaurant_page_webpack"] || []).push([[228,521,704,854],{

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

/***/ 599:
/***/ ((__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) => {

/* harmony import */ var _menu_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(313);


function addPastaContent() {
    const content = document.querySelector("#content");

    const menuTitle = document.createElement("h1");
    menuTitle.textContent = "PASTA";

    content.appendChild(menuTitle);

    const menuItems = document.createElement("div");
    menuItems.className = "menu-items";       

    // Pasta #1
    const menuItem1 = document.createElement("div");
    menuItem1.className = "menu-item";
    const menuPrice1 = document.createElement("div");
    menuPrice1.className = "menu-item";
    
    const pasta_1_Title = document.createElement("h2");
    pasta_1_Title.textContent = "SPAGHETTI POMODORO";
        
    const pasta_1_Desc = document.createElement("p");
    pasta_1_Desc.textContent = "Parmesan and basil";
    
    const pasta_1_Price = document.createElement("p");
    pasta_1_Price.textContent = "$14 / $18";
    
    menuItem1.appendChild(pasta_1_Title);
    menuItem1.appendChild(pasta_1_Desc);
    menuPrice1.appendChild(pasta_1_Price);
    
    menuItems.appendChild(menuItem1);
    menuItems.appendChild(menuPrice1);

    // Pasta #2
    const menuItem2 = document.createElement("div");
    menuItem2.className = "menu-item";
    const menuPrice2 = document.createElement("div");
    menuPrice2.className = "menu-item";
    
    const pasta_2_Title = document.createElement("h2");
    pasta_2_Title.textContent = "SPAGHETTI BOLOGNESE";
        
    const pasta_2_Desc = document.createElement("p");    
    pasta_2_Desc.textContent = "";
    
    const pasta_2_Price = document.createElement("p");
    pasta_2_Price.textContent = "$17 / $23";
    
    menuItem2.appendChild(pasta_2_Title);
    menuItem2.appendChild(pasta_2_Desc);
    menuPrice2.appendChild(pasta_2_Price);
    
    menuItems.appendChild(menuItem2);
    menuItems.appendChild(menuPrice2);

    // Pasta #3
    const menuItem3 = document.createElement("div");
    menuItem3.className = "menu-item";
    const menuPrice3 = document.createElement("div");
    menuPrice3.className = "menu-item";
    
    const pasta_3_Title = document.createElement("h2");
    pasta_3_Title.textContent = "LINGUINE CARBONARA";
        
    const pasta_3_Desc = document.createElement("p");
    pasta_3_Desc.textContent = "";
    
    const pasta_3_Price = document.createElement("p");
    pasta_3_Price.textContent = "$17 / $23";
    
    menuItem3.appendChild(pasta_3_Title);
    menuItem3.appendChild(pasta_3_Desc);
    menuPrice3.appendChild(pasta_3_Price);
    
    menuItems.appendChild(menuItem3);
    menuItems.appendChild(menuPrice3);

    // Pasta #4
    const menuItem4 = document.createElement("div");
    menuItem4.className = "menu-item";
    const menuPrice4 = document.createElement("div");
    menuPrice4.className = "menu-item";
    
    const pasta_4_Title = document.createElement("h2");    
    pasta_4_Title.textContent = "LINGUINE & MUSHROOMS";
        
    const pasta_4_Desc = document.createElement("p");
    pasta_4_Desc.textContent = "";
    
    const pasta_4_Price = document.createElement("p");
    pasta_4_Price.textContent = "$19 / $25";
    
    menuItem4.appendChild(pasta_4_Title);
    menuItem4.appendChild(pasta_4_Desc);
    menuPrice4.appendChild(pasta_4_Price);
    
    menuItems.appendChild(menuItem4);
    menuItems.appendChild(menuPrice4);

    // Pasta #5
    const menuItem5 = document.createElement("div");
    menuItem5.className = "menu-item";
    const menuPrice5 = document.createElement("div");
    menuPrice5.className = "menu-item";
    
    const pasta_5_Title = document.createElement("h2");
    pasta_5_Title.textContent = "LINGUINE CON GAMBERI";
        
    const pasta_5_Desc = document.createElement("p");
    pasta_5_Desc.className = "use-line-break";
    pasta_5_Desc.textContent = "Crevettes, zucchini, tomatoes, garlic, oignons, \nwhite wine & fine herbes\n(3 or 5 shrimp)";
    
    const pasta_5_Price = document.createElement("p");
    pasta_5_Price.textContent = "$19 / $25";
    
    menuItem5.appendChild(pasta_5_Title);
    menuItem5.appendChild(pasta_5_Desc);
    menuPrice5.appendChild(pasta_5_Price);
    
    menuItems.appendChild(menuItem5);
    menuItems.appendChild(menuPrice5);

    // Pasta #6
    const menuItem6 = document.createElement("div");
    menuItem6.className = "menu-item";
    const menuPrice6 = document.createElement("div");
    menuPrice6.className = "menu-item";
    
    const pasta_6_Title = document.createElement("h2");
    pasta_6_Title.textContent = "GEPPETTO LASAGNE";
        
    const pasta_6_Desc = document.createElement("p");
    pasta_6_Desc.className = "use-line-break";
    pasta_6_Desc.textContent = "Bolognese, pomodoro, ricotta-spinach, béchamel sauce and provolone cheese \nServed with arugula or Caesar";
    
    const pasta_6_Price = document.createElement("p");
    pasta_6_Price.textContent = "$25";
    
    menuItem6.appendChild(pasta_6_Title);
    menuItem6.appendChild(pasta_6_Desc);
    menuPrice6.appendChild(pasta_6_Price);
    
    menuItems.appendChild(menuItem6);
    menuItems.appendChild(menuPrice6);

    content.appendChild(menuItems);

    
}

(0,_menu_js__WEBPACK_IMPORTED_MODULE_0__/* .addContent */ .r)();
addPastaContent();


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
/******/ var __webpack_exports__ = (__webpack_exec__(599));
/******/ }
]);