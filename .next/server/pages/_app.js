(function() {
var exports = {};
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "./components/_App/GoTop.js":
/*!**********************************!*\
  !*** ./components/_App/GoTop.js ***!
  \**********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_feather__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-feather */ "react-feather");
/* harmony import */ var react_feather__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_feather__WEBPACK_IMPORTED_MODULE_2__);

var _jsxFileName = "C:\\Users\\v-chsom\\OneDrive - Microsoft\\Documents\\My PC\\Web Dev\\React\\template\\startp-react\\components\\_App\\GoTop.js";



const GoTop = ({
  scrollStepInPx,
  delayInMs
}) => {
  const [thePosition, setThePosition] = react__WEBPACK_IMPORTED_MODULE_1___default().useState(false);
  const timeoutRef = react__WEBPACK_IMPORTED_MODULE_1___default().useRef(null);
  react__WEBPACK_IMPORTED_MODULE_1___default().useEffect(() => {
    document.addEventListener("scroll", () => {
      if (window.scrollY > 170) {
        setThePosition(true);
      } else {
        setThePosition(false);
      }
    });
  }, []);

  const onScrollStep = () => {
    if (window.pageYOffset === 0) {
      clearInterval(timeoutRef.current);
    }

    window.scroll(0, window.pageYOffset - scrollStepInPx);
  };

  const scrollToTop = () => {
    timeoutRef.current = setInterval(onScrollStep, delayInMs);
  };

  const renderGoTopIcon = () => {
    return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: `go-top ${thePosition ? 'active' : ''}`,
      onClick: scrollToTop,
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_feather__WEBPACK_IMPORTED_MODULE_2__.ArrowUp, {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 33,
        columnNumber: 17
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 13
    }, undefined);
  };

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((react__WEBPACK_IMPORTED_MODULE_1___default().Fragment), {
    children: renderGoTopIcon()
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 39,
    columnNumber: 9
  }, undefined);
};

/* harmony default export */ __webpack_exports__["default"] = (GoTop);

/***/ }),

/***/ "./components/_App/Layout.js":
/*!***********************************!*\
  !*** ./components/_App/Layout.js ***!
  \***********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _GoTop__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./GoTop */ "./components/_App/GoTop.js");


var _jsxFileName = "C:\\Users\\v-chsom\\OneDrive - Microsoft\\Documents\\My PC\\Web Dev\\React\\template\\startp-react\\components\\_App\\Layout.js";




const Layout = ({
  children
}) => {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_2___default()), {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("meta", {
        charSet: "utf-8"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 9,
        columnNumber: 17
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("meta", {
        name: "viewport",
        content: "width=device-width, initial-scale=1"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 10,
        columnNumber: 17
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("title", {
        children: "StartP - React Next IT Startups & Digital Services Template"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 11,
        columnNumber: 17
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 13
    }, undefined), children, /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_GoTop__WEBPACK_IMPORTED_MODULE_3__.default, {
      scrollStepInPx: "100",
      delayInMs: "10.50"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 13
    }, undefined)]
  }, void 0, true);
};

/* harmony default export */ __webpack_exports__["default"] = (Layout);

/***/ }),

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ App; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _public_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/public/css/bootstrap.min.css */ "./public/css/bootstrap.min.css");
/* harmony import */ var _public_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_public_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var animate_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! animate.css */ "./node_modules/animate.css/animate.css");
/* harmony import */ var animate_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(animate_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _public_css_boxicons_min_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/public/css/boxicons.min.css */ "./public/css/boxicons.min.css");
/* harmony import */ var _public_css_boxicons_min_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_public_css_boxicons_min_css__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _public_css_flaticon_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/public/css/flaticon.css */ "./public/css/flaticon.css");
/* harmony import */ var _public_css_flaticon_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_public_css_flaticon_css__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _public_css_slick_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/public/css/slick.css */ "./public/css/slick.css");
/* harmony import */ var _public_css_slick_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_public_css_slick_css__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_accessible_accordion_dist_fancy_example_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-accessible-accordion/dist/fancy-example.css */ "./node_modules/react-accessible-accordion/dist/fancy-example.css");
/* harmony import */ var react_accessible_accordion_dist_fancy_example_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_accessible_accordion_dist_fancy_example_css__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _public_css_style_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @/public/css/style.css */ "./public/css/style.css");
/* harmony import */ var _public_css_style_css__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_public_css_style_css__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _public_css_responsive_css__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @/public/css/responsive.css */ "./public/css/responsive.css");
/* harmony import */ var _public_css_responsive_css__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_public_css_responsive_css__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _components_App_Layout__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @/components/_App/Layout */ "./components/_App/Layout.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var react_toast_notifications__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! react-toast-notifications */ "react-toast-notifications");
/* harmony import */ var react_toast_notifications__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(react_toast_notifications__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../store */ "./store.js");

var _jsxFileName = "C:\\Users\\v-chsom\\OneDrive - Microsoft\\Documents\\My PC\\Web Dev\\React\\template\\startp-react\\pages\\_app.js";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }








 // Multicolor if you want this color comment out 
// import '@/public/css/colors/brink-pink-style.css'
// import '@/public/css/colors/pink-style.css'
// import '@/public/css/colors/purple-style.css'  





function App({
  Component,
  pageProps
}) {
  const store = (0,_store__WEBPACK_IMPORTED_MODULE_12__.useStore)(pageProps.initialReduxState);
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_toast_notifications__WEBPACK_IMPORTED_MODULE_11__.ToastProvider, {
    placement: "bottom-left",
    autoDismissTimeout: 6000,
    autoDismiss: true,
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_redux__WEBPACK_IMPORTED_MODULE_10__.Provider, {
      store: store,
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_App_Layout__WEBPACK_IMPORTED_MODULE_9__.default, {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 30,
        columnNumber: 17
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, _objectSpread({}, pageProps), void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 31,
        columnNumber: 17
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 13
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 24,
    columnNumber: 9
  }, this);
}

/***/ }),

/***/ "./products.js":
/*!*********************!*\
  !*** ./products.js ***!
  \*********************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "productsData": function() { return /* binding */ productsData; }
