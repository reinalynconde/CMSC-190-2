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

module.exports = "<div class=\"normal\">\n\n  <h2>Hi! My name is Mary Cris Joy Cantimbuhan. I am a BS Computer Science student from UPLB. This project is part of my Special Problem entitled, \"Origami: A Web Application for Reconstructing 3D Models from Images.\"</h2>\n  \n  <br>\n\n  <h2>For further questions or clarifications, feel free to send an email to mccantimbuhan@up.edu.ph.</h2>\n</div>\n"

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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__sample1_sample1_component__ = __webpack_require__("../../../../../src/app/sample1/sample1.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__sample2_sample2_component__ = __webpack_require__("../../../../../src/app/sample2/sample2.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__sample3_sample3_component__ = __webpack_require__("../../../../../src/app/sample3/sample3.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__about_about_component__ = __webpack_require__("../../../../../src/app/about/about.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};











var routes = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_10__app_component__["a" /* AppComponent */] },
    { path: 'home', component: __WEBPACK_IMPORTED_MODULE_2__land_land_component__["a" /* LandComponent */] },
    { path: 'input', component: __WEBPACK_IMPORTED_MODULE_3__input_input_component__["a" /* InputComponent */] },
    { path: 'processing', component: __WEBPACK_IMPORTED_MODULE_4__processing_processing_component__["a" /* ProcessingComponent */] },
    { path: 'model', component: __WEBPACK_IMPORTED_MODULE_5__model_model_component__["a" /* ModelComponent */] },
    { path: 'sample1', component: __WEBPACK_IMPORTED_MODULE_6__sample1_sample1_component__["a" /* Sample1Component */] },
    { path: 'sample2', component: __WEBPACK_IMPORTED_MODULE_7__sample2_sample2_component__["a" /* Sample2Component */] },
    { path: 'sample3', component: __WEBPACK_IMPORTED_MODULE_8__sample3_sample3_component__["a" /* Sample3Component */] },
    { path: 'about', component: __WEBPACK_IMPORTED_MODULE_9__about_about_component__["a" /* AboutComponent */] },
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

