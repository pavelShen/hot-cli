module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(1);


/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _app = __webpack_require__(2);

	exports.default = function (context) {

	    _app.router.push(context.url);

	    var s = Date.now();


	    return _app.app;
	};

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.store = exports.router = exports.app = undefined;

	var _vue = __webpack_require__(3);

	var _vue2 = _interopRequireDefault(_vue);

	var _router = __webpack_require__(4);

	var _router2 = _interopRequireDefault(_router);

	var _store = __webpack_require__(12);

	var _store2 = _interopRequireDefault(_store);

	var _app = __webpack_require__(14);

	var _app2 = _interopRequireDefault(_app);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	if (false) {
	    require('./main.scss');
	    var VueResource = require('vue-resource');
	    _vue2.default.use(VueResource);
	}

	var app = new _vue2.default({
	    template: '<app></app>',
	    components: {
	        App: _app2.default
	    },
	    router: _router2.default,
	    store: _store2.default
	});

	exports.app = app;
	exports.router = _router2.default;
	exports.store = _store2.default;

/***/ },
/* 3 */
/***/ function(module, exports) {

	module.exports = require("vue");

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _vue = __webpack_require__(3);

	var _vue2 = _interopRequireDefault(_vue);

	var _vueRouter = __webpack_require__(5);

	var _vueRouter2 = _interopRequireDefault(_vueRouter);

	var _foo = __webpack_require__(6);

	var _foo2 = _interopRequireDefault(_foo);

	var _bar = __webpack_require__(9);

	var _bar2 = _interopRequireDefault(_bar);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	_vue2.default.use(_vueRouter2.default);

	var router = new _vueRouter2.default({
	    mode: 'history',
	    base: '/vue/',
	    routes: [{
	        path: '/foo',
	        component: _foo2.default
	    }, {
	        path: '/bar',
	        component: _bar2.default
	    }]
	});

	exports.default = router;

/***/ },
/* 5 */
/***/ function(module, exports) {

	module.exports = require("vue-router");

/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	var __vue_styles__ = {}

	/* styles */

	/* script */
	__vue_exports__ = __webpack_require__(7)

	/* template */
	var __vue_template__ = __webpack_require__(8)
	__vue_options__ = __vue_exports__ = __vue_exports__ || {}
	if (
	  typeof __vue_exports__.default === "object" ||
	  typeof __vue_exports__.default === "function"
	) {
	if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
	__vue_options__ = __vue_exports__ = __vue_exports__.default
	}
	if (typeof __vue_options__ === "function") {
	  __vue_options__ = __vue_options__.options
	}
	__vue_options__.__file = "/Users/roei/C/gitlab/portal/front/vue/components/foo.vue"
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
	if (__vue_options__.functional) {console.error("[vue-loader] foo.vue: functional components are not supported and should be defined in plain js files using render functions.")}

	module.exports = __vue_exports__


/***/ },
/* 7 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.default = {
	    data: function data() {
	        return {
	            message: 'hello vue2'
	        };
	    },
	    mounted: function mounted() {}
	};

/***/ },
/* 8 */
/***/ function(module, exports) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;
	  return _h('div', {
	    staticClass: "col-12"
	  }, [_h('div', {
	    staticClass: "m-block"
	  }, [_vm._m(0), " ", _h('p', ["\n            " + _vm._s(_vm.message) + "\n        "])])])
	},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;
	  return _h('div', {
	    staticClass: "head-banner"
	  }, [_h('img', {
	    attrs: {
	      "src": "http://img.zcool.cn/community/01bdf7572a19db6ac725381256a469.jpg@900w_1l_2o",
	      "alt": ""
	    }
	  })])
	}]}
	module.exports.render._withStripped = true

/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	var __vue_styles__ = {}

	/* styles */

	/* script */
	__vue_exports__ = __webpack_require__(10)

	/* template */
	var __vue_template__ = __webpack_require__(11)
	__vue_options__ = __vue_exports__ = __vue_exports__ || {}
	if (
	  typeof __vue_exports__.default === "object" ||
	  typeof __vue_exports__.default === "function"
	) {
	if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
	__vue_options__ = __vue_exports__ = __vue_exports__.default
	}
	if (typeof __vue_options__ === "function") {
	  __vue_options__ = __vue_options__.options
	}
	__vue_options__.__file = "/Users/roei/C/gitlab/portal/front/vue/components/bar.vue"
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
	if (__vue_options__.functional) {console.error("[vue-loader] bar.vue: functional components are not supported and should be defined in plain js files using render functions.")}

	module.exports = __vue_exports__


/***/ },
/* 10 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.default = {
	    data: function data() {
	        return {
	            message: 'this is child page, bar'
	        };
	    },
	    mounted: function mounted() {}
	};

/***/ },
/* 11 */
/***/ function(module, exports) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;
	  return _h('div', {
	    staticClass: "col-12"
	  }, [_h('div', {
	    staticClass: "m-block"
	  }, [_h('h3', ["Page Bar"]), " ", _h('p', ["\n            " + _vm._s(_vm.message) + "\n        "])])])
	},staticRenderFns: []}
	module.exports.render._withStripped = true

/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _vue = __webpack_require__(3);

	var _vue2 = _interopRequireDefault(_vue);

	var _vuex = __webpack_require__(13);

	var _vuex2 = _interopRequireDefault(_vuex);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	_vue2.default.use(_vuex2.default);

	var store = new _vuex2.default.Store({
	    state: {
	        count: 0
	    }
	});

	exports.default = store;

/***/ },
/* 13 */
/***/ function(module, exports) {

	module.exports = require("vuex");

/***/ },
/* 14 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	var __vue_styles__ = {}

	/* styles */

	/* script */
	__vue_exports__ = __webpack_require__(15)

	/* template */
	var __vue_template__ = __webpack_require__(16)
	__vue_options__ = __vue_exports__ = __vue_exports__ || {}
	if (
	  typeof __vue_exports__.default === "object" ||
	  typeof __vue_exports__.default === "function"
	) {
	if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
	__vue_options__ = __vue_exports__ = __vue_exports__.default
	}
	if (typeof __vue_options__ === "function") {
	  __vue_options__ = __vue_options__.options
	}
	__vue_options__.__file = "/Users/roei/C/gitlab/portal/front/vue/components/app.vue"
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
	if (__vue_options__.functional) {console.error("[vue-loader] app.vue: functional components are not supported and should be defined in plain js files using render functions.")}

	module.exports = __vue_exports__


/***/ },
/* 15 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.default = {
	    mounted: function mounted() {
	        console.log('mounted');
	    }
	};

/***/ },
/* 16 */
/***/ function(module, exports) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;
	  return _h('div', {
	    staticClass: "wrapper"
	  }, [_h('div', {
	    staticClass: "layout"
	  }, [_h('div', {
	    staticClass: "l-row"
	  }, [_h('router-link', {
	    staticClass: "link",
	    attrs: {
	      "to": "/foo"
	    }
	  }, ["Go to Foo"]), " ", _h('router-link', {
	    staticClass: "link",
	    attrs: {
	      "to": "/bar"
	    }
	  }, ["Go to Bar"]), " ", _h('router-view')]), " ", _vm._m(0)])])
	},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;
	  return _h('div', {
	    staticClass: "l-row"
	  }, [_h('div', {
	    staticClass: "m-block"
	  }, ["\n                u can click button above，and view the Page Source. ", _h('br'), "\n                it is an isomorphic app.\n            "])])
	}]}
	module.exports.render._withStripped = true

/***/ }
/******/ ]);