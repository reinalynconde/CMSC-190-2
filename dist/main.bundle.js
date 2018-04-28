webpackJsonp(["main"],{

/***/ "../../../../../src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "../../../../../src/app/about/about.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/about/about.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  about works!\n</p>\n"

/***/ }),

/***/ "../../../../../src/app/about/about.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AboutComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AboutComponent = /** @class */ (function () {
    function AboutComponent() {
    }
    AboutComponent.prototype.ngOnInit = function () {
    };
    AboutComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-about',
            template: __webpack_require__("../../../../../src/app/about/about.component.html"),
            styles: [__webpack_require__("../../../../../src/app/about/about.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], AboutComponent);
    return AboutComponent;
}());



/***/ }),

/***/ "../../../../../src/app/app-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__land_land_component__ = __webpack_require__("../../../../../src/app/land/land.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__input_input_component__ = __webpack_require__("../../../../../src/app/input/input.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__processing_processing_component__ = __webpack_require__("../../../../../src/app/processing/processing.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__model_model_component__ = __webpack_require__("../../../../../src/app/model/model.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__sample_sample_component__ = __webpack_require__("../../../../../src/app/sample/sample.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__about_about_component__ = __webpack_require__("../../../../../src/app/about/about.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__contact_contact_component__ = __webpack_require__("../../../../../src/app/contact/contact.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










var routes = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_9__app_component__["a" /* AppComponent */] },
    { path: 'home', component: __WEBPACK_IMPORTED_MODULE_2__land_land_component__["a" /* LandComponent */] },
    { path: 'input', component: __WEBPACK_IMPORTED_MODULE_3__input_input_component__["a" /* InputComponent */] },
    { path: 'processing', component: __WEBPACK_IMPORTED_MODULE_4__processing_processing_component__["a" /* ProcessingComponent */] },
    { path: 'model', component: __WEBPACK_IMPORTED_MODULE_5__model_model_component__["a" /* ModelComponent */] },
    { path: 'sample', component: __WEBPACK_IMPORTED_MODULE_6__sample_sample_component__["a" /* SampleComponent */] },
    { path: 'about', component: __WEBPACK_IMPORTED_MODULE_7__about_about_component__["a" /* AboutComponent */] },
    { path: 'contact', component: __WEBPACK_IMPORTED_MODULE_8__contact_contact_component__["a" /* ContactComponent */] },
    { path: '**', component: __WEBPACK_IMPORTED_MODULE_2__land_land_component__["a" /* LandComponent */] }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* RouterModule */].forRoot(routes)],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* RouterModule */]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/* Application-wide Styles */\n/* h1 {\n  color: #369;\n  font-family: Arial, Helvetica, sans-serif;\n  font-size: 250%;\n}\nh2, h3 {\n  color: #444;\n  font-family: Arial, Helvetica, sans-serif;\n  font-weight: lighter;\n}\nbody {\n  margin: 2em;\n}\nbody, input[text], button {\n  color: #888;\n  font-family: Cambria, Georgia;\n} */\n/* everywhere else */\n* /* {\n  font-family: Arial, Helvetica, sans-serif;\n} */\n.site-header {\n  height: 1em;\n  background-color: #63ffb6;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<sui-tabset>\n\n<!-- </sui-tabset> *ngIf=\"notHome; else home\"> -->\n  <div class=\"ui secondary pointing menu site-header\">\n    <a class=\"item active\" suiTabHeader=\"home\" (click)=\"set_home()\">\n      Origami\n    </a>\n    <a class=\"item\" suiTabHeader=\"samp\" (click)=\"set_samp()\">\n      Samples\n    </a>\n    <a class=\"item\" suiTabHeader=\"abt\" (click)=\"set_abt()\">\n      About\n    </a>\n    <a class=\"item\" suiTabHeader=\"contact\" (click)=\"set_contact()\">\n      Contact\n    </a>\n  </div>\n\n  <div suiTabContent=\"home\">\n    <div class=\"normal\" *ngIf=\"home\">\n      <router-outlet></router-outlet>\n    </div>\n  </div>\n\n  <div suiTabContent=\"samp\">\n    <div class=\"normal\" *ngIf=\"samp\">\n      <router-outlet></router-outlet>\n    </div>\n  </div>\n\n  <div suiTabContent=\"abt\">\n    <div class=\"normal\" *ngIf=\"abt\">\n      <router-outlet></router-outlet>\n    </div>\n  </div>\n\n  <div suiTabContent=\"contact\">\n    <div class=\"normal\" *ngIf=\"contact\">\n      <router-outlet></router-outlet>\n    </div>\n  </div>\n</sui-tabset>\n\n<!-- <ng-template #home>\n  <router-outlet></router-outlet>\n</ng-template> -->\n"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AppComponent = /** @class */ (function () {
    function AppComponent(router) {
        this.router = router;
        this.title = 'app';
        localStorage.setItem('home', '/home');
        this.set_home();
    }
    AppComponent.prototype.set_home = function () {
        this.router.navigateByUrl(localStorage.getItem('home'));
        if (localStorage.getItem('home') != '/home')
            this.notHome = true;
        else
            this.notHome = false;
        this.home = true;
        this.samp = false;
        this.abt = false;
        this.contact = false;
    };
    AppComponent.prototype.set_samp = function () {
        this.router.navigateByUrl('/sample');
        this.notHome = false;
        this.samp = true;
        this.home = false;
        this.abt = false;
        this.contact = false;
    };
    AppComponent.prototype.set_abt = function () {
        this.router.navigateByUrl('/about');
        this.notHome = false;
        this.abt = true;
        this.samp = false;
        this.home = false;
        this.contact = false;
    };
    AppComponent.prototype.set_contact = function () {
        this.router.navigateByUrl('/contact');
        this.notHome = false;
        this.contact = true;
        this.samp = false;
        this.abt = false;
        this.home = false;
    };
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("../../../../../src/app/app.component.html"),
            styles: [__webpack_require__("../../../../../src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_animations__ = __webpack_require__("../../../platform-browser/esm5/animations.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_ng2_semantic_ui__ = __webpack_require__("../../../../ng2-semantic-ui/dist/public.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__app_routing_module__ = __webpack_require__("../../../../../src/app/app-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__input_service__ = __webpack_require__("../../../../../src/app/input.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__land_land_component__ = __webpack_require__("../../../../../src/app/land/land.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__input_input_component__ = __webpack_require__("../../../../../src/app/input/input.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__processing_processing_component__ = __webpack_require__("../../../../../src/app/processing/processing.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__model_model_component__ = __webpack_require__("../../../../../src/app/model/model.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__services_origami_service__ = __webpack_require__("../../../../../src/app/services/origami.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__services_web_socket_service__ = __webpack_require__("../../../../../src/app/services/web-socket.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__services_cust_ext_browser_xhr__ = __webpack_require__("../../../../../src/app/services/cust-ext-browser-xhr.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__sample_component_sample_component_component__ = __webpack_require__("../../../../../src/app/sample-component/sample-component.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__sample_sample_component__ = __webpack_require__("../../../../../src/app/sample/sample.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__about_about_component__ = __webpack_require__("../../../../../src/app/about/about.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__contact_contact_component__ = __webpack_require__("../../../../../src/app/contact/contact.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




// import { RouterModule, Routes } from '@angular/router';
// import { Editor3DModule } from 'ng2-3d-editor';



















/*const appRoutes: Routes = [
  {
    path: '/',
    component: AppComponent,
    data: { title: 'Origami' }
  },
  { path: '',
    redirectTo: '/',
    pathMatch: 'full'
  }
];
*/
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["J" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_10__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_11__land_land_component__["a" /* LandComponent */],
                __WEBPACK_IMPORTED_MODULE_12__input_input_component__["a" /* InputComponent */],
                __WEBPACK_IMPORTED_MODULE_13__processing_processing_component__["a" /* ProcessingComponent */],
                __WEBPACK_IMPORTED_MODULE_14__model_model_component__["a" /* ModelComponent */],
                __WEBPACK_IMPORTED_MODULE_19__sample_component_sample_component_component__["a" /* SampleComponentComponent */],
                __WEBPACK_IMPORTED_MODULE_20__sample_sample_component__["a" /* SampleComponent */],
                __WEBPACK_IMPORTED_MODULE_21__about_about_component__["a" /* AboutComponent */],
                __WEBPACK_IMPORTED_MODULE_22__contact_contact_component__["a" /* ContactComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_3__angular_common__["b" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
                __WEBPACK_IMPORTED_MODULE_16__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_7_ng2_semantic_ui__["a" /* SuiModule */],
                __WEBPACK_IMPORTED_MODULE_8__app_routing_module__["a" /* AppRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_6__angular_forms__["a" /* FormsModule */] /*,
                RouterModule.forRoot(
                  appRoutes,
                  { enableTracing: true } // <-- debugging purposes only
                )*/
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_16__angular_common_http__["b" /* HttpClientModule */], __WEBPACK_IMPORTED_MODULE_9__input_service__["a" /* InputService */], __WEBPACK_IMPORTED_MODULE_15__services_origami_service__["a" /* OrigamiService */], __WEBPACK_IMPORTED_MODULE_17__services_web_socket_service__["a" /* WebSocketService */],
                { provide: __WEBPACK_IMPORTED_MODULE_4__angular_http__["a" /* BrowserXhr */], useClass: __WEBPACK_IMPORTED_MODULE_18__services_cust_ext_browser_xhr__["a" /* CustExtBrowserXhr */] },
                { provide: __WEBPACK_IMPORTED_MODULE_3__angular_common__["g" /* LocationStrategy */], useClass: __WEBPACK_IMPORTED_MODULE_3__angular_common__["d" /* HashLocationStrategy */] }
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_10__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());

Object(__WEBPACK_IMPORTED_MODULE_5__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(AppModule);


/***/ }),

/***/ "../../../../../src/app/contact/contact.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/contact/contact.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  contact works!\n</p>\n"

/***/ }),

/***/ "../../../../../src/app/contact/contact.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContactComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ContactComponent = /** @class */ (function () {
    function ContactComponent() {
    }
    ContactComponent.prototype.ngOnInit = function () {
    };
    ContactComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-contact',
            template: __webpack_require__("../../../../../src/app/contact/contact.component.html"),
            styles: [__webpack_require__("../../../../../src/app/contact/contact.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ContactComponent);
    return ContactComponent;
}());



/***/ }),

/***/ "../../../../../src/app/input.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InputService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

// import { Info } from '../info';
var InputService = /** @class */ (function () {
    /*  info: Info {
        focal_length: 4.7,
        sensor_size: 3.7
      };
    
      focal_length = info.focal_length;
      sensor_size = info.sensor_size;*/
    function InputService() {
    }
    InputService.prototype.getFocal = function () {
        return 4.7;
    };
    InputService.prototype.getSensor = function () {
        return 3.7;
    };
    InputService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
        __metadata("design:paramtypes", [])
    ], InputService);
    return InputService;
}());



/***/ }),

/***/ "../../../../../src/app/input/input.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".tips {\n  color: #444;\n  text-align: center;\n}\n\n#images {\n\t/* padding-left: 15px; */\n\ttext-align: left;\n}\n\n.fileContainer {\n    overflow: hidden;\n    position: relative;\n}\n\n.fileContainer [type=file] {\n\topacity: 0;\n  display: block;\n  top: 0;\n  /*cursor: inherit;\n  font-size: 999px;\n  filter: alpha(opacity=0);\n  min-height: 100%;\n  min-width: 100%;\n  opacity: 0;\n  position: absolute;\n  right: 0;\n  text-align: right;\n  top: 0;*/\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/input/input.component.html":
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"input_page; else processing\">\n  \n  <div class=\"ui tertiary inverted yellow segment\">\n    <div class=\"tips\">\n      <label class=\"fileContainer\">\n        <input type=\"file\" (change)=\"fileChangeEvent($event)\" accept=\"image/jpg, image/png\" placeholder=\"Upload file...\" multiple />\n        <div class=\"ui teal button\">Browse</div>\n        {{uploaded.length}} images selected.\n      </label>\n      <br><br>\n      <div class=\"ui buttons\">\n        <button class=\"ui positive button\" id=\"up\" (click)=\"upload()\">\n          Upload</button>\n        <div class=\"or\"></div>\n        <button class=\"ui button\" id=\"can\" (click)=\"removeAll()\">Cancel</button>\n      </div>\n      <br><br>\n      <div id=\"parent\">\n        <div class=\"ui stackable five column grid\" id=\"images\">\n\n          <div class=\"column\"\n          *ngFor=\"let image of uploaded\">\n            <div class=\"ui compact segment\"\n              [@imageState]=\"image.state\"\n              (mouseenter)=\"image.overlay()\"\n              (mouseleave)=\"image.no_overlay()\"\n            >\n              <img class=\"ui small image\"\n                *ngIf=\"!image.hidden\" [src]=\"image.data\">\n    \n              <sui-dimmer [(isDimmed)]=\"image.dimmed\"\n                (click)=\"image.toggleState(); removeOne(image)\">\n                <div>\n                  <i class=\"trash alternate icon\"><br></i>Remove?\n                </div>\n              </sui-dimmer>\n            </div>\n          </div>\n\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n\n<sui-dimmer class=\"inverted page\" [(isDimmed)]=\"dim_for_load\">\n  <h2 class=\"ui header\">\n    <div class=\"ui text loader\">Uploading...</div>\n  </h2>\n</sui-dimmer>\n\n<sui-dimmer class=\"inverted page\" [(isDimmed)]=\"dim_for_add\">\n  <h2 class=\"ui header\">\n    <div class=\"ui indeterminate text active loader\">Preparing Images...</div>\n  </h2>\n</sui-dimmer>\n\n\n<ng-template #processing>\n  <router-outlet></router-outlet>\n</ng-template>"

/***/ }),