module.exports = "<sui-tabset>\n\n<!-- </sui-tabset> *ngIf=\"notHome; else home\"> -->\n  <div class=\"ui secondary pointing menu site-header\">\n    <a class=\"item active\" suiTabHeader=\"home\" (click)=\"set_home()\">\n      Origami\n    </a>\n    <a class=\"item\" suiTabHeader=\"samp\" (click)=\"set_samp()\">\n      Samples\n    </a>\n    <a class=\"item\" suiTabHeader=\"abt\" (click)=\"set_abt()\">\n      About\n    </a>\n  </div>\n\n  <div suiTabContent=\"home\">\n    <div class=\"normal\" *ngIf=\"home\">\n      <router-outlet></router-outlet>\n    </div>\n  </div>\n\n  <div suiTabContent=\"samp\">\n    <div class=\"normal\" *ngIf=\"samp\">\n      <router-outlet></router-outlet>\n    </div>\n  </div>\n\n  <div suiTabContent=\"abt\">\n    <div class=\"normal\" *ngIf=\"abt\">\n      <router-outlet></router-outlet>\n    </div>\n  </div>\n</sui-tabset>\n"

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
        this.router.navigateByUrl('/sample1');
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__land_land_component__ = __webpack_require__("../../../../../src/app/land/land.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__input_input_component__ = __webpack_require__("../../../../../src/app/input/input.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__processing_processing_component__ = __webpack_require__("../../../../../src/app/processing/processing.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__model_model_component__ = __webpack_require__("../../../../../src/app/model/model.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__services_origami_service__ = __webpack_require__("../../../../../src/app/services/origami.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__services_web_socket_service__ = __webpack_require__("../../../../../src/app/services/web-socket.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__services_cust_ext_browser_xhr__ = __webpack_require__("../../../../../src/app/services/cust-ext-browser-xhr.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__about_about_component__ = __webpack_require__("../../../../../src/app/about/about.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__sample1_sample1_component__ = __webpack_require__("../../../../../src/app/sample1/sample1.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__sample2_sample2_component__ = __webpack_require__("../../../../../src/app/sample2/sample2.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__sample3_sample3_component__ = __webpack_require__("../../../../../src/app/sample3/sample3.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




// import { RouterModule, Routes } from '@angular/router';
// import { Editor3DModule } from 'ng2-3d-editor';


















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["J" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_9__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_10__land_land_component__["a" /* LandComponent */],
                __WEBPACK_IMPORTED_MODULE_11__input_input_component__["a" /* InputComponent */],
                __WEBPACK_IMPORTED_MODULE_12__processing_processing_component__["a" /* ProcessingComponent */],
                __WEBPACK_IMPORTED_MODULE_13__model_model_component__["a" /* ModelComponent */],
                __WEBPACK_IMPORTED_MODULE_18__about_about_component__["a" /* AboutComponent */],
                __WEBPACK_IMPORTED_MODULE_19__sample1_sample1_component__["a" /* Sample1Component */],
                __WEBPACK_IMPORTED_MODULE_20__sample2_sample2_component__["a" /* Sample2Component */],
                __WEBPACK_IMPORTED_MODULE_21__sample3_sample3_component__["a" /* Sample3Component */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_3__angular_common__["b" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
                __WEBPACK_IMPORTED_MODULE_15__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_7_ng2_semantic_ui__["a" /* SuiModule */],
                __WEBPACK_IMPORTED_MODULE_8__app_routing_module__["a" /* AppRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_6__angular_forms__["a" /* FormsModule */]
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_15__angular_common_http__["b" /* HttpClientModule */], __WEBPACK_IMPORTED_MODULE_14__services_origami_service__["a" /* OrigamiService */], __WEBPACK_IMPORTED_MODULE_16__services_web_socket_service__["a" /* WebSocketService */],
                { provide: __WEBPACK_IMPORTED_MODULE_4__angular_http__["a" /* BrowserXhr */], useClass: __WEBPACK_IMPORTED_MODULE_17__services_cust_ext_browser_xhr__["a" /* CustExtBrowserXhr */] },
                { provide: __WEBPACK_IMPORTED_MODULE_3__angular_common__["g" /* LocationStrategy */], useClass: __WEBPACK_IMPORTED_MODULE_3__angular_common__["d" /* HashLocationStrategy */] }
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_9__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());

Object(__WEBPACK_IMPORTED_MODULE_5__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(AppModule);


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
    InputComponent.prototype.fileChangeEvent = function (fileInput) {
        var _this = this;
        this.dim_for_add = true;
        this.filesToUpload = fileInput.target.files;
        if (!(File && FileList && FileReader)) {
            var spann = document.createElement("span");
            spann.setAttribute("value", "Sorry, your browser does not support File API");
        }
        var len = this.filesToUpload.length;
        for (var j = 0; j < len; j++) {
            this.origamiService.readURL(len, this.filesToUpload[j], this.uploaded)
                .then(function (res) {
                //console.log(res);
                if (res == false) {
                    _this.dim_for_add = false;
                    for (var i = 0; i < _this.uploaded.length; i++) {
                        if (_this.files.indexOf(_this.uploaded[i].file) === -1)
                            _this.files.push(_this.uploaded[i].file);
                    }
                    //console.log("u = " + this.uploaded.length);
                    //console.log("f = " + this.files.length);
                    document.getElementById("up").removeAttribute("disabled");
                    document.getElementById("can").removeAttribute("disabled");
                }
                //console.log(this.dim_for_add);
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
        //console.log("at input.component.ts " + this.in);
        this.in.focal_length = this.focal_length;
        this.in.sensor_size = this.sensor_size;
        this.in.id = id;
        this.origamiService.addData(this.in)
            .subscribe(function (res) {
            //console.log("Data successfully added!");
            var len = _this.uploaded.length;
            if (len > 16)
                len = 16;
            for (var x = 0; x < len; x++) {
                localStorage.setItem(x + '', _this.uploaded[x].name + '');
            }
            _this.origamiService.makeFileRequest(_this.getUploadUrl(), [id], _this.files)
                .then(function (err) {
                console.log(err);
                _this.dim_for_load = false;
                //console.log(":(");
            }, function (res) {
                console.log(res);
                _this.input_page = false;
                _this.dim_for_load = false;
                //console.log(this.dim_for_load);
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
        //console.log("u = " + this.uploaded.length);
        //console.log("f = " + this.files.length);
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
exports.push([module.i, "#inner_content {\n  text-align: center;\n  width: 100% !important;\n}\n\n@media screen and (min-device-width: 1318px)\n{\n  #welcome {\n    font-size: 5em;\n  }\n  \n  #trans {\n    font-size: 3em;\n  }\n}\n\n@media screen and (max-device-width: 1318px)\n{\n  #welcome {\n    font-size: 2em;\n  }\n  \n  #trans {\n    font-size: 1.5em;\n  }\n}\n\n.left,\n.right {\n  position: absolute;\n  /* color: #fff; */\n  font-family: Geneva, sans-serif;\n}\n\n.left {\n  bottom: 1em;\n  left: 1em;\n  text-align: left;\n}\n\n.right {\n  top: 0;\n  right: 0;\n  text-align: right;\n}\n\na {\n  color: #ff641c;\n}\n\na:hover {\n  color: #bb4b17;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/land/land.component.html":
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"notStart; else started\">\n\n  <div class=\"centervh\">\n    <div #rendererContainer></div>\n    \n    <div id=\"inner_content\">\n      <div id=\"welcome\">Welcome to Origami!</div>\n      <br><br>\n      <div id=\"trans\">Transform images to models.</div>\n      <br>\n      <div class=\"ui orange button\" (click)=\"start()\" routerLink=\"/input\">START</div>\n    </div>\n  </div>\n\n</div>\n\n<ng-template #started>\n  <div class=\"normal\">\n    <router-outlet></router-outlet>\n  </div>\n</ng-template>\n"

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


var OrbitControls = __webpack_require__("../../../../three-orbit-controls/index.js")(__WEBPACK_IMPORTED_MODULE_1_three__);
var OBJLoader = __webpack_require__("../../../../three-obj-loader/dist/index.js")(__WEBPACK_IMPORTED_MODULE_1_three__);
var TrackballControls = __webpack_require__("../../../../three-trackballcontrols/index.js");
var loader = new __WEBPACK_IMPORTED_MODULE_1_three__["OBJLoader"]();
var object;
var LandComponent = /** @class */ (function () {
    function LandComponent(render) {
        this.render = render;
        this.notStart = true;
        localStorage.setItem('home', '/model');
        this.path = "assets/webgl/origami.obj";
        this.r = 20;
    }
    LandComponent.prototype.ngOnInit = function () {
        var _this = this;
        //add listener for the resize of the window - will resize the renderer to fit the window
        var global = this.render.listen('window', 'resize', function (evt) {
            _this.onWindowResize();
        });
    };
    LandComponent.prototype.ngAfterViewInit = function () {
        this.init3D();
    };
    LandComponent.prototype.init3D = function () {
        var _this = this;
        // renderer
        this.renderer = new __WEBPACK_IMPORTED_MODULE_1_three__["WebGLRenderer"]({ alpha: true });
        this.rendererContainer.nativeElement.appendChild(this.renderer.domElement);
        this.renderer.setSize(window.innerWidth, window.innerHeight);
        // scene
        this.scene = new __WEBPACK_IMPORTED_MODULE_1_three__["Scene"]();
        this.scene.background = new __WEBPACK_IMPORTED_MODULE_1_three__["Color"](0x00ff99);
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
                    var material = new __WEBPACK_IMPORTED_MODULE_1_three__["MeshBasicMaterial"]({
                        color: 0x00ff99,
                        polygonOffset: true,
                        polygonOffsetFactor: 1,
                        polygonOffsetUnits: 1
                    });
                    child.material = material;
                    /* // wireframe
                    var geo = new THREE.WireframeGeometry(child.geometry); // or WireframeGeometry
                    var mat = new THREE.LineBasicMaterial( { color: 0xa2a276, linewidth: 1 } );
                    var wireframe = new THREE.LineSegments( geo, mat );
                    child.add( wireframe ); */
                }
            });
            geometry.position.y -= 20;
            geometry.rotation.x = 20 * Math.PI / 180;
            geometry.scale.x = 30;
            geometry.scale.y = 30;
            geometry.scale.z = 30;
            object = geometry;
            _this.scene.add(object);
        });
        //request animation
        this.animate();
        this.resize();
    };
    LandComponent.prototype.start = function () {
        this.notStart = false;
    };
    LandComponent.prototype.resize = function () {
        var width = this.renderer.domElement.clientWidth;
        var height = this.renderer.domElement.clientHeight;
        this.renderer.setSize(width, height);
        this.camera.aspect = width / height;
        this.controller.handleResize();
        // this.controls.handleResize();
    };
    LandComponent.prototype.animate = function () {
        var _this = this;
        window.requestAnimationFrame(function () { return _this.animate(); });
        object.rotation.y += 0.008;
        this.renderer.render(this.scene, this.camera);
    };
    LandComponent.prototype.onWindowResize = function () {
        this.camera.aspect = window.innerWidth / window.innerHeight;
        this.camera.updateProjectionMatrix();
        this.renderer.setSize(window.innerWidth, window.innerHeight);
        this.controller.update();
        // this.controls.update();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* ViewChild */])('rendererContainer'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ElementRef */])
    ], LandComponent.prototype, "rendererContainer", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", String)
    ], LandComponent.prototype, "path", void 0);
    LandComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-land',
            template: __webpack_require__("../../../../../src/app/land/land.component.html"),
            styles: [__webpack_require__("../../../../../src/app/land/land.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["Y" /* Renderer2 */]])
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

module.exports = "<div class=\"normal\">\n  <div class=\"ui equal width grid\">\n    <div class=\"column\">\n      <div #modelContainer></div>\n\n      <a class=\"ui blue button\" [href]=\"path\" download>\n        Download Generated Model?\n      </a>\n    </div>\n    <div class=\"ui segment column\">\n      <div class=\"ui stackable four column grid\">\n\n          <div class=\"column\"\n          *ngFor=\"let image of images\">\n            <div class=\"ui compact segment\"\n              [@imageState]=\"image.state\"\n              (click)=\"image.toggleState()\"\n            >\n              <img class=\"ui image\" [src]=\"image.src\">\n            </div>\n          </div>\n\n        </div>\n    </div>\n  </div>\n</div>\n\n<div *ngIf=\"noModel\" class=\"normal\">\n  <h2>Sorry no model was created :(</h2>\n  <br>\n  <h2>But you can still try to upload different images.</h2>\n</div>\n\n<div class=\"ui orange button\" routerLink=\"/input\">TRY AGAIN</div>\n\n<sui-dimmer class=\"inverted page\" [(isDimmed)]=\"isLoading\">\n  <h2 class=\"ui header\">\n    <div class=\"ui indeterminate text active loader\">Preparing model...</div>\n  </h2>\n</sui-dimmer>\n"

/***/ }),

/***/ "../../../../../src/app/model/model.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ModelComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_three__ = __webpack_require__("../../../../three/build/three.module.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_animations__ = __webpack_require__("../../../animations/esm5/animations.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_take__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/take.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_delay__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/delay.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__models_image_model__ = __webpack_require__("../../../../../src/app/models/image.model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_origami_service__ = __webpack_require__("../../../../../src/app/services/origami.service.ts");
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





var ModelComponent = /** @class */ (function () {
    function ModelComponent(render, origamiService) {
        this.render = render;
        this.origamiService = origamiService;
        this.images = [];
        this.files = [];
        this.isLoading = true;
        this.noModel = false;
        localStorage.setItem('home', '/model');
        this.origamiService.sendMsg("dc");
        this.path = localStorage.getItem('now') + "/output/mesh.obj";
        this.images = this.getImages(localStorage.getItem('now') + "/output/");
        this.r = 20;
    }
    ModelComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.origamiService.messages.subscribe(function (msg) {
            if (msg == "no")
                _this.noModel = true;
        });
        //add listener for the resize of the window - will resize the renderer to fit the window
        var global = this.render.listen('window', 'resize', function (evt) {
            _this.onWindowResize();
        });
    };
    ModelComponent.prototype.ngAfterViewInit = function () {
        if (!this.noModel) {
            this.init3D();
            this.isLoading = false;
        }
    };
    ModelComponent.prototype.getImages = function (path) {
        var img, x = 0;
        var list = [];
        while (x < 16) {
            img = localStorage.getItem(x + '');
            if (img)
                list.push(new __WEBPACK_IMPORTED_MODULE_5__models_image_model__["a" /* default */](path + img, path + img));
            else
                break;
        }
        return list;
    };
    ModelComponent.prototype.init3D = function () {
        var _this = this;
        // renderer
        this.renderer = new __WEBPACK_IMPORTED_MODULE_1_three__["WebGLRenderer"]({ alpha: true });
        this.rendererContainer.nativeElement.appendChild(this.renderer.domElement);
        this.renderer.setSize(window.innerWidth, window.innerHeight);
        this.renderer.shadowMap.enabled = true;
        this.renderer.shadowMap.type = __WEBPACK_IMPORTED_MODULE_1_three__["PCFSoftShadowMap"];
        this.renderer.gammaInput = true;
        this.renderer.gammaOutput = true;
        // scene
        this.scene = new __WEBPACK_IMPORTED_MODULE_1_three__["Scene"]();
        this.scene.background = new __WEBPACK_IMPORTED_MODULE_1_three__["Color"](0xffffff);
        // camera
        this.camera = new __WEBPACK_IMPORTED_MODULE_1_three__["PerspectiveCamera"](35, window.innerWidth / window.innerHeight, 0.01, 10000);
        this.camera.position.set(113, 111, 113);
        this.camera.aspect = window.innerWidth / window.innerHeight;
        // controls
        // this.controls = new DragControls(this.camera);
        this.controller = new TrackballControls(this.camera);
        // lights
        var ambientLight = new __WEBPACK_IMPORTED_MODULE_1_three__["AmbientLight"](0xcccccc, 0.4);
        this.scene.add(ambientLight);
        var pointLight = new __WEBPACK_IMPORTED_MODULE_1_three__["PointLight"](0xffffff, 0.8);
        this.camera.add(pointLight);
        this.scene.add(this.camera);
        var material = new __WEBPACK_IMPORTED_MODULE_1_three__["MeshLambertMaterial"]({
            color: 0x003366,
            polygonOffset: true,
            polygonOffsetFactor: 1,
            polygonOffsetUnits: 1
        });
        loader.load(this.path, function (geometry) {
            geometry.traverse(function (child) {
                if (child instanceof __WEBPACK_IMPORTED_MODULE_1_three__["Mesh"]) {
                    child.material = material;
                    child.geometry.computeBoundingBox();
                    child.geometry.computeBoundingSphere();
                    child.geometry.computeVertexNormals();
                }
            });
            geometry.position.y -= 20;
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
        this.camera.lookAt(this.scene.position);
        this.renderer.setPixelRatio(window.devicePixelRatio);
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
            styles: [__webpack_require__("../../../../../src/app/model/model.component.css")],
            animations: [
                Object(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["j" /* trigger */])('imageState', [
                    Object(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["g" /* state */])('inactive', Object(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["h" /* style */])({
                        transform: 'scale(1)'
                    })),
                    Object(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["g" /* state */])('active', Object(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["h" /* style */])({
                        transform: 'scale(2)'
                    })),
                    Object(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["i" /* transition */])('inactive => active', Object(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["e" /* animate */])('100ms ease-in')),
                    Object(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["i" /* transition */])('active => inactive', Object(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["e" /* animate */])('100ms ease-out'))
                ])
            ]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["Y" /* Renderer2 */], __WEBPACK_IMPORTED_MODULE_6__services_origami_service__["a" /* OrigamiService */]])
    ], ModelComponent);
    return ModelComponent;
}());



/***/ }),

/***/ "../../../../../src/app/models/image.model.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var Image = /** @class */ (function () {
    function Image(thuumb, fuull, state) {
        if (state === void 0) { state = "inactive"; }
        this.state = state;
        this.thumb = thuumb;
        this.full = fuull;
        this.src = this.thumb;
    }
    Image.prototype.toggleState = function () {
        this.state = this.state === 'active' ? 'inactive' : 'active';
        if (this.state == 'active')
            this.src = this.full;
        else
            this.src = this.thumb;
    };
    return Image;
}());
/* harmony default export */ __webpack_exports__["a"] = (Image);


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

module.exports = "<div>\n  <sui-progress class=\"ui indicating progress\" [value]=\"ia_val\" [showProgress]=true [maximum]=100 [precision]=0>\n    {{image_analysis}} {{progress}}\n  </sui-progress>\n\n  <sui-progress class=\"ui indicating progress\" [value]=\"fe_val\" [showProgress]=true [maximum]=100 [precision]=0>\n    {{feature_extraction}}\n  </sui-progress>\n\n  <sui-progress class=\"ui indicating progress\" [value]=\"m_val\" [showProgress]=true [maximum]=100 [precision]=0>\n    {{matching}}\n  </sui-progress>\n\n  <sui-progress class=\"ui indicating progress\" [value]=\"r_val\" [showProgress]=true [maximum]=100 [precision]=0>\n    {{reconstruction}}\n  </sui-progress>\n\n  <sui-progress class=\"ui indicating progress\" [value]=\"me_val\" [showProgress]=true [maximum]=100 [precision]=0>\n    {{mesh}}\n  </sui-progress>\n\n  <div class=\"ui center aligned segment\">\n    <h3>This will take a while...</h3>\n    <h3>Please be patient and do not click on other tabs in Origami because you might lose your progress.</h3>\n    <h3>Thank you!</h3>\n  </div>\n\n</div>\n\n<sui-dimmer class=\"inverted page\" [(isDimmed)]=\"dim_for_load\">\n  <h2 class=\"ui header\">\n    <div class=\"ui text loader\">Finishing up...</div>\n  </h2>\n</sui-dimmer>\n"

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
    }
    ProcessingComponent.prototype.start_load = function () {
        var _this = this;
        this.dim_for_load = true;
        setTimeout(function () { return _this.router.navigateByUrl('/model'); }, 2000);
    };
    ProcessingComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.sendMessage();
        this.origamiService.messages.subscribe(function (msg) {
            //console.log(msg);
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
                }
                else {
                    _this.matching = "Matching features done!";
                    _this.m_val = 100;
                    _this.reconstruction = "Reconstructing Sparse Point Cloud: " + msg.progress;
                    _this.r_val = msg.percent;
                }
            }
            if (msg.step == 5) {
                if (msg.percent == 100) {
                    _this.reconstruction = "Reconstructing Sparse Point Cloud done!";
                    _this.r_val = 100;
                    _this.mesh = "Creating Mesh done!";
                    _this.me_val = 100;
                    //console.log("heeey");
                    _this.start_load();
                }
                else {
                    _this.matching = "Matching features done!";
                    _this.m_val = 100;
                    _this.reconstruction = "Reconstructing Sparse Point Cloud done!";
                    _this.r_val = 100;
                    _this.mesh = "Creating Mesh: " + msg.progress;
                    _this.me_val = msg.percent;
                }
            }
        });
    };
    ProcessingComponent.prototype.sendMessage = function () {
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

/***/ "../../../../../src/app/sample1/sample1.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/sample1/sample1.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"normal\">\n  <div class=\"ui equal width grid\">\n    <div class=\"column\">\n      <div #modelContainer></div>\n      \n      <button class=\"ui left labeled icon button\" routerLink=\"/sample3\">\n        <i class=\"left arrow icon\"></i>\n        Sample 3\n      </button>\n      <a class=\"ui blue button\" href=\"assets/samples/paper/paper.obj\" download>\n        Download Sample #1?\n      </a>\n      <button class=\"ui right labeled icon button\" routerLink=\"/sample2\">\n        <i class=\"right arrow icon\"></i>\n        Sample 2\n      </button>\n    </div>\n    <div class=\"ui segment column\">\n      <div class=\"ui stackable four column grid\">\n\n          <div class=\"column\"\n          *ngFor=\"let image of images\">\n            <div class=\"ui compact segment\"\n              [@imageState]=\"image.state\"\n              (click)=\"image.toggleState()\"\n            >\n              <img class=\"ui image\" [src]=\"image.src\">\n            </div>\n          </div>\n\n        </div>\n    </div>\n  </div>\n</div>\n\n<sui-dimmer class=\"inverted page\" [(isDimmed)]=\"isLoading\">\n  <h2 class=\"ui header\">\n    <div class=\"ui indeterminate text active loader\">Preparing model...</div>\n  </h2>\n</sui-dimmer>\n"

/***/ }),

/***/ "../../../../../src/app/sample1/sample1.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Sample1Component; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_three__ = __webpack_require__("../../../../three/build/three.module.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_animations__ = __webpack_require__("../../../animations/esm5/animations.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_take__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/take.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_delay__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/delay.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__models_image_model__ = __webpack_require__("../../../../../src/app/models/image.model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_origami_service__ = __webpack_require__("../../../../../src/app/services/origami.service.ts");
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





var Sample1Component = /** @class */ (function () {
    function Sample1Component(render, origamiService) {
        this.render = render;
        this.origamiService = origamiService;
        this.images = [];
        this.files = [];
        this.isLoading = true;
        this.path = "assets/samples/paper/paper.obj";
        this.images = [
            new __WEBPACK_IMPORTED_MODULE_5__models_image_model__["a" /* default */]("assets/samples/paper/thumb/P_20171028_121351_001.jpg", "assets/samples/paper/P_20171028_121351_001.jpg"),
            new __WEBPACK_IMPORTED_MODULE_5__models_image_model__["a" /* default */]("assets/samples/paper/thumb/P_20171028_121351_034.jpg", "assets/samples/paper/P_20171028_121351_034.jpg"),
            new __WEBPACK_IMPORTED_MODULE_5__models_image_model__["a" /* default */]("assets/samples/paper/thumb/P_20171028_121351_067.jpg", "assets/samples/paper/P_20171028_121351_067.jpg"),
            new __WEBPACK_IMPORTED_MODULE_5__models_image_model__["a" /* default */]("assets/samples/paper/thumb/P_20171028_121351_002.jpg", "assets/samples/paper/P_20171028_121351_002.jpg"),
            new __WEBPACK_IMPORTED_MODULE_5__models_image_model__["a" /* default */]("assets/samples/paper/thumb/P_20171028_121351_035.jpg", "assets/samples/paper/P_20171028_121351_035.jpg"),
            new __WEBPACK_IMPORTED_MODULE_5__models_image_model__["a" /* default */]("assets/samples/paper/thumb/P_20171028_121351_068.jpg", "assets/samples/paper/P_20171028_121351_068.jpg"),
            new __WEBPACK_IMPORTED_MODULE_5__models_image_model__["a" /* default */]("assets/samples/paper/thumb/P_20171028_121351_003.jpg", "assets/samples/paper/P_20171028_121351_003.jpg"),
            new __WEBPACK_IMPORTED_MODULE_5__models_image_model__["a" /* default */]("assets/samples/paper/thumb/P_20171028_121351_036.jpg", "assets/samples/paper/P_20171028_121351_036.jpg"),
            new __WEBPACK_IMPORTED_MODULE_5__models_image_model__["a" /* default */]("assets/samples/paper/thumb/P_20171028_121351_069.jpg", "assets/samples/paper/P_20171028_121351_069.jpg"),
            new __WEBPACK_IMPORTED_MODULE_5__models_image_model__["a" /* default */]("assets/samples/paper/thumb/P_20171028_121351_004.jpg", "assets/samples/paper/P_20171028_121351_004.jpg"),
            new __WEBPACK_IMPORTED_MODULE_5__models_image_model__["a" /* default */]("assets/samples/paper/thumb/P_20171028_121351_037.jpg", "assets/samples/paper/P_20171028_121351_037.jpg"),
            new __WEBPACK_IMPORTED_MODULE_5__models_image_model__["a" /* default */]("assets/samples/paper/thumb/P_20171028_121351_070.jpg", "assets/samples/paper/P_20171028_121351_070.jpg"),
            new __WEBPACK_IMPORTED_MODULE_5__models_image_model__["a" /* default */]("assets/samples/paper/thumb/P_20171028_121351_005.jpg", "assets/samples/paper/P_20171028_121351_005.jpg"),
            new __WEBPACK_IMPORTED_MODULE_5__models_image_model__["a" /* default */]("assets/samples/paper/thumb/P_20171028_121351_038.jpg", "assets/samples/paper/P_20171028_121351_038.jpg"),
            new __WEBPACK_IMPORTED_MODULE_5__models_image_model__["a" /* default */]("assets/samples/paper/thumb/P_20171028_121351_071.jpg", "assets/samples/paper/P_20171028_121351_071.jpg"),
            new __WEBPACK_IMPORTED_MODULE_5__models_image_model__["a" /* default */]("assets/samples/paper/thumb/P_20171028_121351_006.jpg", "assets/samples/paper/P_20171028_121351_006.jpg")
        ];
        this.r = 20;
    }
    Sample1Component.prototype.ngOnInit = function () {
        var _this = this;
        //add listener for the resize of the window - will resize the renderer to fit the window
        var global = this.render.listen('window', 'resize', function (evt) {
            _this.onWindowResize();
        });
    };
    Sample1Component.prototype.ngAfterViewInit = function () {
        this.init3D();
    };
    Sample1Component.prototype.init3D = function () {
        var _this = this;
        // renderer
        this.renderer = new __WEBPACK_IMPORTED_MODULE_1_three__["WebGLRenderer"]({ alpha: true });
        this.rendererContainer.nativeElement.appendChild(this.renderer.domElement);
        this.renderer.setSize(window.innerWidth, window.innerHeight);
        this.renderer.shadowMap.enabled = true;
        this.renderer.shadowMap.type = __WEBPACK_IMPORTED_MODULE_1_three__["PCFSoftShadowMap"];
        this.renderer.gammaInput = true;
        this.renderer.gammaOutput = true;
        // scene
        this.scene = new __WEBPACK_IMPORTED_MODULE_1_three__["Scene"]();
        this.scene.background = new __WEBPACK_IMPORTED_MODULE_1_three__["Color"](0xffffff);
        // camera
        this.camera = new __WEBPACK_IMPORTED_MODULE_1_three__["PerspectiveCamera"](35, window.innerWidth / window.innerHeight, 0.01, 10000);
        this.camera.position.set(113, 111, 113);
        this.camera.aspect = window.innerWidth / window.innerHeight;
        // this.scene.add( new THREE.AmbientLight( 0x222222 ) );
        // this.scene.add( this.camera ); // required, because we are adding a light asd a child of the camera
        // controls
        // this.controls = new DragControls(this.camera);
        this.controller = new TrackballControls(this.camera);
        // lights
        var ambientLight = new __WEBPACK_IMPORTED_MODULE_1_three__["AmbientLight"](0xcccccc, 0.4);
        this.scene.add(ambientLight);
        var pointLight = new __WEBPACK_IMPORTED_MODULE_1_three__["PointLight"](0xffffff, 0.8);
        this.camera.add(pointLight);
        this.scene.add(this.camera);
        var material = new __WEBPACK_IMPORTED_MODULE_1_three__["MeshLambertMaterial"]({
            color: 0x003366,
            polygonOffset: true,
            polygonOffsetFactor: 1,
            polygonOffsetUnits: 1
        });
        loader.load(this.path, function (geometry) {
            geometry.traverse(function (child) {
                if (child instanceof __WEBPACK_IMPORTED_MODULE_1_three__["Mesh"]) {
                    child.material = material;
                    child.geometry.computeBoundingBox();
                    child.geometry.computeBoundingSphere();
                    child.geometry.computeVertexNormals();
                }
            });
            geometry.position.y -= 20;
            geometry.scale.x = 40;
            geometry.scale.y = 20;
            geometry.scale.z = 20;
            _this.scene.add(geometry);
            _this.isLoading = false;
        });
        //request animation
        this.animate();
        this.resize();
    };
    Sample1Component.prototype.resize = function () {
        var width = this.renderer.domElement.clientWidth;
        var height = this.renderer.domElement.clientHeight;
        this.renderer.setSize(width, height);
        this.camera.aspect = width / height;
        this.controller.handleResize();
        // this.controls.handleResize();
    };
    Sample1Component.prototype.animate = function () {
        var _this = this;
        window.requestAnimationFrame(function (_) { return _this.animate(); });
        this.scene.rotation.y += 0.1 * Math.PI / 180;
        this.controller.update();
        // this.controls.update();
        this.camera.lookAt(this.scene.position);
        this.renderer.setPixelRatio(window.devicePixelRatio);
        this.renderer.render(this.scene, this.camera);
    };
    Sample1Component.prototype.onWindowResize = function () {
        this.camera.aspect = window.innerWidth / window.innerHeight;
        this.camera.updateProjectionMatrix();
        this.renderer.setSize(window.innerWidth, window.innerHeight);
        this.controller.update();
        // this.controls.update();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* ViewChild */])("modelContainer"),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ElementRef */])
    ], Sample1Component.prototype, "rendererContainer", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", String)
    ], Sample1Component.prototype, "path", void 0);
    Sample1Component = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-sample1',
            template: __webpack_require__("../../../../../src/app/sample1/sample1.component.html"),
            styles: [__webpack_require__("../../../../../src/app/sample1/sample1.component.css")],
            animations: [
                Object(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["j" /* trigger */])('imageState', [
                    Object(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["g" /* state */])('inactive', Object(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["h" /* style */])({
                        transform: 'scale(1)'
                    })),
                    Object(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["g" /* state */])('active', Object(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["h" /* style */])({
                        transform: 'scale(2)'
                    })),
                    Object(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["i" /* transition */])('inactive => active', Object(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["e" /* animate */])('100ms ease-in')),
                    Object(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["i" /* transition */])('active => inactive', Object(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["e" /* animate */])('100ms ease-out'))
                ])
            ]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["Y" /* Renderer2 */], __WEBPACK_IMPORTED_MODULE_6__services_origami_service__["a" /* OrigamiService */]])
    ], Sample1Component);
    return Sample1Component;
}());



