module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../ssr-module-cache.js');
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/api/hello.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./pages/api/hello.js":
/*!****************************!*\
  !*** ./pages/api/hello.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var aws_amplify__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! aws-amplify */ \"aws-amplify\");\n/* harmony import */ var aws_amplify__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(aws_amplify__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _src_aws_exports__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../src/aws-exports */ \"./src/aws-exports.js\");\n/* harmony import */ var _src_graphql_queries__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../src/graphql/queries */ \"./src/graphql/queries.js\");\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\n // import { createPost } from \"../src/graphql/mutations\";\n\n\naws_amplify__WEBPACK_IMPORTED_MODULE_0__[\"Amplify\"].configure(_objectSpread(_objectSpread({}, _src_aws_exports__WEBPACK_IMPORTED_MODULE_1__[\"default\"]), {}, {\n  ssr: true\n}));\n/* harmony default export */ __webpack_exports__[\"default\"] = (async (req, res) => {\n  console.log(\"the request...\");\n  console.log(\"this is all ran on the server (in a lambda)\");\n  console.log(req);\n  const SSR = Object(aws_amplify__WEBPACK_IMPORTED_MODULE_0__[\"withSSRContext\"])({\n    req\n  });\n  const response = await SSR.API.graphql({\n    query: _src_graphql_queries__WEBPACK_IMPORTED_MODULE_2__[\"listTodos\"]\n  });\n  res.status(200).json({\n    text: 'Hello' + JSON.stringify(response)\n  });\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9hcGkvaGVsbG8uanM/MzcxOCJdLCJuYW1lcyI6WyJBbXBsaWZ5IiwiY29uZmlndXJlIiwiYXdzRXhwb3J0cyIsInNzciIsInJlcSIsInJlcyIsImNvbnNvbGUiLCJsb2ciLCJTU1IiLCJ3aXRoU1NSQ29udGV4dCIsInJlc3BvbnNlIiwiQVBJIiwiZ3JhcGhxbCIsInF1ZXJ5IiwibGlzdFRvZG9zIiwic3RhdHVzIiwianNvbiIsInRleHQiLCJKU09OIiwic3RyaW5naWZ5Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBO0NBRUE7O0FBQ0E7QUFDQUEsbURBQU8sQ0FBQ0MsU0FBUixpQ0FBdUJDLHdEQUF2QjtBQUFtQ0MsS0FBRyxFQUFFO0FBQXhDO0FBRWUsc0VBQU9DLEdBQVAsRUFBWUMsR0FBWixLQUFvQjtBQUMvQkMsU0FBTyxDQUFDQyxHQUFSLENBQVksZ0JBQVo7QUFDQUQsU0FBTyxDQUFDQyxHQUFSLENBQVksNkNBQVo7QUFFQUQsU0FBTyxDQUFDQyxHQUFSLENBQVlILEdBQVo7QUFHQSxRQUFNSSxHQUFHLEdBQUdDLGtFQUFjLENBQUM7QUFBRUw7QUFBRixHQUFELENBQTFCO0FBQ0EsUUFBTU0sUUFBUSxHQUFHLE1BQU1GLEdBQUcsQ0FBQ0csR0FBSixDQUFRQyxPQUFSLENBQWdCO0FBQUVDLFNBQUssRUFBRUMsOERBQVNBO0FBQWxCLEdBQWhCLENBQXZCO0FBRUFULEtBQUcsQ0FBQ1UsTUFBSixDQUFXLEdBQVgsRUFBZ0JDLElBQWhCLENBQXFCO0FBQUVDLFFBQUksRUFBRSxVQUFVQyxJQUFJLENBQUNDLFNBQUwsQ0FBZVQsUUFBZjtBQUFsQixHQUFyQjtBQUNILENBWEQiLCJmaWxlIjoiLi9wYWdlcy9hcGkvaGVsbG8uanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBbXBsaWZ5LCBBUEksIEF1dGgsIHdpdGhTU1JDb250ZXh0IH0gZnJvbSBcImF3cy1hbXBsaWZ5XCI7XG5pbXBvcnQgYXdzRXhwb3J0cyBmcm9tIFwiLi4vLi4vc3JjL2F3cy1leHBvcnRzXCI7XG4vLyBpbXBvcnQgeyBjcmVhdGVQb3N0IH0gZnJvbSBcIi4uL3NyYy9ncmFwaHFsL211dGF0aW9uc1wiO1xuaW1wb3J0IHsgbGlzdFRvZG9zIH0gZnJvbSBcIi4uLy4uL3NyYy9ncmFwaHFsL3F1ZXJpZXNcIjtcbkFtcGxpZnkuY29uZmlndXJlKHsgLi4uYXdzRXhwb3J0cywgc3NyOiB0cnVlIH0pO1xuXG5leHBvcnQgZGVmYXVsdCBhc3luYyAocmVxLCByZXMpID0+IHtcbiAgICBjb25zb2xlLmxvZyhcInRoZSByZXF1ZXN0Li4uXCIpO1xuICAgIGNvbnNvbGUubG9nKFwidGhpcyBpcyBhbGwgcmFuIG9uIHRoZSBzZXJ2ZXIgKGluIGEgbGFtYmRhKVwiKTtcblxuICAgIGNvbnNvbGUubG9nKHJlcSk7XG5cblxuICAgIGNvbnN0IFNTUiA9IHdpdGhTU1JDb250ZXh0KHsgcmVxIH0pO1xuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgU1NSLkFQSS5ncmFwaHFsKHsgcXVlcnk6IGxpc3RUb2RvcyB9KTtcbiAgXG4gICAgcmVzLnN0YXR1cygyMDApLmpzb24oeyB0ZXh0OiAnSGVsbG8nICsgSlNPTi5zdHJpbmdpZnkocmVzcG9uc2UpIH0pO1xufSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/api/hello.js\n");