/***/ "../../../../../src/app/input/input.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InputComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_origami_service__ = __webpack_require__("../../../../../src/app/services/origami.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_animations__ = __webpack_require__("../../../animations/esm5/animations.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_take__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/take.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_delay__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/delay.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__models_origami_model__ = __webpack_require__("../../../../../src/app/models/origami.model.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




// import { ViewChild } from '@angular/core';



var InputComponent = /** @class */ (function () {
    function InputComponent(origamiService, router) {
        this.origamiService = origamiService;
        this.router = router;
        this.input_page = true;
        this.not_upload = true;
        this.dim_for_load = false;
        this.dim_for_add = false;
        this.button_label = "Upload";
        this.filesToUpload = [];
        this.files = [];
        this.in = new __WEBPACK_IMPORTED_MODULE_6__models_origami_model__["a" /* default */]();
        this.uploaded = [];
        localStorage.setItem('home', '/input');
    }
    InputComponent.prototype.getUploadUrl = function () {
        return (this.origamiService.getUrl() + "/upload");
    };
    InputComponent.prototype.getData = function () {
        var _this = this;
        this.origamiService.getOrigami()
            .subscribe(function (data) {
            _this.focal_length = data.focal_length;
            _this.sensor_size = data.sensor_size;
        });
    };
    InputComponent.prototype.removeImage = function () {
        // console.log(this);
    };
    InputComponent.prototype.fileChangeEvent = function (fileInput) {
        var _this = this;
        console.log("Detected change!");
        this.dim_for_add = true;
        this.filesToUpload = fileInput.target.files;
        if (!(File && FileList && FileReader)) {
            var spann = document.createElement("span");
            spann.setAttribute("value", "Sorry, your browser does not support File API");
        }
        var len = this.filesToUpload.length;
        console.log(len);
        for (var j = 0; j < len; j++) {
            this.origamiService.readURL(len, this.filesToUpload[j], this.uploaded)
                .then(function (res) {
                console.log(res);
                if (res == false) {
                    _this.dim_for_add = false;
                    for (var i = 0; i < _this.uploaded.length; i++) {
                        if (_this.files.indexOf(_this.uploaded[i].file) === -1)
                            _this.files.push(_this.uploaded[i].file);
                    }
                    console.log("u = " + _this.uploaded.length);
                    console.log("f = " + _this.files.length);
                    document.getElementById("up").removeAttribute("disabled");
                    document.getElementById("can").removeAttribute("disabled");
                }
                console.log(_this.dim_for_add);
            }, function (err) {
                console.log(err);
            });
        }
    };
    InputComponent.prototype.upload = function () {
        var _this = this;
        this.dim_for_load = true;
        var date = new Date();
        var id = "id:" + date.getMonth() + date.getDate() + date.getFullYear()
            + date.getHours() + date.getMinutes() + date.getSeconds()
            + date.getMilliseconds();
        localStorage.setItem('now', id);
        console.log("at input.component.ts " + this.in);
        this.in.focal_length = this.focal_length;
        this.in.sensor_size = this.sensor_size;
        this.in.id = id;
        this.origamiService.addData(this.in)
            .subscribe(function (res) {
            console.log("Data successfully added!");
            _this.origamiService.makeFileRequest(_this.getUploadUrl(), [id], _this.files)
                .then(function (err) {
                console.log(err);
                _this.dim_for_load = false;
                console.log(":(");
            }, function (res) {
                console.log(res);
                _this.input_page = false;
                _this.dim_for_load = false;
                console.log(_this.dim_for_load);
                _this.router.navigateByUrl('/processing');
            });
        });
    };
    InputComponent.prototype.removeOne = function (img) {
        var index = this.uploaded.indexOf(img);
        var index2 = this.files.indexOf(img.file);
        if (index !== -1 && index2 !== -1) {
            this.uploaded.splice(index, 1);
            this.files.splice(index2, 1);
        }
        console.log("u = " + this.uploaded.length);
        console.log("f = " + this.files.length);
    };
    InputComponent.prototype.removeAll = function () {
        document.getElementById("up").setAttribute("disabled", "disabled");
        document.getElementById("can").setAttribute("disabled", "disabled");
        var parent = document.getElementById("parent");
        var div = document.getElementById("images");
        parent.removeChild(div);
        var neww = document.createElement("img");
        neww.setAttribute("class", "ui small images");
        neww.setAttribute("id", "images");
        parent.appendChild(neww);
        this.filesToUpload = [];
        this.uploaded = [];
        this.files = [];
    };
    InputComponent.prototype.ngOnInit = function () {
    };
    InputComponent.prototype.ngAfterViewInit = function () {
        document.getElementById("up").setAttribute("disabled", "disabled");
        document.getElementById("can").setAttribute("disabled", "disabled");
    };
    InputComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-input',
            template: __webpack_require__("../../../../../src/app/input/input.component.html"),
            styles: [__webpack_require__("../../../../../src/app/input/input.component.css")],
            animations: [
                Object(__WEBPACK_IMPORTED_MODULE_3__angular_animations__["j" /* trigger */])('imageState', [
                    Object(__WEBPACK_IMPORTED_MODULE_3__angular_animations__["g" /* state */])('inactive', Object(__WEBPACK_IMPORTED_MODULE_3__angular_animations__["h" /* style */])({
                        opacity: 1
                    })),
                    Object(__WEBPACK_IMPORTED_MODULE_3__angular_animations__["g" /* state */])('active', Object(__WEBPACK_IMPORTED_MODULE_3__angular_animations__["h" /* style */])({
                        opacity: 0
                    })),
                    Object(__WEBPACK_IMPORTED_MODULE_3__angular_animations__["i" /* transition */])('inactive => active', Object(__WEBPACK_IMPORTED_MODULE_3__angular_animations__["e" /* animate */])('100ms ease-in')),
                    Object(__WEBPACK_IMPORTED_MODULE_3__angular_animations__["i" /* transition */])('active => inactive', Object(__WEBPACK_IMPORTED_MODULE_3__angular_animations__["e" /* animate */])('100ms ease-out'))
                ])
            ]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_origami_service__["a" /* OrigamiService */], __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */]])
    ], InputComponent);
    return InputComponent;
}());