/***/ }),

/***/ "../../../../../src/app/sample2/sample2.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/sample2/sample2.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"normal\">\n    <div class=\"ui equal width grid\">\n      <div class=\"column\">\n        <div #modelContainer></div>\n        \n        <button class=\"ui left labeled icon button\" routerLink=\"/sample1\">\n          <i class=\"left arrow icon\"></i>\n          Sample 1\n        </button>\n        <a class=\"ui blue button\" href=\"assets/samples/horse/horse.obj\" download>\n          Download Sample #2?\n        </a>\n        <button class=\"ui right labeled icon button\" routerLink=\"/sample3\">\n          <i class=\"right arrow icon\"></i>\n          Sample 3\n        </button>\n      </div>\n      <div class=\"ui segment column\">\n        <div class=\"ui stackable four column grid\">\n  \n            <div class=\"column\"\n            *ngFor=\"let image of images\">\n              <div class=\"ui compact segment\"\n                [@imageState]=\"image.state\"\n                (click)=\"image.toggleState()\"\n              >\n                <img class=\"ui image\" [src]=\"image.src\">\n              </div>\n            </div>\n  \n          </div>\n      </div>\n    </div>\n  </div>\n\n<sui-dimmer class=\"inverted page\" [(isDimmed)]=\"isLoading\">\n  <h2 class=\"ui header\">\n    <div class=\"ui indeterminate text active loader\">Preparing model...</div>\n  </h2>\n</sui-dimmer>\n"