/***/ }),

/***/ "./src/aws-exports.js":
/*!****************************!*\
  !*** ./src/aws-exports.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* eslint-disable */\n// WARNING: DO NOT EDIT. This file is automatically generated by AWS Amplify. It will be overwritten.\nconst awsmobile = {\n  \"aws_project_region\": \"us-east-1\",\n  \"aws_appsync_graphqlEndpoint\": \"https://sngsiognmjempo3gkhb36nyqhy.appsync-api.us-east-1.amazonaws.com/graphql\",\n  \"aws_appsync_region\": \"us-east-1\",\n  \"aws_appsync_authenticationType\": \"API_KEY\",\n  \"aws_appsync_apiKey\": \"da2-byrlsukryrekhiztfz2lufl2ii\"\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (awsmobile);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvYXdzLWV4cG9ydHMuanM/YWYzYSJdLCJuYW1lcyI6WyJhd3Ntb2JpbGUiXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFDQTtBQUVBLE1BQU1BLFNBQVMsR0FBRztBQUNkLHdCQUFzQixXQURSO0FBRWQsaUNBQStCLGdGQUZqQjtBQUdkLHdCQUFzQixXQUhSO0FBSWQsb0NBQWtDLFNBSnBCO0FBS2Qsd0JBQXNCO0FBTFIsQ0FBbEI7QUFTZUEsd0VBQWYiLCJmaWxlIjoiLi9zcmMvYXdzLWV4cG9ydHMuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBlc2xpbnQtZGlzYWJsZSAqL1xuLy8gV0FSTklORzogRE8gTk9UIEVESVQuIFRoaXMgZmlsZSBpcyBhdXRvbWF0aWNhbGx5IGdlbmVyYXRlZCBieSBBV1MgQW1wbGlmeS4gSXQgd2lsbCBiZSBvdmVyd3JpdHRlbi5cblxuY29uc3QgYXdzbW9iaWxlID0ge1xuICAgIFwiYXdzX3Byb2plY3RfcmVnaW9uXCI6IFwidXMtZWFzdC0xXCIsXG4gICAgXCJhd3NfYXBwc3luY19ncmFwaHFsRW5kcG9pbnRcIjogXCJodHRwczovL3NuZ3Npb2dubWplbXBvM2draGIzNm55cWh5LmFwcHN5bmMtYXBpLnVzLWVhc3QtMS5hbWF6b25hd3MuY29tL2dyYXBocWxcIixcbiAgICBcImF3c19hcHBzeW5jX3JlZ2lvblwiOiBcInVzLWVhc3QtMVwiLFxuICAgIFwiYXdzX2FwcHN5bmNfYXV0aGVudGljYXRpb25UeXBlXCI6IFwiQVBJX0tFWVwiLFxuICAgIFwiYXdzX2FwcHN5bmNfYXBpS2V5XCI6IFwiZGEyLWJ5cmxzdWtyeXJla2hpenRmejJsdWZsMmlpXCJcbn07XG5cblxuZXhwb3J0IGRlZmF1bHQgYXdzbW9iaWxlO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/aws-exports.js\n");

