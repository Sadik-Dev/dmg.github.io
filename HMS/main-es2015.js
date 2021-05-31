(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/api-authorization/login-menu/login-menu.component.html":
/*!**********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/api-authorization/login-menu/login-menu.component.html ***!
  \**********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\r\n<ul class=\"navbar-nav\" *ngIf=\"isAuthenticated | async\">\r\n    <li class=\"nav-item\">\r\n        <a  class=\"nav-link text-dark\" [routerLink]='[\"/authentication/logout\"]' [state]='{ local: true }' title=\"Logout\">Logout</a>\r\n    </li>\r\n</ul>\r\n<ul class=\"navbar-nav\" *ngIf=\"!(isAuthenticated | async)\">\r\n    <li class=\"nav-item\">\r\n        <a class=\"nav-link text-dark\" [routerLink]='[\"/authentication/login\"]'>\r\n            <img src=\"assets/images/icons/userd.png\">\r\n            Login\r\n        </a>\r\n    </li>\r\n    <li class=\"nav-item\">\r\n        <a class=\"nav-link text-dark\" [routerLink]='[\"/authentication/login\"]'>\r\n            <img src=\"assets/images/icons/cart.png\">\r\n            Winkelwagen (2)\r\n        </a>\r\n    </li>\r\n</ul>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/api-authorization/login/login.component.html":
/*!************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/api-authorization/login/login.component.html ***!
  \************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<p>{{ message | async }}</p>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/api-authorization/logout/logout.component.html":
/*!**************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/api-authorization/logout/logout.component.html ***!
  \**************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<p>{{ message | async }}</p>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<body>\r\n  <div class=\"topHeader\">\r\n      <div class=\"infoItem\">\r\n          <img src=\"assets/images/icons/phone.png\">\r\n          <p>055 73 00 10</p>\r\n      </div>\r\n      <div class=\"infoItem\">\r\n        <img src=\"assets/images/icons/mail.png\">\r\n        <p>shop@hmt.be</p>\r\n      </div>\r\n  </div>\r\n\r\n  <app-nav-menu></app-nav-menu>\r\n\r\n  <router-outlet></router-outlet>\r\n  <footer>\r\n    <img class=\"footLogo\" src=\"assets/images/logos/logo-white.PNG\">\r\n    <div class=\"row\">\r\n      <div class=\"footcol footerinfo\">\r\n        <p class=\"title\"><b>HMShop:</b></p>\r\n        <p>Kapellestraat 174</p>\r\n        <p>Ronse 9600</p>\r\n        <p>BTW: 0736.377.874</p>\r\n        <p>Telefoon: <a>0471 11 91 85</a></p>\r\n        <p>E-mail: <a>info@hmtechnics.be</a></p>\r\n    </div>\r\n    <div class=\"footcol vraag\">\r\n        <p class=\"title\"><b>Heb je een vraag?</b></p>\r\n        <p>Gebruik ons contact formulier,</p>\r\n        <p>Wij contacteren u terug</p>\r\n        <a class=\"buttonSecondary\">Contact opnemen</a>\r\n    </div>\r\n    </div>\r\n    <div class=\"socialMedia\">\r\n      <a href=\"https://www.facebook.com/HMTechnics/\">\r\n        <img src=\"assets/images/icons/icon-fb.png\">\r\n      </a>\r\n\r\n      <a href=\"https://www.instagram.com/hmtechnics/\">\r\n          <img src=\"assets/images/icons/icon-insta.png\">\r\n      </a>\r\n  </div>\r\n  <div class=\"paymethods\">\r\n    <img src=\"assets/images/icons/visa.png\">\r\n    <img src=\"assets/images/icons/master.png\">\r\n    <img src=\"assets/images/icons/bancontact.png\">\r\n    <img src=\"assets/images/icons/paypal.png\">\r\n\r\n  </div>\r\n\r\n    <div class=\"Copyright\">\r\n        <p>Copyright © 2021 HM Technics\t</p>\r\n    </div>\r\n\r\n\r\n\r\n</footer>\r\n</body>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/counter/counter.component.html":
/*!**************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/counter/counter.component.html ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<h1>Counter</h1>\r\n\r\n<p>This is a simple example of an Angular component.</p>\r\n\r\n<p aria-live=\"polite\">Current count: <strong>{{ currentCount }}</strong></p>\r\n\r\n<button class=\"btn btn-primary\" (click)=\"incrementCounter()\">Increment</button>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/fetch-data/fetch-data.component.html":
/*!********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/fetch-data/fetch-data.component.html ***!
  \********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<h1 id=\"tableLabel\">Weather forecast</h1>\r\n\r\n<p>This component demonstrates fetching data from the server.</p>\r\n\r\n<p *ngIf=\"!forecasts\"><em>Loading...</em></p>\r\n\r\n<table class='table table-striped' aria-labelledby=\"tableLabel\" *ngIf=\"forecasts\">\r\n  <thead>\r\n    <tr>\r\n      <th>Date</th>\r\n      <th>Temp. (C)</th>\r\n      <th>Temp. (F)</th>\r\n      <th>Summary</th>\r\n    </tr>\r\n  </thead>\r\n  <tbody>\r\n    <tr *ngFor=\"let forecast of forecasts\">\r\n      <td>{{ forecast.date }}</td>\r\n      <td>{{ forecast.temperatureC }}</td>\r\n      <td>{{ forecast.temperatureF }}</td>\r\n      <td>{{ forecast.summary }}</td>\r\n    </tr>\r\n  </tbody>\r\n</table>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.component.html":
/*!********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.component.html ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<section class=\"landing\">\r\n    <div class=\"discover\">\r\n        <h1>Ontdek onze laatste artikels</h1>\r\n        <div class=\"itemContainer\">\r\n            <div class=\"item\">\r\n                <img src=\"assets/images/articles/ipadpro.jpg\">\r\n                <h2>IPAD PRO 2021 240GB</h2>\r\n                <p class=\"artColor\">Space Grey</p>\r\n                <p class=\"price\">1239,-</p>\r\n            </div>\r\n\r\n            <div class=\"item\">\r\n                <img src=\"assets/images/articles/macbook.png\">\r\n                <h2>MacBook PRO 2021 1TB</h2>\r\n                <p class=\"artColor\">Dark Grey</p>\r\n                <p class=\"price\">1739,-</p>\r\n            </div>\r\n\r\n            <div class=\"item\">\r\n                <img src=\"assets/images/articles/imac.jpg\">\r\n                <h2>IMAC I9 2TB</h2>\r\n                <p class=\"artColor\">Nardo Grey</p>\r\n                <p class=\"price\">2439,-</p>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class=\"promo\">\r\n        <div class=\"content\">\r\n            <h2>Nu tot <b>25%</b> korting</h2>\r\n            <h4>Op onze selectie elektronica</h4>\r\n            <p class=\"buttonSecondary\">Ontdek</p>    \r\n        </div>\r\n        <img src=\"assets/images/categories/promo.png\" class=\"artPromo\">\r\n        <img src=\"assets/images/icons/promo.png\" class=\"promoperc\">\r\n    </div>\r\n</section>\r\n\r\n<section class=\"categories\">\r\n    <div class=\"itemContainer\">\r\n        <a  class=\"item\">\r\n            <div>\r\n                <img src=\"assets/images/categories/tablets.png\">\r\n                <h3>Tablets</h3>\r\n                <p class=\"buttonSecondary\">Bekijk</p>    \r\n            </div>\r\n        </a>\r\n        <a class=\"item\">\r\n            <div >\r\n                <img src=\"assets/images/categories/computers.png\">\r\n                <h3>Computers</h3>\r\n                <p class=\"buttonSecondary\">Bekijk</p>    \r\n            </div>\r\n        </a>\r\n        <a class=\"item\">\r\n            <div >\r\n                <img src=\"assets/images/categories/phones.png\">\r\n                <h3>Phones</h3>\r\n                <p class=\"buttonSecondary\">Bekijk</p>    \r\n            </div>\r\n        </a>\r\n        <a class=\"item\">\r\n            <div >\r\n                <img src=\"assets/images/categories/tvs.png\">\r\n                <h3>Smart TV's</h3>\r\n                <p class=\"buttonSecondary\">Bekijk</p>    \r\n            </div>\r\n        </a>\r\n\r\n    </div>\r\n</section>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/nav-menu/nav-menu.component.html":
/*!****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/nav-menu/nav-menu.component.html ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<header>\r\n  <nav\r\n    class=\"navbar navbar-expand-sm navbar-toggleable-sm navbar-light bg-white border-bottom box-shadow mb-3\"\r\n  >\r\n    <div class=\"container\">\r\n      <a class=\"navbar-brand\" [routerLink]=\"['/']\">\r\n        <img src=\"assets/images/logos/logo2.PNG\">\r\n      </a>\r\n   \r\n      <div class=\"custom-select-wrapper\">\r\n        <div class=\"custom-select\">\r\n            <div class=\"custom-select__trigger\"><span>Productcategorieën</span>\r\n                <div class=\"arrow\"></div>\r\n            </div>\r\n            <div class=\"custom-options\">\r\n                <span class=\"listhead\">Kies een categorie</span>\r\n                <a class=\"custom-option\" data-value=\"tesla\">Tesla</a>\r\n                <a class=\"custom-option\" data-value=\"volvo\">Volvo</a>\r\n                <a class=\"custom-option\" data-value=\"mercedes\">Mercedes</a>\r\n            </div>\r\n        </div>\r\n       </div>\r\n\r\n       <div class=\"searchBox\">\r\n         <div class=\"inputSearch\">\r\n           <input type=\"text\" placeholder=\"Wat bent u naar opzoek?\">\r\n           <img src=\"assets/images/icons/search.png\">\r\n         </div>\r\n         <button>Zoeken</button>\r\n       </div>\r\n    \r\n\r\n     <app-login-menu></app-login-menu>\r\n\r\n     <!--\r\n      <ul class=\"navbar-nav flex-grow\">\r\n          <li\r\n            class=\"nav-item\"\r\n            [routerLinkActive]=\"['link-active']\"\r\n            [routerLinkActiveOptions]=\"{ exact: true }\"\r\n          >\r\n            <a class=\"nav-link text-dark\" [routerLink]=\"['/']\">Home</a>\r\n          </li>\r\n          <li class=\"nav-item\" [routerLinkActive]=\"['link-active']\">\r\n            <a class=\"nav-link text-dark\" [routerLink]=\"['/counter']\"\r\n              >Counter</a\r\n            >\r\n          </li>\r\n          <li class=\"nav-item\" [routerLinkActive]=\"['link-active']\">\r\n            <a class=\"nav-link text-dark\" [routerLink]=\"['/fetch-data']\"\r\n              >Fetch data</a\r\n            >\r\n          </li>\r\n        </ul>\r\n     --> \r\n  \r\n      \r\n    </div>\r\n  </nav>\r\n</header>\r\n");

/***/ }),

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/api-authorization/api-authorization.constants.ts":
/*!**************************************************************!*\
  !*** ./src/api-authorization/api-authorization.constants.ts ***!
  \**************************************************************/
/*! exports provided: ApplicationName, ReturnUrlType, QueryParameterNames, LogoutActions, LoginActions, ApplicationPaths */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApplicationName", function() { return ApplicationName; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReturnUrlType", function() { return ReturnUrlType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QueryParameterNames", function() { return QueryParameterNames; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LogoutActions", function() { return LogoutActions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginActions", function() { return LoginActions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApplicationPaths", function() { return ApplicationPaths; });
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};
const ApplicationName = 'HMTWebShop';
const ReturnUrlType = 'returnUrl';
const QueryParameterNames = {
    ReturnUrl: ReturnUrlType,
    Message: 'message'
};
const LogoutActions = {
    LogoutCallback: 'logout-callback',
    Logout: 'logout',
    LoggedOut: 'logged-out'
};
const LoginActions = {
    Login: 'login',
    LoginCallback: 'login-callback',
    LoginFailed: 'login-failed',
    Profile: 'profile',
    Register: 'register'
};
let applicationPaths = {
    DefaultLoginRedirectPath: '/',
    ApiAuthorizationClientConfigurationUrl: `/_configuration/${ApplicationName}`,
    Login: `authentication/${LoginActions.Login}`,
    LoginFailed: `authentication/${LoginActions.LoginFailed}`,
    LoginCallback: `authentication/${LoginActions.LoginCallback}`,
    Register: `authentication/${LoginActions.Register}`,
    Profile: `authentication/${LoginActions.Profile}`,
    LogOut: `authentication/${LogoutActions.Logout}`,
    LoggedOut: `authentication/${LogoutActions.LoggedOut}`,
    LogOutCallback: `authentication/${LogoutActions.LogoutCallback}`,
    LoginPathComponents: [],
    LoginFailedPathComponents: [],
    LoginCallbackPathComponents: [],
    RegisterPathComponents: [],
    ProfilePathComponents: [],
    LogOutPathComponents: [],
    LoggedOutPathComponents: [],
    LogOutCallbackPathComponents: [],
    IdentityRegisterPath: '/Identity/Account/Register',
    IdentityManagePath: '/Identity/Account/Manage'
};
applicationPaths = Object.assign({}, applicationPaths, { LoginPathComponents: applicationPaths.Login.split('/'), LoginFailedPathComponents: applicationPaths.LoginFailed.split('/'), RegisterPathComponents: applicationPaths.Register.split('/'), ProfilePathComponents: applicationPaths.Profile.split('/'), LogOutPathComponents: applicationPaths.LogOut.split('/'), LoggedOutPathComponents: applicationPaths.LoggedOut.split('/'), LogOutCallbackPathComponents: applicationPaths.LogOutCallback.split('/') });
const ApplicationPaths = applicationPaths;


/***/ }),

/***/ "./src/api-authorization/api-authorization.module.ts":
/*!***********************************************************!*\
  !*** ./src/api-authorization/api-authorization.module.ts ***!
  \***********************************************************/
/*! exports provided: ApiAuthorizationModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApiAuthorizationModule", function() { return ApiAuthorizationModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _login_menu_login_menu_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./login-menu/login-menu.component */ "./src/api-authorization/login-menu/login-menu.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./login/login.component */ "./src/api-authorization/login/login.component.ts");
/* harmony import */ var _logout_logout_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./logout/logout.component */ "./src/api-authorization/logout/logout.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _api_authorization_constants__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./api-authorization.constants */ "./src/api-authorization/api-authorization.constants.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};