/***/ }),

/***/ "../../../../../src/app/sample2/sample2.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Sample2Component; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_three__ = __webpack_require__("../../../../three/build/three.module.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_animations__ = __webpack_require__("../../../animations/esm5/animations.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_take__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/take.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_delay__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/delay.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__models_image_model__ = __webpack_require__("../../../../../src/app/models/image.model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_origami_service__ = __webpack_require__("../../../../../src/app/services/origami.service.ts");
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





var Sample2Component = /** @class */ (function () {
    function Sample2Component(render, origamiService) {
        this.render = render;
        this.origamiService = origamiService;
        this.images = [];
        this.files = [];
        this.isLoading = true;
        this.path = "assets/samples/horse/horse.obj";
        this.images = [
            new __WEBPACK_IMPORTED_MODULE_5__models_image_model__["a" /* default */]("assets/samples/horse/thumb/P_20171028_110919_001.jpg", "assets/samples/horse/P_20171028_110919_001.jpg"),
            new __WEBPACK_IMPORTED_MODULE_5__models_image_model__["a" /* default */]("assets/samples/horse/thumb/P_20171028_110919_029.jpg", "assets/samples/horse/P_20171028_110919_029.jpg"),
            new __WEBPACK_IMPORTED_MODULE_5__models_image_model__["a" /* default */]("assets/samples/horse/thumb/P_20171028_110919_057.jpg", "assets/samples/horse/P_20171028_110919_057.jpg"),
            new __WEBPACK_IMPORTED_MODULE_5__models_image_model__["a" /* default */]("assets/samples/horse/thumb/P_20171028_110919_002.jpg", "assets/samples/horse/P_20171028_110919_002.jpg"),
            new __WEBPACK_IMPORTED_MODULE_5__models_image_model__["a" /* default */]("assets/samples/horse/thumb/P_20171028_110919_030.jpg", "assets/samples/horse/P_20171028_110919_030.jpg"),
            new __WEBPACK_IMPORTED_MODULE_5__models_image_model__["a" /* default */]("assets/samples/horse/thumb/P_20171028_110919_058.jpg", "assets/samples/horse/P_20171028_110919_058.jpg"),
            new __WEBPACK_IMPORTED_MODULE_5__models_image_model__["a" /* default */]("assets/samples/horse/thumb/P_20171028_110919_003.jpg", "assets/samples/horse/P_20171028_110919_003.jpg"),
            new __WEBPACK_IMPORTED_MODULE_5__models_image_model__["a" /* default */]("assets/samples/horse/thumb/P_20171028_110919_031.jpg", "assets/samples/horse/P_20171028_110919_031.jpg"),
            new __WEBPACK_IMPORTED_MODULE_5__models_image_model__["a" /* default */]("assets/samples/horse/thumb/P_20171028_110919_059.jpg", "assets/samples/horse/P_20171028_110919_059.jpg"),
            new __WEBPACK_IMPORTED_MODULE_5__models_image_model__["a" /* default */]("assets/samples/horse/thumb/P_20171028_110919_004.jpg", "assets/samples/horse/P_20171028_110919_004.jpg"),
            new __WEBPACK_IMPORTED_MODULE_5__models_image_model__["a" /* default */]("assets/samples/horse/thumb/P_20171028_110919_032.jpg", "assets/samples/horse/P_20171028_110919_032.jpg"),
            new __WEBPACK_IMPORTED_MODULE_5__models_image_model__["a" /* default */]("assets/samples/horse/thumb/P_20171028_110919_060.jpg", "assets/samples/horse/P_20171028_110919_060.jpg"),
            new __WEBPACK_IMPORTED_MODULE_5__models_image_model__["a" /* default */]("assets/samples/horse/thumb/P_20171028_110919_005.jpg", "assets/samples/horse/P_20171028_110919_005.jpg"),
            new __WEBPACK_IMPORTED_MODULE_5__models_image_model__["a" /* default */]("assets/samples/horse/thumb/P_20171028_110919_033.jpg", "assets/samples/horse/P_20171028_110919_033.jpg"),
            new __WEBPACK_IMPORTED_MODULE_5__models_image_model__["a" /* default */]("assets/samples/horse/thumb/P_20171028_110919_061.jpg", "assets/samples/horse/P_20171028_110919_061.jpg"),
            new __WEBPACK_IMPORTED_MODULE_5__models_image_model__["a" /* default */]("assets/samples/horse/thumb/P_20171028_110919_006.jpg", "assets/samples/horse/P_20171028_110919_006.jpg")
        ];
        this.r = 20;
    }
    Sample2Component.prototype.ngOnInit = function () {
        var _this = this;
        //add listener for the resize of the window - will resize the renderer to fit the window
        var global = this.render.listen('window', 'resize', function (evt) {
            _this.onWindowResize();
        });
    };
    Sample2Component.prototype.ngAfterViewInit = function () {
        this.init3D();
    };
    Sample2Component.prototype.init3D = function () {
        var _this = this;
        // renderer
        this.renderer = new __WEBPACK_IMPORTED_MODULE_1_three__["WebGLRenderer"]({ alpha: true });
        this.rendererContainer.nativeElement.appendChild(this.renderer.domElement);
        this.renderer.setSize(window.innerWidth, window.innerHeight);
        // scene
        this.scene = new __WEBPACK_IMPORTED_MODULE_1_three__["Scene"]();
        this.scene.background = new __WEBPACK_IMPORTED_MODULE_1_three__["Color"](0xffffff);
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
        var ambientLight = new __WEBPACK_IMPORTED_MODULE_1_three__["AmbientLight"](0xcccccc, 0.4);
        this.scene.add(ambientLight);
        var pointLight = new __WEBPACK_IMPORTED_MODULE_1_three__["PointLight"](0xffffff, 0.8);
        this.camera.add(pointLight);
        this.scene.add(this.camera);
        var material = new __WEBPACK_IMPORTED_MODULE_1_three__["MeshLambertMaterial"]({
            color: 0x003366,
            polygonOffset: true,
            polygonOffsetFactor: 1,
            polygonOffsetUnits: 1
        });
        loader.load(this.path, function (geometry) {
            geometry.traverse(function (child) {
                if (child instanceof __WEBPACK_IMPORTED_MODULE_1_three__["Mesh"]) {
                    child.material = material;
                    child.geometry.computeBoundingBox();
                    child.geometry.computeBoundingSphere();
                    child.geometry.computeVertexNormals();
                }
            });
            geometry.position.y -= 20;
            geometry.scale.x = 40;
            geometry.scale.y = 20;
            geometry.scale.z = 20;
            _this.scene.add(geometry);
            _this.isLoading = false;
        });
        //request animation
        this.animate();
        this.resize();
    };
    Sample2Component.prototype.resize = function () {
        var width = this.renderer.domElement.clientWidth;
        var height = this.renderer.domElement.clientHeight;
        this.renderer.setSize(width, height);
        this.camera.aspect = width / height;
        this.controller.handleResize();
        // this.controls.handleResize();
    };
    Sample2Component.prototype.animate = function () {
        var _this = this;
        window.requestAnimationFrame(function (_) { return _this.animate(); });
        this.scene.rotation.y += 0.1 * Math.PI / 180;
        this.controller.update();
        // this.controls.update();
        this.renderer.render(this.scene, this.camera);
    };
    Sample2Component.prototype.onWindowResize = function () {
        this.camera.aspect = window.innerWidth / window.innerHeight;
        this.camera.updateProjectionMatrix();
        this.renderer.setSize(window.innerWidth, window.innerHeight);
        this.controller.update();
        // this.controls.update();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* ViewChild */])("modelContainer"),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ElementRef */])
    ], Sample2Component.prototype, "rendererContainer", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", String)
    ], Sample2Component.prototype, "path", void 0);
    Sample2Component = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-sample2',
            template: __webpack_require__("../../../../../src/app/sample2/sample2.component.html"),
            styles: [__webpack_require__("../../../../../src/app/sample2/sample2.component.css")],
            animations: [
                Object(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["j" /* trigger */])('imageState', [
                    Object(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["g" /* state */])('inactive', Object(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["h" /* style */])({
                        transform: 'scale(1)'
                    })),
                    Object(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["g" /* state */])('active', Object(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["h" /* style */])({
                        transform: 'scale(2)'
                    })),
                    Object(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["i" /* transition */])('inactive => active', Object(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["e" /* animate */])('100ms ease-in')),
                    Object(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["i" /* transition */])('active => inactive', Object(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["e" /* animate */])('100ms ease-out'))
                ])
            ]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["Y" /* Renderer2 */], __WEBPACK_IMPORTED_MODULE_6__services_origami_service__["a" /* OrigamiService */]])
    ], Sample2Component);
    return Sample2Component;
}());