/***/ }),

/***/ "../../../../../src/app/land/land.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "#inner_content {\n  text-align: center;\n  width: 100% !important;\n}\n\n.left,\n.right {\n  position: absolute;\n  /* color: #fff; */\n  font-family: Geneva, sans-serif;\n}\n\n.left {\n  bottom: 1em;\n  left: 1em;\n  text-align: left;\n}\n\n.right {\n  top: 0;\n  right: 0;\n  text-align: right;\n}\n\na {\n  color: #ff641c;\n}\n\na:hover {\n  color: #bb4b17;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/land/land.component.html":
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"notStart; else started\">\n\n  <div class=\"centervh\">\n    <div #rendererContainer></div>\n    \n    <div id=\"inner_content\">\n      <h2>Welcome to Origami!</h2>\n      <h3>Transform images to models.</h3>  \n      <a (click)=\"start()\" routerLink=\"/input\">START</a>\n    </div>\n  </div>\n\n</div>\n\n<ng-template #started>\n  <div class=\"normal\">\n    <router-outlet></router-outlet>\n  </div>\n</ng-template>"

/***/ }),

/***/ "../../../../../src/app/land/land.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LandComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_three__ = __webpack_require__("../../../../three/build/three.module.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var LandComponent = /** @class */ (function () {
    function LandComponent() {
        this.notStart = true;
        this.renderer = new __WEBPACK_IMPORTED_MODULE_1_three__["WebGLRenderer"]({ alpha: true });
        this.scene = null;
        this.camera = null;
        this.cube = null;
        this.materials = null;
        this.scene = new __WEBPACK_IMPORTED_MODULE_1_three__["Scene"]();
        this.camera = new __WEBPACK_IMPORTED_MODULE_1_three__["PerspectiveCamera"](75, window.innerWidth / window.innerHeight, 1, 10000);
        this.camera.position.z = 1000;
        this.createRubixMaterial();
        var geometry = new __WEBPACK_IMPORTED_MODULE_1_three__["BoxGeometry"](700, 700, 700);
        var material = new __WEBPACK_IMPORTED_MODULE_1_three__["MultiMaterial"](this.materials);
        this.cube = new __WEBPACK_IMPORTED_MODULE_1_three__["Mesh"](geometry, material);
        this.scene.add(this.cube);
    }
    LandComponent.prototype.createRubixMaterial = function () {
        var material1 = new __WEBPACK_IMPORTED_MODULE_1_three__["MeshBasicMaterial"]({ color: 0x8dff76,
            transparent: true, opacity: 0.8 });
        var material2 = new __WEBPACK_IMPORTED_MODULE_1_three__["MeshBasicMaterial"]({ color: 0xa9ffc6,
            transparent: true, opacity: 0.8 });
        var material3 = new __WEBPACK_IMPORTED_MODULE_1_three__["MeshBasicMaterial"]({ color: 0x72dbff,
            transparent: true, opacity: 0.8 });
        var material4 = new __WEBPACK_IMPORTED_MODULE_1_three__["MeshBasicMaterial"]({ color: 0x7cb6ff,
            transparent: true, opacity: 0.8 });
        var material5 = new __WEBPACK_IMPORTED_MODULE_1_three__["MeshBasicMaterial"]({ color: 0xab94ff,
            transparent: true, opacity: 0.8 });
        var material6 = new __WEBPACK_IMPORTED_MODULE_1_three__["MeshBasicMaterial"]({ color: 0xab94ff,
            transparent: true, opacity: 0.8 });
        this.materials = [material1, material2, material3, material4, material5, material6];
    };
    LandComponent.prototype.start = function () {
        this.notStart = false;
    };
    LandComponent.prototype.ngAfterViewInit = function () {
        this.renderer.setSize(window.innerWidth, window.innerHeight);
        this.rendererContainer.nativeElement.appendChild(this.renderer.domElement);
        this.animate();
    };
    LandComponent.prototype.animate = function () {
        var _this = this;
        window.requestAnimationFrame(function () { return _this.animate(); });
        this.cube.rotation.x += 0.009;
        this.cube.rotation.y += 0.008;
        this.renderer.render(this.scene, this.camera);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* ViewChild */])('rendererContainer'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ElementRef */])
    ], LandComponent.prototype, "rendererContainer", void 0);
    LandComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-land',
            template: __webpack_require__("../../../../../src/app/land/land.component.html"),
            styles: [__webpack_require__("../../../../../src/app/land/land.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], LandComponent);
    return LandComponent;
}());