/* harmony export */ });
const productsData = [{
  id: 'wood-pencil',
  name: 'Wood Pencil',
  price: 19.99,
  desc: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.",
  availability: 'In Stock',
  image: '/images/shop-image/shop-image1.jpg',
  images: [{
    id: 1,
    img: '/images/shop-image/shop-image1.jpg'
  }, {
    id: 2,
    img: '/images/shop-image/shop-image1.jpg'
  }, {
    id: 3,
    img: '/images/shop-image/shop-image1.jpg'
  }, {
    id: 4,
    img: '/images/shop-image/shop-image1.jpg'
  }]
}, {
  id: 't-shirt',
  name: 'T-Shirt',
  price: 22.99,
  desc: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.",
  availability: 'In Stock',
  image: '/images/shop-image/shop-image2.jpg',
  images: [{
    id: 1,
    img: '/images/shop-image/shop-image1.jpg'
  }, {
    id: 2,
    img: '/images/shop-image/shop-image2.jpg'
  }, {
    id: 3,
    img: '/images/shop-image/shop-image1.jpg'
  }, {
    id: 4,
    img: '/images/shop-image/shop-image2.jpg'
  }]
}, {
  id: 'casual-shoe',
  name: 'Casual Shoe',
  price: 31.99,
  desc: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.",
  availability: 'In Stock',
  image: '/images/shop-image/shop-image3.jpg',
  images: [{
    id: 1,
    img: '/images/shop-image/shop-image3.jpg'
  }, {
    id: 2,
    img: '/images/shop-image/shop-image2.jpg'
  }, {
    id: 3,
    img: '/images/shop-image/shop-image1.jpg'
  }, {
    id: 4,
    img: '/images/shop-image/shop-image2.jpg'
  }]
}, {
  id: 'coffee-bag',
  name: 'Coffee Bag',
  price: 4.99,
  desc: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.",
  availability: 'In Stock',
  image: '/images/shop-image/shop-image4.jpg',
  images: [{
    id: 1,
    img: '/images/shop-image/shop-image4.jpg'
  }, {
    id: 2,
    img: '/images/shop-image/shop-image2.jpg'
  }, {
    id: 3,
    img: '/images/shop-image/shop-image1.jpg'
  }, {
    id: 4,
    img: '/images/shop-image/shop-image4.jpg'
  }]
}, {
  id: 'single-chair',
  name: 'Single Chair',
  price: 149.99,
  desc: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.",
  availability: 'In Stock',
  image: '/images/shop-image/shop-image5.jpg',
  images: [{
    id: 1,
    img: '/images/shop-image/shop-image5.jpg'
  }, {
    id: 2,
    img: '/images/shop-image/shop-image2.jpg'
  }, {
    id: 3,
    img: '/images/shop-image/shop-image1.jpg'
  }, {
    id: 4,
    img: '/images/shop-image/shop-image4.jpg'
  }]
}, {
  id: 'business-card',
  name: 'Business Card',
  price: 1.99,
  desc: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.",
  availability: 'In Stock',
  image: '/images/shop-image/shop-image6.jpg',
  images: [{
    id: 1,
    img: '/images/shop-image/shop-image6.jpg'
  }, {
    id: 2,
    img: '/images/shop-image/shop-image2.jpg'
  }, {
    id: 3,
    img: '/images/shop-image/shop-image1.jpg'
  }, {
    id: 4,
    img: '/images/shop-image/shop-image4.jpg'
  }]
}, {
  id: 'book-cover',
  name: 'Book Cover',
  price: 3.99,
  desc: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.",
  availability: 'In Stock',
  image: '/images/shop-image/shop-image7.jpg',
  images: [{
    id: 1,
    img: '/images/shop-image/shop-image7.jpg'
  }, {
    id: 2,
    img: '/images/shop-image/shop-image2.jpg'
  }, {
    id: 3,
    img: '/images/shop-image/shop-image1.jpg'
  }, {
    id: 4,
    img: '/images/shop-image/shop-image4.jpg'
  }]
}, {
  id: 'wall-watch',
  name: 'Wall Watch',
  price: 9.99,
  desc: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.",
  availability: 'In Stock',
  image: '/images/shop-image/shop-image8.jpg',
  images: [{
    id: 1,
    img: '/images/shop-image/shop-image8.jpg'
  }, {
    id: 2,
    img: '/images/shop-image/shop-image2.jpg'
  }, {
    id: 3,
    img: '/images/shop-image/shop-image1.jpg'
  }, {
    id: 4,
    img: '/images/shop-image/shop-image4.jpg'
  }]
}];

/***/ }),

/***/ "./store.js":
/*!******************!*\
  !*** ./store.js ***!
  \******************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "initializeStore": function() { return /* binding */ initializeStore; },
/* harmony export */   "useStore": function() { return /* binding */ useStore; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux */ "redux");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var redux_devtools_extension__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! redux-devtools-extension */ "redux-devtools-extension");
/* harmony import */ var redux_devtools_extension__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(redux_devtools_extension__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _products__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./products */ "./products.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }





let store;
const initialState = {
  products: _products__WEBPACK_IMPORTED_MODULE_3__.productsData,
  cart: [],
  total: 0
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_TO_CART':
      let addedItem = state.products.find(item => item.id === action.id);
      let existed_item = state.cart.find(item => action.id === item.id);

      if (existed_item) {
        addedItem.quantity += 1;
        return _objectSpread(_objectSpread({}, state), {}, {
          total: state.total + addedItem.price
        });
      } else {
        addedItem.quantity = 1;
        let newTotal = state.total + addedItem.price;
        return _objectSpread(_objectSpread({}, state), {}, {
          cart: [...state.cart, addedItem],
          total: newTotal
        });
      }

    case 'ADD_QUANTITY':
      let existingItem = state.cart.find(item => item.id === action.id);
      existingItem.quantity += 1;
      let newTotal = state.total + existingItem.price;
      return _objectSpread(_objectSpread({}, state), {}, {
        total: newTotal
      });

    case 'SUB_QUANTITY':
      let exItem = state.products.find(item => item.id === action.id);

      if (exItem.quantity === 1) {
        let new_items = state.cart.filter(item => item.id !== action.id);
        let newTotal = state.total - exItem.price;
        return _objectSpread(_objectSpread({}, state), {}, {
          cart: new_items,
          total: newTotal
        });
      } else {
        exItem.quantity -= 1;
        let newTotal = state.total - exItem.price;
        return _objectSpread(_objectSpread({}, state), {}, {
          total: newTotal
        });
      }

    case 'ADD_QUANTITY_WITH_NUMBER':
      let addedItemD = state.products.find(item => item.id === action.id); //check if the action id exists in the addedItems

      let existed_itemd = state.cart.find(item => action.id === item.id);

      if (existed_itemd) {
        addeaddedItemDdItem.quantity += action.qty;
        return _objectSpread(_objectSpread({}, state), {}, {
          total: state.total + addedItemD.price * action.qty
        });
      } else {
        addedItemD.quantity = action.qty; //calculating the total

        let newTotal = state.total + addedItemD.price * action.qty;
        return _objectSpread(_objectSpread({}, state), {}, {
          cart: [...state.cart, addedItemD],
          total: newTotal
        });
      }

    case 'REMOVE_ITEM':
      let itemToRemove = state.cart.find(item => action.id === item.id);
      let new_items = state.cart.filter(item => action.id !== item.id); //calculating the total

      let newTotalRemove = state.total - itemToRemove.price * itemToRemove.quantity;
      return _objectSpread(_objectSpread({}, state), {}, {
        cart: new_items,
        total: newTotalRemove
      });

    case 'RESET':
      return _objectSpread(_objectSpread({}, state), {}, {
        cart: []
      });

    default:
      return state;
  }
};

function initStore(preloadedState = initialState) {
  return (0,redux__WEBPACK_IMPORTED_MODULE_1__.createStore)(reducer, preloadedState, (0,redux_devtools_extension__WEBPACK_IMPORTED_MODULE_2__.composeWithDevTools)((0,redux__WEBPACK_IMPORTED_MODULE_1__.applyMiddleware)()));
}

const initializeStore = preloadedState => {
  var _store2;

  let _store = (_store2 = store) !== null && _store2 !== void 0 ? _store2 : initStore(preloadedState); // After navigating to a page with an initial Redux state, merge that state
  // with the current state in the store, and create a new store


  if (preloadedState && store) {
    _store = initStore(_objectSpread(_objectSpread({}, store.getState()), preloadedState)); // Reset the current store

    store = undefined;
  } // For SSG and SSR always create a new store


  if (true) return _store; // Create the store once in the client

  if (!store) store = _store;
  return _store;
};
function useStore(initialState) {
  const store = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(() => initializeStore(initialState), [initialState]);
  return store;
}

/***/ }),

/***/ "./node_modules/animate.css/animate.css":
/*!**********************************************!*\
  !*** ./node_modules/animate.css/animate.css ***!
  \**********************************************/
/***/ (function() {



/***/ }),

/***/ "./node_modules/react-accessible-accordion/dist/fancy-example.css":
/*!************************************************************************!*\
  !*** ./node_modules/react-accessible-accordion/dist/fancy-example.css ***!
  \************************************************************************/