/***/ }),

/***/ "../../../../../src/app/sample3/sample3.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/sample3/sample3.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"normal\">\n  <div class=\"ui equal width grid\">\n    <div class=\"column\">\n      <div #modelContainer></div>\n      \n      <button class=\"ui left labeled icon button\" routerLink=\"/sample2\">\n        <i class=\"left arrow icon\"></i>\n        Sample 2\n      </button>\n      <a class=\"ui blue button\" href=\"assets/samples/shell/shell.obj\" download>\n        Download Sample #3?\n      </a>\n      <button class=\"ui right labeled icon button\" routerLink=\"/sample1\">\n        <i class=\"right arrow icon\"></i>\n        Sample 1\n      </button>\n    </div>\n    <div class=\"ui segment column\">\n      <div class=\"ui stackable four column grid\">\n\n          <div class=\"column\"\n          *ngFor=\"let image of images\">\n            <div class=\"ui compact segment\"\n              [@imageState]=\"image.state\"\n              (click)=\"image.toggleState()\"\n            >\n              <img class=\"ui image\" [src]=\"image.src\">\n            </div>\n          </div>\n\n        </div>\n    </div>\n  </div>\n</div>\n\n<sui-dimmer class=\"inverted page\" [(isDimmed)]=\"isLoading\">\n  <h2 class=\"ui header\">\n    <div class=\"ui indeterminate text active loader\">Preparing model...</div>\n  </h2>\n</sui-dimmer>\n"