let ApiAuthorizationModule = class ApiAuthorizationModule {
};
ApiAuthorizationModule = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClientModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"].forChild([
                { path: _api_authorization_constants__WEBPACK_IMPORTED_MODULE_6__["ApplicationPaths"].Register, component: _login_login_component__WEBPACK_IMPORTED_MODULE_3__["LoginComponent"] },
                { path: _api_authorization_constants__WEBPACK_IMPORTED_MODULE_6__["ApplicationPaths"].Profile, component: _login_login_component__WEBPACK_IMPORTED_MODULE_3__["LoginComponent"] },
                { path: _api_authorization_constants__WEBPACK_IMPORTED_MODULE_6__["ApplicationPaths"].Login, component: _login_login_component__WEBPACK_IMPORTED_MODULE_3__["LoginComponent"] },
                { path: _api_authorization_constants__WEBPACK_IMPORTED_MODULE_6__["ApplicationPaths"].LoginFailed, component: _login_login_component__WEBPACK_IMPORTED_MODULE_3__["LoginComponent"] },
                { path: _api_authorization_constants__WEBPACK_IMPORTED_MODULE_6__["ApplicationPaths"].LoginCallback, component: _login_login_component__WEBPACK_IMPORTED_MODULE_3__["LoginComponent"] },
                { path: _api_authorization_constants__WEBPACK_IMPORTED_MODULE_6__["ApplicationPaths"].LogOut, component: _logout_logout_component__WEBPACK_IMPORTED_MODULE_4__["LogoutComponent"] },
                { path: _api_authorization_constants__WEBPACK_IMPORTED_MODULE_6__["ApplicationPaths"].LoggedOut, component: _logout_logout_component__WEBPACK_IMPORTED_MODULE_4__["LogoutComponent"] },
                { path: _api_authorization_constants__WEBPACK_IMPORTED_MODULE_6__["ApplicationPaths"].LogOutCallback, component: _logout_logout_component__WEBPACK_IMPORTED_MODULE_4__["LogoutComponent"] }
            ])
        ],
        declarations: [_login_menu_login_menu_component__WEBPACK_IMPORTED_MODULE_2__["LoginMenuComponent"], _login_login_component__WEBPACK_IMPORTED_MODULE_3__["LoginComponent"], _logout_logout_component__WEBPACK_IMPORTED_MODULE_4__["LogoutComponent"]],
        exports: [_login_menu_login_menu_component__WEBPACK_IMPORTED_MODULE_2__["LoginMenuComponent"], _login_login_component__WEBPACK_IMPORTED_MODULE_3__["LoginComponent"], _logout_logout_component__WEBPACK_IMPORTED_MODULE_4__["LogoutComponent"]]
    })
], ApiAuthorizationModule);



/***/ }),

/***/ "./src/api-authorization/authorize.guard.ts":
/*!**************************************************!*\
  !*** ./src/api-authorization/authorize.guard.ts ***!
  \**************************************************/
/*! exports provided: AuthorizeGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthorizeGuard", function() { return AuthorizeGuard; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _authorize_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./authorize.service */ "./src/api-authorization/authorize.service.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _api_authorization_constants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./api-authorization.constants */ "./src/api-authorization/api-authorization.constants.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};





let AuthorizeGuard = class AuthorizeGuard {
    constructor(authorize, router) {
        this.authorize = authorize;
        this.router = router;
    }
    canActivate(_next, state) {
        return this.authorize.isAuthenticated()
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(isAuthenticated => this.handleAuthorization(isAuthenticated, state)));
    }
    handleAuthorization(isAuthenticated, state) {
        if (!isAuthenticated) {
            this.router.navigate(_api_authorization_constants__WEBPACK_IMPORTED_MODULE_4__["ApplicationPaths"].LoginPathComponents, {
                queryParams: {
                    [_api_authorization_constants__WEBPACK_IMPORTED_MODULE_4__["QueryParameterNames"].ReturnUrl]: state.url
                }
            });
        }
    }
};
AuthorizeGuard.ctorParameters = () => [
    { type: _authorize_service__WEBPACK_IMPORTED_MODULE_2__["AuthorizeService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }
];
AuthorizeGuard = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
        providedIn: 'root'
    }),
    __metadata("design:paramtypes", [_authorize_service__WEBPACK_IMPORTED_MODULE_2__["AuthorizeService"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
], AuthorizeGuard);



/***/ }),

/***/ "./src/api-authorization/authorize.interceptor.ts":
/*!********************************************************!*\
  !*** ./src/api-authorization/authorize.interceptor.ts ***!
  \********************************************************/
/*! exports provided: AuthorizeInterceptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthorizeInterceptor", function() { return AuthorizeInterceptor; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _authorize_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./authorize.service */ "./src/api-authorization/authorize.service.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};



let AuthorizeInterceptor = class AuthorizeInterceptor {
    constructor(authorize) {
        this.authorize = authorize;
    }
    intercept(req, next) {
        return this.authorize.getAccessToken()
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["mergeMap"])(token => this.processRequestWithToken(token, req, next)));
    }
    // Checks if there is an access_token available in the authorize service
    // and adds it to the request in case it's targeted at the same origin as the
    // single page application.
    processRequestWithToken(token, req, next) {
        if (!!token && this.isSameOriginUrl(req)) {
            req = req.clone({
                setHeaders: {
                    Authorization: `Bearer ${token}`
                }
            });
        }
        return next.handle(req);
    }
    isSameOriginUrl(req) {
        // It's an absolute url with the same origin.
        if (req.url.startsWith(`${window.location.origin}/`)) {
            return true;
        }
        // It's a protocol relative url with the same origin.
        // For example: //www.example.com/api/Products
        if (req.url.startsWith(`//${window.location.host}/`)) {
            return true;
        }
        // It's a relative url like /api/Products
        if (/^\/[^\/].*/.test(req.url)) {
            return true;
        }
        // It's an absolute or protocol relative url that
        // doesn't have the same origin.
        return false;
    }
};
AuthorizeInterceptor.ctorParameters = () => [
    { type: _authorize_service__WEBPACK_IMPORTED_MODULE_1__["AuthorizeService"] }
];
AuthorizeInterceptor = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
        providedIn: 'root'
    }),
    __metadata("design:paramtypes", [_authorize_service__WEBPACK_IMPORTED_MODULE_1__["AuthorizeService"]])
], AuthorizeInterceptor);



/***/ }),

/***/ "./src/api-authorization/authorize.service.ts":
/*!****************************************************!*\
  !*** ./src/api-authorization/authorize.service.ts ***!
  \****************************************************/
/*! exports provided: AuthenticationResultStatus, AuthorizeService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthenticationResultStatus", function() { return AuthenticationResultStatus; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthorizeService", function() { return AuthorizeService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var oidc_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! oidc-client */ "./node_modules/oidc-client/lib/oidc-client.min.js");
/* harmony import */ var oidc_client__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(oidc_client__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _api_authorization_constants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./api-authorization.constants */ "./src/api-authorization/api-authorization.constants.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};





var AuthenticationResultStatus;
(function (AuthenticationResultStatus) {
    AuthenticationResultStatus[AuthenticationResultStatus["Success"] = 0] = "Success";
    AuthenticationResultStatus[AuthenticationResultStatus["Redirect"] = 1] = "Redirect";
    AuthenticationResultStatus[AuthenticationResultStatus["Fail"] = 2] = "Fail";
})(AuthenticationResultStatus || (AuthenticationResultStatus = {}));
let AuthorizeService = class AuthorizeService {
    constructor() {
        // By default pop ups are disabled because they don't work properly on Edge.
        // If you want to enable pop up authentication simply set this flag to false.
        this.popUpDisabled = true;
        this.userSubject = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](null);
    }
    isAuthenticated() {
        return this.getUser().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(u => !!u));
    }
    getUser() {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["concat"])(this.userSubject.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["filter"])(u => !!u)), this.getUserFromStorage().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["filter"])(u => !!u), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(u => this.userSubject.next(u))), this.userSubject.asObservable());
    }
    getAccessToken() {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["from"])(this.ensureUserManagerInitialized())
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["mergeMap"])(() => Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["from"])(this.userManager.getUser())), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(user => user && user.access_token));
    }
    // We try to authenticate the user in three different ways:
    // 1) We try to see if we can authenticate the user silently. This happens
    //    when the user is already logged in on the IdP and is done using a hidden iframe
    //    on the client.
    // 2) We try to authenticate the user using a PopUp Window. This might fail if there is a
    //    Pop-Up blocker or the user has disabled PopUps.
    // 3) If the two methods above fail, we redirect the browser to the IdP to perform a traditional
    //    redirect flow.
    signIn(state) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.ensureUserManagerInitialized();
            let user = null;
            try {
                user = yield this.userManager.signinSilent(this.createArguments());
                this.userSubject.next(user.profile);
                return this.success(state);
            }
            catch (silentError) {
                // User might not be authenticated, fallback to popup authentication
                console.log('Silent authentication error: ', silentError);
                try {
                    if (this.popUpDisabled) {
                        throw new Error('Popup disabled. Change \'authorize.service.ts:AuthorizeService.popupDisabled\' to false to enable it.');
                    }
                    user = yield this.userManager.signinPopup(this.createArguments());
                    this.userSubject.next(user.profile);
                    return this.success(state);
                }
                catch (popupError) {
                    if (popupError.message === 'Popup window closed') {
                        // The user explicitly cancelled the login action by closing an opened popup.
                        return this.error('The user closed the window.');
                    }
                    else if (!this.popUpDisabled) {
                        console.log('Popup authentication error: ', popupError);
                    }
                    // PopUps might be blocked by the user, fallback to redirect
                    try {
                        yield this.userManager.signinRedirect(this.createArguments(state));
                        return this.redirect();
                    }
                    catch (redirectError) {
                        console.log('Redirect authentication error: ', redirectError);
                        return this.error(redirectError);
                    }
                }
            }
        });
    }
    completeSignIn(url) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                yield this.ensureUserManagerInitialized();
                const user = yield this.userManager.signinCallback(url);
                this.userSubject.next(user && user.profile);
                return this.success(user && user.state);
            }
            catch (error) {
                console.log('There was an error signing in: ', error);
                return this.error('There was an error signing in.');
            }
        });
    }
    signOut(state) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                if (this.popUpDisabled) {
                    throw new Error('Popup disabled. Change \'authorize.service.ts:AuthorizeService.popupDisabled\' to false to enable it.');
                }
                yield this.ensureUserManagerInitialized();
                yield this.userManager.signoutPopup(this.createArguments());
                this.userSubject.next(null);
                return this.success(state);
            }
            catch (popupSignOutError) {
                console.log('Popup signout error: ', popupSignOutError);
                try {
                    yield this.userManager.signoutRedirect(this.createArguments(state));
                    return this.redirect();
                }
                catch (redirectSignOutError) {
                    console.log('Redirect signout error: ', popupSignOutError);
                    return this.error(redirectSignOutError);
                }
            }
        });
    }
    completeSignOut(url) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.ensureUserManagerInitialized();
            try {
                const response = yield this.userManager.signoutCallback(url);
                this.userSubject.next(null);
                return this.success(response && response.state);
            }
            catch (error) {
                console.log(`There was an error trying to log out '${error}'.`);
                return this.error(error);
            }
        });
    }
    createArguments(state) {
        return { useReplaceToNavigate: true, data: state };
    }
    error(message) {
        return { status: AuthenticationResultStatus.Fail, message };
    }
    success(state) {
        return { status: AuthenticationResultStatus.Success, state };
    }
    redirect() {
        return { status: AuthenticationResultStatus.Redirect };
    }
    ensureUserManagerInitialized() {
        return __awaiter(this, void 0, void 0, function* () {
            if (this.userManager !== undefined) {
                return;
            }
            const response = yield fetch(_api_authorization_constants__WEBPACK_IMPORTED_MODULE_4__["ApplicationPaths"].ApiAuthorizationClientConfigurationUrl);
            if (!response.ok) {
                throw new Error(`Could not load settings for '${_api_authorization_constants__WEBPACK_IMPORTED_MODULE_4__["ApplicationName"]}'`);
            }
            const settings = yield response.json();
            settings.automaticSilentRenew = true;
            settings.includeIdTokenInSilentRenew = true;
            this.userManager = new oidc_client__WEBPACK_IMPORTED_MODULE_1__["UserManager"](settings);
            this.userManager.events.addUserSignedOut(() => __awaiter(this, void 0, void 0, function* () {
                yield this.userManager.removeUser();
                this.userSubject.next(null);
            }));
        });
    }
    getUserFromStorage() {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["from"])(this.ensureUserManagerInitialized())
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["mergeMap"])(() => this.userManager.getUser()), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(u => u && u.profile));
    }
};
AuthorizeService = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
        providedIn: 'root'
    })
], AuthorizeService);



/***/ }),

/***/ "./src/api-authorization/login-menu/login-menu.component.css":
/*!*******************************************************************!*\
  !*** ./src/api-authorization/login-menu/login-menu.component.css ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".nav-item{\r\n    display: flex;\r\n    align-items: center;\r\n    margin-right: 25px;\r\n}\r\n.nav-item a{\r\n    color: #818386 !important;\r\n    font-size: 1.2em;\r\n    display: flex;\r\n\r\n}\r\n.nav-item img{\r\n    height: 27px;\r\n    margin: auto;\r\n    margin-right: 7px;\r\n}\r\n.navbar-nav{\r\n    align-items: center;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcGktYXV0aG9yaXphdGlvbi9sb2dpbi1tZW51L2xvZ2luLW1lbnUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsa0JBQWtCO0FBQ3RCO0FBQ0E7SUFDSSx5QkFBeUI7SUFDekIsZ0JBQWdCO0lBQ2hCLGFBQWE7O0FBRWpCO0FBQ0E7SUFDSSxZQUFZO0lBQ1osWUFBWTtJQUNaLGlCQUFpQjtBQUNyQjtBQUNBO0lBQ0ksbUJBQW1CO0FBQ3ZCIiwiZmlsZSI6InNyYy9hcGktYXV0aG9yaXphdGlvbi9sb2dpbi1tZW51L2xvZ2luLW1lbnUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5uYXYtaXRlbXtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAyNXB4O1xyXG59XHJcbi5uYXYtaXRlbSBhe1xyXG4gICAgY29sb3I6ICM4MTgzODYgIWltcG9ydGFudDtcclxuICAgIGZvbnQtc2l6ZTogMS4yZW07XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG5cclxufVxyXG4ubmF2LWl0ZW0gaW1ne1xyXG4gICAgaGVpZ2h0OiAyN3B4O1xyXG4gICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgbWFyZ2luLXJpZ2h0OiA3cHg7XHJcbn1cclxuLm5hdmJhci1uYXZ7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG59Il19 */");

/***/ }),

/***/ "./src/api-authorization/login-menu/login-menu.component.ts":
/*!******************************************************************!*\
  !*** ./src/api-authorization/login-menu/login-menu.component.ts ***!
  \******************************************************************/
/*! exports provided: LoginMenuComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginMenuComponent", function() { return LoginMenuComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _authorize_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../authorize.service */ "./src/api-authorization/authorize.service.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};