/***/ }),

/***/ "../../../../../src/app/model/model.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/model/model.component.html":
/***/ (function(module, exports) {

module.exports = "<div>\n  Model has to be here\n  <div #modelContainer></div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/model/model.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ModelComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_origami_service__ = __webpack_require__("../../../../../src/app/services/origami.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_three__ = __webpack_require__("../../../../three/build/three.module.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var OrbitControls = __webpack_require__("../../../../three-orbit-controls/index.js")(__WEBPACK_IMPORTED_MODULE_2_three__);
var OBJLoader = __webpack_require__("../../../../three-obj-loader/dist/index.js")(__WEBPACK_IMPORTED_MODULE_2_three__);
var TrackballControls = __webpack_require__("../../../../three-trackballcontrols/index.js");
// var DragControls = require('three-dragcontrols')
var loader = new __WEBPACK_IMPORTED_MODULE_2_three__["OBJLoader"]();
var ModelComponent = /** @class */ (function () {
    function ModelComponent(render, origamiService) {
        this.render = render;
        this.origamiService = origamiService;
        localStorage.setItem('home', '/model');
        this.origamiService.sendMsg("dc");
        this.path = "assets/webgl/scene_mesh_texture.obj";
        this.r = 20;
    }
    ModelComponent.prototype.ngOnInit = function () {
        var _this = this;
        //add listener for the resize of the window - will resize the renderer to fit the window
        var global = this.render.listen('window', 'resize', function (evt) {
            _this.onWindowResize();
        });
    };
    ModelComponent.prototype.ngAfterViewInit = function () {
        this.init3D();
    };
    ModelComponent.prototype.init3D = function () {
        var _this = this;
        // renderer
        this.renderer = new __WEBPACK_IMPORTED_MODULE_2_three__["WebGLRenderer"]({ alpha: true });
        this.rendererContainer.nativeElement.appendChild(this.renderer.domElement);
        this.renderer.setSize(window.innerWidth, window.innerHeight);
        // scene
        this.scene = new __WEBPACK_IMPORTED_MODULE_2_three__["Scene"]();
        this.scene.background = new __WEBPACK_IMPORTED_MODULE_2_three__["Color"](0xFFFFFF);
        // camera
        this.camera = new __WEBPACK_IMPORTED_MODULE_2_three__["PerspectiveCamera"](35, window.innerWidth / window.innerHeight, 0.01, 10000);
        this.camera.position.set(113, 111, 113);
        this.camera.aspect = window.innerWidth / window.innerHeight;
        this.scene.add(new __WEBPACK_IMPORTED_MODULE_2_three__["AmbientLight"](0x222222));
        this.scene.add(this.camera); // required, because we are adding a light asd a child of the camera
        // controls
        // this.controls = new DragControls(this.camera);
        this.controller = new TrackballControls(this.camera);
        // lights
        var light = new __WEBPACK_IMPORTED_MODULE_2_three__["PointLight"](0xffffff, 0.8);
        this.camera.add(light);
        loader.load(this.path, function (geometry) {
            geometry.traverse(function (child) {
                if (child instanceof __WEBPACK_IMPORTED_MODULE_2_three__["Mesh"]) {
                    // mesh
                    var material = new __WEBPACK_IMPORTED_MODULE_2_three__["MeshPhongMaterial"]({
                        color: 0x0099cc,
                        polygonOffset: true,
                        polygonOffsetFactor: 1,
                        polygonOffsetUnits: 1
                    });
                    child.material = material;
                    // wireframe
                    var geo = new __WEBPACK_IMPORTED_MODULE_2_three__["WireframeGeometry"](child.geometry); // or WireframeGeometry
                    var mat = new __WEBPACK_IMPORTED_MODULE_2_three__["LineBasicMaterial"]({ color: 0xa2a276, linewidth: 1 });
                    var wireframe = new __WEBPACK_IMPORTED_MODULE_2_three__["LineSegments"](geo, mat);
                    child.add(wireframe);
                }
            });
            geometry.rotateX(90);
            geometry.rotateY(180);
            geometry.rotateZ(90);
            geometry.scale.x = 40;
            geometry.scale.y = 20;
            geometry.scale.z = 20;
            _this.scene.add(geometry);
        });
        //request animation
        this.animate();
        this.resize();
    };
    ModelComponent.prototype.resize = function () {
        var width = this.renderer.domElement.clientWidth;
        var height = this.renderer.domElement.clientHeight;
        this.renderer.setSize(width, height);
        this.camera.aspect = width / height;
        this.controller.handleResize();
        // this.controls.handleResize();
    };
    ModelComponent.prototype.animate = function () {
        var _this = this;
        window.requestAnimationFrame(function (_) { return _this.animate(); });
        this.scene.rotation.y += 0.1 * Math.PI / 180;
        this.controller.update();
        // this.controls.update();
        this.renderer.render(this.scene, this.camera);
    };
    ModelComponent.prototype.onWindowResize = function () {
        this.camera.aspect = window.innerWidth / window.innerHeight;
        this.camera.updateProjectionMatrix();
        this.renderer.setSize(window.innerWidth, window.innerHeight);
        this.controller.update();
        // this.controls.update();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* ViewChild */])("modelContainer"),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ElementRef */])
    ], ModelComponent.prototype, "rendererContainer", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", String)
    ], ModelComponent.prototype, "path", void 0);
    ModelComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-model',
            template: __webpack_require__("../../../../../src/app/model/model.component.html"),
            styles: [__webpack_require__("../../../../../src/app/model/model.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["Y" /* Renderer2 */], __WEBPACK_IMPORTED_MODULE_1__services_origami_service__["a" /* OrigamiService */]])
    ], ModelComponent);
    return ModelComponent;
}());



/***/ }),