/***/ }),

/***/ "../../../../../src/app/sample3/sample3.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Sample3Component; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_three__ = __webpack_require__("../../../../three/build/three.module.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_animations__ = __webpack_require__("../../../animations/esm5/animations.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_take__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/take.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_delay__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/delay.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__models_image_model__ = __webpack_require__("../../../../../src/app/models/image.model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_origami_service__ = __webpack_require__("../../../../../src/app/services/origami.service.ts");
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





var Sample3Component = /** @class */ (function () {
    function Sample3Component(render, origamiService) {
        this.render = render;
        this.origamiService = origamiService;
        this.images = [];
        this.files = [];
        this.isLoading = true;
        this.path = "assets/samples/shell/shell.obj";
        this.images = [
            new __WEBPACK_IMPORTED_MODULE_5__models_image_model__["a" /* default */]("assets/samples/shell/thumb/P_20171021_235123_001.jpg", "assets/samples/shell/P_20171021_235123_001.jpg"),
            new __WEBPACK_IMPORTED_MODULE_5__models_image_model__["a" /* default */]("assets/samples/shell/thumb/P_20171021_235123_019.jpg", "assets/samples/shell/P_20171021_235123_019.jpg"),
            new __WEBPACK_IMPORTED_MODULE_5__models_image_model__["a" /* default */]("assets/samples/shell/thumb/P_20171021_235123_037.jpg", "assets/samples/shell/P_20171021_235123_037.jpg"),
            new __WEBPACK_IMPORTED_MODULE_5__models_image_model__["a" /* default */]("assets/samples/shell/thumb/P_20171021_235123_002.jpg", "assets/samples/shell/P_20171021_235123_002.jpg"),
            new __WEBPACK_IMPORTED_MODULE_5__models_image_model__["a" /* default */]("assets/samples/shell/thumb/P_20171021_235123_020.jpg", "assets/samples/shell/P_20171021_235123_020.jpg"),
            new __WEBPACK_IMPORTED_MODULE_5__models_image_model__["a" /* default */]("assets/samples/shell/thumb/P_20171021_235123_038.jpg", "assets/samples/shell/P_20171021_235123_038.jpg"),
            new __WEBPACK_IMPORTED_MODULE_5__models_image_model__["a" /* default */]("assets/samples/shell/thumb/P_20171021_235123_003.jpg", "assets/samples/shell/P_20171021_235123_003.jpg"),
            new __WEBPACK_IMPORTED_MODULE_5__models_image_model__["a" /* default */]("assets/samples/shell/thumb/P_20171021_235123_021.jpg", "assets/samples/shell/P_20171021_235123_021.jpg"),
            new __WEBPACK_IMPORTED_MODULE_5__models_image_model__["a" /* default */]("assets/samples/shell/thumb/P_20171021_235123_039.jpg", "assets/samples/shell/P_20171021_235123_039.jpg"),
            new __WEBPACK_IMPORTED_MODULE_5__models_image_model__["a" /* default */]("assets/samples/shell/thumb/P_20171021_235123_004.jpg", "assets/samples/shell/P_20171021_235123_004.jpg"),
            new __WEBPACK_IMPORTED_MODULE_5__models_image_model__["a" /* default */]("assets/samples/shell/thumb/P_20171021_235123_022.jpg", "assets/samples/shell/P_20171021_235123_022.jpg"),
            new __WEBPACK_IMPORTED_MODULE_5__models_image_model__["a" /* default */]("assets/samples/shell/thumb/P_20171021_235123_040.jpg", "assets/samples/shell/P_20171021_235123_040.jpg"),
            new __WEBPACK_IMPORTED_MODULE_5__models_image_model__["a" /* default */]("assets/samples/shell/thumb/P_20171021_235123_005.jpg", "assets/samples/shell/P_20171021_235123_005.jpg"),
            new __WEBPACK_IMPORTED_MODULE_5__models_image_model__["a" /* default */]("assets/samples/shell/thumb/P_20171021_235123_023.jpg", "assets/samples/shell/P_20171021_235123_023.jpg"),
            new __WEBPACK_IMPORTED_MODULE_5__models_image_model__["a" /* default */]("assets/samples/shell/thumb/P_20171021_235123_041.jpg", "assets/samples/shell/P_20171021_235123_041.jpg"),
            new __WEBPACK_IMPORTED_MODULE_5__models_image_model__["a" /* default */]("assets/samples/shell/thumb/P_20171021_235123_006.jpg", "assets/samples/shell/P_20171021_235123_006.jpg")
        ];
        this.r = 20;
    }
    Sample3Component.prototype.ngOnInit = function () {
        var _this = this;
        //add listener for the resize of the window - will resize the renderer to fit the window
        var global = this.render.listen('window', 'resize', function (evt) {
            _this.onWindowResize();
        });
    };
    Sample3Component.prototype.ngAfterViewInit = function () {
        this.init3D();
    };
    Sample3Component.prototype.init3D = function () {
        var _this = this;
        // renderer
        this.renderer = new __WEBPACK_IMPORTED_MODULE_1_three__["WebGLRenderer"]({ alpha: true });
        this.rendererContainer.nativeElement.appendChild(this.renderer.domElement);
        this.renderer.setSize(window.innerWidth, window.innerHeight);
        // scene
        this.scene = new __WEBPACK_IMPORTED_MODULE_1_three__["Scene"]();
        this.scene.background = new __WEBPACK_IMPORTED_MODULE_1_three__["Color"](0xffffff);
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
        var ambientLight = new __WEBPACK_IMPORTED_MODULE_1_three__["AmbientLight"](0xcccccc, 0.4);
        this.scene.add(ambientLight);
        var pointLight = new __WEBPACK_IMPORTED_MODULE_1_three__["PointLight"](0xffffff, 0.8);
        this.camera.add(pointLight);
        this.scene.add(this.camera);
        var material = new __WEBPACK_IMPORTED_MODULE_1_three__["MeshLambertMaterial"]({
            color: 0x003366,
            polygonOffset: true,
            polygonOffsetFactor: 1,
            polygonOffsetUnits: 1
        });
        loader.load(this.path, function (geometry) {
            geometry.traverse(function (child) {
                if (child instanceof __WEBPACK_IMPORTED_MODULE_1_three__["Mesh"]) {
                    child.material = material;
                    child.geometry.computeBoundingBox();
                    child.geometry.computeBoundingSphere();
                    child.geometry.computeVertexNormals();
                }
            });
            geometry.position.y -= 20;
            geometry.scale.x = 40;
            geometry.scale.y = 20;
            geometry.scale.z = 20;
            _this.scene.add(geometry);
            _this.isLoading = false;
        });
        //request animation
        this.animate();
        this.resize();
    };
    Sample3Component.prototype.resize = function () {
        var width = this.renderer.domElement.clientWidth;
        var height = this.renderer.domElement.clientHeight;
        this.renderer.setSize(width, height);
        this.camera.aspect = width / height;
        this.controller.handleResize();
        // this.controls.handleResize();
    };
    Sample3Component.prototype.animate = function () {
        var _this = this;
        window.requestAnimationFrame(function (_) { return _this.animate(); });
        this.scene.rotation.y += 0.1 * Math.PI / 180;
        this.controller.update();
        // this.controls.update();
        this.renderer.render(this.scene, this.camera);
    };
    Sample3Component.prototype.onWindowResize = function () {
        this.camera.aspect = window.innerWidth / window.innerHeight;
        this.camera.updateProjectionMatrix();
        this.renderer.setSize(window.innerWidth, window.innerHeight);
        this.controller.update();
        // this.controls.update();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* ViewChild */])("modelContainer"),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ElementRef */])
    ], Sample3Component.prototype, "rendererContainer", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", String)
    ], Sample3Component.prototype, "path", void 0);
    Sample3Component = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-sample3',
            template: __webpack_require__("../../../../../src/app/sample3/sample3.component.html"),
            styles: [__webpack_require__("../../../../../src/app/sample3/sample3.component.css")],
            animations: [
                Object(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["j" /* trigger */])('imageState', [
                    Object(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["g" /* state */])('inactive', Object(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["h" /* style */])({
                        transform: 'scale(1)'
                    })),
                    Object(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["g" /* state */])('active', Object(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["h" /* style */])({
                        transform: 'scale(2)'
                    })),
                    Object(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["i" /* transition */])('inactive => active', Object(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["e" /* animate */])('100ms ease-in')),
                    Object(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["i" /* transition */])('active => inactive', Object(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["e" /* animate */])('100ms ease-out'))
                ])
            ]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["Y" /* Renderer2 */], __WEBPACK_IMPORTED_MODULE_6__services_origami_service__["a" /* OrigamiService */]])
    ], Sample3Component);
    return Sample3Component;
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
        this.api_url = 'http://18.236.181.139:80';
        this.origami_url = this.api_url + "/api/origami";
        this.messages = ws
            .connect()
            .map(function (res) {
            //console.log(res);
            return res;
        });
    }
    OrigamiService.prototype.sendMsg = function (msg) {
        //console.log("ah pota");
        this.messages.next(msg);
        this.id = msg;
    };
    OrigamiService.prototype.getUrl = function () {
        return this.origami_url;
    };
    OrigamiService.prototype.getOrigami = function () {
        return this.http.get(this.origami_url)
            .map(function (res) {
            //console.log(res["data"]);
            return res["data"].docs;
        });
    };
    OrigamiService.prototype.addData = function (input) {
        //returns the observable of http post request
        //console.log("at"+ input.id +": " + input.focal_length + " " + input.sensor_size);
        return this.http.post(this.origami_url + "/add", input);
    };
    OrigamiService.prototype.makeFileRequest = function (url, params, files) {
        return new Promise(function (resolve, reject) {
            var formData = new FormData();
            var xhr = new XMLHttpRequest();
            //console.log("hi: " + params[0])
            formData.append("uploads", files[0], params[0]);
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
                //console.log("Received message from Websocket Server")
                observer.next(data);
            });
            _this.socket.on('ping', function (data) {
                //console.log("Received message from Websocket Server")
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
                //console.log("sup");
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
    ws_url: "http://18.236.181.139:80"
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