let LoginMenuComponent = class LoginMenuComponent {
    constructor(authorizeService) {
        this.authorizeService = authorizeService;
    }
    ngOnInit() {
        this.isAuthenticated = this.authorizeService.isAuthenticated();
        this.userName = this.authorizeService.getUser().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(u => u && u.name));
    }
};
LoginMenuComponent.ctorParameters = () => [
    { type: _authorize_service__WEBPACK_IMPORTED_MODULE_1__["AuthorizeService"] }
];
LoginMenuComponent = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
        selector: 'app-login-menu',
        template: __importDefault(__webpack_require__(/*! raw-loader!./login-menu.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/api-authorization/login-menu/login-menu.component.html")).default,
        styles: [__importDefault(__webpack_require__(/*! ./login-menu.component.css */ "./src/api-authorization/login-menu/login-menu.component.css")).default]
    }),
    __metadata("design:paramtypes", [_authorize_service__WEBPACK_IMPORTED_MODULE_1__["AuthorizeService"]])
], LoginMenuComponent);



/***/ }),

/***/ "./src/api-authorization/login/login.component.css":
/*!*********************************************************!*\
  !*** ./src/api-authorization/login/login.component.css ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBpLWF1dGhvcml6YXRpb24vbG9naW4vbG9naW4uY29tcG9uZW50LmNzcyJ9 */");

/***/ }),

/***/ "./src/api-authorization/login/login.component.ts":
/*!********************************************************!*\
  !*** ./src/api-authorization/login/login.component.ts ***!
  \********************************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _authorize_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../authorize.service */ "./src/api-authorization/authorize.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _api_authorization_constants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../api-authorization.constants */ "./src/api-authorization/api-authorization.constants.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};





// The main responsibility of this component is to handle the user's login process.
// This is the starting point for the login process. Any component that needs to authenticate
// a user can simply perform a redirect to this component with a returnUrl query parameter and
// let the component perform the login and return back to the return url.
let LoginComponent = class LoginComponent {
    constructor(authorizeService, activatedRoute, router) {
        this.authorizeService = authorizeService;
        this.activatedRoute = activatedRoute;
        this.router = router;
        this.message = new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"](null);
    }
    ngOnInit() {
        return __awaiter(this, void 0, void 0, function* () {
            const action = this.activatedRoute.snapshot.url[1];
            switch (action.path) {
                case _api_authorization_constants__WEBPACK_IMPORTED_MODULE_4__["LoginActions"].Login:
                    yield this.login(this.getReturnUrl());
                    break;
                case _api_authorization_constants__WEBPACK_IMPORTED_MODULE_4__["LoginActions"].LoginCallback:
                    yield this.processLoginCallback();
                    break;
                case _api_authorization_constants__WEBPACK_IMPORTED_MODULE_4__["LoginActions"].LoginFailed:
                    const message = this.activatedRoute.snapshot.queryParamMap.get(_api_authorization_constants__WEBPACK_IMPORTED_MODULE_4__["QueryParameterNames"].Message);
                    this.message.next(message);
                    break;
                case _api_authorization_constants__WEBPACK_IMPORTED_MODULE_4__["LoginActions"].Profile:
                    this.redirectToProfile();
                    break;
                case _api_authorization_constants__WEBPACK_IMPORTED_MODULE_4__["LoginActions"].Register:
                    this.redirectToRegister();
                    break;
                default:
                    throw new Error(`Invalid action '${action}'`);
            }
        });
    }
    login(returnUrl) {
        return __awaiter(this, void 0, void 0, function* () {
            const state = { returnUrl };
            const result = yield this.authorizeService.signIn(state);
            this.message.next(undefined);
            switch (result.status) {
                case _authorize_service__WEBPACK_IMPORTED_MODULE_1__["AuthenticationResultStatus"].Redirect:
                    break;
                case _authorize_service__WEBPACK_IMPORTED_MODULE_1__["AuthenticationResultStatus"].Success:
                    yield this.navigateToReturnUrl(returnUrl);
                    break;
                case _authorize_service__WEBPACK_IMPORTED_MODULE_1__["AuthenticationResultStatus"].Fail:
                    yield this.router.navigate(_api_authorization_constants__WEBPACK_IMPORTED_MODULE_4__["ApplicationPaths"].LoginFailedPathComponents, {
                        queryParams: { [_api_authorization_constants__WEBPACK_IMPORTED_MODULE_4__["QueryParameterNames"].Message]: result.message }
                    });
                    break;
                default:
                    throw new Error(`Invalid status result ${result.status}.`);
            }
        });
    }
    processLoginCallback() {
        return __awaiter(this, void 0, void 0, function* () {
            const url = window.location.href;
            const result = yield this.authorizeService.completeSignIn(url);
            switch (result.status) {
                case _authorize_service__WEBPACK_IMPORTED_MODULE_1__["AuthenticationResultStatus"].Redirect:
                    // There should not be any redirects as completeSignIn never redirects.
                    throw new Error('Should not redirect.');
                case _authorize_service__WEBPACK_IMPORTED_MODULE_1__["AuthenticationResultStatus"].Success:
                    yield this.navigateToReturnUrl(this.getReturnUrl(result.state));
                    break;
                case _authorize_service__WEBPACK_IMPORTED_MODULE_1__["AuthenticationResultStatus"].Fail:
                    this.message.next(result.message);
                    break;
            }
        });
    }
    redirectToRegister() {
        this.redirectToApiAuthorizationPath(`${_api_authorization_constants__WEBPACK_IMPORTED_MODULE_4__["ApplicationPaths"].IdentityRegisterPath}?returnUrl=${encodeURI('/' + _api_authorization_constants__WEBPACK_IMPORTED_MODULE_4__["ApplicationPaths"].Login)}`);
    }
    redirectToProfile() {
        this.redirectToApiAuthorizationPath(_api_authorization_constants__WEBPACK_IMPORTED_MODULE_4__["ApplicationPaths"].IdentityManagePath);
    }
    navigateToReturnUrl(returnUrl) {
        return __awaiter(this, void 0, void 0, function* () {
            // It's important that we do a replace here so that we remove the callback uri with the
            // fragment containing the tokens from the browser history.
            yield this.router.navigateByUrl(returnUrl, {
                replaceUrl: true
            });
        });
    }
    getReturnUrl(state) {
        const fromQuery = this.activatedRoute.snapshot.queryParams.returnUrl;
        // If the url is comming from the query string, check that is either
        // a relative url or an absolute url
        if (fromQuery &&
            !(fromQuery.startsWith(`${window.location.origin}/`) ||
                /\/[^\/].*/.test(fromQuery))) {
            // This is an extra check to prevent open redirects.
            throw new Error('Invalid return url. The return url needs to have the same origin as the current page.');
        }
        return (state && state.returnUrl) ||
            fromQuery ||
            _api_authorization_constants__WEBPACK_IMPORTED_MODULE_4__["ApplicationPaths"].DefaultLoginRedirectPath;
    }
    redirectToApiAuthorizationPath(apiAuthorizationPath) {
        // It's important that we do a replace here so that when the user hits the back arrow on the
        // browser they get sent back to where it was on the app instead of to an endpoint on this
        // component.
        const redirectUrl = `${window.location.origin}${apiAuthorizationPath}`;
        window.location.replace(redirectUrl);
    }
};
LoginComponent.ctorParameters = () => [
    { type: _authorize_service__WEBPACK_IMPORTED_MODULE_1__["AuthorizeService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
LoginComponent = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
        selector: 'app-login',
        template: __importDefault(__webpack_require__(/*! raw-loader!./login.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/api-authorization/login/login.component.html")).default,
        styles: [__importDefault(__webpack_require__(/*! ./login.component.css */ "./src/api-authorization/login/login.component.css")).default]
    }),
    __metadata("design:paramtypes", [_authorize_service__WEBPACK_IMPORTED_MODULE_1__["AuthorizeService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
        _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
], LoginComponent);



/***/ }),

/***/ "./src/api-authorization/logout/logout.component.css":
/*!***********************************************************!*\
  !*** ./src/api-authorization/logout/logout.component.css ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBpLWF1dGhvcml6YXRpb24vbG9nb3V0L2xvZ291dC5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "./src/api-authorization/logout/logout.component.ts":
/*!**********************************************************!*\
  !*** ./src/api-authorization/logout/logout.component.ts ***!
  \**********************************************************/
/*! exports provided: LogoutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LogoutComponent", function() { return LogoutComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _authorize_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../authorize.service */ "./src/api-authorization/authorize.service.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _api_authorization_constants__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../api-authorization.constants */ "./src/api-authorization/api-authorization.constants.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};






