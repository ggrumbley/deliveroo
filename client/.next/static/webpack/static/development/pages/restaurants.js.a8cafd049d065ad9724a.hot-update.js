webpackHotUpdate("static/development/pages/restaurants.js",{

/***/ "./pages/restaurants.js":
/*!******************************!*\
  !*** ./pages/restaurants.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral */ "./node_modules/@babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! graphql-tag */ "./node_modules/graphql-tag/src/index.js");
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(graphql_tag__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react-apollo */ "./node_modules/react-apollo/lib/react-apollo.esm.js");
/* harmony import */ var recompose__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! recompose */ "./node_modules/recompose/dist/Recompose.esm.js");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/index.js");








var __jsx = react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement;

function _templateObject() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  query($id: ID!) {\n    restaurant(id: $id) {\n      id\n      name\n      dishes {\n        id\n        name\n        description\n        price\n        image {\n          url\n        }\n      }\n    }\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

/* /pages/restaurants.js */



 // import { withContext } from "../components/Context/AppProvider";

 // import Cart from "../components/Cart/Cart";
// import defaultPage from "../hocs/defaultPage";

var Restaurants =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(Restaurants, _React$Component);

  function Restaurants(props) {
    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, Restaurants);

    return Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(Restaurants).call(this, props));
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__["default"])(Restaurants, [{
    key: "addItem",
    value: function addItem(item) {
      this.props.context.addItem(item);
    }
  }, {
    key: "render",
    value: function render() {
      var _this = this;

      var _this$props = this.props,
          _this$props$data = _this$props.data,
          loading = _this$props$data.loading,
          error = _this$props$data.error,
          restaurant = _this$props$data.restaurant,
          router = _this$props.router,
          context = _this$props.context,
          isAuthenticated = _this$props.isAuthenticated;
      if (error) return "Error Loading Dishes";

      if (restaurant) {
        return __jsx(react__WEBPACK_IMPORTED_MODULE_7___default.a.Fragment, null, __jsx("h1", null, restaurant.name), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_12__["Row"], null, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_12__["Col"], {
          xs: "9",
          style: {
            padding: 0
          }
        }, __jsx("div", {
          style: {
            display: "inline-block"
          },
          className: "h-100"
        }, restaurant.dishes.map(function (res) {
          return __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_12__["Card"], {
            style: {
              width: "30%",
              margin: "0 10px"
            },
            key: res._id
          }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_12__["CardImg"], {
            top: true,
            style: {
              height: 250
            },
            src: res.image ? "http://localhost:1337".concat(res.image.url) : 'https://www.placecage.com/c/200/300'
          }), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_12__["CardBody"], null, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_12__["CardTitle"], null, res.name), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_12__["CardText"], null, res.description)), __jsx("div", {
            className: "jsx-3439763635" + " " + "card-footer"
          }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_12__["Button"], {
            onClick: _this.addItem.bind(_this, res),
            outline: true,
            color: "primary"
          }, "+ Add To Cart"), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_6___default.a, {
            id: "3439763635"
          }, "a.jsx-3439763635{color:white;}a.jsx-3439763635:link{-webkit-text-decoration:none;text-decoration:none;color:white;}.container-fluid.jsx-3439763635{margin-bottom:30px;}.btn-outline-primary.jsx-3439763635{color:#007bff !important;}a.jsx-3439763635:hover{color:white !important;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9nZ3J1bWJsZXkvV29ya2JlbmNoL2RlbGl2ZXJvby9jbGllbnQvcGFnZXMvcmVzdGF1cmFudHMuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBd0V5QixBQUd5QyxBQUdTLEFBSUYsQUFHTSxBQUdGLFlBWnpCLE9BT0EsSUFNQSxFQUhBLHlCQVBjLFlBQ2QiLCJmaWxlIjoiL1VzZXJzL2dncnVtYmxleS9Xb3JrYmVuY2gvZGVsaXZlcm9vL2NsaWVudC9wYWdlcy9yZXN0YXVyYW50cy5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIC9wYWdlcy9yZXN0YXVyYW50cy5qcyAqL1xuXG5pbXBvcnQgZ3FsIGZyb20gXCJncmFwaHFsLXRhZ1wiO1xuaW1wb3J0IHsgd2l0aFJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xuaW1wb3J0IHsgZ3JhcGhxbCB9IGZyb20gXCJyZWFjdC1hcG9sbG9cIjtcbmltcG9ydCB7IGNvbXBvc2UgfSBmcm9tIFwicmVjb21wb3NlXCI7XG4vLyBpbXBvcnQgeyB3aXRoQ29udGV4dCB9IGZyb20gXCIuLi9jb21wb25lbnRzL0NvbnRleHQvQXBwUHJvdmlkZXJcIjtcbmltcG9ydCB7XG4gIEJ1dHRvbixcbiAgQ2FyZCxcbiAgQ2FyZEJvZHksXG4gIENhcmRDb2x1bW5zLFxuICBDYXJkSW1nLFxuICBDYXJkU3VidGl0bGUsXG4gIENhcmRUZXh0LFxuICBDYXJkVGl0bGUsXG4gIENvbCxcbiAgUm93XG59IGZyb20gXCJyZWFjdHN0cmFwXCI7XG4vLyBpbXBvcnQgQ2FydCBmcm9tIFwiLi4vY29tcG9uZW50cy9DYXJ0L0NhcnRcIjtcbi8vIGltcG9ydCBkZWZhdWx0UGFnZSBmcm9tIFwiLi4vaG9jcy9kZWZhdWx0UGFnZVwiO1xuXG5jbGFzcyBSZXN0YXVyYW50cyBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICB9XG5cbiAgYWRkSXRlbShpdGVtKSB7XG4gICAgdGhpcy5wcm9wcy5jb250ZXh0LmFkZEl0ZW0oaXRlbSk7XG4gIH1cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHtcbiAgICAgIGRhdGE6IHsgbG9hZGluZywgZXJyb3IsIHJlc3RhdXJhbnQgfSxcbiAgICAgIHJvdXRlcixcbiAgICAgIGNvbnRleHQsXG4gICAgICBpc0F1dGhlbnRpY2F0ZWRcbiAgICB9ID0gdGhpcy5wcm9wcztcbiAgICBpZiAoZXJyb3IpIHJldHVybiBcIkVycm9yIExvYWRpbmcgRGlzaGVzXCI7XG5cbiAgICBpZiAocmVzdGF1cmFudCkge1xuICAgICAgcmV0dXJuIChcbiAgICAgICAgPD5cbiAgICAgICAgICA8aDE+e3Jlc3RhdXJhbnQubmFtZX08L2gxPlxuICAgICAgICAgIDxSb3c+XG4gICAgICAgICAgICA8Q29sIHhzPVwiOVwiIHN0eWxlPXt7IHBhZGRpbmc6IDAgfX0+XG4gICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgZGlzcGxheTogXCJpbmxpbmUtYmxvY2tcIiB9fSBjbGFzc05hbWU9XCJoLTEwMFwiPlxuICAgICAgICAgICAgICAgIHtyZXN0YXVyYW50LmRpc2hlcy5tYXAocmVzID0+IChcbiAgICAgICAgICAgICAgICAgIDxDYXJkXG4gICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IHdpZHRoOiBcIjMwJVwiLCBtYXJnaW46IFwiMCAxMHB4XCIgfX1cbiAgICAgICAgICAgICAgICAgICAga2V5PXtyZXMuX2lkfVxuICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICA8Q2FyZEltZ1xuICAgICAgICAgICAgICAgICAgICAgIHRvcD17dHJ1ZX1cbiAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17eyBoZWlnaHQ6IDI1MCB9fVxuICAgICAgICAgICAgICAgICAgICAgIHNyYz17cmVzLmltYWdlXG4gICAgICAgICAgICAgICAgICAgICAgICA/IGBodHRwOi8vbG9jYWxob3N0OjEzMzcke3Jlcy5pbWFnZS51cmx9YFxuICAgICAgICAgICAgICAgICAgICAgICAgOiAnaHR0cHM6Ly93d3cucGxhY2VjYWdlLmNvbS9jLzIwMC8zMDAnIH1cbiAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgPENhcmRCb2R5PlxuICAgICAgICAgICAgICAgICAgICAgIDxDYXJkVGl0bGU+e3Jlcy5uYW1lfTwvQ2FyZFRpdGxlPlxuICAgICAgICAgICAgICAgICAgICAgIDxDYXJkVGV4dD57cmVzLmRlc2NyaXB0aW9ufTwvQ2FyZFRleHQ+XG4gICAgICAgICAgICAgICAgICAgIDwvQ2FyZEJvZHk+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZC1mb290ZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICA8QnV0dG9uXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXt0aGlzLmFkZEl0ZW0uYmluZCh0aGlzLCByZXMpfVxuICAgICAgICAgICAgICAgICAgICAgICAgb3V0bGluZVxuICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I9XCJwcmltYXJ5XCJcbiAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICArIEFkZCBUbyBDYXJ0XG4gICAgICAgICAgICAgICAgICAgICAgPC9CdXR0b24+XG5cbiAgICAgICAgICAgICAgICAgICAgICA8c3R5bGUganN4PlxuICAgICAgICAgICAgICAgICAgICAgICAge2BcbiAgICAgICAgICAgICAgICAgICAgICAgICAgYSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGE6bGluayB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAuY29udGFpbmVyLWZsdWlkIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAzMHB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIC5idG4tb3V0bGluZS1wcmltYXJ5IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogIzAwN2JmZiAhaW1wb3J0YW50O1xuICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGE6aG92ZXIge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiB3aGl0ZSAhaW1wb3J0YW50O1xuICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBgfVxuICAgICAgICAgICAgICAgICAgICAgIDwvc3R5bGU+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgPC9DYXJkPlxuICAgICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvQ29sPlxuICAgICAgICAgICAgPENvbCB4cz1cIjNcIiBzdHlsZT17eyBwYWRkaW5nOiAwIH19PlxuICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgIENhcnRcbiAgICAgICAgICAgICAgICB7LyogPENhcnQgaXNBdXRoZW50aWNhdGVkPXtpc0F1dGhlbnRpY2F0ZWR9IC8+ICovfVxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvQ29sPlxuICAgICAgICAgIDwvUm93PlxuICAgICAgICA8Lz5cbiAgICAgICk7XG4gICAgfVxuICAgIHJldHVybiA8aDE+TG9hZGluZzwvaDE+O1xuICB9XG59XG5cbmNvbnN0IEdFVF9SRVNUQVVSQU5UX0RJU0hFUyA9IGdxbGBcbiAgcXVlcnkoJGlkOiBJRCEpIHtcbiAgICByZXN0YXVyYW50KGlkOiAkaWQpIHtcbiAgICAgIGlkXG4gICAgICBuYW1lXG4gICAgICBkaXNoZXMge1xuICAgICAgICBpZFxuICAgICAgICBuYW1lXG4gICAgICAgIGRlc2NyaXB0aW9uXG4gICAgICAgIHByaWNlXG4gICAgICAgIGltYWdlIHtcbiAgICAgICAgICB1cmxcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuYDtcbi8vIFRoZSBgZ3JhcGhxbGAgd3JhcHBlciBleGVjdXRlcyBhIEdyYXBoUUwgcXVlcnkgYW5kIG1ha2VzIHRoZSByZXN1bHRzXG4vLyBhdmFpbGFibGUgb24gdGhlIGBkYXRhYCBwcm9wIG9mIHRoZSB3cmFwcGVkIGNvbXBvbmVudCAoUmVzdGF1cmFudExpc3QpXG5cbmV4cG9ydCBkZWZhdWx0IGNvbXBvc2UoXG4gIHdpdGhSb3V0ZXIsXG4gIC8vIGRlZmF1bHRQYWdlLFxuICAvLyB3aXRoQ29udGV4dCxcbiAgZ3JhcGhxbChHRVRfUkVTVEFVUkFOVF9ESVNIRVMsIHtcbiAgICBvcHRpb25zOiBwcm9wcyA9PiB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICB2YXJpYWJsZXM6IHtcbiAgICAgICAgICBpZDogcHJvcHMucm91dGVyLnF1ZXJ5LmlkXG4gICAgICAgIH1cbiAgICAgIH07XG4gICAgfSxcbiAgICBwcm9wczogKHsgZGF0YSB9KSA9PiAoeyBkYXRhIH0pXG4gIH0pXG4pKFJlc3RhdXJhbnRzKTsiXX0= */\n/*@ sourceURL=/Users/ggrumbley/Workbench/deliveroo/client/pages/restaurants.js */")));
        }))), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_12__["Col"], {
          xs: "3",
          style: {
            padding: 0
          }
        }, __jsx("div", null, "Cart"))));
      }

      return __jsx("h1", null, "Loading");
    }
  }]);

  return Restaurants;
}(react__WEBPACK_IMPORTED_MODULE_7___default.a.Component);

var GET_RESTAURANT_DISHES = graphql_tag__WEBPACK_IMPORTED_MODULE_8___default()(_templateObject()); // The `graphql` wrapper executes a GraphQL query and makes the results
// available on the `data` prop of the wrapped component (RestaurantList)

/* harmony default export */ __webpack_exports__["default"] = (Object(recompose__WEBPACK_IMPORTED_MODULE_11__["compose"])(next_router__WEBPACK_IMPORTED_MODULE_9__["withRouter"], // defaultPage,
// withContext,
Object(react_apollo__WEBPACK_IMPORTED_MODULE_10__["graphql"])(GET_RESTAURANT_DISHES, {
  options: function options(props) {
    return {
      variables: {
        id: props.router.query.id
      }
    };
  },
  props: function props(_ref) {
    var data = _ref.data;
    return {
      data: data
    };
  }
}))(Restaurants));

/***/ })

})
//# sourceMappingURL=restaurants.js.a8cafd049d065ad9724a.hot-update.js.map