/***/ "../../../../../src/app/models/origami.model.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var OrigamiInput = /** @class */ (function () {
    function OrigamiInput() {
        this.focal_length = 0;
        this.sensor_size = 0;
        this.id = "";
    }
    return OrigamiInput;
}());
/* harmony default export */ __webpack_exports__["a"] = (OrigamiInput);


/***/ }),

/***/ "../../../../../src/app/models/uploaded-image.model.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var UploadedImage = /** @class */ (function () {
    function UploadedImage(state) {
        if (state === void 0) { state = "inactive"; }
        this.state = state;
        this.dimmed = false;
        this.hidden = false;
    }
    UploadedImage.prototype.toggleState = function () {
        this.state = this.state === 'active' ? 'inactive' : 'active';
        this.hidden = true;
    };
    UploadedImage.prototype.overlay = function () {
        this.dimmed = true;
    };
    UploadedImage.prototype.no_overlay = function () {
        this.dimmed = false;
    };
    return UploadedImage;
}());
/* harmony default export */ __webpack_exports__["a"] = (UploadedImage);


/***/ }),

/***/ "../../../../../src/app/processing/processing.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/processing/processing.component.html":
/***/ (function(module, exports) {

module.exports = "<div>\n  <sui-progress class=\"indicating\" [value]=\"ia_val\" [showProgress]=true [maximum]=100 [precision]=0>\n    {{image_analysis}} {{progress}}\n  </sui-progress>\n\n  <sui-progress class=\"indicating\" [value]=\"fe_val\" [showProgress]=true [maximum]=100 [precision]=0>\n    {{feature_extraction}}\n  </sui-progress>\n\n  <sui-progress class=\"indicating\" [value]=\"m_val\" [showProgress]=true [maximum]=100 [precision]=0>\n    {{matching}}\n  </sui-progress>\n\n  <sui-progress class=\"indicating\" [value]=\"r_val\" [showProgress]=true [maximum]=100 [precision]=0>\n    {{reconstruction}}\n  </sui-progress>\n\n  <sui-progress class=\"indicating\" [value]=\"me_val\" [showProgress]=true [maximum]=100 [precision]=0>\n    {{mesh}}\n  </sui-progress>\n\n</div>\n\n<sui-dimmer class=\"inverted page\" [(isDimmed)]=\"dim_for_load\">\n  <h2 class=\"ui header\">\n    <div class=\"ui text loader\">Finishing up...</div>\n  </h2>\n</sui-dimmer>"

/***/ }),