// The main responsibility of this component is to handle the user's logout process.
// This is the starting point for the logout process, which is usually initiated when a
// user clicks on the logout button on the LoginMenu component.
let LogoutComponent = class LogoutComponent {
    constructor(authorizeService, activatedRoute, router) {
        this.authorizeService = authorizeService;
        this.activatedRoute = activatedRoute;
        this.router = router;
        this.message = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](null);
    }
    ngOnInit() {
        return __awaiter(this, void 0, void 0, function* () {
            const action = this.activatedRoute.snapshot.url[1];
            switch (action.path) {
                case _api_authorization_constants__WEBPACK_IMPORTED_MODULE_5__["LogoutActions"].Logout:
                    if (!!window.history.state.local) {
                        yield this.logout(this.getReturnUrl());
                    }
                    else {
                        // This prevents regular links to <app>/authentication/logout from triggering a logout
                        this.message.next('The logout was not initiated from within the page.');
                    }
                    break;
                case _api_authorization_constants__WEBPACK_IMPORTED_MODULE_5__["LogoutActions"].LogoutCallback:
                    yield this.processLogoutCallback();
                    break;
                case _api_authorization_constants__WEBPACK_IMPORTED_MODULE_5__["LogoutActions"].LoggedOut:
                    this.message.next('You successfully logged out!');
                    break;
                default:
                    throw new Error(`Invalid action '${action}'`);
            }
        });
    }
    logout(returnUrl) {
        return __awaiter(this, void 0, void 0, function* () {
            const state = { returnUrl };
            const isauthenticated = yield this.authorizeService.isAuthenticated().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["take"])(1)).toPromise();
            if (isauthenticated) {
                const result = yield this.authorizeService.signOut(state);
                switch (result.status) {
                    case _authorize_service__WEBPACK_IMPORTED_MODULE_1__["AuthenticationResultStatus"].Redirect:
                        break;
                    case _authorize_service__WEBPACK_IMPORTED_MODULE_1__["AuthenticationResultStatus"].Success:
                        yield this.navigateToReturnUrl(returnUrl);
                        break;
                    case _authorize_service__WEBPACK_IMPORTED_MODULE_1__["AuthenticationResultStatus"].Fail:
                        this.message.next(result.message);
                        break;
                    default:
                        throw new Error('Invalid authentication result status.');
                }
            }
            else {
                this.message.next('You successfully logged out!');
            }
        });
    }
    processLogoutCallback() {
        return __awaiter(this, void 0, void 0, function* () {
            const url = window.location.href;
            const result = yield this.authorizeService.completeSignOut(url);
            switch (result.status) {
                case _authorize_service__WEBPACK_IMPORTED_MODULE_1__["AuthenticationResultStatus"].Redirect:
                    // There should not be any redirects as the only time completeAuthentication finishes
                    // is when we are doing a redirect sign in flow.
                    throw new Error('Should not redirect.');
                case _authorize_service__WEBPACK_IMPORTED_MODULE_1__["AuthenticationResultStatus"].Success:
                    yield this.navigateToReturnUrl(this.getReturnUrl(result.state));
                    break;
                case _authorize_service__WEBPACK_IMPORTED_MODULE_1__["AuthenticationResultStatus"].Fail:
                    this.message.next(result.message);
                    break;
                default:
                    throw new Error('Invalid authentication result status.');
            }
        });
    }
    navigateToReturnUrl(returnUrl) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.router.navigateByUrl(returnUrl, {
                replaceUrl: true
            });
        });
    }
    getReturnUrl(state) {
        const fromQuery = this.activatedRoute.snapshot.queryParams.returnUrl;
        // If the url is comming from the query string, check that is either
        // a relative url or an absolute url
        if (fromQuery &&
            !(fromQuery.startsWith(`${window.location.origin}/`) ||
                /\/[^\/].*/.test(fromQuery))) {
            // This is an extra check to prevent open redirects.
            throw new Error('Invalid return url. The return url needs to have the same origin as the current page.');
        }
        return (state && state.returnUrl) ||
            fromQuery ||
            _api_authorization_constants__WEBPACK_IMPORTED_MODULE_5__["ApplicationPaths"].LoggedOut;
    }
};
LogoutComponent.ctorParameters = () => [
    { type: _authorize_service__WEBPACK_IMPORTED_MODULE_1__["AuthorizeService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
];
LogoutComponent = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
        selector: 'app-logout',
        template: __importDefault(__webpack_require__(/*! raw-loader!./logout.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/api-authorization/logout/logout.component.html")).default,
        styles: [__importDefault(__webpack_require__(/*! ./logout.component.css */ "./src/api-authorization/logout/logout.component.css")).default]
    }),
    __metadata("design:paramtypes", [_authorize_service__WEBPACK_IMPORTED_MODULE_1__["AuthorizeService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
        _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
], LogoutComponent);



/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".topHeader {\n  background: white;\n  display: flex;\n  align-items: center;\n  height: 60px;\n  border-bottom: 1px solid #d4dbe17a;\n  width: 100%; }\n  .topHeader .infoItem {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    margin-left: 30px; }\n  .topHeader .infoItem img {\n      height: 20px;\n      width: auto;\n      margin-right: 10px; }\n  .topHeader .infoItem p {\n      color: #D4DBE1;\n      font-weight: 500;\n      margin: 0; }\n  footer {\n  position: relative;\n  display: flex;\n  flex-direction: column;\n  padding: 0px;\n  padding-top: 50px;\n  padding-bottom: 30px;\n  color: white;\n  font-size: 1em;\n  justify-content: flex-start;\n  font-weight: 600;\n  background: #51C36D;\n  position: relative;\n  box-shadow: 1px 1px 6px 0px #00000018; }\n  .socialMedia {\n  display: flex;\n  flex-direction: row;\n  width: -webkit-max-content;\n  width: -moz-max-content;\n  width: max-content;\n  justify-content: space-between;\n  z-index: 100;\n  margin: 0% 1% auto 25px;\n  position: absolute;\n  right: 10px; }\n  .socialMedia img {\n  width: 50px;\n  height: auto;\n  margin: 5px; }\n  .paymethods {\n  flex-direction: row;\n  width: -webkit-max-content;\n  width: -moz-max-content;\n  width: max-content;\n  justify-content: space-between;\n  z-index: 100;\n  margin: 0% 1% auto 1%;\n  position: absolute;\n  right: 10px;\n  bottom: 10px; }\n  .paymethods img:nth-child(3) {\n    width: 100px; }\n  .paymethods img {\n    width: 50px;\n    margin: 25px;\n    opacity: .8; }\n  footer a {\n  color: rgba(255, 255, 255, 0.774);\n  text-decoration: none;\n  margin-bottom: 1rem; }\n  footer a:link {\n  color: rgba(255, 255, 255, 0.774);\n  text-decoration: none; }\n  footer a:visited {\n  color: rgba(255, 255, 255, 0.774);\n  text-decoration: none; }\n  .language {\n  height: 30px;\n  overflow: hidden;\n  cursor: pointer;\n  display: flex;\n  flex-direction: column;\n  transition-duration: 0.5s; }\n  .language a {\n  margin: 5% 0 5% 0; }\n  .boxlng {\n  position: relative;\n  width: -webkit-fit-content;\n  width: -moz-fit-content;\n  width: fit-content;\n  margin-bottom: 40px; }\n  .expR {\n  position: absolute;\n  width: 15px;\n  right: -25%;\n  top: 20%; }\n  .expR:hover {\n  cursor: pointer; }\n  .current {\n  color: #7E7E76; }\n  .footcol {\n  display: flex;\n  flex-direction: column;\n  height: auto;\n  width: auto;\n  overflow: hidden;\n  display: flex;\n  flex-direction: column;\n  z-index: 2;\n  height: -webkit-fit-content;\n  height: -moz-fit-content;\n  height: fit-content;\n  overflow: hidden;\n  width: 140px;\n  color: rgba(255, 255, 255, 0.774);\n  margin-bottom: auto; }\n  .footcol p {\n    margin-bottom: 5px; }\n  .footcol:nth-child(1) {\n  margin-bottom: 5%;\n  color: rgba(255, 255, 255, 0.774);\n  text-align: left;\n  font-size: 1.1em; }\n  .footcol:nth-child(2) {\n  margin-bottom: 10%;\n  margin-right: 10%;\n  margin-left: 50px; }\n  .current:visited {\n  color: #7E7E76; }\n  header ul li label {\n  color: #7e7e76; }\n  .sitemap {\n  display: flex;\n  flex-direction: column;\n  width: -webkit-fit-content;\n  width: -moz-fit-content;\n  width: fit-content;\n  margin-right: 5%;\n  height: -webkit-max-content;\n  height: -moz-max-content;\n  height: max-content;\n  justify-content: space-between;\n  z-index: 100;\n  font-size: 1.1em; }\n  .sitemap h3 {\n    color: white;\n    text-transform: uppercase;\n    font-size: 1.3em; }\n  .footerinfo {\n  width: -webkit-fit-content !important;\n  width: -moz-fit-content !important;\n  width: fit-content !important; }\n  .footerinfo h3 {\n    color: white;\n    margin-bottom: 1%; }\n  .footLogo {\n  width: 240px;\n  margin-bottom: 24px;\n  margin-left: 50px;\n  height: auto; }\n  footer .Copyright {\n  position: absolute;\n  bottom: 5px;\n  width: -webkit-fit-content;\n  width: -moz-fit-content;\n  width: fit-content;\n  left: 50px;\n  color: rgba(255, 255, 255, 0.774); }\n  .row {\n  display: flex;\n  flex-direction: row;\n  flex-wrap: wrap;\n  width: 95%;\n  margin: auto; }\n  .title {\n  color: white;\n  margin-bottom: 20px; }\n  .vraag {\n  width: -webkit-fit-content;\n  width: -moz-fit-content;\n  width: fit-content; }\n  .vraag p {\n    margin-bottom: 5px; }\n  .vraag .buttonSecondary {\n    margin-top: 20px;\n    color: white; }\n  .vraag .buttonSecondary:hover {\n      color: #51C36D; }\n  @media (max-width: 699px) {\n  .socialMedia, .paymethods {\n    position: relative; }\n  footer .Copyright {\n    left: 25px; } }\n  @media (max-width: 573px) {\n  .footcol:nth-child(2) {\n    margin-left: 0; } }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvUzpcXFBlcnNvXFxITVRXZWJzaG9wL3NyY1xcYXBwXFxhcHAuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7RUFDSSxpQkFBaUI7RUFDakIsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQixZQUFZO0VBQ1osa0NBQWtDO0VBQ2xDLFdBQVcsRUFBQTtFQU5mO0lBU1EsYUFBYTtJQUNiLG1CQUFtQjtJQUNuQix1QkFBdUI7SUFDdkIsaUJBQWlCLEVBQUE7RUFaekI7TUFlWSxZQUFZO01BQ1osV0FBVztNQUNYLGtCQUFrQixFQUFBO0VBakI5QjtNQXFCWSxjQXZCUTtNQXdCUixnQkFBZ0I7TUFDaEIsU0FBUyxFQUFBO0VBT3JCO0VBQ0ksa0JBQWtCO0VBQ2xCLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsWUFBWTtFQUNaLGlCQUFpQjtFQUNqQixvQkFBb0I7RUFDcEIsWUFBWTtFQUNaLGNBQWM7RUFDZCwyQkFBMkI7RUFDM0IsZ0JBQWdCO0VBQ2hCLG1CQUFtQjtFQUNuQixrQkFBa0I7RUFDbEIscUNBQXFDLEVBQUE7RUFJdkM7RUFFRSxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLDBCQUFrQjtFQUFsQix1QkFBa0I7RUFBbEIsa0JBQWtCO0VBQ2xCLDhCQUE4QjtFQUM5QixZQUFXO0VBQ1gsdUJBQXVCO0VBQ3ZCLGtCQUFrQjtFQUNsQixXQUFXLEVBQUE7RUFFYjtFQUNFLFdBQVc7RUFDWCxZQUFZO0VBQ1osV0FBVyxFQUFBO0VBRWY7RUFDSSxtQkFBbUI7RUFDbkIsMEJBQWtCO0VBQWxCLHVCQUFrQjtFQUFsQixrQkFBa0I7RUFDbEIsOEJBQThCO0VBQzlCLFlBQVc7RUFDWCxxQkFBcUI7RUFDckIsa0JBQWtCO0VBQ2xCLFdBQVc7RUFDWCxZQUFZLEVBQUE7RUFSaEI7SUFXTSxZQUFZLEVBQUE7RUFYbEI7SUFjTSxXQUFXO0lBQ2IsWUFBWTtJQUNaLFdBQVcsRUFBQTtFQUdiO0VBQ0UsaUNBQWlDO0VBQ2pDLHFCQUFxQjtFQUNyQixtQkFBbUIsRUFBQTtFQUVyQjtFQUNFLGlDQUFnQztFQUNoQyxxQkFDRixFQUFBO0VBQ0E7RUFDRSxpQ0FBaUM7RUFDakMscUJBQ0YsRUFBQTtFQUNBO0VBQ0UsWUFBWTtFQUNaLGdCQUFnQjtFQUNoQixlQUFlO0VBQ2YsYUFBYTtFQUNiLHNCQUFzQjtFQUN0Qix5QkFBeUIsRUFBQTtFQUV6QjtFQUNJLGlCQUFpQixFQUFBO0VBRXZCO0VBQ0Usa0JBQWtCO0VBQ2xCLDBCQUFrQjtFQUFsQix1QkFBa0I7RUFBbEIsa0JBQWtCO0VBQ2xCLG1CQUFtQixFQUFBO0VBRXJCO0VBQ0Usa0JBQWtCO0VBQ2xCLFdBQVc7RUFDWCxXQUFXO0VBQ1gsUUFBUSxFQUFBO0VBRVY7RUFDRSxlQUFlLEVBQUE7RUFJakI7RUFDRSxjQUFjLEVBQUE7RUFFaEI7RUFDRSxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLFlBQVk7RUFDWixXQUFXO0VBQ1gsZ0JBQWU7RUFDZixhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLFVBQVU7RUFDViwyQkFBbUI7RUFBbkIsd0JBQW1CO0VBQW5CLG1CQUFtQjtFQUNuQixnQkFBZ0I7RUFDaEIsWUFBWTtFQUNaLGlDQUFpQztFQUNqQyxtQkFBbUIsRUFBQTtFQWJyQjtJQWdCSSxrQkFBa0IsRUFBQTtFQUd0QjtFQUVFLGlCQUFpQjtFQUNqQixpQ0FBaUM7RUFDakMsZ0JBQWdCO0VBQ2hCLGdCQUFnQixFQUFBO0VBRWxCO0VBQ0ksa0JBQWtCO0VBQ2xCLGlCQUFpQjtFQUNqQixpQkFDSixFQUFBO0VBQ0E7RUFDRSxjQUFjLEVBQUE7RUFJaEI7RUFDRSxjQUFjLEVBQUE7RUFLaEI7RUFDRSxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLDBCQUFrQjtFQUFsQix1QkFBa0I7RUFBbEIsa0JBQWtCO0VBQ2xCLGdCQUFnQjtFQUNoQiwyQkFBa0I7RUFBbEIsd0JBQWtCO0VBQWxCLG1CQUFrQjtFQUNsQiw4QkFBOEI7RUFDOUIsWUFBWTtFQUNaLGdCQUFnQixFQUFBO0VBUmxCO0lBVUksWUFBWTtJQUNaLHlCQUF5QjtJQUN6QixnQkFBZ0IsRUFBQTtFQUdwQjtFQUNFLHFDQUE2QjtFQUE3QixrQ0FBNkI7RUFBN0IsNkJBQTZCLEVBQUE7RUFEL0I7SUFHSSxZQUFZO0lBQ1osaUJBQWlCLEVBQUE7RUFJckI7RUFDRSxZQUFZO0VBQ1osbUJBQW1CO0VBQ25CLGlCQUFpQjtFQUNqQixZQUFZLEVBQUE7RUFHZDtFQUNJLGtCQUFrQjtFQUNsQixXQUFXO0VBQ1gsMEJBQWtCO0VBQWxCLHVCQUFrQjtFQUFsQixrQkFBa0I7RUFDbEIsVUFBVTtFQUNWLGlDQUFpQyxFQUFBO0VBRXJDO0VBQ0UsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQixlQUFlO0VBQ2YsVUFBVTtFQUNWLFlBQVksRUFBQTtFQUVkO0VBQ0csWUFBWTtFQUNaLG1CQUFtQixFQUFBO0VBRXRCO0VBQ0UsMEJBQWtCO0VBQWxCLHVCQUFrQjtFQUFsQixrQkFBa0IsRUFBQTtFQURwQjtJQUdJLGtCQUFrQixFQUFBO0VBSHRCO0lBTUksZ0JBQWdCO0lBQ2hCLFlBQVksRUFBQTtFQVBoQjtNQVVNLGNBQWMsRUFBQTtFQUtwQjtFQUNFO0lBQ0Usa0JBQWtCLEVBQUE7RUFFcEI7SUFDRSxVQUFVLEVBQUEsRUFDWDtFQUdIO0VBQ0U7SUFDRSxjQUFjLEVBQUEsRUFDZiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiRncmV5LWNvbG9yOiAjRDREQkUxO1xyXG5cclxuLnRvcEhlYWRlcntcclxuICAgIGJhY2tncm91bmQ6IHdoaXRlO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBoZWlnaHQ6IDYwcHg7XHJcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2Q0ZGJlMTdhO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcblxyXG4gICAgLmluZm9JdGVte1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICBtYXJnaW4tbGVmdDogMzBweDtcclxuXHJcbiAgICAgICAgaW1ne1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDIwcHg7XHJcbiAgICAgICAgICAgIHdpZHRoOiBhdXRvO1xyXG4gICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwe1xyXG4gICAgICAgICAgICBjb2xvcjogJGdyZXktY29sb3I7XHJcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICAgICAgICAgIG1hcmdpbjogMDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBcclxufVxyXG5cclxuXHJcbmZvb3RlcntcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgcGFkZGluZzogMHB4O1xyXG4gICAgcGFkZGluZy10b3A6IDUwcHg7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogMzBweDtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIGZvbnQtc2l6ZTogMWVtO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xyXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgIGJhY2tncm91bmQ6ICM1MUMzNkQ7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBib3gtc2hhZG93OiAxcHggMXB4IDZweCAwcHggIzAwMDAwMDE4O1xyXG4gIFxyXG4gIH1cclxuICBcclxuICAuc29jaWFsTWVkaWFcclxuICB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICAgIHdpZHRoOiBtYXgtY29udGVudDtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgIHotaW5kZXg6MTAwO1xyXG4gICAgbWFyZ2luOiAwJSAxJSBhdXRvIDI1cHg7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICByaWdodDogMTBweDtcclxuICB9XHJcbiAgLnNvY2lhbE1lZGlhIGltZ3tcclxuICAgIHdpZHRoOiA1MHB4O1xyXG4gICAgaGVpZ2h0OiBhdXRvO1xyXG4gICAgbWFyZ2luOiA1cHg7XHJcbiAgfVxyXG4ucGF5bWV0aG9kc3tcclxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgICB3aWR0aDogbWF4LWNvbnRlbnQ7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICB6LWluZGV4OjEwMDtcclxuICAgIG1hcmdpbjogMCUgMSUgYXV0byAxJTtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHJpZ2h0OiAxMHB4O1xyXG4gICAgYm90dG9tOiAxMHB4O1xyXG5cclxuICAgIGltZzpudGgtY2hpbGQoMyl7XHJcbiAgICAgIHdpZHRoOiAxMDBweDtcclxuICAgIH1cclxuICAgIGltZ3tcclxuICAgICAgd2lkdGg6IDUwcHg7XHJcbiAgICBtYXJnaW46IDI1cHg7XHJcbiAgICBvcGFjaXR5OiAuODtcclxuICAgIH1cclxufVxyXG4gIGZvb3RlciBhIHtcclxuICAgIGNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNzc0KTtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgIG1hcmdpbi1ib3R0b206IDFyZW07XHJcbiAgfVxyXG4gIGZvb3RlciBhOmxpbmt7XHJcbiAgICBjb2xvcjpyZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNzc0KTtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZVxyXG4gIH1cclxuICBmb290ZXIgYTp2aXNpdGVkIHtcclxuICAgIGNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNzc0KTtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZVxyXG4gIH1cclxuICAubGFuZ3VhZ2Uge1xyXG4gICAgaGVpZ2h0OiAzMHB4O1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgdHJhbnNpdGlvbi1kdXJhdGlvbjogMC41cztcclxuICB9XHJcbiAgICAubGFuZ3VhZ2UgYSB7XHJcbiAgICAgICAgbWFyZ2luOiA1JSAwIDUlIDA7XHJcbiAgICB9XHJcbiAgLmJveGxuZ3tcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIHdpZHRoOiBmaXQtY29udGVudDtcclxuICAgIG1hcmdpbi1ib3R0b206IDQwcHg7XHJcbiAgfVxyXG4gIC5leHBSe1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgd2lkdGg6IDE1cHg7XHJcbiAgICByaWdodDogLTI1JTtcclxuICAgIHRvcDogMjAlO1xyXG4gIH1cclxuICAuZXhwUjpob3ZlcntcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICB9XHJcbiAgXHJcbiAgXHJcbiAgLmN1cnJlbnR7XHJcbiAgICBjb2xvcjogIzdFN0U3NjtcclxuICB9XHJcbiAgLmZvb3Rjb2x7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGhlaWdodDogYXV0bztcclxuICAgIHdpZHRoOiBhdXRvO1xyXG4gICAgb3ZlcmZsb3c6aGlkZGVuO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICB6LWluZGV4OiAyO1xyXG4gICAgaGVpZ2h0OiBmaXQtY29udGVudDtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICB3aWR0aDogMTQwcHg7XHJcbiAgICBjb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjc3NCk7XHJcbiAgICBtYXJnaW4tYm90dG9tOiBhdXRvO1xyXG5cclxuICAgIHB7XHJcbiAgICAgIG1hcmdpbi1ib3R0b206IDVweDtcclxuICAgIH1cclxuICB9XHJcbiAgLmZvb3Rjb2w6bnRoLWNoaWxkKDEpe1xyXG4gIFxyXG4gICAgbWFyZ2luLWJvdHRvbTogNSU7XHJcbiAgICBjb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjc3NCk7XHJcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gICAgZm9udC1zaXplOiAxLjFlbTtcclxuICB9XHJcbiAgLmZvb3Rjb2w6bnRoLWNoaWxkKDIpe1xyXG4gICAgICBtYXJnaW4tYm90dG9tOiAxMCU7XHJcbiAgICAgIG1hcmdpbi1yaWdodDogMTAlO1xyXG4gICAgICBtYXJnaW4tbGVmdDogNTBweFxyXG4gIH1cclxuICAuY3VycmVudDp2aXNpdGVke1xyXG4gICAgY29sb3I6ICM3RTdFNzY7XHJcbiAgfVxyXG4gIFxyXG4gIFxyXG4gIGhlYWRlciB1bCBsaSBsYWJlbCB7XHJcbiAgICBjb2xvcjogIzdlN2U3NjtcclxuICB9XHJcbiAgXHJcbiAgXHJcbiAgXHJcbiAgLnNpdGVtYXAge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICB3aWR0aDogZml0LWNvbnRlbnQ7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDUlO1xyXG4gICAgaGVpZ2h0Om1heC1jb250ZW50O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgei1pbmRleDogMTAwO1xyXG4gICAgZm9udC1zaXplOiAxLjFlbTtcclxuICAgIGgze1xyXG4gICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgICAgIGZvbnQtc2l6ZTogMS4zZW07XHJcbiAgICB9XHJcbiAgfVxyXG4gIC5mb290ZXJpbmZve1xyXG4gICAgd2lkdGg6IGZpdC1jb250ZW50ICFpbXBvcnRhbnQ7XHJcbiAgICBoM3tcclxuICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgICBtYXJnaW4tYm90dG9tOiAxJTtcclxuICAgIH1cclxuICB9XHJcbiAgXHJcbiAgLmZvb3RMb2dve1xyXG4gICAgd2lkdGg6IDI0MHB4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMjRweDtcclxuICAgIG1hcmdpbi1sZWZ0OiA1MHB4O1xyXG4gICAgaGVpZ2h0OiBhdXRvO1xyXG4gIH1cclxuXHJcbiAgZm9vdGVyIC5Db3B5cmlnaHR7XHJcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgYm90dG9tOiA1cHg7XHJcbiAgICAgIHdpZHRoOiBmaXQtY29udGVudDtcclxuICAgICAgbGVmdDogNTBweDtcclxuICAgICAgY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC43NzQpO1xyXG4gIH1cclxuICAucm93e1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgICBmbGV4LXdyYXA6IHdyYXA7XHJcbiAgICB3aWR0aDogOTUlO1xyXG4gICAgbWFyZ2luOiBhdXRvO1xyXG4gIH1cclxuICAudGl0bGV7XHJcbiAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XHJcbiAgfVxyXG4gIC52cmFhZ3tcclxuICAgIHdpZHRoOiBmaXQtY29udGVudDtcclxuICAgIHB7XHJcbiAgICAgIG1hcmdpbi1ib3R0b206IDVweDtcclxuICAgIH1cclxuICAgIC5idXR0b25TZWNvbmRhcnl7XHJcbiAgICAgIG1hcmdpbi10b3A6IDIwcHg7XHJcbiAgICAgIGNvbG9yOiB3aGl0ZTtcclxuXHJcbiAgICAgICY6aG92ZXJ7XHJcbiAgICAgICAgY29sb3I6ICM1MUMzNkQ7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIEBtZWRpYSAobWF4LXdpZHRoOiA2OTlweCkge1xyXG4gICAgLnNvY2lhbE1lZGlhLCAucGF5bWV0aG9kc3tcclxuICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgfVxyXG4gICAgZm9vdGVyIC5Db3B5cmlnaHR7XHJcbiAgICAgIGxlZnQ6IDI1cHg7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBAbWVkaWEgKG1heC13aWR0aDogNTczcHgpIHtcclxuICAgIC5mb290Y29sOm50aC1jaGlsZCgyKXtcclxuICAgICAgbWFyZ2luLWxlZnQ6IDA7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuIl19 */");

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};

