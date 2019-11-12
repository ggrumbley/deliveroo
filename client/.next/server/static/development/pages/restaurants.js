module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 5);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./pages/restaurants.js":
/*!******************************!*\
  !*** ./pages/restaurants.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! graphql-tag */ "graphql-tag");
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(graphql_tag__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-apollo */ "react-apollo");
/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_apollo__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var recompose__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! recompose */ "recompose");
/* harmony import */ var recompose__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(recompose__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! reactstrap */ "reactstrap");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(reactstrap__WEBPACK_IMPORTED_MODULE_6__);


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;

/* /pages/restaurants.js */



 // import { withContext } from "../components/Context/AppProvider";

 // import Cart from "../components/Cart/Cart";
// import defaultPage from "../hocs/defaultPage";

class Restaurants extends react__WEBPACK_IMPORTED_MODULE_1___default.a.Component {
  constructor(props) {
    super(props);
  }

  addItem(item) {
    this.props.context.addItem(item);
  }

  render() {
    const {
      data: {
        loading,
        error,
        restaurant
      },
      router,
      context,
      isAuthenticated
    } = this.props;
    if (error) return "Error Loading Dishes";

    if (restaurant) {
      return __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx("h1", null, restaurant.name), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_6__["Row"], null, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_6__["Col"], {
        xs: "9",
        style: {
          padding: 0
        }
      }, __jsx("div", {
        style: {
          display: "inline-block"
        },
        className: "h-100"
      }, restaurant.dishes.map(res => __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_6__["Card"], {
        style: {
          width: "30%",
          margin: "0 10px"
        },
        key: res._id
      }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_6__["CardImg"], {
        top: true,
        style: {
          height: 250
        },
        src: res.image ? `http://localhost:1337${res.image.url}` : 'https://www.placecage.com/c/800/600'
      }), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_6__["CardBody"], null, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_6__["CardTitle"], null, res.name), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_6__["CardText"], null, res.description)), __jsx("div", {
        className: "jsx-3439763635" + " " + "card-footer"
      }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_6__["Button"], {
        onClick: this.addItem.bind(this, res),
        outline: true,
        color: "primary"
      }, "+ Add To Cart"), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
        id: "3439763635"
      }, "a.jsx-3439763635{color:white;}a.jsx-3439763635:link{-webkit-text-decoration:none;text-decoration:none;color:white;}.container-fluid.jsx-3439763635{margin-bottom:30px;}.btn-outline-primary.jsx-3439763635{color:#007bff !important;}a.jsx-3439763635:hover{color:white !important;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9nZ3J1bWJsZXkvV29ya2JlbmNoL2RlbGl2ZXJvby9jbGllbnQvcGFnZXMvcmVzdGF1cmFudHMuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBeUV5QixBQUd5QyxBQUdTLEFBSUYsQUFHTSxBQUdGLFlBWnpCLE9BT0EsSUFNQSxFQUhBLHlCQVBjLFlBQ2QiLCJmaWxlIjoiL1VzZXJzL2dncnVtYmxleS9Xb3JrYmVuY2gvZGVsaXZlcm9vL2NsaWVudC9wYWdlcy9yZXN0YXVyYW50cy5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIC9wYWdlcy9yZXN0YXVyYW50cy5qcyAqL1xuXG5pbXBvcnQgZ3FsIGZyb20gXCJncmFwaHFsLXRhZ1wiO1xuaW1wb3J0IHsgd2l0aFJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xuaW1wb3J0IHsgZ3JhcGhxbCB9IGZyb20gXCJyZWFjdC1hcG9sbG9cIjtcbmltcG9ydCB7IGNvbXBvc2UgfSBmcm9tIFwicmVjb21wb3NlXCI7XG4vLyBpbXBvcnQgeyB3aXRoQ29udGV4dCB9IGZyb20gXCIuLi9jb21wb25lbnRzL0NvbnRleHQvQXBwUHJvdmlkZXJcIjtcbmltcG9ydCB7XG4gIEJ1dHRvbixcbiAgQ2FyZCxcbiAgQ2FyZEJvZHksXG4gIENhcmRDb2x1bW5zLFxuICBDYXJkSW1nLFxuICBDYXJkU3VidGl0bGUsXG4gIENhcmRUZXh0LFxuICBDYXJkVGl0bGUsXG4gIENvbCxcbiAgUm93XG59IGZyb20gXCJyZWFjdHN0cmFwXCI7XG4vLyBpbXBvcnQgQ2FydCBmcm9tIFwiLi4vY29tcG9uZW50cy9DYXJ0L0NhcnRcIjtcbi8vIGltcG9ydCBkZWZhdWx0UGFnZSBmcm9tIFwiLi4vaG9jcy9kZWZhdWx0UGFnZVwiO1xuXG5jbGFzcyBSZXN0YXVyYW50cyBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICB9XG5cbiAgYWRkSXRlbShpdGVtKSB7XG4gICAgdGhpcy5wcm9wcy5jb250ZXh0LmFkZEl0ZW0oaXRlbSk7XG4gIH1cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHtcbiAgICAgIGRhdGE6IHsgbG9hZGluZywgZXJyb3IsIHJlc3RhdXJhbnQgfSxcbiAgICAgIHJvdXRlcixcbiAgICAgIGNvbnRleHQsXG4gICAgICBpc0F1dGhlbnRpY2F0ZWRcbiAgICB9ID0gdGhpcy5wcm9wcztcbiAgICBpZiAoZXJyb3IpIHJldHVybiBcIkVycm9yIExvYWRpbmcgRGlzaGVzXCI7XG5cbiAgICBpZiAocmVzdGF1cmFudCkge1xuICAgICAgcmV0dXJuIChcbiAgICAgICAgPD5cbiAgICAgICAgICA8aDE+e3Jlc3RhdXJhbnQubmFtZX08L2gxPlxuICAgICAgICAgIDxSb3c+XG4gICAgICAgICAgICA8Q29sIHhzPVwiOVwiIHN0eWxlPXt7IHBhZGRpbmc6IDAgfX0+XG4gICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgZGlzcGxheTogXCJpbmxpbmUtYmxvY2tcIiB9fSBjbGFzc05hbWU9XCJoLTEwMFwiPlxuICAgICAgICAgICAgICAgIHtyZXN0YXVyYW50LmRpc2hlcy5tYXAocmVzID0+IChcbiAgICAgICAgICAgICAgICAgIDxDYXJkXG4gICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IHdpZHRoOiBcIjMwJVwiLCBtYXJnaW46IFwiMCAxMHB4XCIgfX1cbiAgICAgICAgICAgICAgICAgICAga2V5PXtyZXMuX2lkfVxuICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICA8Q2FyZEltZ1xuICAgICAgICAgICAgICAgICAgICAgIHRvcD17dHJ1ZX1cbiAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17eyBoZWlnaHQ6IDI1MCB9fVxuICAgICAgICAgICAgICAgICAgICAgIHNyYz17cmVzLmltYWdlXG4gICAgICAgICAgICAgICAgICAgICAgICA/IGBodHRwOi8vbG9jYWxob3N0OjEzMzcke3Jlcy5pbWFnZS51cmx9YFxuICAgICAgICAgICAgICAgICAgICAgICAgOiAnaHR0cHM6Ly93d3cucGxhY2VjYWdlLmNvbS9jLzgwMC82MDAnXG4gICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICA8Q2FyZEJvZHk+XG4gICAgICAgICAgICAgICAgICAgICAgPENhcmRUaXRsZT57cmVzLm5hbWV9PC9DYXJkVGl0bGU+XG4gICAgICAgICAgICAgICAgICAgICAgPENhcmRUZXh0PntyZXMuZGVzY3JpcHRpb259PC9DYXJkVGV4dD5cbiAgICAgICAgICAgICAgICAgICAgPC9DYXJkQm9keT5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkLWZvb3RlclwiPlxuICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b25cbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e3RoaXMuYWRkSXRlbS5iaW5kKHRoaXMsIHJlcyl9XG4gICAgICAgICAgICAgICAgICAgICAgICBvdXRsaW5lXG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvcj1cInByaW1hcnlcIlxuICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICsgQWRkIFRvIENhcnRcbiAgICAgICAgICAgICAgICAgICAgICA8L0J1dHRvbj5cblxuICAgICAgICAgICAgICAgICAgICAgIDxzdHlsZSBqc3g+XG4gICAgICAgICAgICAgICAgICAgICAgICB7YFxuICAgICAgICAgICAgICAgICAgICAgICAgICBhIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgYTpsaW5rIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIC5jb250YWluZXItZmx1aWQge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDMwcHg7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgLmJ0bi1vdXRsaW5lLXByaW1hcnkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiAjMDA3YmZmICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgYTpob3ZlciB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6IHdoaXRlICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGB9XG4gICAgICAgICAgICAgICAgICAgICAgPC9zdHlsZT5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICA8L0NhcmQ+XG4gICAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9Db2w+XG4gICAgICAgICAgICA8Q29sIHhzPVwiM1wiIHN0eWxlPXt7IHBhZGRpbmc6IDAgfX0+XG4gICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgQ2FydFxuICAgICAgICAgICAgICAgIHsvKiA8Q2FydCBpc0F1dGhlbnRpY2F0ZWQ9e2lzQXV0aGVudGljYXRlZH0gLz4gKi99XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9Db2w+XG4gICAgICAgICAgPC9Sb3c+XG4gICAgICAgIDwvPlxuICAgICAgKTtcbiAgICB9XG4gICAgcmV0dXJuIDxoMT5Mb2FkaW5nPC9oMT47XG4gIH1cbn1cblxuY29uc3QgR0VUX1JFU1RBVVJBTlRfRElTSEVTID0gZ3FsYFxuICBxdWVyeSgkaWQ6IElEISkge1xuICAgIHJlc3RhdXJhbnQoaWQ6ICRpZCkge1xuICAgICAgaWRcbiAgICAgIG5hbWVcbiAgICAgIGRpc2hlcyB7XG4gICAgICAgIGlkXG4gICAgICAgIG5hbWVcbiAgICAgICAgZGVzY3JpcHRpb25cbiAgICAgICAgcHJpY2VcbiAgICAgICAgaW1hZ2Uge1xuICAgICAgICAgIHVybFxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG5gO1xuLy8gVGhlIGBncmFwaHFsYCB3cmFwcGVyIGV4ZWN1dGVzIGEgR3JhcGhRTCBxdWVyeSBhbmQgbWFrZXMgdGhlIHJlc3VsdHNcbi8vIGF2YWlsYWJsZSBvbiB0aGUgYGRhdGFgIHByb3Agb2YgdGhlIHdyYXBwZWQgY29tcG9uZW50IChSZXN0YXVyYW50TGlzdClcblxuZXhwb3J0IGRlZmF1bHQgY29tcG9zZShcbiAgd2l0aFJvdXRlcixcbiAgLy8gZGVmYXVsdFBhZ2UsXG4gIC8vIHdpdGhDb250ZXh0LFxuICBncmFwaHFsKEdFVF9SRVNUQVVSQU5UX0RJU0hFUywge1xuICAgIG9wdGlvbnM6IHByb3BzID0+IHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIHZhcmlhYmxlczoge1xuICAgICAgICAgIGlkOiBwcm9wcy5yb3V0ZXIucXVlcnkuaWRcbiAgICAgICAgfVxuICAgICAgfTtcbiAgICB9LFxuICAgIHByb3BzOiAoeyBkYXRhIH0pID0+ICh7IGRhdGEgfSlcbiAgfSlcbikoUmVzdGF1cmFudHMpOyJdfQ== */\n/*@ sourceURL=/Users/ggrumbley/Workbench/deliveroo/client/pages/restaurants.js */")))))), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_6__["Col"], {
        xs: "3",
        style: {
          padding: 0
        }
      }, __jsx("div", null, "Cart"))));
    }

    return __jsx("h1", null, "Loading");
  }

}