/***/ "../../../../../src/app/processing/processing.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProcessingComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_origami_service__ = __webpack_require__("../../../../../src/app/services/origami.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ProcessingComponent = /** @class */ (function () {
    function ProcessingComponent(origamiService, router) {
        this.origamiService = origamiService;
        this.router = router;
        this.dim_for_load = false;
        this.image_analysis = "No progress yet.";
        this.feature_extraction = "No progress yet.";
        this.matching = "No progress yet.";
        this.reconstruction = "No progress yet.";
        this.mesh = "No progress yet.";
        this.ia_val = 0;
        this.fe_val = 0;
        this.m_val = 0;
        this.r_val = 0;
        this.me_val = 0;
        this.progress = "";
        localStorage.setItem('home', '/processing');
        this.sendMessage();
        /* var p = 10;
        while(p > 0) {
          console.log("Processing...");
          this.process();
          --p;
        } */
        // this.origamiService.check();
        /* while (!this.all_done) {
          setTimeout(() => {
            if(this.ia_val < 100)
              this.ia_val+=10;
            else if(this.fe_val < 100)
              this.fe_val+=10;
            else if(this.m_val < 100)
              this.m_val+=10;
            else if(this.r_val < 100)
              this.r_val+=10;
            else if(this.me_val < 100)
              this.me_val+=10;
          }, 5000);
    
          if(this.me_val >= 100)
            this.all_done = true;
        } */
    }
    ProcessingComponent.prototype.commence = function () {
        this.origamiService.commence()
            .subscribe(function (res) {
            console.log(res.data);
            if (res.data == "ok")
                // this.sendMessage();
                console.log("ayyy");
        });
    };
    ProcessingComponent.prototype.process = function () {
        this.origamiService.process()
            .subscribe(function (res) {
            console.log(res.data);
            return res.data;
        });
        /* .then((err) => {
          console.log(err);
        }, (res) => {
          console.log(res);
        }); */
    };
    ProcessingComponent.prototype.start_load = function () {
        var _this = this;
        this.dim_for_load = true;
        setTimeout(function () { return _this.router.navigateByUrl('/model'); }, 2000);
    };
    ProcessingComponent.prototype.ngOnInit = function () {
        var _this = this;
        // this.start_load();
        this.origamiService.messages.subscribe(function (msg) {
            console.log(msg);
            if (msg.step == 1) {
                _this.image_analysis = "Image analysis: " + msg.progress;
                _this.ia_val = msg.percent;
                if (_this.ia_val == 100) {
                    _this.image_analysis = "Image analysis done!";
                    _this.feature_extraction = "Extracting features: Starting...";
                    _this.fe_val = 2;
                }
            }
            if (msg.step == 2) {
                _this.image_analysis = "Image analysis done!";
                _this.ia_val = 100;
                _this.feature_extraction = "Extracting features: " + msg.progress;
                if (_this.fe_val < msg.percent)
                    _this.fe_val = msg.percent;
            }
            if (msg.step == 3) {
                _this.feature_extraction = "Extracting features done!";
                _this.fe_val = 100;
                _this.matching = "Matching features: " + msg.progress;
                _this.m_val = msg.percent;
            }
            if (msg.step == 4) {
                if (msg.percent == 100) {
                    _this.image_analysis = "Image analysis done!";
                    _this.ia_val = 100;
                    _this.feature_extraction = "Extracting features done!";
                    _this.fe_val = 100;
                    _this.matching = "Matching features done!";
                    _this.m_val = 100;
                    _this.reconstruction = "Reconstructing Sparse Point Cloud done!";
                    _this.r_val = 100;
                    console.log("heeey");
                    _this.start_load();
                }
                else {
                    _this.matching = "Matching features done!";
                    _this.m_val = 100;
                    _this.reconstruction = "Reconstructing Sparse Point Cloud: " + msg.progress;
                    _this.r_val = msg.percent;
                }
            }
        });
    };
    ProcessingComponent.prototype.sendMessage = function () {
        "AGAAAIN";
        this.origamiService.sendMsg(localStorage.getItem('now'));
    };
    ProcessingComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-processing',
            template: __webpack_require__("../../../../../src/app/processing/processing.component.html"),
            styles: [__webpack_require__("../../../../../src/app/processing/processing.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_origami_service__["a" /* OrigamiService */], __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */]])
    ], ProcessingComponent);
    return ProcessingComponent;
}());



/***/ }),