let AppComponent = class AppComponent {
    constructor() {
        this.title = 'app';
    }
};
AppComponent = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
        selector: 'app-root',
        template: __importDefault(__webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
        styles: [__importDefault(__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")).default]
    })
], AppComponent);



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _nav_menu_nav_menu_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./nav-menu/nav-menu.component */ "./src/app/nav-menu/nav-menu.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _counter_counter_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./counter/counter.component */ "./src/app/counter/counter.component.ts");
/* harmony import */ var _fetch_data_fetch_data_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./fetch-data/fetch-data.component */ "./src/app/fetch-data/fetch-data.component.ts");
/* harmony import */ var src_api_authorization_api_authorization_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/api-authorization/api-authorization.module */ "./src/api-authorization/api-authorization.module.ts");
/* harmony import */ var src_api_authorization_authorize_guard__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/api-authorization/authorize.guard */ "./src/api-authorization/authorize.guard.ts");
/* harmony import */ var src_api_authorization_authorize_interceptor__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! src/api-authorization/authorize.interceptor */ "./src/api-authorization/authorize.interceptor.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};













let AppModule = class AppModule {
};
AppModule = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
            _nav_menu_nav_menu_component__WEBPACK_IMPORTED_MODULE_6__["NavMenuComponent"],
            _home_home_component__WEBPACK_IMPORTED_MODULE_7__["HomeComponent"],
            _counter_counter_component__WEBPACK_IMPORTED_MODULE_8__["CounterComponent"],
            _fetch_data_fetch_data_component__WEBPACK_IMPORTED_MODULE_9__["FetchDataComponent"]
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"].withServerTransition({ appId: 'ng-cli-universal' }),
            _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
            src_api_authorization_api_authorization_module__WEBPACK_IMPORTED_MODULE_10__["ApiAuthorizationModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forRoot([
                { path: '', component: _home_home_component__WEBPACK_IMPORTED_MODULE_7__["HomeComponent"], pathMatch: 'full' },
                { path: 'counter', component: _counter_counter_component__WEBPACK_IMPORTED_MODULE_8__["CounterComponent"] },
                { path: 'fetch-data', component: _fetch_data_fetch_data_component__WEBPACK_IMPORTED_MODULE_9__["FetchDataComponent"], canActivate: [src_api_authorization_authorize_guard__WEBPACK_IMPORTED_MODULE_11__["AuthorizeGuard"]] },
            ])
        ],
        providers: [
            { provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HTTP_INTERCEPTORS"], useClass: src_api_authorization_authorize_interceptor__WEBPACK_IMPORTED_MODULE_12__["AuthorizeInterceptor"], multi: true }
        ],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "./src/app/counter/counter.component.ts":
/*!**********************************************!*\
  !*** ./src/app/counter/counter.component.ts ***!
  \**********************************************/
/*! exports provided: CounterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CounterComponent", function() { return CounterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};

let CounterComponent = class CounterComponent {
    constructor() {
        this.currentCount = 0;
    }
    incrementCounter() {
        this.currentCount++;
    }
};
CounterComponent = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
        selector: 'app-counter-component',
        template: __importDefault(__webpack_require__(/*! raw-loader!./counter.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/counter/counter.component.html")).default
    })
], CounterComponent);



/***/ }),

/***/ "./src/app/fetch-data/fetch-data.component.ts":
/*!****************************************************!*\
  !*** ./src/app/fetch-data/fetch-data.component.ts ***!
  \****************************************************/
/*! exports provided: FetchDataComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FetchDataComponent", function() { return FetchDataComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};


let FetchDataComponent = class FetchDataComponent {
    constructor(http, baseUrl) {
        http.get(baseUrl + 'weatherforecast').subscribe(result => {
            this.forecasts = result;
        }, error => console.error(error));
    }
};
FetchDataComponent.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] },
    { type: String, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"], args: ['BASE_URL',] }] }
];
FetchDataComponent = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
        selector: 'app-fetch-data',
        template: __importDefault(__webpack_require__(/*! raw-loader!./fetch-data.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/fetch-data/fetch-data.component.html")).default
    }),
    __param(1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])('BASE_URL')),
    __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"], String])
], FetchDataComponent);



/***/ }),

