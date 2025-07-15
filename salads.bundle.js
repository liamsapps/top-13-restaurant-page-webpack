"use strict";
(self["webpackChunktop_13_restaurant_page_webpack"] = self["webpackChunktop_13_restaurant_page_webpack"] || []).push([[521,529,704,854],{

/***/ 60:
/***/ ((__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) => {

/* harmony import */ var _menu_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(313);


function addSaladContent() {
    const content = document.querySelector("#content");

    const menuTitle = document.createElement("h1");
    menuTitle.textContent = "SALADS";

    content.appendChild(menuTitle);

    const menuItems = document.createElement("div");
    menuItems.className = "menu-items";       

    // Salad #1
    const menuItem1 = document.createElement("div");
    menuItem1.className = "menu-item";
    const menuPrice1 = document.createElement("div");
    menuPrice1.className = "menu-item";
    
    const salad_1_Title = document.createElement("h2");
    salad_1_Title.textContent = "GREENS & VEGETABLES";
        
    const salad_1_Desc = document.createElement("p");
    salad_1_Desc.textContent = "Greens, radicchio and vegetables";
    
    const salad_1_Price = document.createElement("p");
    salad_1_Price.textContent = "$8 / $12";
    
    menuItem1.appendChild(salad_1_Title);
    menuItem1.appendChild(salad_1_Desc);
    menuPrice1.appendChild(salad_1_Price);
    
    menuItems.appendChild(menuItem1);
    menuItems.appendChild(menuPrice1);

    // Salad #2
    const menuItem2 = document.createElement("div");
    menuItem2.className = "menu-item";
    const menuPrice2 = document.createElement("div");
    menuPrice2.className = "menu-item";
    
    const salad_2_Title = document.createElement("h2");
    salad_2_Title.textContent = "CÉSAR";
        
    const salad_2_Desc = document.createElement("p");
    salad_2_Desc.textContent = "Parmesan Reggiano, homemade croutons (Pancetta on request)";
    
    
    const salad_2_Price = document.createElement("p");
    salad_2_Price.textContent = "$9 / $15";
    
    menuItem2.appendChild(salad_2_Title);
    menuItem2.appendChild(salad_2_Desc);
    menuPrice2.appendChild(salad_2_Price);
    
    menuItems.appendChild(menuItem2);
    menuItems.appendChild(menuPrice2);

    // Salad #3
    const menuItem3 = document.createElement("div");
    menuItem3.className = "menu-item";
    const menuPrice3 = document.createElement("div");
    menuPrice3.className = "menu-item";
    
    const salad_3_Title = document.createElement("h2");
    salad_3_Title.textContent = "KALE";
        
    const salad_3_Desc = document.createElement("p");
    salad_3_Desc.textContent = "Chicory, broccoli, asparagus, apples, roasted pecans, pecorino and buttermilk vinaigrette";
    
    const salad_3_Price = document.createElement("p");
    salad_3_Price.textContent = "$18";
    
    menuItem3.appendChild(salad_3_Title);
    menuItem3.appendChild(salad_3_Desc);    
    menuPrice3.appendChild(salad_3_Price);
    
    menuItems.appendChild(menuItem3);
    menuItems.appendChild(menuPrice3);

    // Salad #4
    const menuItem4 = document.createElement("div");
    menuItem4.className = "menu-item";
    const menuPrice4 = document.createElement("div");
    menuPrice4.className = "menu-item";
    
    const salad_4_Title = document.createElement("h2");
    salad_4_Title.textContent = "ENDIVES";
        
    const salad_4_Desc = document.createElement("p");
    salad_4_Desc.textContent = "Endive, radicchio, walnuts, blue cheese, herbs and apples";
    
    const salad_4_Price = document.createElement("p");
    salad_4_Price.textContent = "$18";
    
    menuItem4.appendChild(salad_4_Title);
    menuItem4.appendChild(salad_4_Desc);
    menuPrice4.appendChild(salad_4_Price);
    
    menuItems.appendChild(menuItem4);
    menuItems.appendChild(menuPrice4);

    // Salad #5
    const menuItem5 = document.createElement("div");
    menuItem5.className = "menu-item";
    const menuPrice5 = document.createElement("div");
    menuPrice5.className = "menu-item";
    
    const salad_5_Title = document.createElement("h2");
    salad_5_Title.textContent = "ROQUETTE";
        
    const salad_5_Desc = document.createElement("p");
    salad_5_Desc.textContent = "Arugula, cherry tomatoes, roasted seeds and parmesan cheese";
    
    const salad_5_Price = document.createElement("p");
    salad_5_Price.textContent = "$9 / $15";
    
    menuItem5.appendChild(salad_5_Title);
    menuItem5.appendChild(salad_5_Desc);
    menuPrice5.appendChild(salad_5_Price);
    
    menuItems.appendChild(menuItem5);
    menuItems.appendChild(menuPrice5);

    content.appendChild(menuItems);   
}

(0,_menu_js__WEBPACK_IMPORTED_MODULE_0__/* .addContent */ .r)();
addSaladContent();


/***/ }),

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
/******/ var __webpack_exports__ = (__webpack_exec__(60));
/******/ }
]);