const GET_RESTAURANT_DISHES = graphql_tag__WEBPACK_IMPORTED_MODULE_2___default.a`
  query($id: ID!) {
    restaurant(id: $id) {
      id
      name
      dishes {
        id
        name
        description
        price
        image {
          url
        }
      }
    }
  }
`; // The `graphql` wrapper executes a GraphQL query and makes the results
// available on the `data` prop of the wrapped component (RestaurantList)

/* harmony default export */ __webpack_exports__["default"] = (Object(recompose__WEBPACK_IMPORTED_MODULE_5__["compose"])(next_router__WEBPACK_IMPORTED_MODULE_3__["withRouter"], // defaultPage,
// withContext,
Object(react_apollo__WEBPACK_IMPORTED_MODULE_4__["graphql"])(GET_RESTAURANT_DISHES, {
  options: props => {
    return {
      variables: {
        id: props.router.query.id
      }
    };
  },
  props: ({
    data
  }) => ({
    data
  })
}))(Restaurants));

/***/ }),

/***/ 5:
/*!************************************!*\
  !*** multi ./pages/restaurants.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/ggrumbley/Workbench/deliveroo/client/pages/restaurants.js */"./pages/restaurants.js");


/***/ }),

/***/ "graphql-tag":
/*!******************************!*\
  !*** external "graphql-tag" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("graphql-tag");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/router");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-apollo":
/*!*******************************!*\
  !*** external "react-apollo" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-apollo");

/***/ }),

/***/ "reactstrap":
/*!*****************************!*\
  !*** external "reactstrap" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("reactstrap");

/***/ }),

/***/ "recompose":
/*!****************************!*\
  !*** external "recompose" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("recompose");

/***/ }),

/***/ "styled-jsx/style":
/*!***********************************!*\
  !*** external "styled-jsx/style" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("styled-jsx/style");

/***/ })

/******/ });
//# sourceMappingURL=restaurants.js.map