/***/ "./src/app/home/home.component.scss":
/*!******************************************!*\
  !*** ./src/app/home/home.component.scss ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".landing {\n  background: white;\n  width: 90%;\n  box-shadow: 1px 1px 6px 0px #00000018;\n  border-radius: 4px;\n  display: flex;\n  margin: auto;\n  margin-top: 10px;\n  flex-direction: column; }\n  .landing h1 {\n    font-size: 1.4em;\n    padding: 15px;\n    margin: 1% 0 1% 0%;\n    width: -webkit-fit-content;\n    width: -moz-fit-content;\n    width: fit-content;\n    font-weight: 400;\n    color: white;\n    background: #51C36D;\n    border-top-right-radius: 4px;\n    border-bottom-right-radius: 4px; }\n  .landing .discover {\n    width: 100%;\n    border-bottom: 1px solid #d4dbe17a; }\n  .landing .itemContainer {\n    display: flex;\n    flex-wrap: wrap;\n    justify-content: space-around;\n    align-items: center;\n    margin-top: 5%;\n    width: 100%; }\n  .landing .itemContainer .item:nth-child(2) {\n      border: 1px solid #d4dbe17a;\n      border-top: 0;\n      border-bottom: 0; }\n  .landing .itemContainer .item {\n      width: 30%;\n      height: 350px;\n      padding-top: 30px;\n      margin-bottom: 30px; }\n  .landing .itemContainer .item:hover {\n        cursor: pointer; }\n  .landing .itemContainer .item img {\n        height: 50%;\n        margin: auto;\n        margin-bottom: 10px;\n        display: flex; }\n  .landing .itemContainer .item h2 {\n        font-size: 1.5em;\n        font-weight: 400;\n        text-align: center;\n        font-weight: 500;\n        color: #51C36D;\n        text-transform: uppercase; }\n  .landing .itemContainer .item .artColor {\n        margin-bottom: 0; }\n  .landing .itemContainer .item p {\n        text-align: center; }\n  .landing .itemContainer .item .price {\n        font-weight: 500; }\n  .landing .promo {\n    display: flex;\n    flex-wrap: wrap;\n    background: #71cf77;\n    background: linear-gradient(133deg, #71cf77 0%, #51c36d 100%);\n    color: white;\n    padding: 20px;\n    padding-right: 0;\n    height: 200px;\n    position: relative;\n    border-bottom-left-radius: 4px;\n    border-bottom-right-radius: 4px; }\n  .landing .promo .promoperc {\n      position: absolute;\n      top: -15px;\n      left: -15px;\n      width: 45px;\n      height: 45px;\n      opacity: 1; }\n  .landing .promo .content {\n      height: 100%;\n      display: flex;\n      flex-direction: column;\n      margin: auto;\n      text-align: center;\n      width: 50%;\n      font-size: 1.3em; }\n  .landing .promo .content .buttonSecondary {\n        margin: auto;\n        margin-bottom: 0; }\n  .landing .promo .artPromo {\n      height: 90%;\n      width: auto;\n      margin-left: auto;\n      opacity: .9;\n      position: absolute;\n      right: 0;\n      top: 0;\n      bottom: 0;\n      margin: auto; }\n  .categories {\n  margin-top: 3%; }\n  .categories .itemContainer {\n    display: flex;\n    flex-direction: row;\n    width: 90%;\n    flex-wrap: wrap;\n    margin: auto;\n    justify-content: space-between; }\n  .categories .itemContainer .item {\n      background: #F4F4F400;\n      width: 90%;\n      box-shadow: 1px 1px 6px 0px #00000018;\n      display: flex;\n      margin: auto;\n      margin-top: 10px;\n      flex-direction: column;\n      height: 400px;\n      width: 24%;\n      overflow: hidden;\n      justify-content: center;\n      align-items: center;\n      position: relative;\n      margin-bottom: 5%;\n      border-radius: 4px; }\n  .categories .itemContainer .item img {\n        height: auto;\n        width: 50%;\n        margin: auto;\n        display: flex; }\n  .categories .itemContainer .item h3 {\n        width: 100%;\n        background: #51c36d;\n        color: white;\n        position: absolute;\n        bottom: 0;\n        margin: 0;\n        padding: 10px 15px 10px; }\n  .categories .itemContainer .item .buttonSecondary {\n        position: absolute;\n        bottom: 8px;\n        right: 6px;\n        width: 20%;\n        margin: auto; }\n  @media (max-width: 1600px) {\n  .categories .itemContainer .item {\n    width: 600px; } }\n  @media (max-width: 1400px) {\n  .categories .itemContainer .item {\n    width: 430px; } }\n  @media (max-width: 1022px) {\n  .landing .promo {\n    flex-direction: column;\n    height: auto; }\n    .landing .promo .content {\n      width: -webkit-fit-content;\n      width: -moz-fit-content;\n      width: fit-content; }\n    .landing .promo .artPromo {\n      position: relative;\n      width: 250px;\n      margin-top: 5%; }\n  .categories .itemContainer .item {\n    width: 370px; } }\n  @media (max-width: 845px) {\n  .landing .itemContainer .item {\n    width: 80%; }\n  .landing .itemContainer .item:nth-child(2) {\n    border: none; } }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9TOlxcUGVyc29cXEhNVFdlYnNob3Avc3JjXFxhcHBcXGhvbWVcXGhvbWUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxpQkFBaUI7RUFDakIsVUFBVTtFQUNWLHFDQUFxQztFQUNyQyxrQkFBa0I7RUFDbEIsYUFBYTtFQUNiLFlBQVk7RUFDWixnQkFBZ0I7RUFDaEIsc0JBQXNCLEVBQUE7RUFSMUI7SUFXUSxnQkFBZ0I7SUFDaEIsYUFBYTtJQUNiLGtCQUFrQjtJQUNsQiwwQkFBa0I7SUFBbEIsdUJBQWtCO0lBQWxCLGtCQUFrQjtJQUNsQixnQkFBZ0I7SUFDaEIsWUFBWTtJQUNaLG1CQUFtQjtJQUNuQiw0QkFBNEI7SUFDNUIsK0JBQStCLEVBQUE7RUFuQnZDO0lBdUJRLFdBQVc7SUFDWCxrQ0FBa0MsRUFBQTtFQXhCMUM7SUEyQlEsYUFBYTtJQUNiLGVBQWU7SUFDZiw2QkFBNkI7SUFDN0IsbUJBQW1CO0lBQ25CLGNBQWM7SUFDZCxXQUFXLEVBQUE7RUFoQ25CO01BbUNZLDJCQUEyQjtNQUMzQixhQUFhO01BQ2IsZ0JBQWdCLEVBQUE7RUFyQzVCO01Bd0NZLFVBQVU7TUFDVixhQUFhO01BQ2IsaUJBQWlCO01BQ2pCLG1CQUFtQixFQUFBO0VBM0MvQjtRQThDZ0IsZUFBZSxFQUFBO0VBOUMvQjtRQWtEZ0IsV0FBVztRQUNYLFlBQVk7UUFDWixtQkFBbUI7UUFDbkIsYUFBYSxFQUFBO0VBckQ3QjtRQXdEZ0IsZ0JBQWdCO1FBQ2hCLGdCQUFnQjtRQUNoQixrQkFBa0I7UUFDbEIsZ0JBQWdCO1FBQ2hCLGNBQWM7UUFDZCx5QkFBeUIsRUFBQTtFQTdEekM7UUFnRWdCLGdCQUFnQixFQUFBO0VBaEVoQztRQW1FZ0Isa0JBQWtCLEVBQUE7RUFuRWxDO1FBc0VnQixnQkFBZ0IsRUFBQTtFQXRFaEM7SUE0RVEsYUFBYTtJQUNiLGVBQWU7SUFDZixtQkFBNEI7SUFDNUIsNkRBQW9GO0lBQ3BGLFlBQVk7SUFDWixhQUFhO0lBQ2IsZ0JBQWdCO0lBQ2hCLGFBQWE7SUFDYixrQkFBa0I7SUFDbEIsOEJBQThCO0lBQzlCLCtCQUErQixFQUFBO0VBdEZ2QztNQXdGWSxrQkFBa0I7TUFDbEIsVUFBVTtNQUNWLFdBQVc7TUFDWCxXQUFXO01BQ1gsWUFBWTtNQUNaLFVBQVUsRUFBQTtFQTdGdEI7TUFnR1ksWUFBWTtNQUNaLGFBQWE7TUFDYixzQkFBc0I7TUFDdEIsWUFBWTtNQUNaLGtCQUFrQjtNQUNsQixVQUFVO01BQ1YsZ0JBQWdCLEVBQUE7RUF0RzVCO1FBd0dnQixZQUFZO1FBQ1osZ0JBQWdCLEVBQUE7RUF6R2hDO01BOEdZLFdBQVc7TUFDWCxXQUFXO01BQ1gsaUJBQWlCO01BQ2pCLFdBQVc7TUFDWCxrQkFBa0I7TUFDbEIsUUFBUTtNQUNSLE1BQU07TUFDTixTQUFTO01BQ1QsWUFBWSxFQUFBO0VBT3hCO0VBQ0UsY0FBYyxFQUFBO0VBRGhCO0lBSVEsYUFBYTtJQUNiLG1CQUFtQjtJQUNuQixVQUFVO0lBQ1YsZUFBZTtJQUNmLFlBQVk7SUFDWiw4QkFBOEIsRUFBQTtFQVR0QztNQVdZLHFCQUFxQjtNQUNyQixVQUFVO01BQ1YscUNBQXFDO01BQ3JDLGFBQWE7TUFDYixZQUFZO01BQ1osZ0JBQWdCO01BQ2hCLHNCQUFzQjtNQUN0QixhQUFhO01BQ2IsVUFBVTtNQUNWLGdCQUFnQjtNQUNoQix1QkFBdUI7TUFDdkIsbUJBQW1CO01BQ25CLGtCQUFrQjtNQUNsQixpQkFBaUI7TUFDakIsa0JBQWtCLEVBQUE7RUF6QjlCO1FBMkJnQixZQUFZO1FBQ1osVUFBVTtRQUNWLFlBQVk7UUFDWixhQUFhLEVBQUE7RUE5QjdCO1FBaUNnQixXQUFXO1FBQ1gsbUJBQW1CO1FBQ25CLFlBQVk7UUFDWixrQkFBa0I7UUFDbEIsU0FBUztRQUNULFNBQVM7UUFDVCx1QkFBdUIsRUFBQTtFQXZDdkM7UUEwQ2dCLGtCQUFrQjtRQUNsQixXQUFXO1FBQ1gsVUFBVTtRQUNWLFVBQVU7UUFDVixZQUFZLEVBQUE7RUFLNUI7RUFFSTtJQUdZLFlBQVksRUFBQSxFQUNmO0VBS2I7RUFFSTtJQUdZLFlBQVksRUFBQSxFQUNmO0VBS2I7RUFDSTtJQUVRLHNCQUFzQjtJQUN0QixZQUFZLEVBQUE7SUFIcEI7TUFLWSwwQkFBa0I7TUFBbEIsdUJBQWtCO01BQWxCLGtCQUFrQixFQUFBO0lBTDlCO01BUVksa0JBQWtCO01BQ2xCLFlBQVk7TUFDWixjQUFjLEVBQUE7RUFLMUI7SUFHWSxZQUFZLEVBQUEsRUFDZjtFQU1iO0VBQ0k7SUFHWSxVQUFVLEVBQUE7RUFIdEI7SUFNWSxZQUFZLEVBQUEsRUFDZiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvaG9tZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5sYW5kaW5ne1xyXG4gICAgYmFja2dyb3VuZDogd2hpdGU7XHJcbiAgICB3aWR0aDogOTAlO1xyXG4gICAgYm94LXNoYWRvdzogMXB4IDFweCA2cHggMHB4ICMwMDAwMDAxODtcclxuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBtYXJnaW46IGF1dG87XHJcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIFxyXG4gICAgaDF7XHJcbiAgICAgICAgZm9udC1zaXplOiAxLjRlbTtcclxuICAgICAgICBwYWRkaW5nOiAxNXB4O1xyXG4gICAgICAgIG1hcmdpbjogMSUgMCAxJSAwJTtcclxuICAgICAgICB3aWR0aDogZml0LWNvbnRlbnQ7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICAgICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAgICAgYmFja2dyb3VuZDogIzUxQzM2RDtcclxuICAgICAgICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogNHB4O1xyXG4gICAgICAgIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiA0cHg7XHJcblxyXG4gICAgfVxyXG4gICAgLmRpc2NvdmVye1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZDRkYmUxN2E7XHJcbiAgICB9XHJcbiAgICAuaXRlbUNvbnRhaW5lcntcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGZsZXgtd3JhcDogd3JhcDtcclxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcclxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDUlO1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG5cclxuICAgICAgICAuaXRlbTpudGgtY2hpbGQoMil7XHJcbiAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNkNGRiZTE3YTtcclxuICAgICAgICAgICAgYm9yZGVyLXRvcDogMDtcclxuICAgICAgICAgICAgYm9yZGVyLWJvdHRvbTogMDtcclxuICAgICAgICB9XHJcbiAgICAgICAgLml0ZW17XHJcbiAgICAgICAgICAgIHdpZHRoOiAzMCU7XHJcbiAgICAgICAgICAgIGhlaWdodDogMzUwcHg7XHJcbiAgICAgICAgICAgIHBhZGRpbmctdG9wOiAzMHB4O1xyXG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAzMHB4O1xyXG5cclxuICAgICAgICAgICAgJjpob3ZlcntcclxuICAgICAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgaW1ne1xyXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiA1MCU7XHJcbiAgICAgICAgICAgICAgICBtYXJnaW46IGF1dG87XHJcbiAgICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG4gICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBoMntcclxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMS41ZW07XHJcbiAgICAgICAgICAgICAgICBmb250LXdlaWdodDogNDAwO1xyXG4gICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgICAgICAgICAgICAgIGNvbG9yOiAjNTFDMzZEO1xyXG4gICAgICAgICAgICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAuYXJ0Q29sb3J7XHJcbiAgICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAwO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHB7XHJcbiAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLnByaWNle1xyXG4gICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIFxyXG4gICAgLnByb21ve1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgZmxleC13cmFwOiB3cmFwO1xyXG4gICAgICAgIGJhY2tncm91bmQ6IHJnYigxMTMsMjA3LDExOSk7XHJcbiAgICAgICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDEzM2RlZywgcmdiYSgxMTMsMjA3LDExOSwxKSAwJSwgcmdiYSg4MSwxOTUsMTA5LDEpIDEwMCUpO1xyXG4gICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgICBwYWRkaW5nOiAyMHB4O1xyXG4gICAgICAgIHBhZGRpbmctcmlnaHQ6IDA7XHJcbiAgICAgICAgaGVpZ2h0OiAyMDBweDtcclxuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogNHB4O1xyXG4gICAgICAgIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiA0cHg7XHJcbiAgICAgICAgLnByb21vcGVyY3tcclxuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICB0b3A6IC0xNXB4O1xyXG4gICAgICAgICAgICBsZWZ0OiAtMTVweDtcclxuICAgICAgICAgICAgd2lkdGg6IDQ1cHg7XHJcbiAgICAgICAgICAgIGhlaWdodDogNDVweDtcclxuICAgICAgICAgICAgb3BhY2l0eTogMTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLmNvbnRlbnR7XHJcbiAgICAgICAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAgICAgICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgICAgIHdpZHRoOiA1MCU7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMS4zZW07XHJcbiAgICAgICAgICAgIC5idXR0b25TZWNvbmRhcnl7XHJcbiAgICAgICAgICAgICAgICBtYXJnaW46IGF1dG87XHJcbiAgICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAwO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAuYXJ0UHJvbW97XHJcbiAgICAgICAgICAgIGhlaWdodDogOTAlO1xyXG4gICAgICAgICAgICB3aWR0aDogYXV0bztcclxuICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IGF1dG87XHJcbiAgICAgICAgICAgIG9wYWNpdHk6IC45O1xyXG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgIHJpZ2h0OiAwO1xyXG4gICAgICAgICAgICB0b3A6IDA7XHJcbiAgICAgICAgICAgIGJvdHRvbTogMDtcclxuICAgICAgICAgICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICBcclxuICAgIH0gICBcclxufVxyXG5cclxuLmNhdGVnb3JpZXN7XHJcbiAgbWFyZ2luLXRvcDogMyU7XHJcblxyXG4gICAgLml0ZW1Db250YWluZXJ7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gICAgICAgIHdpZHRoOiA5MCU7XHJcbiAgICAgICAgZmxleC13cmFwOiB3cmFwO1xyXG4gICAgICAgIG1hcmdpbjogYXV0bztcclxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICAgICAgLml0ZW17XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQ6ICNGNEY0RjQwMDtcclxuICAgICAgICAgICAgd2lkdGg6IDkwJTtcclxuICAgICAgICAgICAgYm94LXNoYWRvdzogMXB4IDFweCA2cHggMHB4ICMwMDAwMDAxODtcclxuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgICAgICAgICBtYXJnaW4tdG9wOiAxMHB4O1xyXG4gICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDQwMHB4O1xyXG4gICAgICAgICAgICB3aWR0aDogMjQlO1xyXG4gICAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiA1JTtcclxuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG4gICAgICAgICAgICBpbWd7XHJcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IGF1dG87XHJcbiAgICAgICAgICAgICAgICB3aWR0aDogNTAlO1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBoM3tcclxuICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZDogIzUxYzM2ZDtcclxuICAgICAgICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgICAgIGJvdHRvbTogMDtcclxuICAgICAgICAgICAgICAgIG1hcmdpbjogMDtcclxuICAgICAgICAgICAgICAgIHBhZGRpbmc6IDEwcHggMTVweCAxMHB4O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC5idXR0b25TZWNvbmRhcnl7XHJcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgICAgICBib3R0b206IDhweDtcclxuICAgICAgICAgICAgICAgIHJpZ2h0OiA2cHg7XHJcbiAgICAgICAgICAgICAgICB3aWR0aDogMjAlO1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbkBtZWRpYSAobWF4LXdpZHRoOiAxNjAwcHgpIHtcclxuXHJcbiAgICAuY2F0ZWdvcmllcyB7XHJcbiAgICAgICAgLml0ZW1Db250YWluZXJ7XHJcbiAgICAgICAgICAgIC5pdGVte1xyXG4gICAgICAgICAgICAgICAgd2lkdGg6IDYwMHB4O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG5AbWVkaWEgKG1heC13aWR0aDogMTQwMHB4KSB7XHJcblxyXG4gICAgLmNhdGVnb3JpZXMge1xyXG4gICAgICAgIC5pdGVtQ29udGFpbmVye1xyXG4gICAgICAgICAgICAuaXRlbXtcclxuICAgICAgICAgICAgICAgIHdpZHRoOiA0MzBweDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuQG1lZGlhIChtYXgtd2lkdGg6IDEwMjJweCkge1xyXG4gICAgLmxhbmRpbmd7XHJcbiAgICAgICAgLnByb21ve1xyXG4gICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICAgICAgICBoZWlnaHQ6IGF1dG87XHJcbiAgICAgICAgICAgIC5jb250ZW50e1xyXG4gICAgICAgICAgICAgICAgd2lkdGg6IGZpdC1jb250ZW50O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC5hcnRQcm9tb3tcclxuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICAgICAgICAgIHdpZHRoOiAyNTBweDtcclxuICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IDUlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC5jYXRlZ29yaWVzIHtcclxuICAgICAgICAuaXRlbUNvbnRhaW5lcntcclxuICAgICAgICAgICAgLml0ZW17XHJcbiAgICAgICAgICAgICAgICB3aWR0aDogMzcwcHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgXHJcbn1cclxuXHJcbkBtZWRpYSAobWF4LXdpZHRoOiA4NDVweCkge1xyXG4gICAgLmxhbmRpbmcge1xyXG4gICAgICAgIC5pdGVtQ29udGFpbmVye1xyXG4gICAgICAgICAgICAuaXRlbXtcclxuICAgICAgICAgICAgICAgIHdpZHRoOiA4MCU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLml0ZW06bnRoLWNoaWxkKDIpe1xyXG4gICAgICAgICAgICAgICAgYm9yZGVyOiBub25lO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxufSJdfQ== */");

