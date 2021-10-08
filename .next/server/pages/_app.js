(function() {
var exports = {};
exports.id = 2888;
exports.ids = [2888];
exports.modules = {

/***/ 2706:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* binding */ App; }
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(5282);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(9297);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);
;// CONCATENATED MODULE: external "next/head"
var head_namespaceObject = require("next/head");;
var head_default = /*#__PURE__*/__webpack_require__.n(head_namespaceObject);
// EXTERNAL MODULE: external "react-feather"
var external_react_feather_ = __webpack_require__(9337);
;// CONCATENATED MODULE: ./components/_App/GoTop.js




const GoTop = ({
  scrollStepInPx,
  delayInMs
}) => {
  const [thePosition, setThePosition] = external_react_default().useState(false);
  const timeoutRef = external_react_default().useRef(null);
  external_react_default().useEffect(() => {
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
    return /*#__PURE__*/jsx_runtime_.jsx("div", {
      className: `go-top ${thePosition ? 'active' : ''}`,
      onClick: scrollToTop,
      children: /*#__PURE__*/jsx_runtime_.jsx(external_react_feather_.ArrowUp, {})
    });
  };

  return /*#__PURE__*/jsx_runtime_.jsx((external_react_default()).Fragment, {
    children: renderGoTopIcon()
  });
};

/* harmony default export */ var _App_GoTop = (GoTop);
;// CONCATENATED MODULE: ./components/_App/Layout.js







const Layout = ({
  children
}) => {
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
    children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)((head_default()), {
      children: [/*#__PURE__*/jsx_runtime_.jsx("meta", {
        charSet: "utf-8"
      }), /*#__PURE__*/jsx_runtime_.jsx("meta", {
        name: "viewport",
        content: "width=device-width, initial-scale=1"
      }), /*#__PURE__*/jsx_runtime_.jsx("title", {
        children: "StartP - React Next IT Startups & Digital Services Template"
      })]
    }), children, /*#__PURE__*/jsx_runtime_.jsx(_App_GoTop, {
      scrollStepInPx: "100",
      delayInMs: "10.50"
    })]
  });
};

/* harmony default export */ var _App_Layout = (Layout);
// EXTERNAL MODULE: external "react-redux"
var external_react_redux_ = __webpack_require__(79);
// EXTERNAL MODULE: external "react-toast-notifications"
var external_react_toast_notifications_ = __webpack_require__(9614);
;// CONCATENATED MODULE: external "redux"
var external_redux_namespaceObject = require("redux");;
;// CONCATENATED MODULE: external "redux-devtools-extension"
var external_redux_devtools_extension_namespaceObject = require("redux-devtools-extension");;
;// CONCATENATED MODULE: ./products.js
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
;// CONCATENATED MODULE: ./store.js
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }





let store;
const initialState = {
  products: productsData,
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
  return (0,external_redux_namespaceObject.createStore)(reducer, preloadedState, (0,external_redux_devtools_extension_namespaceObject.composeWithDevTools)((0,external_redux_namespaceObject.applyMiddleware)()));
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
  const store = (0,external_react_.useMemo)(() => initializeStore(initialState), [initialState]);
  return store;
}
;// CONCATENATED MODULE: ./pages/_app.js



function _app_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _app_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { _app_ownKeys(Object(source), true).forEach(function (key) { _app_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { _app_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _app_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }








 // Multicolor if you want this color comment out 
// import '@/public/css/colors/brink-pink-style.css'
// import '@/public/css/colors/pink-style.css'
// import '@/public/css/colors/purple-style.css'  





function App({
  Component,
  pageProps
}) {
  const store = useStore(pageProps.initialReduxState);
  return /*#__PURE__*/jsx_runtime_.jsx(external_react_toast_notifications_.ToastProvider, {
    placement: "bottom-left",
    autoDismissTimeout: 6000,
    autoDismiss: true,
    children: /*#__PURE__*/(0,jsx_runtime_.jsxs)(external_react_redux_.Provider, {
      store: store,
      children: [/*#__PURE__*/jsx_runtime_.jsx(_App_Layout, {}), /*#__PURE__*/jsx_runtime_.jsx(Component, _app_objectSpread({}, pageProps))]
    })
  });
}

/***/ }),

/***/ 9297:
/***/ (function(module) {

"use strict";
module.exports = require("react");;

/***/ }),

/***/ 9337:
/***/ (function(module) {

"use strict";
module.exports = require("react-feather");;

/***/ }),

/***/ 79:
/***/ (function(module) {

"use strict";
module.exports = require("react-redux");;

/***/ }),

/***/ 9614:
/***/ (function(module) {

"use strict";
module.exports = require("react-toast-notifications");;

/***/ }),

/***/ 5282:
/***/ (function(module) {

"use strict";
module.exports = require("react/jsx-runtime");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = (__webpack_exec__(2706));
module.exports = __webpack_exports__;

})();