/***/ "../../../../../src/app/sample-component/sample-component.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/sample-component/sample-component.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  sample-component works!\n</p>\n"

/***/ }),

/***/ "../../../../../src/app/sample-component/sample-component.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SampleComponentComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SampleComponentComponent = /** @class */ (function () {
    function SampleComponentComponent() {
    }
    SampleComponentComponent.prototype.ngOnInit = function () {
    };
    SampleComponentComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-sample-component',
            template: __webpack_require__("../../../../../src/app/sample-component/sample-component.component.html"),
            styles: [__webpack_require__("../../../../../src/app/sample-component/sample-component.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], SampleComponentComponent);
    return SampleComponentComponent;
}());



/***/ }),

/***/ "../../../../../src/app/sample/sample.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/sample/sample.component.html":
/***/ (function(module, exports) {

module.exports = "<div>\n  <a href=\"assets/webgl/scene_mesh_texture.obj\" download> Download </a>\n  <div #modelContainer></div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/sample/sample.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SampleComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_three__ = __webpack_require__("../../../../three/build/three.module.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var OrbitControls = __webpack_require__("../../../../three-orbit-controls/index.js")(__WEBPACK_IMPORTED_MODULE_1_three__);
var OBJLoader = __webpack_require__("../../../../three-obj-loader/dist/index.js")(__WEBPACK_IMPORTED_MODULE_1_three__);
var TrackballControls = __webpack_require__("../../../../three-trackballcontrols/index.js");
// var DragControls = require('three-dragcontrols')
var loader = new __WEBPACK_IMPORTED_MODULE_1_three__["OBJLoader"]();
var SampleComponent = /** @class */ (function () {
    function SampleComponent(render) {
        this.render = render;
        this.path = "assets/webgl/scene_mesh_texture.obj";
        this.r = 20;
    }
    SampleComponent.prototype.ngOnInit = function () {
        var _this = this;
        //add listener for the resize of the window - will resize the renderer to fit the window
        var global = this.render.listen('window', 'resize', function (evt) {
            _this.onWindowResize();
        });
    };
    SampleComponent.prototype.ngAfterViewInit = function () {
        this.init3D();
    };
    SampleComponent.prototype.init3D = function () {
        var _this = this;
        // renderer
        this.renderer = new __WEBPACK_IMPORTED_MODULE_1_three__["WebGLRenderer"]({ alpha: true });
        this.rendererContainer.nativeElement.appendChild(this.renderer.domElement);
        this.renderer.setSize(window.innerWidth, window.innerHeight);
        // scene
        this.scene = new __WEBPACK_IMPORTED_MODULE_1_three__["Scene"]();
        this.scene.background = new __WEBPACK_IMPORTED_MODULE_1_three__["Color"](0xFFFFFF);
        // camera
        this.camera = new __WEBPACK_IMPORTED_MODULE_1_three__["PerspectiveCamera"](35, window.innerWidth / window.innerHeight, 0.01, 10000);
        this.camera.position.set(113, 111, 113);
        this.camera.aspect = window.innerWidth / window.innerHeight;
        this.scene.add(new __WEBPACK_IMPORTED_MODULE_1_three__["AmbientLight"](0x222222));
        this.scene.add(this.camera); // required, because we are adding a light asd a child of the camera
        // controls
        // this.controls = new DragControls(this.camera);
        this.controller = new TrackballControls(this.camera);
        // lights
        var light = new __WEBPACK_IMPORTED_MODULE_1_three__["PointLight"](0xffffff, 0.8);
        this.camera.add(light);
        loader.load(this.path, function (geometry) {
            geometry.traverse(function (child) {
                if (child instanceof __WEBPACK_IMPORTED_MODULE_1_three__["Mesh"]) {
                    // mesh
                    var material = new __WEBPACK_IMPORTED_MODULE_1_three__["MeshPhongMaterial"]({
                        color: 0x0099cc,
                        polygonOffset: true,
                        polygonOffsetFactor: 1,
                        polygonOffsetUnits: 1
                    });
                    child.material = material;
                    // wireframe
                    var geo = new __WEBPACK_IMPORTED_MODULE_1_three__["WireframeGeometry"](child.geometry); // or WireframeGeometry
                    var mat = new __WEBPACK_IMPORTED_MODULE_1_three__["LineBasicMaterial"]({ color: 0xa2a276, linewidth: 1 });
                    var wireframe = new __WEBPACK_IMPORTED_MODULE_1_three__["LineSegments"](geo, mat);
                    child.add(wireframe);
                }
            });
            geometry.rotateX(90);
            geometry.rotateY(180);
            geometry.rotateZ(90);
            geometry.scale.x = 40;
            geometry.scale.y = 20;
            geometry.scale.z = 20;
            _this.scene.add(geometry);
        });
        //request animation
        this.animate();
        this.resize();
    };
    SampleComponent.prototype.resize = function () {
        var width = this.renderer.domElement.clientWidth;
        var height = this.renderer.domElement.clientHeight;
        this.renderer.setSize(width, height);
        this.camera.aspect = width / height;
        this.controller.handleResize();
        // this.controls.handleResize();
    };
    SampleComponent.prototype.animate = function () {
        var _this = this;
        window.requestAnimationFrame(function (_) { return _this.animate(); });
        this.scene.rotation.y += 0.1 * Math.PI / 180;
        this.controller.update();
        // this.controls.update();
        this.renderer.render(this.scene, this.camera);
    };
    SampleComponent.prototype.onWindowResize = function () {
        this.camera.aspect = window.innerWidth / window.innerHeight;
        this.camera.updateProjectionMatrix();
        this.renderer.setSize(window.innerWidth, window.innerHeight);
        this.controller.update();
        // this.controls.update();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* ViewChild */])("modelContainer"),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ElementRef */])
    ], SampleComponent.prototype, "rendererContainer", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", String)
    ], SampleComponent.prototype, "path", void 0);
    SampleComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-sample',
            template: __webpack_require__("../../../../../src/app/sample/sample.component.html"),
            styles: [__webpack_require__("../../../../../src/app/sample/sample.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["Y" /* Renderer2 */]])
    ], SampleComponent);
    return SampleComponent;
}());



/***/ }),