/***/ }),

/***/ "./src/app/home/home.component.ts":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};

let HomeComponent = class HomeComponent {
};
HomeComponent = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
        selector: 'app-home',
        template: __importDefault(__webpack_require__(/*! raw-loader!./home.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.component.html")).default,
        styles: [__importDefault(__webpack_require__(/*! ./home.component.scss */ "./src/app/home/home.component.scss")).default]
    })
], HomeComponent);



/***/ }),

/***/ "./src/app/nav-menu/nav-menu.component.scss":
/*!**************************************************!*\
  !*** ./src/app/nav-menu/nav-menu.component.scss ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("html {\n  font-size: 14px; }\n\n*, *:after, *:before {\n  box-sizing: border-box; }\n\nhtml, body, div, span, applet, object, iframe, h1, h2, h3, h4, h5, h6, p, blockquote, pre, a, abbr, acronym, address, big, cite, code, del, dfn, em, img, ins, kbd, q, s, samp, small, strike, strong, sub, sup, tt, var, b, u, i, center, dl, dt, dd, ol, ul, li, fieldset, form, label, legend, table, caption, tbody, tfoot, thead, tr, th, td, article, aside, canvas, details, embed, figure, figcaption, footer, header, hgroup, menu, nav, output, ruby, section, summary, time, mark, audio, video {\n  margin: 0;\n  padding: 0;\n  border: 0;\n  font-size: 100%;\n  font: inherit;\n  vertical-align: baseline; }\n\n/* HTML5 display-role reset for older browsers */\n\narticle, aside, details, figcaption, figure, footer, header, hgroup, menu, nav, section {\n  display: block; }\n\nbody {\n  line-height: 1; }\n\nol, ul {\n  list-style: none; }\n\nblockquote, q {\n  quotes: none; }\n\nblockquote:before, blockquote:after, q:before, q:after {\n  content: '';\n  content: none; }\n\ntable {\n  border-collapse: collapse;\n  border-spacing: 0; }\n\n.container {\n  display: flex;\n  flex-wrap: wrap;\n  height: auto;\n  width: 90%;\n  margin: auto;\n  max-width: 100%;\n  align-items: center;\n  justify-content: center;\n  padding-bottom: 20px; }\n\n.container a.navbar-brand {\n    height: 100%;\n    align-items: center;\n    display: flex; }\n\n.container a.navbar-brand img {\n      height: auto;\n      width: 300px; }\n\n.custom-select-wrapper {\n  position: relative;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n  width: 230px;\n  margin-right: 20px;\n  height: 45px;\n  margin-left: auto; }\n\n.custom-select {\n  position: relative;\n  display: flex;\n  flex-direction: column;\n  border-style: solid;\n  border-color: #51C36D;\n  min-width: 185px; }\n\n.custom-select__trigger {\n  position: relative;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 0 0px;\n  font-size: 1em;\n  font-weight: 500;\n  color: #51C36D;\n  height: 45px;\n  padding: 0 15px 0 10px;\n  line-height: 60px;\n  background: #ffffff;\n  cursor: pointer;\n  border-width: 2px;\n  border-radius: 4px;\n  border-style: solid;\n  border-color: #d4dbe1ab; }\n\n.custom-options {\n  position: absolute;\n  display: block;\n  top: 100%;\n  left: 0;\n  right: 0;\n  border: 2px solid #d4dbe1ab;\n  border-top: 0;\n  background: #fff;\n  transition: all 0.5s;\n  opacity: 0;\n  visibility: hidden;\n  pointer-events: none;\n  z-index: 2; }\n\n.custom-select.open .custom-options {\n  opacity: 1;\n  visibility: visible;\n  pointer-events: all; }\n\n.custom-option {\n  position: relative;\n  display: block;\n  padding: 0 22px 0 22px;\n  font-size: 1em;\n  font-weight: 400;\n  color: #3b3b3b;\n  line-height: 45px;\n  cursor: pointer;\n  transition: all 0.5s; }\n\n.custom-option:hover {\n  cursor: pointer;\n  background-color: #b2b2b23b; }\n\n.custom-option.selected {\n  color: #ffffff;\n  background-color: #51C36D; }\n\n.arrow {\n  position: relative;\n  height: 14px;\n  width: 5px; }\n\n.arrow::before, .arrow::after {\n  content: \"\";\n  position: absolute;\n  bottom: 0px;\n  width: 0.15rem;\n  height: 100%;\n  transition: all 0.5s; }\n\n.arrow::before {\n  left: -5px;\n  transform: rotate(45deg);\n  background-color: #51C36Dde; }\n\n.arrow::after {\n  left: 5px;\n  transform: rotate(-45deg);\n  background-color: #51C36Dde; }\n\n.open .arrow::before {\n  left: -5px;\n  transform: rotate(-45deg); }\n\n.open .arrow::after {\n  left: 5px;\n  transform: rotate(45deg); }\n\n.listhead {\n  position: relative;\n  display: block;\n  padding: 0 22px 0 22px;\n  font-size: 1em;\n  font-weight: 400;\n  color: #3b3b3b4d;\n  line-height: 45px;\n  cursor: pointer;\n  transition: all 0.5s; }\n\n.searchBox {\n  display: flex;\n  width: 40%;\n  min-width: 600px;\n  align-items: center;\n  display: flex;\n  align-items: center;\n  margin-right: auto; }\n\n.searchBox button {\n    width: 24%;\n    background: #51C36D;\n    color: white;\n    border: 2px solid #51C36D;\n    height: 45px;\n    border-radius: 4px;\n    padding: 0 5px 0 5px;\n    margin-left: 10px; }\n\n.searchBox button:hover {\n      background: transparent;\n      border: 2px solid #51C36D;\n      color: #51C36D;\n      transition-duration: 0.5s; }\n\n.searchBox .inputSearch {\n    width: 75%;\n    position: relative; }\n\n.searchBox .inputSearch input {\n      width: 100%;\n      height: 45px;\n      padding: 0 8px 0 8px;\n      border-radius: 4px;\n      border: 2px solid #d4dbe1ab; }\n\n.searchBox .inputSearch input:focus {\n        outline: none; }\n\n.searchBox .inputSearch input::-webkit-input-placeholder {\n        color: #d4dbe1; }\n\n.searchBox .inputSearch input::-moz-placeholder {\n        color: #d4dbe1; }\n\n.searchBox .inputSearch input:-ms-input-placeholder {\n        color: #d4dbe1; }\n\n.searchBox .inputSearch input::-ms-input-placeholder {\n        color: #d4dbe1; }\n\n.searchBox .inputSearch input::placeholder {\n        color: #d4dbe1; }\n\n.searchBox .inputSearch img {\n      position: absolute;\n      width: 30px;\n      height: 30px;\n      right: 5px;\n      top: 0;\n      bottom: 0;\n      margin: auto; }\n\n@media (max-width: 698px) {\n  .container {\n    flex-direction: column;\n    align-items: center; }\n  .searchBox, .custom-select-wrapper {\n    margin: auto;\n    margin-bottom: 10px;\n    min-width: 100%; } }\n\n.box-shadow {\n  box-shadow: 0 0.25rem 0.75rem rgba(0, 0, 0, 0.05); }\n\n@media (min-width: 768px) {\n  html {\n    font-size: 16px; } }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbmF2LW1lbnUvUzpcXFBlcnNvXFxITVRXZWJzaG9wL3NyY1xcYXBwXFxuYXYtbWVudVxcbmF2LW1lbnUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7RUFDRSxlQUFlLEVBQUE7O0FBRWpCO0VBQ0Usc0JBQXNCLEVBQUE7O0FBRXhCO0VBQ0UsU0FBUztFQUNULFVBQVU7RUFDVixTQUFTO0VBQ1QsZUFBZTtFQUNmLGFBQWE7RUFDYix3QkFBd0IsRUFBQTs7QUFFMUIsZ0RBQUE7O0FBQ0E7RUFDRSxjQUFjLEVBQUE7O0FBRWhCO0VBQ0UsY0FBYyxFQUFBOztBQUVoQjtFQUNFLGdCQUFnQixFQUFBOztBQUVsQjtFQUNFLFlBQVksRUFBQTs7QUFFZDtFQUNFLFdBQVc7RUFDWCxhQUFhLEVBQUE7O0FBRWY7RUFDRSx5QkFBeUI7RUFDekIsaUJBQWlCLEVBQUE7O0FBSW5CO0VBQ0UsYUFBYTtFQUNiLGVBQWU7RUFDZixZQUFZO0VBQ1osVUFBVTtFQUNWLFlBQVk7RUFDWixlQUFlO0VBQ2YsbUJBQW1CO0VBQ25CLHVCQUF1QjtFQUN2QixvQkFBb0IsRUFBQTs7QUFUdEI7SUFZSSxZQUFZO0lBQ1osbUJBQW1CO0lBQ25CLGFBQWEsRUFBQTs7QUFkakI7TUFnQk0sWUFBWTtNQUNaLFlBQVksRUFBQTs7QUFLbEI7RUFDRSxrQkFBa0I7RUFDbEIseUJBQWlCO0tBQWpCLHNCQUFpQjtNQUFqQixxQkFBaUI7VUFBakIsaUJBQWlCO0VBQ2pCLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsWUFBWTtFQUNaLGlCQUFpQixFQUFBOztBQUduQjtFQUNFLGtCQUFrQjtFQUNsQixhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLG1CQUFtQjtFQUNuQixxQkFBcUI7RUFDckIsZ0JBQWdCLEVBQUE7O0FBRWxCO0VBQ0Usa0JBQWtCO0VBQ2xCLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsOEJBQThCO0VBQzlCLGNBQWM7RUFDZCxjQUFjO0VBQ2QsZ0JBQWdCO0VBQ2hCLGNBQWM7RUFDZCxZQUFZO0VBQ1osc0JBQXNCO0VBQ3RCLGlCQUFpQjtFQUNqQixtQkFBbUI7RUFDbkIsZUFBZTtFQUNmLGlCQUFpQjtFQUNqQixrQkFBa0I7RUFDbEIsbUJBQW1CO0VBQ25CLHVCQUF1QixFQUFBOztBQUV6QjtFQUNFLGtCQUFrQjtFQUNsQixjQUFjO0VBQ2QsU0FBUztFQUNULE9BQU87RUFDUCxRQUFRO0VBQ1IsMkJBQTJCO0VBQzNCLGFBQWE7RUFDYixnQkFBZ0I7RUFDaEIsb0JBQW9CO0VBQ3BCLFVBQVU7RUFDVixrQkFBa0I7RUFDbEIsb0JBQW9CO0VBQ3BCLFVBQVUsRUFBQTs7QUFFWjtFQUNFLFVBQVU7RUFDVixtQkFBbUI7RUFDbkIsbUJBQW1CLEVBQUE7O0FBRXJCO0VBQ0Usa0JBQWtCO0VBQ2xCLGNBQWM7RUFDZCxzQkFBc0I7RUFDdEIsY0FBYztFQUNkLGdCQUFnQjtFQUNoQixjQUFjO0VBQ2QsaUJBQWlCO0VBQ2pCLGVBQWU7RUFDZixvQkFBb0IsRUFBQTs7QUFFdEI7RUFDRSxlQUFlO0VBQ2YsMkJBQTJCLEVBQUE7O0FBRTdCO0VBQ0UsY0FBYztFQUNkLHlCQUF5QixFQUFBOztBQUczQjtFQUNFLGtCQUFrQjtFQUNsQixZQUFZO0VBQ1osVUFBVSxFQUFBOztBQUVaO0VBQ0UsV0FBVztFQUNYLGtCQUFrQjtFQUNsQixXQUFXO0VBQ1gsY0FBYztFQUNkLFlBQVk7RUFDWixvQkFBb0IsRUFBQTs7QUFFdEI7RUFDRSxVQUFVO0VBQ1Ysd0JBQXdCO0VBQ3hCLDJCQUEyQixFQUFBOztBQUU3QjtFQUNFLFNBQVM7RUFDVCx5QkFBeUI7RUFDekIsMkJBQTJCLEVBQUE7O0FBRTdCO0VBQ0UsVUFBVTtFQUNWLHlCQUF5QixFQUFBOztBQUUzQjtFQUNFLFNBQVM7RUFDVCx3QkFBd0IsRUFBQTs7QUFFMUI7RUFDRSxrQkFBa0I7RUFDbEIsY0FBYztFQUNkLHNCQUFzQjtFQUN0QixjQUFjO0VBQ2QsZ0JBQWdCO0VBQ2hCLGdCQUFnQjtFQUNoQixpQkFBaUI7RUFDakIsZUFBZTtFQUNmLG9CQUFvQixFQUFBOztBQUV0QjtFQUNFLGFBQWE7RUFDYixVQUFVO0VBQ1YsZ0JBQWdCO0VBQ2hCLG1CQUFtQjtFQUNuQixhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLGtCQUFrQixFQUFBOztBQVBwQjtJQVNJLFVBQVU7SUFDVixtQkFBbUI7SUFDbkIsWUFBWTtJQUNaLHlCQUF5QjtJQUN6QixZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLG9CQUFvQjtJQUNwQixpQkFBaUIsRUFBQTs7QUFoQnJCO01BbUJNLHVCQUF1QjtNQUN2Qix5QkFBeUI7TUFDekIsY0FBYztNQUNkLHlCQUF5QixFQUFBOztBQXRCL0I7SUEwQkksVUFBVTtJQUNWLGtCQUFrQixFQUFBOztBQTNCdEI7TUE2Qk0sV0FBVztNQUNYLFlBQVk7TUFDWixvQkFBb0I7TUFDcEIsa0JBQWtCO01BQ2xCLDJCQUEyQixFQUFBOztBQWpDakM7UUFvQ1EsYUFBYSxFQUFBOztBQXBDckI7UUF1Q1EsY0FBYyxFQUFBOztBQXZDdEI7UUF1Q1EsY0FBYyxFQUFBOztBQXZDdEI7UUF1Q1EsY0FBYyxFQUFBOztBQXZDdEI7UUF1Q1EsY0FBYyxFQUFBOztBQXZDdEI7UUF1Q1EsY0FBYyxFQUFBOztBQXZDdEI7TUEyQ00sa0JBQWtCO01BQ2xCLFdBQVc7TUFDWCxZQUFZO01BQ1osVUFBVTtNQUNWLE1BQU07TUFDTixTQUFTO01BQ1QsWUFBWSxFQUFBOztBQUtsQjtFQUVFO0lBQ0Usc0JBQXNCO0lBQ3RCLG1CQUFtQixFQUFBO0VBRXJCO0lBQ0UsWUFBWTtJQUNaLG1CQUFtQjtJQUNuQixlQUFlLEVBQUEsRUFFaEI7O0FBR0g7RUFDRSxpREFBOEMsRUFBQTs7QUFHaEQ7RUFDRTtJQUNFLGVBQWUsRUFBQSxFQUNoQiIsImZpbGUiOiJzcmMvYXBwL25hdi1tZW51L25hdi1tZW51LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcblxyXG5odG1sIHtcclxuICBmb250LXNpemU6IDE0cHg7XHJcbn1cclxuKiwgKjphZnRlciwgKjpiZWZvcmUge1xyXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbn1cclxuaHRtbCwgYm9keSwgZGl2LCBzcGFuLCBhcHBsZXQsIG9iamVjdCwgaWZyYW1lLCBoMSwgaDIsIGgzLCBoNCwgaDUsIGg2LCBwLCBibG9ja3F1b3RlLCBwcmUsIGEsIGFiYnIsIGFjcm9ueW0sIGFkZHJlc3MsIGJpZywgY2l0ZSwgY29kZSwgZGVsLCBkZm4sIGVtLCBpbWcsIGlucywga2JkLCBxLCBzLCBzYW1wLCBzbWFsbCwgc3RyaWtlLCBzdHJvbmcsIHN1Yiwgc3VwLCB0dCwgdmFyLCBiLCB1LCBpLCBjZW50ZXIsIGRsLCBkdCwgZGQsIG9sLCB1bCwgbGksIGZpZWxkc2V0LCBmb3JtLCBsYWJlbCwgbGVnZW5kLCB0YWJsZSwgY2FwdGlvbiwgdGJvZHksIHRmb290LCB0aGVhZCwgdHIsIHRoLCB0ZCwgYXJ0aWNsZSwgYXNpZGUsIGNhbnZhcywgZGV0YWlscywgZW1iZWQsIGZpZ3VyZSwgZmlnY2FwdGlvbiwgZm9vdGVyLCBoZWFkZXIsIGhncm91cCwgbWVudSwgbmF2LCBvdXRwdXQsIHJ1YnksIHNlY3Rpb24sIHN1bW1hcnksIHRpbWUsIG1hcmssIGF1ZGlvLCB2aWRlbyB7XHJcbiAgbWFyZ2luOiAwO1xyXG4gIHBhZGRpbmc6IDA7XHJcbiAgYm9yZGVyOiAwO1xyXG4gIGZvbnQtc2l6ZTogMTAwJTtcclxuICBmb250OiBpbmhlcml0O1xyXG4gIHZlcnRpY2FsLWFsaWduOiBiYXNlbGluZTtcclxufVxyXG4vKiBIVE1MNSBkaXNwbGF5LXJvbGUgcmVzZXQgZm9yIG9sZGVyIGJyb3dzZXJzICovXHJcbmFydGljbGUsIGFzaWRlLCBkZXRhaWxzLCBmaWdjYXB0aW9uLCBmaWd1cmUsIGZvb3RlciwgaGVhZGVyLCBoZ3JvdXAsIG1lbnUsIG5hdiwgc2VjdGlvbiB7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbn1cclxuYm9keSB7XHJcbiAgbGluZS1oZWlnaHQ6IDE7XHJcbn1cclxub2wsIHVsIHtcclxuICBsaXN0LXN0eWxlOiBub25lO1xyXG59XHJcbmJsb2NrcXVvdGUsIHEge1xyXG4gIHF1b3Rlczogbm9uZTtcclxufVxyXG5ibG9ja3F1b3RlOmJlZm9yZSwgYmxvY2txdW90ZTphZnRlciwgcTpiZWZvcmUsIHE6YWZ0ZXIge1xyXG4gIGNvbnRlbnQ6ICcnO1xyXG4gIGNvbnRlbnQ6IG5vbmU7XHJcbn1cclxudGFibGUge1xyXG4gIGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7XHJcbiAgYm9yZGVyLXNwYWNpbmc6IDA7XHJcbn1cclxuXHJcblxyXG4uY29udGFpbmVye1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC13cmFwOiB3cmFwO1xyXG4gIGhlaWdodDogYXV0bztcclxuICB3aWR0aDogOTAlO1xyXG4gIG1hcmdpbjogYXV0bztcclxuICBtYXgtd2lkdGg6IDEwMCU7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBwYWRkaW5nLWJvdHRvbTogMjBweDtcclxuICBcclxuICBhLm5hdmJhci1icmFuZHtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgaW1ne1xyXG4gICAgICBoZWlnaHQ6IGF1dG87XHJcbiAgICAgIHdpZHRoOiAzMDBweDtcclxuICAgIH1cclxuICB9XHJcbiBcclxufVxyXG4uY3VzdG9tLXNlbGVjdC13cmFwcGVyIHtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgdXNlci1zZWxlY3Q6IG5vbmU7XHJcbiAgd2lkdGg6IDIzMHB4O1xyXG4gIG1hcmdpbi1yaWdodDogMjBweDtcclxuICBoZWlnaHQ6IDQ1cHg7XHJcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XHJcblxyXG59XHJcbi5jdXN0b20tc2VsZWN0IHtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGJvcmRlci1zdHlsZTogc29saWQ7XHJcbiAgYm9yZGVyLWNvbG9yOiAjNTFDMzZEO1xyXG4gIG1pbi13aWR0aDogMTg1cHg7XHJcbn1cclxuLmN1c3RvbS1zZWxlY3RfX3RyaWdnZXIge1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gIHBhZGRpbmc6IDAgMHB4O1xyXG4gIGZvbnQtc2l6ZTogMWVtO1xyXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgY29sb3I6ICM1MUMzNkQ7XHJcbiAgaGVpZ2h0OiA0NXB4O1xyXG4gIHBhZGRpbmc6IDAgMTVweCAwIDEwcHg7XHJcbiAgbGluZS1oZWlnaHQ6IDYwcHg7XHJcbiAgYmFja2dyb3VuZDogI2ZmZmZmZjtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgYm9yZGVyLXdpZHRoOiAycHg7XHJcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG4gIGJvcmRlci1zdHlsZTogc29saWQ7XHJcbiAgYm9yZGVyLWNvbG9yOiAjZDRkYmUxYWI7XHJcbn1cclxuLmN1c3RvbS1vcHRpb25zIHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgdG9wOiAxMDAlO1xyXG4gIGxlZnQ6IDA7XHJcbiAgcmlnaHQ6IDA7XHJcbiAgYm9yZGVyOiAycHggc29saWQgI2Q0ZGJlMWFiO1xyXG4gIGJvcmRlci10b3A6IDA7XHJcbiAgYmFja2dyb3VuZDogI2ZmZjtcclxuICB0cmFuc2l0aW9uOiBhbGwgMC41cztcclxuICBvcGFjaXR5OiAwO1xyXG4gIHZpc2liaWxpdHk6IGhpZGRlbjtcclxuICBwb2ludGVyLWV2ZW50czogbm9uZTtcclxuICB6LWluZGV4OiAyO1xyXG59XHJcbi5jdXN0b20tc2VsZWN0Lm9wZW4gLmN1c3RvbS1vcHRpb25zIHtcclxuICBvcGFjaXR5OiAxO1xyXG4gIHZpc2liaWxpdHk6IHZpc2libGU7XHJcbiAgcG9pbnRlci1ldmVudHM6IGFsbDtcclxufVxyXG4uY3VzdG9tLW9wdGlvbiB7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIHBhZGRpbmc6IDAgMjJweCAwIDIycHg7XHJcbiAgZm9udC1zaXplOiAxZW07XHJcbiAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICBjb2xvcjogIzNiM2IzYjtcclxuICBsaW5lLWhlaWdodDogNDVweDtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgdHJhbnNpdGlvbjogYWxsIDAuNXM7XHJcbn1cclxuLmN1c3RvbS1vcHRpb246aG92ZXIge1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjYjJiMmIyM2I7XHJcbn1cclxuLmN1c3RvbS1vcHRpb24uc2VsZWN0ZWQge1xyXG4gIGNvbG9yOiAjZmZmZmZmO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICM1MUMzNkQ7XHJcbn1cclxuXHJcbi5hcnJvdyB7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIGhlaWdodDogMTRweDtcclxuICB3aWR0aDogNXB4O1xyXG59XHJcbi5hcnJvdzo6YmVmb3JlLCAuYXJyb3c6OmFmdGVyIHtcclxuICBjb250ZW50OiBcIlwiO1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICBib3R0b206IDBweDtcclxuICB3aWR0aDogMC4xNXJlbTtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgdHJhbnNpdGlvbjogYWxsIDAuNXM7XHJcbn1cclxuLmFycm93OjpiZWZvcmUge1xyXG4gIGxlZnQ6IC01cHg7XHJcbiAgdHJhbnNmb3JtOiByb3RhdGUoNDVkZWcpO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICM1MUMzNkRkZTtcclxufVxyXG4uYXJyb3c6OmFmdGVyIHtcclxuICBsZWZ0OiA1cHg7XHJcbiAgdHJhbnNmb3JtOiByb3RhdGUoLTQ1ZGVnKTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNTFDMzZEZGU7XHJcbn1cclxuLm9wZW4gLmFycm93OjpiZWZvcmUge1xyXG4gIGxlZnQ6IC01cHg7XHJcbiAgdHJhbnNmb3JtOiByb3RhdGUoLTQ1ZGVnKTtcclxufVxyXG4ub3BlbiAuYXJyb3c6OmFmdGVyIHtcclxuICBsZWZ0OiA1cHg7XHJcbiAgdHJhbnNmb3JtOiByb3RhdGUoNDVkZWcpO1xyXG59XHJcbi5saXN0aGVhZHtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgcGFkZGluZzogMCAyMnB4IDAgMjJweDtcclxuICBmb250LXNpemU6IDFlbTtcclxuICBmb250LXdlaWdodDogNDAwO1xyXG4gIGNvbG9yOiAjM2IzYjNiNGQ7XHJcbiAgbGluZS1oZWlnaHQ6IDQ1cHg7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIHRyYW5zaXRpb246IGFsbCAwLjVzO1xyXG59XHJcbi5zZWFyY2hCb3h7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICB3aWR0aDogNDAlO1xyXG4gIG1pbi13aWR0aDogNjAwcHg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xyXG4gIGJ1dHRvbntcclxuICAgIHdpZHRoOiAyNCU7XHJcbiAgICBiYWNrZ3JvdW5kOiAjNTFDMzZEO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgYm9yZGVyOiAycHggc29saWQgIzUxQzM2RDtcclxuICAgIGhlaWdodDogNDVweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcclxuICAgIHBhZGRpbmc6IDAgNXB4IDAgNXB4O1xyXG4gICAgbWFyZ2luLWxlZnQ6IDEwcHg7XHJcblxyXG4gICAgJjpob3ZlcntcclxuICAgICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XHJcbiAgICAgIGJvcmRlcjogMnB4IHNvbGlkICM1MUMzNkQ7XHJcbiAgICAgIGNvbG9yOiAjNTFDMzZEO1xyXG4gICAgICB0cmFuc2l0aW9uLWR1cmF0aW9uOiAwLjVzO1xyXG4gICAgfVxyXG4gIH1cclxuICAuaW5wdXRTZWFyY2h7XHJcbiAgICB3aWR0aDogNzUlO1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgaW5wdXR7XHJcbiAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICBoZWlnaHQ6IDQ1cHg7XHJcbiAgICAgIHBhZGRpbmc6IDAgOHB4IDAgOHB4O1xyXG4gICAgICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbiAgICAgIGJvcmRlcjogMnB4IHNvbGlkICNkNGRiZTFhYjtcclxuXHJcbiAgICAgICY6Zm9jdXN7XHJcbiAgICAgICAgb3V0bGluZTogbm9uZTtcclxuICAgICAgfVxyXG4gICAgICAmOjpwbGFjZWhvbGRlcntcclxuICAgICAgICBjb2xvcjogI2Q0ZGJlMTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgaW1ne1xyXG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgIHdpZHRoOiAzMHB4O1xyXG4gICAgICBoZWlnaHQ6IDMwcHg7XHJcbiAgICAgIHJpZ2h0OiA1cHg7XHJcbiAgICAgIHRvcDogMDtcclxuICAgICAgYm90dG9tOiAwO1xyXG4gICAgICBtYXJnaW46IGF1dG87XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG5AbWVkaWEgKG1heC13aWR0aDogNjk4cHgpIHtcclxuXHJcbiAgLmNvbnRhaW5lcntcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIH1cclxuICAuc2VhcmNoQm94LCAuY3VzdG9tLXNlbGVjdC13cmFwcGVye1xyXG4gICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxuICAgIG1pbi13aWR0aDogMTAwJTtcclxuXHJcbiAgfVxyXG59XHJcblxyXG4uYm94LXNoYWRvdyB7XHJcbiAgYm94LXNoYWRvdzogMCAuMjVyZW0gLjc1cmVtIHJnYmEoMCwgMCwgMCwgLjA1KTtcclxufVxyXG5cclxuQG1lZGlhIChtaW4td2lkdGg6IDc2OHB4KSB7XHJcbiAgaHRtbCB7XHJcbiAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgfVxyXG59Il19 */");

/***/ }),