/***/ }),

/***/ "./src/graphql/queries.js":
/*!********************************!*\
  !*** ./src/graphql/queries.js ***!
  \********************************/
/*! exports provided: getTodo, listTodos */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getTodo\", function() { return getTodo; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"listTodos\", function() { return listTodos; });\n/* eslint-disable */\n// this is an auto generated file. This will be overwritten\nconst getTodo =\n/* GraphQL */\n`\n  query GetTodo($id: ID!) {\n    getTodo(id: $id) {\n      id\n      name\n      description\n      createdAt\n      updatedAt\n    }\n  }\n`;\nconst listTodos =\n/* GraphQL */\n`\n  query ListTodos(\n    $filter: ModelTodoFilterInput\n    $limit: Int\n    $nextToken: String\n  ) {\n    listTodos(filter: $filter, limit: $limit, nextToken: $nextToken) {\n      items {\n        id\n        name\n        description\n        createdAt\n        updatedAt\n      }\n      nextToken\n    }\n  }\n`;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvZ3JhcGhxbC9xdWVyaWVzLmpzPzAzMDYiXSwibmFtZXMiOlsiZ2V0VG9kbyIsImxpc3RUb2RvcyJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUVPLE1BQU1BLE9BQU87QUFBRztBQUFlO0FBQ3RDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBVk87QUFXQSxNQUFNQyxTQUFTO0FBQUc7QUFBZTtBQUN4QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBakJPIiwiZmlsZSI6Ii4vc3JjL2dyYXBocWwvcXVlcmllcy5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIGVzbGludC1kaXNhYmxlICovXG4vLyB0aGlzIGlzIGFuIGF1dG8gZ2VuZXJhdGVkIGZpbGUuIFRoaXMgd2lsbCBiZSBvdmVyd3JpdHRlblxuXG5leHBvcnQgY29uc3QgZ2V0VG9kbyA9IC8qIEdyYXBoUUwgKi8gYFxuICBxdWVyeSBHZXRUb2RvKCRpZDogSUQhKSB7XG4gICAgZ2V0VG9kbyhpZDogJGlkKSB7XG4gICAgICBpZFxuICAgICAgbmFtZVxuICAgICAgZGVzY3JpcHRpb25cbiAgICAgIGNyZWF0ZWRBdFxuICAgICAgdXBkYXRlZEF0XG4gICAgfVxuICB9XG5gO1xuZXhwb3J0IGNvbnN0IGxpc3RUb2RvcyA9IC8qIEdyYXBoUUwgKi8gYFxuICBxdWVyeSBMaXN0VG9kb3MoXG4gICAgJGZpbHRlcjogTW9kZWxUb2RvRmlsdGVySW5wdXRcbiAgICAkbGltaXQ6IEludFxuICAgICRuZXh0VG9rZW46IFN0cmluZ1xuICApIHtcbiAgICBsaXN0VG9kb3MoZmlsdGVyOiAkZmlsdGVyLCBsaW1pdDogJGxpbWl0LCBuZXh0VG9rZW46ICRuZXh0VG9rZW4pIHtcbiAgICAgIGl0ZW1zIHtcbiAgICAgICAgaWRcbiAgICAgICAgbmFtZVxuICAgICAgICBkZXNjcmlwdGlvblxuICAgICAgICBjcmVhdGVkQXRcbiAgICAgICAgdXBkYXRlZEF0XG4gICAgICB9XG4gICAgICBuZXh0VG9rZW5cbiAgICB9XG4gIH1cbmA7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/graphql/queries.js\n");

/***/ }),

/***/ "aws-amplify":
/*!******************************!*\
  !*** external "aws-amplify" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"aws-amplify\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJhd3MtYW1wbGlmeVwiP2M3ZWMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoiYXdzLWFtcGxpZnkuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJhd3MtYW1wbGlmeVwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///aws-amplify\n");

/***/ })

/******/ });