/***/ (function() {



/***/ }),

/***/ "./public/css/bootstrap.min.css":
/*!**************************************!*\
  !*** ./public/css/bootstrap.min.css ***!
  \**************************************/
/***/ (function() {



/***/ }),

/***/ "./public/css/boxicons.min.css":
/*!*************************************!*\
  !*** ./public/css/boxicons.min.css ***!
  \*************************************/
/***/ (function() {



/***/ }),

/***/ "./public/css/flaticon.css":
/*!*********************************!*\
  !*** ./public/css/flaticon.css ***!
  \*********************************/
/***/ (function() {



/***/ }),

/***/ "./public/css/responsive.css":
/*!***********************************!*\
  !*** ./public/css/responsive.css ***!
  \***********************************/
/***/ (function() {



/***/ }),

/***/ "./public/css/slick.css":
/*!******************************!*\
  !*** ./public/css/slick.css ***!
  \******************************/
/***/ (function() {



/***/ }),

/***/ "./public/css/style.css":
/*!******************************!*\
  !*** ./public/css/style.css ***!
  \******************************/
/***/ (function() {



/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/***/ (function(module) {

"use strict";
module.exports = require("next/head");;

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ (function(module) {

"use strict";
module.exports = require("react");;

/***/ }),

/***/ "react-feather":
/*!********************************!*\
  !*** external "react-feather" ***!
  \********************************/
/***/ (function(module) {

"use strict";
module.exports = require("react-feather");;

/***/ }),

/***/ "react-redux":
/*!******************************!*\
  !*** external "react-redux" ***!
  \******************************/
/***/ (function(module) {

"use strict";
module.exports = require("react-redux");;

/***/ }),

/***/ "react-toast-notifications":
/*!********************************************!*\
  !*** external "react-toast-notifications" ***!
  \********************************************/
/***/ (function(module) {

"use strict";
module.exports = require("react-toast-notifications");;

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ (function(module) {

"use strict";
module.exports = require("react/jsx-dev-runtime");;

/***/ }),

/***/ "redux":
/*!************************!*\
  !*** external "redux" ***!
  \************************/
/***/ (function(module) {

"use strict";
module.exports = require("redux");;

/***/ }),

/***/ "redux-devtools-extension":
/*!*******************************************!*\
  !*** external "redux-devtools-extension" ***!
  \*******************************************/
/***/ (function(module) {

"use strict";
module.exports = require("redux-devtools-extension");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = (__webpack_exec__("./pages/_app.js"));
module.exports = __webpack_exports__;

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9zdGFydHAvLi9jb21wb25lbnRzL19BcHAvR29Ub3AuanMiLCJ3ZWJwYWNrOi8vc3RhcnRwLy4vY29tcG9uZW50cy9fQXBwL0xheW91dC5qcyIsIndlYnBhY2s6Ly9zdGFydHAvLi9wYWdlcy9fYXBwLmpzIiwid2VicGFjazovL3N0YXJ0cC8uL3Byb2R1Y3RzLmpzIiwid2VicGFjazovL3N0YXJ0cC8uL3N0b3JlLmpzIiwid2VicGFjazovL3N0YXJ0cC9leHRlcm5hbCBcIm5leHQvaGVhZFwiIiwid2VicGFjazovL3N0YXJ0cC9leHRlcm5hbCBcInJlYWN0XCIiLCJ3ZWJwYWNrOi8vc3RhcnRwL2V4dGVybmFsIFwicmVhY3QtZmVhdGhlclwiIiwid2VicGFjazovL3N0YXJ0cC9leHRlcm5hbCBcInJlYWN0LXJlZHV4XCIiLCJ3ZWJwYWNrOi8vc3RhcnRwL2V4dGVybmFsIFwicmVhY3QtdG9hc3Qtbm90aWZpY2F0aW9uc1wiIiwid2VicGFjazovL3N0YXJ0cC9leHRlcm5hbCBcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiIiwid2VicGFjazovL3N0YXJ0cC9leHRlcm5hbCBcInJlZHV4XCIiLCJ3ZWJwYWNrOi8vc3RhcnRwL2V4dGVybmFsIFwicmVkdXgtZGV2dG9vbHMtZXh0ZW5zaW9uXCIiXSwibmFtZXMiOlsiR29Ub3AiLCJzY3JvbGxTdGVwSW5QeCIsImRlbGF5SW5NcyIsInRoZVBvc2l0aW9uIiwic2V0VGhlUG9zaXRpb24iLCJSZWFjdCIsInRpbWVvdXRSZWYiLCJkb2N1bWVudCIsImFkZEV2ZW50TGlzdGVuZXIiLCJ3aW5kb3ciLCJzY3JvbGxZIiwib25TY3JvbGxTdGVwIiwicGFnZVlPZmZzZXQiLCJjbGVhckludGVydmFsIiwiY3VycmVudCIsInNjcm9sbCIsInNjcm9sbFRvVG9wIiwic2V0SW50ZXJ2YWwiLCJyZW5kZXJHb1RvcEljb24iLCJMYXlvdXQiLCJjaGlsZHJlbiIsIkFwcCIsIkNvbXBvbmVudCIsInBhZ2VQcm9wcyIsInN0b3JlIiwidXNlU3RvcmUiLCJpbml0aWFsUmVkdXhTdGF0ZSIsInByb2R1Y3RzRGF0YSIsImlkIiwibmFtZSIsInByaWNlIiwiZGVzYyIsImF2YWlsYWJpbGl0eSIsImltYWdlIiwiaW1hZ2VzIiwiaW1nIiwiaW5pdGlhbFN0YXRlIiwicHJvZHVjdHMiLCJjYXJ0IiwidG90YWwiLCJyZWR1Y2VyIiwic3RhdGUiLCJhY3Rpb24iLCJ0eXBlIiwiYWRkZWRJdGVtIiwiZmluZCIsIml0ZW0iLCJleGlzdGVkX2l0ZW0iLCJxdWFudGl0eSIsIm5ld1RvdGFsIiwiZXhpc3RpbmdJdGVtIiwiZXhJdGVtIiwibmV3X2l0ZW1zIiwiZmlsdGVyIiwiYWRkZWRJdGVtRCIsImV4aXN0ZWRfaXRlbWQiLCJhZGRlYWRkZWRJdGVtRGRJdGVtIiwicXR5IiwiaXRlbVRvUmVtb3ZlIiwibmV3VG90YWxSZW1vdmUiLCJpbml0U3RvcmUiLCJwcmVsb2FkZWRTdGF0ZSIsImNyZWF0ZVN0b3JlIiwiY29tcG9zZVdpdGhEZXZUb29scyIsImFwcGx5TWlkZGxld2FyZSIsImluaXRpYWxpemVTdG9yZSIsIl9zdG9yZSIsImdldFN0YXRlIiwidW5kZWZpbmVkIiwidXNlTWVtbyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7O0FBRUEsTUFBTUEsS0FBSyxHQUFHLENBQUM7QUFBQ0MsZ0JBQUQ7QUFBaUJDO0FBQWpCLENBQUQsS0FBaUM7QUFFM0MsUUFBTSxDQUFDQyxXQUFELEVBQWNDLGNBQWQsSUFBZ0NDLHFEQUFBLENBQWUsS0FBZixDQUF0QztBQUNBLFFBQU1DLFVBQVUsR0FBR0QsbURBQUEsQ0FBYSxJQUFiLENBQW5CO0FBRUFBLHdEQUFBLENBQWdCLE1BQU07QUFDbEJFLFlBQVEsQ0FBQ0MsZ0JBQVQsQ0FBMEIsUUFBMUIsRUFBb0MsTUFBTTtBQUN0QyxVQUFJQyxNQUFNLENBQUNDLE9BQVAsR0FBaUIsR0FBckIsRUFBMEI7QUFDdEJOLHNCQUFjLENBQUMsSUFBRCxDQUFkO0FBQ0gsT0FG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VyxZQUFsQixFQUFnQztBQUNyQyxRQUFNWixLQUFLLEdBQUc2Qyw4Q0FBTyxDQUFDLE1BQU1KLGVBQWUsQ0FBQzdCLFlBQUQsQ0FBdEIsRUFBc0MsQ0FBQ0EsWUFBRCxDQUF0QyxDQUFyQjtBQUNBLFNBQU9aLEtBQVA7QUFDRCxDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDL0lELHVDOzs7Ozs7Ozs7OztBQ0FBLG1DOzs7Ozs7Ozs7OztBQ0FBLDJDOzs7Ozs7Ozs7OztBQ0FBLHlDOzs7Ozs7Ozs7OztBQ0FBLHVEOzs7Ozs7Ozs7OztBQ0FBLG1EOzs7Ozs7Ozs7OztBQ0FBLG1DOzs7Ozs7Ozs7OztBQ0FBLHNEIiwiZmlsZSI6InBhZ2VzL19hcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0ICogYXMgSWNvbiBmcm9tICdyZWFjdC1mZWF0aGVyJztcblxuY29uc3QgR29Ub3AgPSAoe3Njcm9sbFN0ZXBJblB4LCBkZWxheUluTXN9KSA9PiB7XG5cbiAgICBjb25zdCBbdGhlUG9zaXRpb24sIHNldFRoZVBvc2l0aW9uXSA9IFJlYWN0LnVzZVN0YXRlKGZhbHNlKTtcbiAgICBjb25zdCB0aW1lb3V0UmVmID0gUmVhY3QudXNlUmVmKG51bGwpO1xuXG4gICAgUmVhY3QudXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcInNjcm9sbFwiLCAoKSA9PiB7XG4gICAgICAgICAgICBpZiAod2luZG93LnNjcm9sbFkgPiAxNzApIHtcbiAgICAgICAgICAgICAgICBzZXRUaGVQb3NpdGlvbih0cnVlKVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBzZXRUaGVQb3NpdGlvbihmYWxzZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH0sIFtdKVxuICAgIFxuICAgIGNvbnN0IG9uU2Nyb2xsU3RlcCA9ICgpID0+IHtcbiAgICAgICAgaWYgKHdpbmRvdy5wYWdlWU9mZnNldCA9PT0gMCl7XG4gICAgICAgICAgICBjbGVhckludGVydmFsKHRpbWVvdXRSZWYuY3VycmVudCk7XG4gICAgICAgIH1cbiAgICAgICAgd2luZG93LnNjcm9sbCgwLCB3aW5kb3cucGFnZVlPZmZzZXQgLSBzY3JvbGxTdGVwSW5QeCk7XG4gICAgfVxuXG4gICAgY29uc3Qgc2Nyb2xsVG9Ub3AgPSAoKSA9PiB7XG4gICAgICAgIHRpbWVvdXRSZWYuY3VycmVudCA9IHNldEludGVydmFsKG9uU2Nyb2xsU3RlcCwgZGVsYXlJbk1zKTtcbiAgICB9XG5cbiAgICBjb25zdCByZW5kZXJHb1RvcEljb24gPSAoKSA9PiB7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17YGdvLXRvcCAke3RoZVBvc2l0aW9uID8gJ2FjdGl2ZScgOiAnJ31gfSBvbkNsaWNrPXtzY3JvbGxUb1RvcH0+XG4gICAgICAgICAgICAgICAgPEljb24uQXJyb3dVcCAvPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIClcbiAgICB9XG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8UmVhY3QuRnJhZ21lbnQ+XG4gICAgICAgICAgICB7cmVuZGVyR29Ub3BJY29uKCl9XG4gICAgICAgIDwvUmVhY3QuRnJhZ21lbnQ+XG4gICAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBHb1RvcDsiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgSGVhZCBmcm9tIFwibmV4dC9oZWFkXCJcbmltcG9ydCBHb1RvcCBmcm9tICcuL0dvVG9wJ1xuIFxuY29uc3QgTGF5b3V0ID0gKHsgY2hpbGRyZW4gfSkgPT4ge1xuICAgIHJldHVybihcbiAgICAgICAgPD5cbiAgICAgICAgICAgIDxIZWFkPlxuICAgICAgICAgICAgICAgIDxtZXRhIGNoYXJTZXQ9XCJ1dGYtOFwiIC8+XG4gICAgICAgICAgICAgICAgPG1ldGEgbmFtZT1cInZpZXdwb3J0XCIgY29udGVudD1cIndpZHRoPWRldmljZS13aWR0aCwgaW5pdGlhbC1zY2FsZT0xXCIgLz5cbiAgICAgICAgICAgICAgICA8dGl0bGU+U3RhcnRQIC0gUmVhY3QgTmV4dCBJVCBTdGFydHVwcyAmIERpZ2l0YWwgU2VydmljZXMgVGVtcGxhdGU8L3RpdGxlPlxuICAgICAgICAgICAgPC9IZWFkPlxuICAgICAgICAgICAge2NoaWxkcmVufVxuXG4gICAgICAgICAgICA8R29Ub3Agc2Nyb2xsU3RlcEluUHg9XCIxMDBcIiBkZWxheUluTXM9XCIxMC41MFwiIC8+XG4gICAgICAgIDwvPlxuICAgIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgTGF5b3V0IiwiaW1wb3J0ICdAL3B1YmxpYy9jc3MvYm9vdHN0cmFwLm1pbi5jc3MnXG5pbXBvcnQgJ2FuaW1hdGUuY3NzJ1xuaW1wb3J0ICdAL3B1YmxpYy9jc3MvYm94aWNvbnMubWluLmNzcydcbmltcG9ydCAnQC9wdWJsaWMvY3NzL2ZsYXRpY29uLmNzcydcbmltcG9ydCBcIkAvcHVibGljL2Nzcy9zbGljay5jc3NcIlxuaW1wb3J0ICdyZWFjdC1hY2Nlc3NpYmxlLWFjY29yZGlvbi9kaXN0L2ZhbmN5LWV4YW1wbGUuY3NzJ1xuaW1wb3J0ICdAL3B1YmxpYy9jc3Mvc3R5bGUuY3NzJ1xuaW1wb3J0ICdAL3B1YmxpYy9jc3MvcmVzcG9uc2l2ZS5jc3MnXG5cbi8vIE11bHRpY29sb3IgaWYgeW91IHdhbnQgdGhpcyBjb2xvciBjb21tZW50IG91dCBcbi8vIGltcG9ydCAnQC9wdWJsaWMvY3NzL2NvbG9ycy9icmluay1waW5rLXN0eWxlLmNzcydcbi8vIGltcG9ydCAnQC9wdWJsaWMvY3NzL2NvbG9ycy9waW5rLXN0eWxlLmNzcydcbi8vIGltcG9ydCAnQC9wdWJsaWMvY3NzL2NvbG9ycy9wdXJwbGUtc3R5bGUuY3NzJyAgXG5cbmltcG9ydCBMYXlvdXQgZnJvbSAnQC9jb21wb25lbnRzL19BcHAvTGF5b3V0J1xuaW1wb3J0IHsgUHJvdmlkZXIgfSBmcm9tICdyZWFjdC1yZWR1eCdcbmltcG9ydCB7IFRvYXN0UHJvdmlkZXIgfSBmcm9tICdyZWFjdC10b2FzdC1ub3RpZmljYXRpb25zJ1xuaW1wb3J0IHsgdXNlU3RvcmUgfSBmcm9tICcuLi9zdG9yZSdcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQXBwKHsgQ29tcG9uZW50LCBwYWdlUHJvcHMgfSkge1xuICAgIGNvbnN0IHN0b3JlID0gdXNlU3RvcmUocGFnZVByb3BzLmluaXRpYWxSZWR1eFN0YXRlKVxuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPFRvYXN0UHJvdmlkZXIgXG4gICAgICAgICAgICBwbGFjZW1lbnQgPSBcImJvdHRvbS1sZWZ0XCJcbiAgICAgICAgICAgIGF1dG9EaXNtaXNzVGltZW91dD17NjAwMH1cbiAgICAgICAgICAgIGF1dG9EaXNtaXNzXG4gICAgICAgID5cbiAgICAgICAgICAgIDxQcm92aWRlciBzdG9yZT17c3RvcmV9PlxuICAgICAgICAgICAgICAgIDxMYXlvdXQgLz5cbiAgICAgICAgICAgICAgICA8Q29tcG9uZW50IHsuLi5wYWdlUHJvcHN9IC8+XG4gICAgICAgICAgICA8L1Byb3ZpZGVyPlxuICAgICAgICA8L1RvYXN0UHJvdmlkZXI+XG4gICAgKVxufVxuIiwiZXhwb3J0IGNvbnN0IHByb2R1Y3RzRGF0YSA9IFtcbiAgICB7XG4gICAgICAgIGlkOiAnd29vZC1wZW5jaWwnLFxuICAgICAgICBuYW1lOiAnV29vZCBQZW5jaWwnLFxuICAgICAgICBwcmljZTogMTkuOTksXG4gICAgICAgIGRlc2M6IFwiVGhlcmUgYXJlIG1hbnkgdmFyaWF0aW9ucyBvZiBwYXNzYWdlcyBvZiBMb3JlbSBJcHN1bSBhdmFpbGFibGUsIGJ1dCB0aGUgbWFqb3JpdHkgaGF2ZSBzdWZmZXJlZCBhbHRlcmF0aW9uIGluIHNvbWUgZm9ybSwgYnkgaW5qZWN0ZWQgaHVtb3VyLCBvciByYW5kb21pc2VkIHdvcmRzIHdoaWNoIGRvbid0IGxvb2sgZXZlbiBzbGlnaHRseSBiZWxpZXZhYmxlLlwiLFxuICAgICAgICBhdmFpbGFiaWxpdHk6ICdJbiBTdG9jaycsXG4gICAgICAgIGltYWdlOiAnL2ltYWdlcy9zaG9wLWltYWdlL3Nob3AtaW1hZ2UxLmpwZycsXG4gICAgICAgIGltYWdlczogW1xuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGlkOiAxLFxuICAgICAgICAgICAgICAgIGltZzogJy9pbWFnZXMvc2hvcC1pbWFnZS9zaG9wLWltYWdlMS5qcGcnXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGlkOiAyLFxuICAgICAgICAgICAgICAgIGltZzogJy9pbWFnZXMvc2hvcC1pbWFnZS9zaG9wLWltYWdlMS5qcGcnXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGlkOiAzLFxuICAgICAgICAgICAgICAgIGltZzogJy9pbWFnZXMvc2hvcC1pbWFnZS9zaG9wLWltYWdlMS5qcGcnXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGlkOiA0LFxuICAgICAgICAgICAgICAgIGltZzogJy9pbWFnZXMvc2hvcC1pbWFnZS9zaG9wLWltYWdlMS5qcGcnXG4gICAgICAgICAgICB9LFxuICAgICAgICBdXG4gICAgfSxcbiAgICB7XG4gICAgICAgIGlkOiAndC1zaGlydCcsXG4gICAgICAgIG5hbWU6ICdULVNoaXJ0JyxcbiAgICAgICAgcHJpY2U6IDIyLjk5LFxuICAgICAgICBkZXNjOiBcIlRoZXJlIGFyZSBtYW55IHZhcmlhdGlvbnMgb2YgcGFzc2FnZXMgb2YgTG9yZW0gSXBzdW0gYXZhaWxhYmxlLCBidXQgdGhlIG1ham9yaXR5IGhhdmUgc3VmZmVyZWQgYWx0ZXJhdGlvbiBpbiBzb21lIGZvcm0sIGJ5IGluamVjdGVkIGh1bW91ciwgb3IgcmFuZG9taXNlZCB3b3JkcyB3aGljaCBkb24ndCBsb29rIGV2ZW4gc2xpZ2h0bHkgYmVsaWV2YWJsZS5cIixcbiAgICAgICAgYXZhaWxhYmlsaXR5OiAnSW4gU3RvY2snLFxuICAgICAgICBpbWFnZTogJy9pbWFnZXMvc2hvcC1pbWFnZS9zaG9wLWltYWdlMi5qcGcnLFxuICAgICAgICBpbWFnZXM6IFtcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBpZDogMSxcbiAgICAgICAgICAgICAgICBpbWc6ICcvaW1hZ2VzL3Nob3AtaW1hZ2Uvc2hvcC1pbWFnZTEuanBnJ1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBpZDogMixcbiAgICAgICAgICAgICAgICBpbWc6ICcvaW1hZ2VzL3Nob3AtaW1hZ2Uvc2hvcC1pbWFnZTIuanBnJ1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBpZDogMyxcbiAgICAgICAgICAgICAgICBpbWc6ICcvaW1hZ2VzL3Nob3AtaW1hZ2Uvc2hvcC1pbWFnZTEuanBnJ1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBpZDogNCxcbiAgICAgICAgICAgICAgICBpbWc6ICcvaW1hZ2VzL3Nob3AtaW1hZ2Uvc2hvcC1pbWFnZTIuanBnJ1xuICAgICAgICAgICAgfSxcbiAgICAgICAgXVxuICAgIH0sXG4gICAge1xuICAgICAgICBpZDogJ2Nhc3VhbC1zaG9lJyxcbiAgICAgICAgbmFtZTogJ0Nhc3VhbCBTaG9lJyxcbiAgICAgICAgcHJpY2U6IDMxLjk5LFxuICAgICAgICBkZXNjOiBcIlRoZXJlIGFyZSBtYW55IHZhcmlhdGlvbnMgb2YgcGFzc2FnZXMgb2YgTG9yZW0gSXBzdW0gYXZhaWxhYmxlLCBidXQgdGhlIG1ham9yaXR5IGhhdmUgc3VmZmVyZWQgYWx0ZXJhdGlvbiBpbiBzb21lIGZvcm0sIGJ5IGluamVjdGVkIGh1bW91ciwgb3IgcmFuZG9taXNlZCB3b3JkcyB3aGljaCBkb24ndCBsb29rIGV2ZW4gc2xpZ2h0bHkgYmVsaWV2YWJsZS5cIixcbiAgICAgICAgYXZhaWxhYmlsaXR5OiAnSW4gU3RvY2snLFxuICAgICAgICBpbWFnZTogJy9pbWFnZXMvc2hvcC1pbWFnZS9zaG9wLWltYWdlMy5qcGcnLFxuICAgICAgICBpbWFnZXM6IFtcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBpZDogMSxcbiAgICAgICAgICAgICAgICBpbWc6ICcvaW1hZ2VzL3Nob3AtaW1hZ2Uvc2hvcC1pbWFnZTMuanBnJ1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBpZDogMixcbiAgICAgICAgICAgICAgICBpbWc6ICcvaW1hZ2VzL3Nob3AtaW1hZ2Uvc2hvcC1pbWFnZTIuanBnJ1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBpZDogMyxcbiAgICAgICAgICAgICAgICBpbWc6ICcvaW1hZ2VzL3Nob3AtaW1hZ2Uvc2hvcC1pbWFnZTEuanBnJ1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBpZDogNCxcbiAgICAgICAgICAgICAgICBpbWc6ICcvaW1hZ2VzL3Nob3AtaW1hZ2Uvc2hvcC1pbWFnZTIuanBnJ1xuICAgICAgICAgICAgfSxcbiAgICAgICAgXVxuICAgIH0sXG4gICAge1xuICAgICAgICBpZDogJ2NvZmZlZS1iYWcnLFxuICAgICAgICBuYW1lOiAnQ29mZmVlIEJhZycsXG4gICAgICAgIHByaWNlOiA0Ljk5LFxuICAgICAgICBkZXNjOiBcIlRoZXJlIGFyZSBtYW55IHZhcmlhdGlvbnMgb2YgcGFzc2FnZXMgb2YgTG9yZW0gSXBzdW0gYXZhaWxhYmxlLCBidXQgdGhlIG1ham9yaXR5IGhhdmUgc3VmZmVyZWQgYWx0ZXJhdGlvbiBpbiBzb21lIGZvcm0sIGJ5IGluamVjdGVkIGh1bW91ciwgb3IgcmFuZG9taXNlZCB3b3JkcyB3aGljaCBkb24ndCBsb29rIGV2ZW4gc2xpZ2h0bHkgYmVsaWV2YWJsZS5cIixcbiAgICAgICAgYXZhaWxhYmlsaXR5OiAnSW4gU3RvY2snLFxuICAgICAgICBpbWFnZTogJy9pbWFnZXMvc2hvcC1pbWFnZS9zaG9wLWltYWdlNC5qcGcnLFxuICAgICAgICBpbWFnZXM6IFtcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBpZDogMSxcbiAgICAgICAgICAgICAgICBpbWc6ICcvaW1hZ2VzL3Nob3AtaW1hZ2Uvc2hvcC1pbWFnZTQuanBnJ1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBpZDogMixcbiAgICAgICAgICAgICAgICBpbWc6ICcvaW1hZ2VzL3Nob3AtaW1hZ2Uvc2hvcC1pbWFnZTIuanBnJ1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBpZDogMyxcbiAgICAgICAgICAgICAgICBpbWc6ICcvaW1hZ2VzL3Nob3AtaW1hZ2Uvc2hvcC1pbWFnZTEuanBnJ1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBpZDogNCxcbiAgICAgICAgICAgICAgICBpbWc6ICcvaW1hZ2VzL3Nob3AtaW1hZ2Uvc2hvcC1pbWFnZTQuanBnJ1xuICAgICAgICAgICAgfSxcbiAgICAgICAgXVxuICAgIH0sXG4gICAge1xuICAgICAgICBpZDogJ3NpbmdsZS1jaGFpcicsXG4gICAgICAgIG5hbWU6ICdTaW5nbGUgQ2hhaXInLFxuICAgICAgICBwcmljZTogMTQ5Ljk5LFxuICAgICAgICBkZXNjOiBcIlRoZXJlIGFyZSBtYW55IHZhcmlhdGlvbnMgb2YgcGFzc2FnZXMgb2YgTG9yZW0gSXBzdW0gYXZhaWxhYmxlLCBidXQgdGhlIG1ham9yaXR5IGhhdmUgc3VmZmVyZWQgYWx0ZXJhdGlvbiBpbiBzb21lIGZvcm0sIGJ5IGluamVjdGVkIGh1bW91ciwgb3IgcmFuZG9taXNlZCB3b3JkcyB3aGljaCBkb24ndCBsb29rIGV2ZW4gc2xpZ2h0bHkgYmVsaWV2YWJsZS5cIixcbiAgICAgICAgYXZhaWxhYmlsaXR5OiAnSW4gU3RvY2snLFxuICAgICAgICBpbWFnZTogJy9pbWFnZXMvc2hvcC1pbWFnZS9zaG9wLWltYWdlNS5qcGcnLFxuICAgICAgICBpbWFnZXM6IFtcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBpZDogMSxcbiAgICAgICAgICAgICAgICBpbWc6ICcvaW1hZ2VzL3Nob3AtaW1hZ2Uvc2hvcC1pbWFnZTUuanBnJ1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBpZDogMixcbiAgICAgICAgICAgICAgICBpbWc6ICcvaW1hZ2VzL3Nob3AtaW1hZ2Uvc2hvcC1pbWFnZTIuanBnJ1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBpZDogMyxcbiAgICAgICAgICAgICAgICBpbWc6ICcvaW1hZ2VzL3Nob3AtaW1hZ2Uvc2hvcC1pbWFnZTEuanBnJ1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBpZDogNCxcbiAgICAgICAgICAgICAgICBpbWc6ICcvaW1hZ2VzL3Nob3AtaW1hZ2Uvc2hvcC1pbWFnZTQuanBnJ1xuICAgICAgICAgICAgfSxcbiAgICAgICAgXVxuICAgIH0sXG4gICAge1xuICAgICAgICBpZDogJ2J1c2luZXNzLWNhcmQnLFxuICAgICAgICBuYW1lOiAnQnVzaW5lc3MgQ2FyZCcsXG4gICAgICAgIHByaWNlOiAxLjk5LFxuICAgICAgICBkZXNjOiBcIlRoZXJlIGFyZSBtYW55IHZhcmlhdGlvbnMgb2YgcGFzc2FnZXMgb2YgTG9yZW0gSXBzdW0gYXZhaWxhYmxlLCBidXQgdGhlIG1ham9yaXR5IGhhdmUgc3VmZmVyZWQgYWx0ZXJhdGlvbiBpbiBzb21lIGZvcm0sIGJ5IGluamVjdGVkIGh1bW91ciwgb3IgcmFuZG9taXNlZCB3b3JkcyB3aGljaCBkb24ndCBsb29rIGV2ZW4gc2xpZ2h0bHkgYmVsaWV2YWJsZS5cIixcbiAgICAgICAgYXZhaWxhYmlsaXR5OiAnSW4gU3RvY2snLFxuICAgICAgICBpbWFnZTogJy9pbWFnZXMvc2hvcC1pbWFnZS9zaG9wLWltYWdlNi5qcGcnLFxuICAgICAgICBpbWFnZXM6IFtcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBpZDogMSxcbiAgICAgICAgICAgICAgICBpbWc6ICcvaW1hZ2VzL3Nob3AtaW1hZ2Uvc2hvcC1pbWFnZTYuanBnJ1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBpZDogMixcbiAgICAgICAgICAgICAgICBpbWc6ICcvaW1hZ2VzL3Nob3AtaW1hZ2Uvc2hvcC1pbWFnZTIuanBnJ1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBpZDogMyxcbiAgICAgICAgICAgICAgICBpbWc6ICcvaW1hZ2VzL3Nob3AtaW1hZ2Uvc2hvcC1pbWFnZTEuanBnJ1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBpZDogNCxcbiAgICAgICAgICAgICAgICBpbWc6ICcvaW1hZ2VzL3Nob3AtaW1hZ2Uvc2hvcC1pbWFnZTQuanBnJ1xuICAgICAgICAgICAgfSxcbiAgICAgICAgXVxuICAgIH0sXG4gICAge1xuICAgICAgICBpZDogJ2Jvb2stY292ZXInLFxuICAgICAgICBuYW1lOiAnQm9vayBDb3ZlcicsXG4gICAgICAgIHByaWNlOiAzLjk5LFxuICAgICAgICBkZXNjOiBcIlRoZXJlIGFyZSBtYW55IHZhcmlhdGlvbnMgb2YgcGFzc2FnZXMgb2YgTG9yZW0gSXBzdW0gYXZhaWxhYmxlLCBidXQgdGhlIG1ham9yaXR5IGhhdmUgc3VmZmVyZWQgYWx0ZXJhdGlvbiBpbiBzb21lIGZvcm0sIGJ5IGluamVjdGVkIGh1bW91ciwgb3IgcmFuZG9taXNlZCB3b3JkcyB3aGljaCBkb24ndCBsb29rIGV2ZW4gc2xpZ2h0bHkgYmVsaWV2YWJsZS5cIixcbiAgICAgICAgYXZhaWxhYmlsaXR5OiAnSW4gU3RvY2snLFxuICAgICAgICBpbWFnZTogJy9pbWFnZXMvc2hvcC1pbWFnZS9zaG9wLWltYWdlNy5qcGcnLFxuICAgICAgICBpbWFnZXM6IFtcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBpZDogMSxcbiAgICAgICAgICAgICAgICBpbWc6ICcvaW1hZ2VzL3Nob3AtaW1hZ2Uvc2hvcC1pbWFnZTcuanBnJ1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBpZDogMixcbiAgICAgICAgICAgICAgICBpbWc6ICcvaW1hZ2VzL3Nob3AtaW1hZ2Uvc2hvcC1pbWFnZTIuanBnJ1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBpZDogMyxcbiAgICAgICAgICAgICAgICBpbWc6ICcvaW1hZ2VzL3Nob3AtaW1hZ2Uvc2hvcC1pbWFnZTEuanBnJ1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBpZDogNCxcbiAgICAgICAgICAgICAgICBpbWc6ICcvaW1hZ2VzL3Nob3AtaW1hZ2Uvc2hvcC1pbWFnZTQuanBnJ1xuICAgICAgICAgICAgfSxcbiAgICAgICAgXVxuICAgIH0sXG4gICAge1xuICAgICAgICBpZDogJ3dhbGwtd2F0Y2gnLFxuICAgICAgICBuYW1lOiAnV2FsbCBXYXRjaCcsXG4gICAgICAgIHByaWNlOiA5Ljk5LFxuICAgICAgICBkZXNjOiBcIlRoZXJlIGFyZSBtYW55IHZhcmlhdGlvbnMgb2YgcGFzc2FnZXMgb2YgTG9yZW0gSXBzdW0gYXZhaWxhYmxlLCBidXQgdGhlIG1ham9yaXR5IGhhdmUgc3VmZmVyZWQgYWx0ZXJhdGlvbiBpbiBzb21lIGZvcm0sIGJ5IGluamVjdGVkIGh1bW91ciwgb3IgcmFuZG9taXNlZCB3b3JkcyB3aGljaCBkb24ndCBsb29rIGV2ZW4gc2xpZ2h0bHkgYmVsaWV2YWJsZS5cIixcbiAgICAgICAgYXZhaWxhYmlsaXR5OiAnSW4gU3RvY2snLFxuICAgICAgICBpbWFnZTogJy9pbWFnZXMvc2hvcC1pbWFnZS9zaG9wLWltYWdlOC5qcGcnLFxuICAgICAgICBpbWFnZXM6IFtcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBpZDogMSxcbiAgICAgICAgICAgICAgICBpbWc6ICcvaW1hZ2VzL3Nob3AtaW1hZ2Uvc2hvcC1pbWFnZTguanBnJ1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBpZDogMixcbiAgICAgICAgICAgICAgICBpbWc6ICcvaW1hZ2VzL3Nob3AtaW1hZ2Uvc2hvcC1pbWFnZTIuanBnJ1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBpZDogMyxcbiAgICAgICAgICAgICAgICBpbWc6ICcvaW1hZ2VzL3Nob3AtaW1hZ2Uvc2hvcC1pbWFnZTEuanBnJ1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBpZDogNCxcbiAgICAgICAgICAgICAgICBpbWc6ICcvaW1hZ2VzL3Nob3AtaW1hZ2Uvc2hvcC1pbWFnZTQuanBnJ1xuICAgICAgICAgICAgfSxcbiAgICAgICAgXVxuICAgIH0sXG5dIiwiaW1wb3J0IHsgdXNlTWVtbyB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgY3JlYXRlU3RvcmUsIGFwcGx5TWlkZGxld2FyZSB9IGZyb20gJ3JlZHV4J1xuaW1wb3J0IHsgY29tcG9zZVdpdGhEZXZUb29scyB9IGZyb20gJ3JlZHV4LWRldnRvb2xzLWV4dGVuc2lvbidcbmltcG9ydCB7IHByb2R1Y3RzRGF0YSB9IGZyb20gJy4vcHJvZHVjdHMnXG5cbmxldCBzdG9yZVxuXG5jb25zdCBpbml0aWFsU3RhdGUgPSB7XG4gIHByb2R1Y3RzOiBwcm9kdWN0c0RhdGEsXG4gIGNhcnQ6IFtdLFxuICB0b3RhbDogMCxcbn1cblxuY29uc3QgcmVkdWNlciA9IChzdGF0ZSA9IGluaXRpYWxTdGF0ZSwgYWN0aW9uKSA9PiB7XG4gIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcbiAgICBjYXNlICdBRERfVE9fQ0FSVCc6XG4gICAgICBsZXQgYWRkZWRJdGVtID0gc3RhdGUucHJvZHVjdHMuZmluZChpdGVtID0+IGl0ZW0uaWQgPT09IGFjdGlvbi5pZClcbiAgICAgIGxldCBleGlzdGVkX2l0ZW0gPSBzdGF0ZS5jYXJ0LmZpbmQoaXRlbSA9PiBhY3Rpb24uaWQgPT09IGl0ZW0uaWQpXG5cbiAgICAgIGlmKGV4aXN0ZWRfaXRlbSl7XG4gICAgICAgIGFkZGVkSXRlbS5xdWFudGl0eSArPSAxXG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgICAgdG90YWw6IHN0YXRlLnRvdGFsICsgYWRkZWRJdGVtLnByaWNlXG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGFkZGVkSXRlbS5xdWFudGl0eSA9IDFcbiAgICAgICAgbGV0IG5ld1RvdGFsID0gc3RhdGUudG90YWwgKyBhZGRlZEl0ZW0ucHJpY2VcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgICBjYXJ0OiBbLi4uc3RhdGUuY2FydCwgYWRkZWRJdGVtXSxcbiAgICAgICAgICB0b3RhbDogbmV3VG90YWxcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgY2FzZSAnQUREX1FVQU5USVRZJzpcbiAgICAgIGxldCBleGlzdGluZ0l0ZW0gPSBzdGF0ZS5jYXJ0LmZpbmQoaXRlbSA9PiBpdGVtLmlkID09PSBhY3Rpb24uaWQpXG4gICAgICBleGlzdGluZ0l0ZW0ucXVhbnRpdHkgKz0gMVxuICAgICAgbGV0IG5ld1RvdGFsID0gc3RhdGUudG90YWwgKyBleGlzdGluZ0l0ZW0ucHJpY2VcbiAgICAgIHJldHVybiB7XG4gICAgICAgIC4uLnN0YXRlLFxuICAgICAgICB0b3RhbDogbmV3VG90YWxcbiAgICAgIH1cblxuICAgIGNhc2UgJ1NVQl9RVUFOVElUWSc6XG4gICAgICAgIGxldCBleEl0ZW0gPSBzdGF0ZS5wcm9kdWN0cy5maW5kKGl0ZW09PiBpdGVtLmlkID09PSBhY3Rpb24uaWQpXG4gICAgICAgIGlmKGV4SXRlbS5xdWFudGl0eSA9PT0gMSl7XG4gICAgICAgICAgbGV0IG5ld19pdGVtcyA9IHN0YXRlLmNhcnQuZmlsdGVyKGl0ZW09Pml0ZW0uaWQgIT09IGFjdGlvbi5pZClcbiAgICAgICAgICBsZXQgbmV3VG90YWwgPSBzdGF0ZS50b3RhbCAtIGV4SXRlbS5wcmljZVxuICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgIC4uLnN0YXRlLFxuICAgICAgICAgICAgICBjYXJ0OiBuZXdfaXRlbXMsXG4gICAgICAgICAgICAgIHRvdGFsOiBuZXdUb3RhbFxuICAgICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGV4SXRlbS5xdWFudGl0eSAtPSAxXG4gICAgICAgIGxldCBuZXdUb3RhbCA9IHN0YXRlLnRvdGFsIC0gZXhJdGVtLnByaWNlXG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgICAgdG90YWw6IG5ld1RvdGFsXG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgIGNhc2UgJ0FERF9RVUFOVElUWV9XSVRIX05VTUJFUic6XG4gICAgICAgIGxldCBhZGRlZEl0ZW1EID0gc3RhdGUucHJvZHVjdHMuZmluZChpdGVtID0+IGl0ZW0uaWQgPT09IGFjdGlvbi5pZClcbiAgICAgICAgLy9jaGVjayBpZiB0aGUgYWN0aW9uIGlkIGV4aXN0cyBpbiB0aGUgYWRkZWRJdGVtc1xuICAgICAgICBsZXQgZXhpc3RlZF9pdGVtZCA9IHN0YXRlLmNhcnQuZmluZChpdGVtPT4gYWN0aW9uLmlkID09PSBpdGVtLmlkKVxuICAgICAgICBpZihleGlzdGVkX2l0ZW1kKVxuICAgICAgICB7XG4gICAgICAgICAgICBhZGRlYWRkZWRJdGVtRGRJdGVtLnF1YW50aXR5ICs9IGFjdGlvbi5xdHlcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgICAgICAgICAgdG90YWw6IHN0YXRlLnRvdGFsICsgYWRkZWRJdGVtRC5wcmljZSAqIGFjdGlvbi5xdHlcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGFkZGVkSXRlbUQucXVhbnRpdHkgPSBhY3Rpb24ucXR5O1xuICAgICAgICAgICAgLy9jYWxjdWxhdGluZyB0aGUgdG90YWxcbiAgICAgICAgICAgIGxldCBuZXdUb3RhbCA9IHN0YXRlLnRvdGFsICsgYWRkZWRJdGVtRC5wcmljZSAqIGFjdGlvbi5xdHlcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgICAgICAgICBjYXJ0OiBbLi4uc3RhdGUuY2FydCwgYWRkZWRJdGVtRF0sXG4gICAgICAgICAgICAgICAgdG90YWwgOiBuZXdUb3RhbFxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgXG4gICAgICAgIH1cblxuICAgIGNhc2UgJ1JFTU9WRV9JVEVNJzpcbiAgICAgIGxldCBpdGVtVG9SZW1vdmUgPSBzdGF0ZS5jYXJ0LmZpbmQoaXRlbT0+IGFjdGlvbi5pZCA9PT0gaXRlbS5pZClcbiAgICAgIGxldCBuZXdfaXRlbXMgPSBzdGF0ZS5jYXJ0LmZpbHRlcihpdGVtPT4gYWN0aW9uLmlkICE9PSBpdGVtLmlkKVxuICAgICAgICBcbiAgICAgIC8vY2FsY3VsYXRpbmcgdGhlIHRvdGFsXG4gICAgICBsZXQgbmV3VG90YWxSZW1vdmUgPSBzdGF0ZS50b3RhbCAtIChpdGVtVG9SZW1vdmUucHJpY2UgKiBpdGVtVG9SZW1vdmUucXVhbnRpdHkgKTtcblxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgICBjYXJ0OiBuZXdfaXRlbXMsXG4gICAgICAgICAgdG90YWw6IG5ld1RvdGFsUmVtb3ZlXG4gICAgICB9XG5cbiAgICBjYXNlICdSRVNFVCc6XG4gICAgICByZXR1cm4ge1xuICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgY2FydDogW10sXG4gICAgICB9XG4gICAgZGVmYXVsdDpcbiAgICAgIHJldHVybiBzdGF0ZVxuICB9XG59XG5cbmZ1bmN0aW9uIGluaXRTdG9yZShwcmVsb2FkZWRTdGF0ZSA9IGluaXRpYWxTdGF0ZSkge1xuICByZXR1cm4gY3JlYXRlU3RvcmUoXG4gICAgcmVkdWNlcixcbiAgICBwcmVsb2FkZWRTdGF0ZSxcbiAgICBjb21wb3NlV2l0aERldlRvb2xzKGFwcGx5TWlkZGxld2FyZSgpKVxuICApXG59XG5cbmV4cG9ydCBjb25zdCBpbml0aWFsaXplU3RvcmUgPSAocHJlbG9hZGVkU3RhdGUpID0+IHtcbiAgbGV0IF9zdG9yZSA9IHN0b3JlID8/IGluaXRTdG9yZShwcmVsb2FkZWRTdGF0ZSlcblxuICAvLyBBZnRlciBuYXZpZ2F0aW5nIHRvIGEgcGFnZSB3aXRoIGFuIGluaXRpYWwgUmVkdXggc3RhdGUsIG1lcmdlIHRoYXQgc3RhdGVcbiAgLy8gd2l0aCB0aGUgY3VycmVudCBzdGF0ZSBpbiB0aGUgc3RvcmUsIGFuZCBjcmVhdGUgYSBuZXcgc3RvcmVcbiAgaWYgKHByZWxvYWRlZFN0YXRlICYmIHN0b3JlKSB7XG4gICAgX3N0b3JlID0gaW5pdFN0b3JlKHtcbiAgICAgIC4uLnN0b3JlLmdldFN0YXRlKCksXG4gICAgICAuLi5wcmVsb2FkZWRTdGF0ZSxcbiAgICB9KVxuICAgIC8vIFJlc2V0IHRoZSBjdXJyZW50IHN0b3JlXG4gICAgc3RvcmUgPSB1bmRlZmluZWRcbiAgfVxuXG4gIC8vIEZvciBTU0cgYW5kIFNTUiBhbHdheXMgY3JlYXRlIGEgbmV3IHN0b3JlXG4gIGlmICh0eXBlb2Ygd2luZG93ID09PSAndW5kZWZpbmVkJykgcmV0dXJuIF9zdG9yZVxuICAvLyBDcmVhdGUgdGhlIHN0b3JlIG9uY2UgaW4gdGhlIGNsaWVudFxuICBpZiAoIXN0b3JlKSBzdG9yZSA9IF9zdG9yZVxuXG4gIHJldHVybiBfc3RvcmVcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHVzZVN0b3JlKGluaXRpYWxTdGF0ZSkge1xuICBjb25zdCBzdG9yZSA9IHVzZU1lbW8oKCkgPT4gaW5pdGlhbGl6ZVN0b3JlKGluaXRpYWxTdGF0ZSksIFtpbml0aWFsU3RhdGVdKVxuICByZXR1cm4gc3RvcmVcbn1cbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvaGVhZFwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3RcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LWZlYXRoZXJcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LXJlZHV4XCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC10b2FzdC1ub3RpZmljYXRpb25zXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlZHV4XCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWR1eC1kZXZ0b29scy1leHRlbnNpb25cIik7OyJdLCJzb3VyY2VSb290IjoiIn0=