/***/ "./src/app/nav-menu/nav-menu.component.ts":
/*!************************************************!*\
  !*** ./src/app/nav-menu/nav-menu.component.ts ***!
  \************************************************/
/*! exports provided: NavMenuComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavMenuComponent", function() { return NavMenuComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};

let NavMenuComponent = class NavMenuComponent {
    constructor() {
        this.isExpanded = false;
    }
    collapse() {
        this.isExpanded = false;
    }
    toggle() {
        this.isExpanded = !this.isExpanded;
    }
};
NavMenuComponent = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
        selector: 'app-nav-menu',
        template: __importDefault(__webpack_require__(/*! raw-loader!./nav-menu.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/nav-menu/nav-menu.component.html")).default,
        styles: [__importDefault(__webpack_require__(/*! ./nav-menu.component.scss */ "./src/app/nav-menu/nav-menu.component.scss")).default]
    })
], NavMenuComponent);



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};
const environment = {
    production: false
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! exports provided: getBaseUrl */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getBaseUrl", function() { return getBaseUrl; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};




function getBaseUrl() {
    return document.getElementsByTagName('base')[0].href;
}
const providers = [
    { provide: 'BASE_URL', useFactory: getBaseUrl, deps: [] }
];
if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])(providers).bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.log(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! S:\Perso\HMTWebshop\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map