/***/ "../../../../../src/app/services/cust-ext-browser-xhr.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CustExtBrowserXhr; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var CustExtBrowserXhr = /** @class */ (function (_super) {
    __extends(CustExtBrowserXhr, _super);
    function CustExtBrowserXhr() {
        return _super.call(this) || this;
    }
    CustExtBrowserXhr.prototype.build = function () {
        var xhr = _super.prototype.build.call(this);
        xhr.withCredentials = true; // this is all the magic we need for now
        return (xhr);
    };
    CustExtBrowserXhr = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])()
        /**
         * author AhsanAyaz
         * We're extending the BrowserXhr to support CORS
         * https://medium.com/@ahsan.ayaz/how-to-handle-cors-in-an-angular2-and-node-express-applications-eb3de412abef
         */
        ,
        __metadata("design:paramtypes", [])
    ], CustExtBrowserXhr);
    return CustExtBrowserXhr;
}(__WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* BrowserXhr */]));



/***/ }),

/***/ "../../../../../src/app/services/origami.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OrigamiService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__web_socket_service__ = __webpack_require__("../../../../../src/app/services/web-socket.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__models_uploaded_image_model__ = __webpack_require__("../../../../../src/app/models/uploaded-image.model.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var OrigamiService = /** @class */ (function () {
    function OrigamiService(http, ws) {
        this.http = http;
        this.ws = ws;
        this.api_url = 'http://localhost:8080';
        this.origami_url = this.api_url + "/api/origami";
        this.messages = ws
            .connect()
            .map(function (res) {
            console.log(res);
            return res;
        });
    }
    OrigamiService.prototype.sendMsg = function (msg) {
        console.log("ah pota");
        this.messages.next(msg);
        this.id = msg;
    };
    OrigamiService.prototype.getUrl = function () {
        return this.origami_url;
    };
    OrigamiService.prototype.getOrigami = function () {
        return this.http.get(this.origami_url)
            .map(function (res) {
            console.log(res["data"]);
            return res["data"].docs;
        });
    };
    OrigamiService.prototype.addData = function (input) {
        //returns the observable of http post request
        console.log("at" + input.id + ": " + input.focal_length + " " + input.sensor_size);
        return this.http.post(this.origami_url + "/add", input);
    };
    OrigamiService.prototype.makeFileRequest = function (url, params, files) {
        return new Promise(function (resolve, reject) {
            var formData = new FormData();
            var xhr = new XMLHttpRequest();
            console.log("hi: " + params[0]);
            for (var i = 0; i < files.length; i++) {
                formData.append("uploads", files[i], files[i].name);
            }
            xhr.onreadystatechange = function () {
                if (xhr.readyState == 4) {
                    if (xhr.status == 200) {
                        resolve(JSON.parse(xhr.response));
                    }
                    else {
                        reject(xhr.response);
                    }
                }
            };
            xhr.open("POST", url, true);
            xhr.send(formData);
        });
    };
    OrigamiService.prototype.readURL = function (len, file, uploaded) {
        return new Promise(function (resolve, reject) {
            var reader = new FileReader();
            reader.onload = function (e) {
                var ima = new __WEBPACK_IMPORTED_MODULE_4__models_uploaded_image_model__["a" /* default */]();
                ima.data = e.target.result;
                ima.name = file.name;
                ima.file = file;
                uploaded.push(ima);
                if (uploaded.length >= len)
                    return resolve(false);
                else
                    return reject(true);
            };
            reader.readAsDataURL(file);
        });
    };
    OrigamiService.prototype.upload = function (uploaded_files) {
        console.log("@ origami.service.ts");
        console.log(uploaded_files);
        return this.http.post("" + this.origami_url + '/upload', uploaded_files);
    };
    OrigamiService.prototype.commence = function () {
        console.log("Trying to run...");
        return this.http.post("" + this.origami_url + '/commence', []);
    };
    OrigamiService.prototype.process = function () {
        console.log("p@ origami.service.ts");
        return this.http.post("" + this.origami_url + '/process', []);
    };
    OrigamiService.prototype.handleError = function (error) {
        console.error('An error occured', error);
        return Promise.reject(error.message || error);
    };
    OrigamiService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["B" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_2__web_socket_service__["a" /* WebSocketService */]])
    ], OrigamiService);
    return OrigamiService;
}());



/***/ }),

/***/ "../../../../../src/app/services/web-socket.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WebSocketService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_socket_io_client__ = __webpack_require__("../../../../socket.io-client/lib/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_socket_io_client___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_socket_io_client__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__("../../../../rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Rx__ = __webpack_require__("../../../../rxjs/_esm5/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var WebSocketService = /** @class */ (function () {
    function WebSocketService() {
    }
    WebSocketService.prototype.connect = function () {
        var _this = this;
        // If you aren't familiar with environment variables then
        // you can hard code `environment.ws_url` as `http://localhost:8080`
        this.socket = __WEBPACK_IMPORTED_MODULE_1_socket_io_client__(__WEBPACK_IMPORTED_MODULE_4__environments_environment__["a" /* environment */].ws_url);
        // We define our observable which will observe any incoming messages
        // from our socket.io server.
        var observable = new __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["a" /* Observable */](function (observer) {
            _this.socket.on('message', function (data) {
                console.log("Received message from Websocket Server");
                observer.next(data);
            });
            _this.socket.on('ping', function (data) {
                console.log("Received message from Websocket Server");
                _this.socket.emit('pong', "pong");
            });
            return function () {
                _this.socket.disconnect();
            };
        });
        // We define our Observer which will listen to messages
        // from our other components and send messages back to our
        // socket server whenever the `next()` method is called.
        var observer = {
            next: function (data) {
                console.log("sup");
                _this.socket.emit('message', data); //JSON.stringify(data));
            },
        };
        // we return our Rx.Subject which is a combination
        // of both an observer and observable.
        return __WEBPACK_IMPORTED_MODULE_3_rxjs_Rx__["a" /* Subject */].create(observer, observable);
    };
    WebSocketService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
        __metadata("design:paramtypes", [])
    ], WebSocketService);
    return WebSocketService;
}());



/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false,
    ws_url: "http://localhost:8080"
};


/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_17" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ }),

/***/ 1:
/***/ (function(module, exports) {

/* (ignored) */

/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map