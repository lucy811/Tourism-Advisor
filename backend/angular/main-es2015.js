(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
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
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/app.component.html":
/*!**************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/app.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\n<router-outlet></router-outlet>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/auth/login/login.component.html":
/*!***************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/auth/login/login.component.html ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form class=\"auth-form\" (submit)=\"onLogin(loginForm)\" #loginForm=\"ngForm\">\n    <div class=\"form-group\">\n      <label for=\"email\">Email</label>\n      <input name=\"email\" ngModel type=\"email\" class=\"form-control\" customEmailValidator required>\n    </div>\n    <div [hidden]=\"!(loginForm.controls.email?.dirty && loginForm.controls.email?.invalid)\">\n      <small class=\"form-text text-danger\"\n        [hidden]=\"!loginForm.controls.email?.errors?.required\">\n        This field is required.\n      </small>\n      <small class=\"form-text text-danger\"\n        [hidden]=\"!loginForm.controls.email?.errors?.customEmailValidator || loginForm.controls.email?.errors?.required\">\n        This field must be a valid email address.\n      </small>\n    </div>\n    <div class=\"form-group\">\n      <label for=\"password\">Password</label>\n      <input name=\"password\" ngModel type=\"password\" class=\"form-control\" required  minlength=\"3\">\n    </div>\n    <div [hidden]=\"!(loginForm.controls.password?.dirty && loginForm.controls.password?.invalid)\">\n      <small class=\"form-text text-danger\"\n        [hidden]=\"!loginForm.controls.password?.errors?.required\">\n        This field is required.\n      </small>\n      <small class=\"form-text text-danger\"\n        [hidden]=\"!loginForm.controls.password?.errors?.minlength\">\n        This field should be no less than 3 chars.\n      </small>\n    </div>\n    <button type=\"submit\" class=\"btn btn-primary auth\">Log In</button>\n</form>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/auth/signup/signup.component.html":
/*!*****************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/auth/signup/signup.component.html ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form class=\"auth-form\" (submit)=\"onSignup(signupForm)\" #signupForm=\"ngForm\">\n    <div class=\"form-group\">\n      <label for=\"username\">Username</label>\n      <input name=\"username\" ngModel type=\"username\" class=\"form-control\" required>\n      <div [hidden]=\"!(signupForm.controls.username?.dirty && signupForm.controls.username?.invalid)\">\n        <small class=\"form-text text-danger\"\n          [hidden]=\"!signupForm.controls.username?.errors?.required\">\n          This field is required.\n        </small>\n      </div>\n    </div>\n    <div class=\"form-group\">\n      <label for=\"email\">Email</label>\n      <input name=\"email\" ngModel type=\"email\" class=\"form-control\" customEmailValidator required>\n    </div>\n    <div [hidden]=\"!(signupForm.controls.email?.dirty && signupForm.controls.email?.invalid)\">\n      <small class=\"form-text text-danger\"\n        [hidden]=\"!signupForm.controls.email?.errors?.required\">\n        This field is required.\n      </small>\n      <small class=\"form-text text-danger\"\n        [hidden]=\"!signupForm.controls.email?.errors?.customEmailValidator || signupForm.controls.email?.errors?.required\">\n        This field must be a valid email address.\n      </small>\n    </div>\n    <div class=\"form-group\">\n      <label for=\"password\">Password</label>\n      <input name=\"password\" ngModel type=\"password\" class=\"form-control\" required  minlength=\"3\">\n    </div>\n    <div [hidden]=\"!(signupForm.controls.password?.dirty && signupForm.controls.password?.invalid)\">\n      <small class=\"form-text text-danger\"\n        [hidden]=\"!signupForm.controls.password?.errors?.required\">\n        This field is required.\n      </small>\n      <small class=\"form-text text-danger\"\n        [hidden]=\"!signupForm.controls.password?.errors?.minlength\">\n        This field should be no less than 3 chars.\n      </small>\n    </div>\n    <button type=\"submit\" class=\"btn btn-primary auth\">Sign Up</button>\n</form>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/core/header/header.component.html":
/*!*****************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/core/header/header.component.html ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand-lg navbar-light bg-light\">\n  <div class=\"container-fluid\">\n    <div class=\"navbar-header\">\n      <a class=\"navbar-brand\">TravelAdvisor</a>\n    </div>\n\n    <div class=\"nav navbar-nav navbar-right\">\n      <ul class=\"nav navbar-nav\">\n        <li class=\"nav-item\" *ngIf=\"userIsAuthenticated\">\n          <a routerLink=\"/travel-info-collection\">\n            <i class=\"fa fa-home\" aria-hidden=\"true\"></i>\n          </a>\n        </li>\n        <li class=\"nav-item\" *ngIf=\"!userIsAuthenticated\">\n          <a class=\"nav-link\" routerLink=\"/login\">Login</a>\n        </li>\n        <li class=\"nav-item\" *ngIf=\"!userIsAuthenticated\">\n          <a class=\"nav-link\" routerLink=\"/signup\">Singup</a>\n        </li>\n        <li class=\"nav-item\" *ngIf=\"userIsAuthenticated\">\n          <p class=\"nav-link\">Login as {{ currentUser }}</p>\n        </li>\n        <li class=\"nav-item\" *ngIf=\"userIsAuthenticated\">\n          <a class=\"nav-link\" (click)=\"logout()\">Logout</a>\n        </li>\n      </ul>\n    </div>\n  </div>\n</nav>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/core/home/home.component.html":
/*!*************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/core/home/home.component.html ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"background\"><img src=\"../../../assets/chicago-night.jpg\"></div>\n<div class=\"home-header\">\n  <h1>Welcome To Travel advisor</h1>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/travel-information/travel-information-collection/travel-information-collection.component.html":
/*!*****************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/travel-information/travel-information-collection/travel-information-collection.component.html ***!
  \*****************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div  *ngIf=\"!isLoaded\">\n  <div class=\"travel-advisor\">\n    <h4>View the travel information from all over the world</h4>\n    <button class=\"btn btn-info btn-large\" routerLink=\"/travel-info-create\">Add New Travel Information</button>\n  </div>\n  <hr>\n  <div class=\"collection\" *ngIf=\"travelInfoCollection.length > 0\">\n    <div *ngFor=\"let travelInfo of travelInfoCollection\">\n      <div class=\"col-md-3 col-sm-6 info\">\n        <div class=\"thumbnail\">\n          <img [src]=travelInfo.imagePath>\n          <div class=\"caption\">\n            <h5>{{ travelInfo.name }}</h5>\n            <a class=\"btn btn-warning\" [routerLink]=\"['/travel-info-detail', travelInfo.id]\">More Information</a>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n\n  <p class=\"info-text\" *ngIf=\"travelInfoCollection.length <=0\">No travel info added yet</p>\n</div>\n<ngx-spinner\n  bdOpacity = 0.9\n  bdColor = \"rgba(51,51,51,0.5)\"\n  size = \"medium\"\n  color = \"#fff\"\n  type = \"ball-beat\"\n  [fullScreen] = \"true\"\n>\n<p style=\"color: white\" > Loading...</p>\n</ngx-spinner>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/travel-information/travel-information-comment/travel-information-comment.component.html":
/*!***********************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/travel-information/travel-information-comment/travel-information-comment.component.html ***!
  \***********************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"row\">\n    <div style=\"width: 50%; margin: 25px auto;\">\n      <h3>Comment on {{ name }}</h3>\n        <form [formGroup]=\"commentForm\" (submit)=\"onSaveComment()\">\n            <div class=\"form-group\">\n                <input class=\"form-control\" type=\"text\" formControlName=\"comment\" placeholder=\"comment\">\n            </div>\n            <div class=\"form-group\">\n                <button class=\"btn btn-lg btn-info btn-block\">Submit</button>\n            </div>\n        </form>\n        <a [routerLink]=\"['/travel-info-detail', travelInfoId]\">Go Back</a>\n    </div>\n  </div>\n</div>\n\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/travel-information/travel-information-create/travel-information-create.component.html":
/*!*********************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/travel-information/travel-information-create/travel-information-create.component.html ***!
  \*********************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"row\">\n    <div style=\"width: 40%; margin: 30px auto;\">\n      <h3 style=\"text-align: center\">Create or edit Travel Info</h3>\n        <form [formGroup]=\"travelInfoForm\" (submit)=\"onSaveTravelInfo(travelInfoForm)\">\n            <div class=\"form-group\">\n              <input class=\"form-control\" type=\"text\" formControlName=\"name\" placeholder=\"name\">\n            </div>\n            <div class=\"form-group\">\n              <input class=\"form-control\" type=\"text\" formControlName=\"price\" placeholder=\"admission price\">\n            </div>\n            <div class=\"form-group\">\n              <input class=\"form-control\" type=\"text\" formControlName=\"description\" placeholder=\"description\">\n            </div>\n            <div class=\"form-group\">\n              <button type=\"button\" class=\"btn btn-outline-secondary button-style\" (click)=\"filePicker.click()\">Pick Image</button>\n              <input type=\"file\" #filePicker (change)=\"onImagePicked($event)\">\n              <div class=\"image-preview\" *ngIf=\"imagePreview !== '' && imagePreview && travelInfoForm.get('image').valid\">\n                <img [src]=\"imagePreview\" [alt]=\"travelInfoForm.value.name\" class=\"image-style\">\n              </div>\n            </div>\n            <div class=\"form-group\">\n              <button class=\"btn btn-lg btn-info btn-block\" type=\"submit\">Submit</button>\n            </div>\n        </form>\n    </div>\n  </div>\n</div>  \n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/travel-information/travel-information-detail/travel-information-detail.component.html":
/*!*********************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/travel-information/travel-information-detail/travel-information-detail.component.html ***!
  \*********************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container info-detail\" *ngIf=\"isLoaded\">\n  <div class=\"row\">\n    <div class=\"col-md-3\">\n        <div class=\"detail-group\">\n            <button type=\"button\" class=\"btn btn-large btn-info btn-block\">Detailed Information</button>\n        </div>\n    </div>\n    <div class=\"col-md-9\">\n      <div class=\"thumbnail\">\n        <img class=\"detail-image\" [src]=\"travelInfo.imagePath\">\n        <div class=\"caption-full\">\n          <h4>{{ travelInfo.name }}</h4>\n          <p class=\"price-right\">$ {{ travelInfo.price }} /person</p>\n          <p>{{ travelInfo.description }}</p>\n          <p>\n            <em>Submitted By {{ travelInfo.creator }}</em>\n          </p>\n          <div class=\"button-right\" *ngIf=\"currentUser === travelInfo.creator\">\n            <button class=\"btn btn-xs btn-warning\" [routerLink]=\"['/travel-info-edit', travelInfo.id]\">Edit</button>\n            <button class=\"btn btn-xs btn-danger\" (click)=\"onDeleteTravelInfo(travelInfo.id)\">Delete</button>\n          </div>\n          <hr>\n          <div class=\"comment-right\">\n            <a class=\"btn btn-primary\" [routerLink]=\"['/travel-info-comment', travelInfo.id]\">Add New Comment</a>\n          </div>\n          <div *ngFor=\"let comment of comments\">\n            <p>{{ comment.comment }} </p>\n            <p>\n              <em>Submitted By {{ comment.creator }}</em>\n            </p>\n            <div class=\"button-right\" *ngIf=\"currentUser === comment.creator\">\n              <button class=\"btn btn-xs btn-warning\" [routerLink]=\"['/travel-info-comment', travelInfo.id, comment._id]\">Edit</button>\n              <button class=\"btn btn-xs btn-danger\" (click)=\"onDeleteComment(comment._id)\">Delete</button>\n            </div>\n            <hr>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _core_home_home_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./core/home/home.component */ "./src/app/core/home/home.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");




const routes = [
    { path: '', component: _core_home_home_component__WEBPACK_IMPORTED_MODULE_2__["HomeComponent"] }
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forRoot(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"]]
    })
], AppRoutingModule);



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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let AppComponent = class AppComponent {
    constructor() {
        this.title = 'Tourism-Advisor';
    }
};
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: __webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/index.js!./src/app/app.component.html")
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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _auth_auth_interceptor__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./auth/auth-interceptor */ "./src/app/auth/auth-interceptor.ts");
/* harmony import */ var _error_error_interceptor__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./error/error-interceptor */ "./src/app/error/error-interceptor.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _core_core_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./core/core.module */ "./src/app/core/core.module.ts");
/* harmony import */ var _auth_auth_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./auth/auth.module */ "./src/app/auth/auth.module.ts");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm2015/ngx-toastr.js");
/* harmony import */ var _travel_information_travel_information_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./travel-information/travel-information.module */ "./src/app/travel-information/travel-information.module.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm2015/animations.js");













let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"]
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
            _travel_information_travel_information_module__WEBPACK_IMPORTED_MODULE_11__["TravelInformationModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_12__["BrowserAnimationsModule"],
            _core_core_module__WEBPACK_IMPORTED_MODULE_8__["CoreModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
            _auth_auth_module__WEBPACK_IMPORTED_MODULE_9__["AuthModule"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_10__["ToastrModule"].forRoot()
        ],
        providers: [
            { provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HTTP_INTERCEPTORS"], useClass: _auth_auth_interceptor__WEBPACK_IMPORTED_MODULE_5__["AuthInterceptor"], multi: true },
            { provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HTTP_INTERCEPTORS"], useClass: _error_error_interceptor__WEBPACK_IMPORTED_MODULE_6__["ErrorInterceptor"], multi: true }
        ],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "./src/app/auth/auth-interceptor.ts":
/*!******************************************!*\
  !*** ./src/app/auth/auth-interceptor.ts ***!
  \******************************************/
/*! exports provided: AuthInterceptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthInterceptor", function() { return AuthInterceptor; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./auth.service */ "./src/app/auth/auth.service.ts");



let AuthInterceptor = class AuthInterceptor {
    constructor(authService) {
        this.authService = authService;
    }
    intercept(req, next) {
        const authToken = this.authService.getToken();
        console.log('token intercept: ' + authToken);
        const authRequest = req.clone({
            headers: req.headers.set('Authorization', 'Bearer ' + authToken)
        });
        return next.handle(authRequest);
    }
};
AuthInterceptor.ctorParameters = () => [
    { type: _auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"] }
];
AuthInterceptor = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
], AuthInterceptor);



/***/ }),

/***/ "./src/app/auth/auth-routing.module.ts":
/*!*********************************************!*\
  !*** ./src/app/auth/auth-routing.module.ts ***!
  \*********************************************/
/*! exports provided: AuthRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthRoutingModule", function() { return AuthRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./login/login.component */ "./src/app/auth/login/login.component.ts");
/* harmony import */ var _signup_signup_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./signup/signup.component */ "./src/app/auth/signup/signup.component.ts");





const authRoutes = [
    { path: 'login', component: _login_login_component__WEBPACK_IMPORTED_MODULE_3__["LoginComponent"] },
    { path: 'signup', component: _signup_signup_component__WEBPACK_IMPORTED_MODULE_4__["SignupComponent"] }
];
let AuthRoutingModule = class AuthRoutingModule {
};
AuthRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(authRoutes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], AuthRoutingModule);



/***/ }),

/***/ "./src/app/auth/auth.guard.ts":
/*!************************************!*\
  !*** ./src/app/auth/auth.guard.ts ***!
  \************************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./auth.service */ "./src/app/auth/auth.service.ts");




let AuthGuard = class AuthGuard {
    constructor(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    canActivate(route, state) {
        const isAuth = this.authService.getIsAuth();
        if (!isAuth) {
            this.router.navigate(['/login']);
        }
        return isAuth;
    }
};
AuthGuard.ctorParameters = () => [
    { type: _auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }
];
AuthGuard = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])()
], AuthGuard);



/***/ }),

/***/ "./src/app/auth/auth.module.ts":
/*!*************************************!*\
  !*** ./src/app/auth/auth.module.ts ***!
  \*************************************/
/*! exports provided: AuthModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthModule", function() { return AuthModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./login/login.component */ "./src/app/auth/login/login.component.ts");
/* harmony import */ var _signup_signup_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./signup/signup.component */ "./src/app/auth/signup/signup.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _auth_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./auth-routing.module */ "./src/app/auth/auth-routing.module.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../shared/shared.module */ "./src/app/shared/shared.module.ts");








let AuthModule = class AuthModule {
};
AuthModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [
            _login_login_component__WEBPACK_IMPORTED_MODULE_3__["LoginComponent"],
            _signup_signup_component__WEBPACK_IMPORTED_MODULE_4__["SignupComponent"],
        ],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
            _auth_routing_module__WEBPACK_IMPORTED_MODULE_6__["AuthRoutingModule"],
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_7__["SharedModule"]
        ]
    })
], AuthModule);



/***/ }),

/***/ "./src/app/auth/auth.service.ts":
/*!**************************************!*\
  !*** ./src/app/auth/auth.service.ts ***!
  \**************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");






const BACKEND_URL = _environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].apiUrl + '/user';
let AuthService = class AuthService {
    constructor(http, router) {
        this.http = http;
        this.router = router;
        this.isAuthenticated = false;
        this.authStatusListener = new rxjs__WEBPACK_IMPORTED_MODULE_4__["Subject"]();
    }
    createUser(username, email, password) {
        const authData = { username: username, email: email, password: password };
        this.http.post(BACKEND_URL + '/signup', authData).subscribe(data => {
            console.log(data);
            this.router.navigate(['/travel-info-collection']);
        });
    }
    login(email, password) {
        const loginData = { email: email, password: password };
        this.http.post(BACKEND_URL + '/login', loginData).subscribe(response => {
            const token = response.token;
            this.token = token;
            if (token) {
                const expiresInDuration = response.expiresIn;
                this.setAuthTimer(expiresInDuration);
                this.isAuthenticated = true;
                this.userId = response.userId;
                this.userName = response.userName;
                this.authStatusListener.next(true);
                const now = new Date();
                const expirationDate = new Date(now.getTime() + expiresInDuration * 1000);
                console.log(expirationDate);
                this.saveAuthData(token, expirationDate, this.userId, this.userName);
                this.router.navigate(['/travel-info-collection']);
            }
        }, error => {
            this.authStatusListener.next(false);
        });
    }
    logout() {
        this.token = null;
        this.isAuthenticated = false;
        this.authStatusListener.next(false);
        this.userId = null;
        this.userName = null;
        this.clearAuthData();
        this.router.navigate(['/']);
    }
    getIsAuth() {
        return this.isAuthenticated;
    }
    getCurrentLoginUser() {
        return this.userName;
    }
    getAuthStatusListener() {
        return this.authStatusListener.asObservable();
    }
    getToken() {
        return this.token;
    }
    setAuthTimer(duration) {
        this.tokenTimer = setTimeout(() => {
            this.logout();
        }, duration * 1000);
    }
    saveAuthData(token, expirationDate, userId, userName) {
        localStorage.setItem('token', token);
        localStorage.setItem('expiration', expirationDate.toISOString());
        localStorage.setItem('userId', userId);
        localStorage.setItem('userName', userName);
    }
    clearAuthData() {
        localStorage.removeItem('token');
        localStorage.removeItem('expiration');
        localStorage.removeItem('userId');
        localStorage.removeItem('userName');
    }
};
AuthService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
];
AuthService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({ providedIn: "root" })
], AuthService);



/***/ }),

/***/ "./src/app/auth/login/login.component.ts":
/*!***********************************************!*\
  !*** ./src/app/auth/login/login.component.ts ***!
  \***********************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../auth.service */ "./src/app/auth/auth.service.ts");



let LoginComponent = class LoginComponent {
    constructor(authService) {
        this.authService = authService;
    }
    ngOnInit() {
    }
    onLogin(form) {
        if (form.invalid) {
            return;
        }
        this.authService.login(form.value.email, form.value.password);
    }
};
LoginComponent.ctorParameters = () => [
    { type: _auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"] }
];
LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-login',
        template: __webpack_require__(/*! raw-loader!./login.component.html */ "./node_modules/raw-loader/index.js!./src/app/auth/login/login.component.html")
    })
], LoginComponent);



/***/ }),

/***/ "./src/app/auth/signup/signup.component.ts":
/*!*************************************************!*\
  !*** ./src/app/auth/signup/signup.component.ts ***!
  \*************************************************/
/*! exports provided: SignupComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignupComponent", function() { return SignupComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../auth.service */ "./src/app/auth/auth.service.ts");



let SignupComponent = class SignupComponent {
    constructor(authService) {
        this.authService = authService;
    }
    ngOnInit() {
    }
    onSignup(form) {
        if (form.invalid) {
            return;
        }
        this.authService.createUser(form.value.username, form.value.email, form.value.password);
    }
};
SignupComponent.ctorParameters = () => [
    { type: _auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"] }
];
SignupComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-signup',
        template: __webpack_require__(/*! raw-loader!./signup.component.html */ "./node_modules/raw-loader/index.js!./src/app/auth/signup/signup.component.html")
    })
], SignupComponent);



/***/ }),

/***/ "./src/app/core/core.module.ts":
/*!*************************************!*\
  !*** ./src/app/core/core.module.ts ***!
  \*************************************/
/*! exports provided: CoreModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CoreModule", function() { return CoreModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./header/header.component */ "./src/app/core/header/header.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./home/home.component */ "./src/app/core/home/home.component.ts");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../app-routing.module */ "./src/app/app-routing.module.ts");






let CoreModule = class CoreModule {
};
CoreModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [
            _header_header_component__WEBPACK_IMPORTED_MODULE_3__["HeaderComponent"],
            _home_home_component__WEBPACK_IMPORTED_MODULE_4__["HomeComponent"]
        ],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_5__["AppRoutingModule"]
        ],
        exports: [
            _header_header_component__WEBPACK_IMPORTED_MODULE_3__["HeaderComponent"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_5__["AppRoutingModule"]
        ]
    })
], CoreModule);



/***/ }),

/***/ "./src/app/core/header/header.component.scss":
/*!***************************************************!*\
  !*** ./src/app/core/header/header.component.scss ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "nav {\n  background-color: #F5F5F5;\n}\n\n.fa-home {\n  margin-top: 13px;\n  margin-right: 6px;\n  color: grey;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9KaW5ndGluZy9Eb2N1bWVudHMvVWRlbXkvVG91cmlzbSBBZHZpc29yIFByb2plY3QvVHJhdmVsLUFkdmlzb3Ivc3JjL2FwcC9jb3JlL2hlYWRlci9oZWFkZXIuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2NvcmUvaGVhZGVyL2hlYWRlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHlCQUFBO0FDQ0Y7O0FERUE7RUFDRSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0EsV0FBQTtBQ0NGIiwiZmlsZSI6InNyYy9hcHAvY29yZS9oZWFkZXIvaGVhZGVyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsibmF2IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI0Y1RjVGNTtcbn1cblxuLmZhLWhvbWUge1xuICBtYXJnaW4tdG9wOiAxM3B4O1xuICBtYXJnaW4tcmlnaHQ6IDZweDtcbiAgY29sb3I6IGdyZXk7XG59IiwibmF2IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI0Y1RjVGNTtcbn1cblxuLmZhLWhvbWUge1xuICBtYXJnaW4tdG9wOiAxM3B4O1xuICBtYXJnaW4tcmlnaHQ6IDZweDtcbiAgY29sb3I6IGdyZXk7XG59Il19 */"

/***/ }),

/***/ "./src/app/core/header/header.component.ts":
/*!*************************************************!*\
  !*** ./src/app/core/header/header.component.ts ***!
  \*************************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _auth_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../auth/auth.service */ "./src/app/auth/auth.service.ts");



let HeaderComponent = class HeaderComponent {
    constructor(authService) {
        this.authService = authService;
        this.userIsAuthenticated = false;
    }
    ngOnInit() {
        this.userIsAuthenticated = this.authService.getIsAuth();
        this.authListenerSubs = this.authService
            .getAuthStatusListener()
            .subscribe(isAuthenticated => {
            this.userIsAuthenticated = isAuthenticated;
            this.currentUser = this.authService.getCurrentLoginUser();
        });
    }
    logout() {
        this.authService.logout();
    }
    ngOnDestroy() {
        this.authListenerSubs.unsubscribe();
    }
};
HeaderComponent.ctorParameters = () => [
    { type: _auth_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"] }
];
HeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-header',
        template: __webpack_require__(/*! raw-loader!./header.component.html */ "./node_modules/raw-loader/index.js!./src/app/core/header/header.component.html"),
        styles: [__webpack_require__(/*! ./header.component.scss */ "./src/app/core/header/header.component.scss")]
    })
], HeaderComponent);



/***/ }),

/***/ "./src/app/core/home/home.component.scss":
/*!***********************************************!*\
  !*** ./src/app/core/home/home.component.scss ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".home-header {\n  z-index: 1;\n  position: relative;\n  text-align: center;\n  padding-top: 40vh;\n}\n\n.home-header h1 {\n  color: white;\n}\n\ndiv#background {\n  position: fixed;\n  top: 0;\n  left: 0;\n  bottom: 0;\n  right: 0;\n  z-index: -1;\n}\n\ndiv#background > img {\n  height: 100%;\n  width: 100%;\n  border: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9KaW5ndGluZy9Eb2N1bWVudHMvVWRlbXkvVG91cmlzbSBBZHZpc29yIFByb2plY3QvVHJhdmVsLUFkdmlzb3Ivc3JjL2FwcC9jb3JlL2hvbWUvaG9tZS5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvY29yZS9ob21lL2hvbWUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxVQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0FDQ0Y7O0FERUE7RUFDRSxZQUFBO0FDQ0Y7O0FERUE7RUFDRSxlQUFBO0VBQ0EsTUFBQTtFQUNBLE9BQUE7RUFDQSxTQUFBO0VBQ0EsUUFBQTtFQUNBLFdBQUE7QUNDRjs7QURFQTtFQUNFLFlBQUE7RUFDQSxXQUFBO0VBQ0EsU0FBQTtBQ0NGIiwiZmlsZSI6InNyYy9hcHAvY29yZS9ob21lL2hvbWUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaG9tZS1oZWFkZXIge1xuICB6LWluZGV4OiAxO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgcGFkZGluZy10b3A6IDQwdmg7XG59XG5cbi5ob21lLWhlYWRlciBoMSB7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cblxuZGl2I2JhY2tncm91bmQge1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgYm90dG9tOiAwO1xuICByaWdodDogMDtcbiAgei1pbmRleDogLTE7XG59XG5cbmRpdiNiYWNrZ3JvdW5kID4gaW1nIHtcbiAgaGVpZ2h0OiAxMDAlO1xuICB3aWR0aDogMTAwJTtcbiAgYm9yZGVyOiAwO1xufSIsIi5ob21lLWhlYWRlciB7XG4gIHotaW5kZXg6IDE7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBwYWRkaW5nLXRvcDogNDB2aDtcbn1cblxuLmhvbWUtaGVhZGVyIGgxIHtcbiAgY29sb3I6IHdoaXRlO1xufVxuXG5kaXYjYmFja2dyb3VuZCB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICBib3R0b206IDA7XG4gIHJpZ2h0OiAwO1xuICB6LWluZGV4OiAtMTtcbn1cblxuZGl2I2JhY2tncm91bmQgPiBpbWcge1xuICBoZWlnaHQ6IDEwMCU7XG4gIHdpZHRoOiAxMDAlO1xuICBib3JkZXI6IDA7XG59Il19 */"

/***/ }),

/***/ "./src/app/core/home/home.component.ts":
/*!*********************************************!*\
  !*** ./src/app/core/home/home.component.ts ***!
  \*********************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let HomeComponent = class HomeComponent {
    constructor() { }
    ngOnInit() {
    }
};
HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-home',
        template: __webpack_require__(/*! raw-loader!./home.component.html */ "./node_modules/raw-loader/index.js!./src/app/core/home/home.component.html"),
        styles: [__webpack_require__(/*! ./home.component.scss */ "./src/app/core/home/home.component.scss")]
    })
], HomeComponent);



/***/ }),

/***/ "./src/app/error/error-interceptor.ts":
/*!********************************************!*\
  !*** ./src/app/error/error-interceptor.ts ***!
  \********************************************/
/*! exports provided: ErrorInterceptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ErrorInterceptor", function() { return ErrorInterceptor; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm2015/ngx-toastr.js");





let ErrorInterceptor = class ErrorInterceptor {
    constructor(toastr) {
        this.toastr = toastr;
    }
    intercept(req, next) {
        return next.handle(req).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])((error) => {
            let errorMessage = "An unknown error occured!";
            if (error) {
                errorMessage = error.error.message;
            }
            this.toastr.error(errorMessage, null, {
                positionClass: 'toast-bottom-right'
            });
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(error);
        }));
    }
};
ErrorInterceptor.ctorParameters = () => [
    { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"] }
];
ErrorInterceptor = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Injectable"])()
], ErrorInterceptor);



/***/ }),

/***/ "./src/app/shared/email-validator.directive.ts":
/*!*****************************************************!*\
  !*** ./src/app/shared/email-validator.directive.ts ***!
  \*****************************************************/
/*! exports provided: EmailValidator */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmailValidator", function() { return EmailValidator; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");

var EmailValidator_1;


let EmailValidator = EmailValidator_1 = class EmailValidator {
    constructor() {
        this.validator = this.customEmailValidator();
    }
    validate(c) {
        return this.validator(c);
    }
    customEmailValidator() {
        return (c) => {
            const EMAIL_REGEXP = /^[A-Z0-9a-z][A-Za-z0-9_\\-\\.]+@([A-Za-z0-9]+\.)+[A-Za-z0-9]{1,}$/;
            const isValid = EMAIL_REGEXP.test(c.value);
            if (isValid) {
                return null;
            }
            else {
                return {
                    customEmailValidator: {
                        valid: false
                    }
                };
            }
        };
    }
};
EmailValidator = EmailValidator_1 = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
        selector: '[customEmailValidator][ngModel]',
        providers: [
            {
                provide: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NG_VALIDATORS"],
                useExisting: EmailValidator_1,
                multi: true
            }
        ]
    })
], EmailValidator);



/***/ }),

/***/ "./src/app/shared/shared.module.ts":
/*!*****************************************!*\
  !*** ./src/app/shared/shared.module.ts ***!
  \*****************************************/
/*! exports provided: SharedModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SharedModule", function() { return SharedModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _email_validator_directive__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./email-validator.directive */ "./src/app/shared/email-validator.directive.ts");



let SharedModule = class SharedModule {
};
SharedModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [
            _email_validator_directive__WEBPACK_IMPORTED_MODULE_2__["EmailValidator"]
        ],
        exports: [
            _email_validator_directive__WEBPACK_IMPORTED_MODULE_2__["EmailValidator"]
        ]
    })
], SharedModule);



/***/ }),

/***/ "./src/app/travel-information/travel-information-collection/travel-information-collection.component.scss":
/*!***************************************************************************************************************!*\
  !*** ./src/app/travel-information/travel-information-collection/travel-information-collection.component.scss ***!
  \***************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".travel-advisor {\n  margin-top: 30px;\n  text-align: center;\n}\n\n.btn-info {\n  margin-top: 10px;\n}\n\n.info-text {\n  text-align: center;\n}\n\n.text-center {\n  margin-left: 30px;\n}\n\n.collection {\n  display: -webkit-box;\n  display: flex;\n  flex-wrap: wrap;\n}\n\n.collection h5 {\n  margin: 5px;\n  white-space: nowrap;\n}\n\n.collection a {\n  white-space: nowrap;\n  font-weight: bold;\n}\n\n.info {\n  margin: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9KaW5ndGluZy9Eb2N1bWVudHMvVWRlbXkvVG91cmlzbSBBZHZpc29yIFByb2plY3QvVHJhdmVsLUFkdmlzb3Ivc3JjL2FwcC90cmF2ZWwtaW5mb3JtYXRpb24vdHJhdmVsLWluZm9ybWF0aW9uLWNvbGxlY3Rpb24vdHJhdmVsLWluZm9ybWF0aW9uLWNvbGxlY3Rpb24uY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3RyYXZlbC1pbmZvcm1hdGlvbi90cmF2ZWwtaW5mb3JtYXRpb24tY29sbGVjdGlvbi90cmF2ZWwtaW5mb3JtYXRpb24tY29sbGVjdGlvbi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGdCQUFBO0VBQ0Esa0JBQUE7QUNDRjs7QURFQTtFQUNFLGdCQUFBO0FDQ0Y7O0FERUE7RUFDRSxrQkFBQTtBQ0NGOztBREVBO0VBQ0UsaUJBQUE7QUNDRjs7QURFQTtFQUNFLG9CQUFBO0VBQUEsYUFBQTtFQUNBLGVBQUE7QUNDRjs7QURDRTtFQUNFLFdBQUE7RUFDQSxtQkFBQTtBQ0NKOztBREVFO0VBQ0UsbUJBQUE7RUFDQSxpQkFBQTtBQ0FKOztBRElBO0VBQ0UsWUFBQTtBQ0RGIiwiZmlsZSI6InNyYy9hcHAvdHJhdmVsLWluZm9ybWF0aW9uL3RyYXZlbC1pbmZvcm1hdGlvbi1jb2xsZWN0aW9uL3RyYXZlbC1pbmZvcm1hdGlvbi1jb2xsZWN0aW9uLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnRyYXZlbC1hZHZpc29yIHtcbiAgbWFyZ2luLXRvcDogMzBweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4uYnRuLWluZm8ge1xuICBtYXJnaW4tdG9wOiAxMHB4O1xufVxuXG4uaW5mby10ZXh0IHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4udGV4dC1jZW50ZXIge1xuICBtYXJnaW4tbGVmdDogMzBweDtcbn1cblxuLmNvbGxlY3Rpb24ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LXdyYXA6d3JhcDtcblxuICBoNSB7XG4gICAgbWFyZ2luOiA1cHg7XG4gICAgd2hpdGUtc3BhY2U6bm93cmFwO1xuICB9XG5cbiAgYSB7XG4gICAgd2hpdGUtc3BhY2U6bm93cmFwO1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICB9XG59XG5cbi5pbmZvIHtcbiAgbWFyZ2luOiAxMHB4O1xufSIsIi50cmF2ZWwtYWR2aXNvciB7XG4gIG1hcmdpbi10b3A6IDMwcHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLmJ0bi1pbmZvIHtcbiAgbWFyZ2luLXRvcDogMTBweDtcbn1cblxuLmluZm8tdGV4dCB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLnRleHQtY2VudGVyIHtcbiAgbWFyZ2luLWxlZnQ6IDMwcHg7XG59XG5cbi5jb2xsZWN0aW9uIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC13cmFwOiB3cmFwO1xufVxuLmNvbGxlY3Rpb24gaDUge1xuICBtYXJnaW46IDVweDtcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbn1cbi5jb2xsZWN0aW9uIGEge1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cblxuLmluZm8ge1xuICBtYXJnaW46IDEwcHg7XG59Il19 */"

/***/ }),

/***/ "./src/app/travel-information/travel-information-collection/travel-information-collection.component.ts":
/*!*************************************************************************************************************!*\
  !*** ./src/app/travel-information/travel-information-collection/travel-information-collection.component.ts ***!
  \*************************************************************************************************************/
/*! exports provided: TravelInformationCollectionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TravelInformationCollectionComponent", function() { return TravelInformationCollectionComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _travel_information_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../travel-information.service */ "./src/app/travel-information/travel-information.service.ts");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/fesm2015/ngx-spinner.js");




let TravelInformationCollectionComponent = class TravelInformationCollectionComponent {
    constructor(traveInfoService, spinner) {
        this.traveInfoService = traveInfoService;
        this.spinner = spinner;
        this.travelInfoCollection = [];
    }
    ngOnInit() {
        this.isLoaded = true;
        this.spinner.show();
        this.traveInfoService.getTravelInfos();
        this.travelInfoCollectionSub = this.traveInfoService.getPostUpdateListener()
            .subscribe((travelInfoCollectionData) => {
            this.travelInfoCollection = travelInfoCollectionData.travelInfoCollection;
            console.log('collection: ' + JSON.stringify(this.travelInfoCollection));
            this.isLoaded = false;
            this.spinner.hide();
        });
    }
    ngOnDestroy() {
        this.travelInfoCollectionSub.unsubscribe();
    }
};
TravelInformationCollectionComponent.ctorParameters = () => [
    { type: _travel_information_service__WEBPACK_IMPORTED_MODULE_2__["TravelInfoService"] },
    { type: ngx_spinner__WEBPACK_IMPORTED_MODULE_3__["NgxSpinnerService"] }
];
TravelInformationCollectionComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-travel-information-collection',
        template: __webpack_require__(/*! raw-loader!./travel-information-collection.component.html */ "./node_modules/raw-loader/index.js!./src/app/travel-information/travel-information-collection/travel-information-collection.component.html"),
        styles: [__webpack_require__(/*! ./travel-information-collection.component.scss */ "./src/app/travel-information/travel-information-collection/travel-information-collection.component.scss")]
    })
], TravelInformationCollectionComponent);



/***/ }),

/***/ "./src/app/travel-information/travel-information-comment/travel-information-comment.component.scss":
/*!*********************************************************************************************************!*\
  !*** ./src/app/travel-information/travel-information-comment/travel-information-comment.component.scss ***!
  \*********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "h4 {\n  text-align: center;\n  margin-bottom: 15px;\n}\n\na {\n  cursor: pointer;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9KaW5ndGluZy9Eb2N1bWVudHMvVWRlbXkvVG91cmlzbSBBZHZpc29yIFByb2plY3QvVHJhdmVsLUFkdmlzb3Ivc3JjL2FwcC90cmF2ZWwtaW5mb3JtYXRpb24vdHJhdmVsLWluZm9ybWF0aW9uLWNvbW1lbnQvdHJhdmVsLWluZm9ybWF0aW9uLWNvbW1lbnQuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3RyYXZlbC1pbmZvcm1hdGlvbi90cmF2ZWwtaW5mb3JtYXRpb24tY29tbWVudC90cmF2ZWwtaW5mb3JtYXRpb24tY29tbWVudC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGtCQUFBO0VBQ0EsbUJBQUE7QUNDRjs7QURFQTtFQUNFLGVBQUE7QUNDRiIsImZpbGUiOiJzcmMvYXBwL3RyYXZlbC1pbmZvcm1hdGlvbi90cmF2ZWwtaW5mb3JtYXRpb24tY29tbWVudC90cmF2ZWwtaW5mb3JtYXRpb24tY29tbWVudC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImg0IHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBtYXJnaW4tYm90dG9tOiAxNXB4O1xufVxuXG5hIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xufSIsImg0IHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBtYXJnaW4tYm90dG9tOiAxNXB4O1xufVxuXG5hIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/travel-information/travel-information-comment/travel-information-comment.component.ts":
/*!*******************************************************************************************************!*\
  !*** ./src/app/travel-information/travel-information-comment/travel-information-comment.component.ts ***!
  \*******************************************************************************************************/
/*! exports provided: TravelInformationCommentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TravelInformationCommentComponent", function() { return TravelInformationCommentComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _travel_information_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../travel-information.service */ "./src/app/travel-information/travel-information.service.ts");
/* harmony import */ var _auth_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../auth/auth.service */ "./src/app/auth/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");







let TravelInformationCommentComponent = class TravelInformationCommentComponent {
    constructor(route, traveInfoService, router, authService) {
        this.route = route;
        this.traveInfoService = traveInfoService;
        this.router = router;
        this.authService = authService;
        this.mode = 'create';
    }
    ngOnInit() {
        this.commentForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            comment: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, { validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required] }),
        });
        this.creator = this.authService.getCurrentLoginUser();
        this.route.paramMap.subscribe((paramMap) => {
            if (paramMap.has('id')) {
                this.travelInfoId = paramMap.get('id');
                if (paramMap.has('editId')) {
                    this.mode = 'edit';
                    const id = paramMap.get('editId');
                    this.commentId = id;
                    this.traveInfoService.getComment(this.commentId).subscribe(response => {
                        this.commentForm.setValue({
                            comment: response.comment
                        });
                    });
                }
                else {
                    this.mode = 'create';
                    this.commentId = null;
                }
                this.traveInfoService.getTravelInfo(this.travelInfoId).subscribe(response => {
                    this.name = response.name;
                });
            }
        });
    }
    onSaveComment() {
        if (this.commentForm.invalid) {
            return;
        }
        if (this.mode === 'create') {
            this.traveInfoService.addComment(this.commentForm.value.comment, this.travelInfoId, this.creator, this.name);
        }
        else {
            this.traveInfoService.updateComment(this.commentId, this.commentForm.value.comment, this.travelInfoId, this.creator, this.name);
        }
        this.commentForm.reset();
    }
};
TravelInformationCommentComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"] },
    { type: _travel_information_service__WEBPACK_IMPORTED_MODULE_3__["TravelInfoService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] },
    { type: _auth_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"] }
];
TravelInformationCommentComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-travel-information-comment',
        template: __webpack_require__(/*! raw-loader!./travel-information-comment.component.html */ "./node_modules/raw-loader/index.js!./src/app/travel-information/travel-information-comment/travel-information-comment.component.html"),
        styles: [__webpack_require__(/*! ./travel-information-comment.component.scss */ "./src/app/travel-information/travel-information-comment/travel-information-comment.component.scss")]
    })
], TravelInformationCommentComponent);



/***/ }),

/***/ "./src/app/travel-information/travel-information-create/mime-type.validator.ts":
/*!*************************************************************************************!*\
  !*** ./src/app/travel-information/travel-information-create/mime-type.validator.ts ***!
  \*************************************************************************************/
/*! exports provided: mimeType */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mimeType", function() { return mimeType; });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");

const mimeType = (control) => {
    if (typeof (control.value) === 'string') {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_0__["of"])(null);
    }
    const file = control.value;
    const fileReader = new FileReader();
    const frObs = rxjs__WEBPACK_IMPORTED_MODULE_0__["Observable"].create((observer) => {
        fileReader.addEventListener('loadend', () => {
            const arr = new Uint8Array(fileReader.result).subarray(0, 4);
            let header = '';
            let isValid = false;
            for (let i = 0; i < arr.length; i++) {
                header += arr[i].toString(16);
            }
            switch (header) {
                case "89504e47":
                    isValid = true;
                    break;
                case "ffd8ffe0":
                case "ffd8ffe1":
                case "ffd8ffe2":
                case "ffd8ffe3":
                case "ffd8ffe8":
                    isValid = true;
                    break;
                default:
                    isValid = false;
                    break;
            }
            if (isValid) {
                observer.next(null);
            }
            else {
                observer.next({ invalidMimeType: true });
            }
            observer.complete();
        });
        fileReader.readAsArrayBuffer(file);
    });
    return frObs;
};


/***/ }),

/***/ "./src/app/travel-information/travel-information-create/travel-information-create.component.scss":
/*!*******************************************************************************************************!*\
  !*** ./src/app/travel-information/travel-information-create/travel-information-create.component.scss ***!
  \*******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* hide upload file */\ninput[type=file] {\n  visibility: hidden;\n}\n.button-style {\n  height: 100%;\n  width: 100%;\n}\n.image-style {\n  height: auto;\n  max-height: 80px;\n  max-width: 100%;\n  margin-left: 35%;\n  margin-right: 30%;\n}\n.image-preview {\n  height: 5rem;\n  margin: 1rem 0;\n}\n.image-preview img {\n  height: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9KaW5ndGluZy9Eb2N1bWVudHMvVWRlbXkvVG91cmlzbSBBZHZpc29yIFByb2plY3QvVHJhdmVsLUFkdmlzb3Ivc3JjL2FwcC90cmF2ZWwtaW5mb3JtYXRpb24vdHJhdmVsLWluZm9ybWF0aW9uLWNyZWF0ZS90cmF2ZWwtaW5mb3JtYXRpb24tY3JlYXRlLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC90cmF2ZWwtaW5mb3JtYXRpb24vdHJhdmVsLWluZm9ybWF0aW9uLWNyZWF0ZS90cmF2ZWwtaW5mb3JtYXRpb24tY3JlYXRlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLHFCQUFBO0FBQ0E7RUFDRSxrQkFBQTtBQ0NGO0FERUE7RUFDRSxZQUFBO0VBQ0EsV0FBQTtBQ0NGO0FERUE7RUFDRSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtBQ0NGO0FERUE7RUFDRSxZQUFBO0VBQ0EsY0FBQTtBQ0NGO0FERUE7RUFDRSxZQUFBO0FDQ0YiLCJmaWxlIjoic3JjL2FwcC90cmF2ZWwtaW5mb3JtYXRpb24vdHJhdmVsLWluZm9ybWF0aW9uLWNyZWF0ZS90cmF2ZWwtaW5mb3JtYXRpb24tY3JlYXRlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyogaGlkZSB1cGxvYWQgZmlsZSAqL1xuaW5wdXRbdHlwZT1cImZpbGVcIl0ge1xuICB2aXNpYmlsaXR5OiBoaWRkZW47XG59XG5cbi5idXR0b24tc3R5bGUge1xuICBoZWlnaHQ6IDEwMCU7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4uaW1hZ2Utc3R5bGUge1xuICBoZWlnaHQ6YXV0bztcbiAgbWF4LWhlaWdodDo4MHB4O1xuICBtYXgtd2lkdGg6MTAwJTtcbiAgbWFyZ2luLWxlZnQ6IDM1JTtcbiAgbWFyZ2luLXJpZ2h0OiAzMCU7XG59XG5cbi5pbWFnZS1wcmV2aWV3IHtcbiAgaGVpZ2h0OiA1cmVtO1xuICBtYXJnaW46IDFyZW0gMDtcbn1cblxuLmltYWdlLXByZXZpZXcgaW1nIHtcbiAgaGVpZ2h0OiAxMDAlO1xufSIsIi8qIGhpZGUgdXBsb2FkIGZpbGUgKi9cbmlucHV0W3R5cGU9ZmlsZV0ge1xuICB2aXNpYmlsaXR5OiBoaWRkZW47XG59XG5cbi5idXR0b24tc3R5bGUge1xuICBoZWlnaHQ6IDEwMCU7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4uaW1hZ2Utc3R5bGUge1xuICBoZWlnaHQ6IGF1dG87XG4gIG1heC1oZWlnaHQ6IDgwcHg7XG4gIG1heC13aWR0aDogMTAwJTtcbiAgbWFyZ2luLWxlZnQ6IDM1JTtcbiAgbWFyZ2luLXJpZ2h0OiAzMCU7XG59XG5cbi5pbWFnZS1wcmV2aWV3IHtcbiAgaGVpZ2h0OiA1cmVtO1xuICBtYXJnaW46IDFyZW0gMDtcbn1cblxuLmltYWdlLXByZXZpZXcgaW1nIHtcbiAgaGVpZ2h0OiAxMDAlO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/travel-information/travel-information-create/travel-information-create.component.ts":
/*!*****************************************************************************************************!*\
  !*** ./src/app/travel-information/travel-information-create/travel-information-create.component.ts ***!
  \*****************************************************************************************************/
/*! exports provided: TravelInformationCreateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TravelInformationCreateComponent", function() { return TravelInformationCreateComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _travel_information_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../travel-information.service */ "./src/app/travel-information/travel-information.service.ts");
/* harmony import */ var _auth_auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../auth/auth.service */ "./src/app/auth/auth.service.ts");
/* harmony import */ var _mime_type_validator__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./mime-type.validator */ "./src/app/travel-information/travel-information-create/mime-type.validator.ts");








let TravelInformationCreateComponent = class TravelInformationCreateComponent {
    constructor(route, traveInfoService, router, authService) {
        this.route = route;
        this.traveInfoService = traveInfoService;
        this.router = router;
        this.authService = authService;
        this.mode = 'create';
    }
    ngOnInit() {
        this.travelInfoForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            name: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, { validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required] }),
            price: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, { validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required] }),
            description: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, { validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required] }),
            image: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, { validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required], asyncValidators: [_mime_type_validator__WEBPACK_IMPORTED_MODULE_6__["mimeType"]] })
        });
        this.currentUser = this.authService.getCurrentLoginUser();
        this.route.paramMap.subscribe((paramMap) => {
            if (paramMap.has('id')) {
                this.mode = 'edit';
                this.travelInfoId = paramMap.get('id');
                this.traveInfoService.getTravelInfo(this.travelInfoId).subscribe(travelInfoData => {
                    this.travelInfo = {
                        id: travelInfoData._id,
                        name: travelInfoData.name,
                        price: travelInfoData.price,
                        description: travelInfoData.description,
                        imagePath: travelInfoData.imagePath,
                        creator: travelInfoData.creator
                    };
                    this.travelInfoForm.setValue({
                        name: this.travelInfo.name,
                        price: this.travelInfo.price,
                        description: this.travelInfo.description,
                        image: this.travelInfo.imagePath
                    });
                });
            }
            else {
                this.mode = 'create';
                this.travelInfoId = null;
            }
        });
    }
    onImagePicked(event) {
        const file = event.target.files[0];
        this.travelInfoForm.patchValue({ image: file });
        // informs Angular that I changed the value and it should re-evaluate that, store the value
        this.travelInfoForm.get('image').updateValueAndValidity();
        const reader = new FileReader();
        reader.onload = () => {
            this.imagePreview = reader.result;
        };
        reader.readAsDataURL(file);
    }
    onSaveTravelInfo() {
        if (this.travelInfoForm.invalid) {
            return;
        }
        if (this.mode === 'create') {
            this.traveInfoService.addTravelInfo(this.travelInfoForm.value.name, this.travelInfoForm.value.price, this.travelInfoForm.value.description, this.travelInfoForm.value.image, this.currentUser);
        }
        else {
            this.traveInfoService.updateTravelInfo(this.travelInfo.id, this.travelInfoForm.value.name, this.travelInfoForm.value.price, this.travelInfoForm.value.description, this.travelInfoForm.value.image, this.currentUser);
        }
        setTimeout(this.navigateToLogin.bind(this), 2000);
        setTimeout(this.resetForm.bind(this), 3000);
    }
    navigateToLogin() {
        this.router.navigate(['/travel-info-collection']);
    }
    resetForm() {
        this.travelInfoForm.reset();
    }
};
TravelInformationCreateComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
    { type: _travel_information_service__WEBPACK_IMPORTED_MODULE_4__["TravelInfoService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: _auth_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"] }
];
TravelInformationCreateComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-travel-information-create',
        template: __webpack_require__(/*! raw-loader!./travel-information-create.component.html */ "./node_modules/raw-loader/index.js!./src/app/travel-information/travel-information-create/travel-information-create.component.html"),
        styles: [__webpack_require__(/*! ./travel-information-create.component.scss */ "./src/app/travel-information/travel-information-create/travel-information-create.component.scss")]
    })
], TravelInformationCreateComponent);



/***/ }),

/***/ "./src/app/travel-information/travel-information-detail/travel-information-detail.component.scss":
/*!*******************************************************************************************************!*\
  !*** ./src/app/travel-information/travel-information-detail/travel-information-detail.component.scss ***!
  \*******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".info-detail {\n  margin-top: 2%;\n}\n\n.detail-group {\n  margin-bottom: 3%;\n}\n\n.detail-image {\n  height: 100%;\n  width: 100%;\n}\n\n.price-right {\n  text-align: right;\n  color: green;\n  font-weight: bold;\n}\n\nh4 {\n  color: peru;\n  font-weight: bold;\n}\n\n.button-right {\n  text-align: right;\n}\n\nbutton {\n  margin-right: 10px;\n}\n\n.comment-right {\n  text-align: right;\n  color: white;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9KaW5ndGluZy9Eb2N1bWVudHMvVWRlbXkvVG91cmlzbSBBZHZpc29yIFByb2plY3QvVHJhdmVsLUFkdmlzb3Ivc3JjL2FwcC90cmF2ZWwtaW5mb3JtYXRpb24vdHJhdmVsLWluZm9ybWF0aW9uLWRldGFpbC90cmF2ZWwtaW5mb3JtYXRpb24tZGV0YWlsLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC90cmF2ZWwtaW5mb3JtYXRpb24vdHJhdmVsLWluZm9ybWF0aW9uLWRldGFpbC90cmF2ZWwtaW5mb3JtYXRpb24tZGV0YWlsLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsY0FBQTtBQ0NGOztBREVBO0VBQ0UsaUJBQUE7QUNDRjs7QURFQTtFQUNFLFlBQUE7RUFDQSxXQUFBO0FDQ0Y7O0FERUE7RUFDRSxpQkFBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtBQ0NGOztBREVBO0VBQ0UsV0FBQTtFQUNBLGlCQUFBO0FDQ0Y7O0FERUE7RUFDRSxpQkFBQTtBQ0NGOztBREVBO0VBQ0Usa0JBQUE7QUNDRjs7QURFQTtFQUNFLGlCQUFBO0VBQ0EsWUFBQTtBQ0NGIiwiZmlsZSI6InNyYy9hcHAvdHJhdmVsLWluZm9ybWF0aW9uL3RyYXZlbC1pbmZvcm1hdGlvbi1kZXRhaWwvdHJhdmVsLWluZm9ybWF0aW9uLWRldGFpbC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5pbmZvLWRldGFpbCB7XG4gIG1hcmdpbi10b3A6IDIlO1xufVxuXG4uZGV0YWlsLWdyb3VwIHtcbiAgbWFyZ2luLWJvdHRvbTogMyU7XG59XG5cbi5kZXRhaWwtaW1hZ2Uge1xuICBoZWlnaHQ6IDEwMCU7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4ucHJpY2UtcmlnaHQge1xuICB0ZXh0LWFsaWduOiByaWdodDtcbiAgY29sb3I6IGdyZWVuO1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cblxuaDQge1xuICBjb2xvcjogcGVydTtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG5cbi5idXR0b24tcmlnaHQge1xuICB0ZXh0LWFsaWduOiByaWdodDtcbn1cblxuYnV0dG9uIHtcbiAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xufVxuXG4uY29tbWVudC1yaWdodCB7XG4gIHRleHQtYWxpZ246IHJpZ2h0O1xuICBjb2xvcjogd2hpdGU7XG59IiwiLmluZm8tZGV0YWlsIHtcbiAgbWFyZ2luLXRvcDogMiU7XG59XG5cbi5kZXRhaWwtZ3JvdXAge1xuICBtYXJnaW4tYm90dG9tOiAzJTtcbn1cblxuLmRldGFpbC1pbWFnZSB7XG4gIGhlaWdodDogMTAwJTtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi5wcmljZS1yaWdodCB7XG4gIHRleHQtYWxpZ246IHJpZ2h0O1xuICBjb2xvcjogZ3JlZW47XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuXG5oNCB7XG4gIGNvbG9yOiBwZXJ1O1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cblxuLmJ1dHRvbi1yaWdodCB7XG4gIHRleHQtYWxpZ246IHJpZ2h0O1xufVxuXG5idXR0b24ge1xuICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG59XG5cbi5jb21tZW50LXJpZ2h0IHtcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gIGNvbG9yOiB3aGl0ZTtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/travel-information/travel-information-detail/travel-information-detail.component.ts":
/*!*****************************************************************************************************!*\
  !*** ./src/app/travel-information/travel-information-detail/travel-information-detail.component.ts ***!
  \*****************************************************************************************************/
/*! exports provided: TravelInformationDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TravelInformationDetailComponent", function() { return TravelInformationDetailComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _travel_information_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../travel-information.service */ "./src/app/travel-information/travel-information.service.ts");
/* harmony import */ var _auth_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../auth/auth.service */ "./src/app/auth/auth.service.ts");






let TravelInformationDetailComponent = class TravelInformationDetailComponent {
    constructor(route, travelInfoService, router, authService) {
        this.route = route;
        this.travelInfoService = travelInfoService;
        this.router = router;
        this.authService = authService;
        this.isLoaded = false;
    }
    ngOnInit() {
        this.route.paramMap.subscribe((paramMap) => {
            if (paramMap.has('id')) {
                this.travelInfoId = paramMap.get('id');
                this.currentUser = this.authService.getCurrentLoginUser();
                this.travelInfoService.getTravelInfo(this.travelInfoId).subscribe(travelInfoData => {
                    this.isLoaded = true;
                    this.travelInfo = {
                        id: travelInfoData._id,
                        name: travelInfoData.name,
                        price: travelInfoData.price,
                        description: travelInfoData.description,
                        imagePath: travelInfoData.imagePath,
                        creator: travelInfoData.creator
                    };
                });
                this.travelInfoService.getComments(this.travelInfoId).subscribe(commentsData => {
                    this.comments = commentsData;
                });
            }
            else {
                this.travelInfoId = null;
            }
        });
    }
    onDeleteTravelInfo(travelInfoId) {
        this.travelInfoService.deleteTravelInfo(travelInfoId).subscribe(response => {
            this.router.navigate(['/travel-info-collection']);
        });
    }
    onDeleteComment(commentId) {
        this.travelInfoService.deleteComment(commentId).subscribe(response => {
            this.router.navigate(['/travel-info-collection']);
        });
    }
};
TravelInformationDetailComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: _travel_information_service__WEBPACK_IMPORTED_MODULE_3__["TravelInfoService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _auth_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"] }
];
TravelInformationDetailComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-travel-information-detail',
        template: __webpack_require__(/*! raw-loader!./travel-information-detail.component.html */ "./node_modules/raw-loader/index.js!./src/app/travel-information/travel-information-detail/travel-information-detail.component.html"),
        styles: [__webpack_require__(/*! ./travel-information-detail.component.scss */ "./src/app/travel-information/travel-information-detail/travel-information-detail.component.scss")]
    })
], TravelInformationDetailComponent);



/***/ }),

/***/ "./src/app/travel-information/travel-information-routing.module.ts":
/*!*************************************************************************!*\
  !*** ./src/app/travel-information/travel-information-routing.module.ts ***!
  \*************************************************************************/
/*! exports provided: TravelRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TravelRoutingModule", function() { return TravelRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _travel_information_create_travel_information_create_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./travel-information-create/travel-information-create.component */ "./src/app/travel-information/travel-information-create/travel-information-create.component.ts");
/* harmony import */ var _travel_information_collection_travel_information_collection_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./travel-information-collection/travel-information-collection.component */ "./src/app/travel-information/travel-information-collection/travel-information-collection.component.ts");
/* harmony import */ var _travel_information_detail_travel_information_detail_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./travel-information-detail/travel-information-detail.component */ "./src/app/travel-information/travel-information-detail/travel-information-detail.component.ts");
/* harmony import */ var _travel_information_comment_travel_information_comment_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./travel-information-comment/travel-information-comment.component */ "./src/app/travel-information/travel-information-comment/travel-information-comment.component.ts");
/* harmony import */ var _auth_auth_guard__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../auth/auth.guard */ "./src/app/auth/auth.guard.ts");








const travelRoutes = [
    { path: 'travel-info-collection', component: _travel_information_collection_travel_information_collection_component__WEBPACK_IMPORTED_MODULE_4__["TravelInformationCollectionComponent"], canActivate: [_auth_auth_guard__WEBPACK_IMPORTED_MODULE_7__["AuthGuard"]] },
    { path: 'travel-info-create', component: _travel_information_create_travel_information_create_component__WEBPACK_IMPORTED_MODULE_3__["TravelInformationCreateComponent"], canActivate: [_auth_auth_guard__WEBPACK_IMPORTED_MODULE_7__["AuthGuard"]] },
    { path: 'travel-info-edit/:id', component: _travel_information_create_travel_information_create_component__WEBPACK_IMPORTED_MODULE_3__["TravelInformationCreateComponent"], canActivate: [_auth_auth_guard__WEBPACK_IMPORTED_MODULE_7__["AuthGuard"]] },
    { path: 'travel-info-detail/:id', component: _travel_information_detail_travel_information_detail_component__WEBPACK_IMPORTED_MODULE_5__["TravelInformationDetailComponent"], canActivate: [_auth_auth_guard__WEBPACK_IMPORTED_MODULE_7__["AuthGuard"]] },
    { path: 'travel-info-comment/:id', component: _travel_information_comment_travel_information_comment_component__WEBPACK_IMPORTED_MODULE_6__["TravelInformationCommentComponent"], canActivate: [_auth_auth_guard__WEBPACK_IMPORTED_MODULE_7__["AuthGuard"]] },
    { path: 'travel-info-comment/:id/:editId', component: _travel_information_comment_travel_information_comment_component__WEBPACK_IMPORTED_MODULE_6__["TravelInformationCommentComponent"], canActivate: [_auth_auth_guard__WEBPACK_IMPORTED_MODULE_7__["AuthGuard"]] }
];
let TravelRoutingModule = class TravelRoutingModule {
};
TravelRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(travelRoutes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
        providers: [_auth_auth_guard__WEBPACK_IMPORTED_MODULE_7__["AuthGuard"]]
    })
], TravelRoutingModule);



/***/ }),

/***/ "./src/app/travel-information/travel-information.module.ts":
/*!*****************************************************************!*\
  !*** ./src/app/travel-information/travel-information.module.ts ***!
  \*****************************************************************/
/*! exports provided: TravelInformationModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TravelInformationModule", function() { return TravelInformationModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/fesm2015/ngx-spinner.js");
/* harmony import */ var _travel_information_collection_travel_information_collection_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./travel-information-collection/travel-information-collection.component */ "./src/app/travel-information/travel-information-collection/travel-information-collection.component.ts");
/* harmony import */ var _travel_information_create_travel_information_create_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./travel-information-create/travel-information-create.component */ "./src/app/travel-information/travel-information-create/travel-information-create.component.ts");
/* harmony import */ var _travel_information_detail_travel_information_detail_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./travel-information-detail/travel-information-detail.component */ "./src/app/travel-information/travel-information-detail/travel-information-detail.component.ts");
/* harmony import */ var _travel_information_comment_travel_information_comment_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./travel-information-comment/travel-information-comment.component */ "./src/app/travel-information/travel-information-comment/travel-information-comment.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _travel_information_routing_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./travel-information-routing.module */ "./src/app/travel-information/travel-information-routing.module.ts");










let TravelInformationModule = class TravelInformationModule {
};
TravelInformationModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [
            _travel_information_collection_travel_information_collection_component__WEBPACK_IMPORTED_MODULE_4__["TravelInformationCollectionComponent"],
            _travel_information_create_travel_information_create_component__WEBPACK_IMPORTED_MODULE_5__["TravelInformationCreateComponent"],
            _travel_information_detail_travel_information_detail_component__WEBPACK_IMPORTED_MODULE_6__["TravelInformationDetailComponent"],
            _travel_information_comment_travel_information_comment_component__WEBPACK_IMPORTED_MODULE_7__["TravelInformationCommentComponent"]
        ],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_8__["ReactiveFormsModule"],
            ngx_spinner__WEBPACK_IMPORTED_MODULE_3__["NgxSpinnerModule"],
            _travel_information_routing_module__WEBPACK_IMPORTED_MODULE_9__["TravelRoutingModule"]
        ]
    })
], TravelInformationModule);



/***/ }),

/***/ "./src/app/travel-information/travel-information.service.ts":
/*!******************************************************************!*\
  !*** ./src/app/travel-information/travel-information.service.ts ***!
  \******************************************************************/
/*! exports provided: TravelInfoService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TravelInfoService", function() { return TravelInfoService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");







const BACKEND_URL = _environments_environment__WEBPACK_IMPORTED_MODULE_6__["environment"].apiUrl + '/travel-info';
let TravelInfoService = class TravelInfoService {
    constructor(http, router) {
        this.http = http;
        this.router = router;
        this.travelInfoCollection = [];
        this.travelInfoCollectionUpdated = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
    }
    getTravelInfos() {
        this.http
            .get(BACKEND_URL).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])((responseData) => {
            return responseData.travelInfoCollection.map(travelInfo => {
                return {
                    id: travelInfo._id,
                    name: travelInfo.name,
                    price: travelInfo.price,
                    description: travelInfo.description,
                    imagePath: travelInfo.imagePath,
                    creator: travelInfo.creator
                };
            });
        }))
            .subscribe(transformedTravelInfos => {
            this.travelInfoCollection = transformedTravelInfos;
            this.travelInfoCollectionUpdated.next({
                travelInfoCollection: [...this.travelInfoCollection]
            });
        });
    }
    getTravelInfo(id) {
        return this.http.get(BACKEND_URL + '/' + id);
    }
    getComment(id) {
        return this.http.get(BACKEND_URL + '/comment/' + id);
    }
    getPostUpdateListener() {
        return this.travelInfoCollectionUpdated.asObservable();
    }
    addTravelInfo(name, price, description, image, creator) {
        const travelInfoData = new FormData();
        travelInfoData.append('name', name);
        travelInfoData.append('price', price);
        travelInfoData.append('description', description);
        travelInfoData.append('image', image, name);
        travelInfoData.append('creator', creator);
        this.http
            .post(BACKEND_URL, travelInfoData)
            .subscribe((responseData) => {
            this.router.navigate(['/travel-info-collection']);
        });
    }
    updateTravelInfo(id, name, price, description, image, creator) {
        let travelInfoData;
        if (typeof (image) === 'object') {
            travelInfoData = new FormData();
            travelInfoData.append('id', id);
            travelInfoData.append('name', name);
            travelInfoData.append('price', price);
            travelInfoData.append('description', description);
            travelInfoData.append('image', image, name);
            travelInfoData.append('creator', creator);
        }
        else {
            travelInfoData = {
                id: id,
                name: name,
                price: price,
                description: description,
                imagePath: image,
                creator: creator
            };
        }
        this.http.put(BACKEND_URL + '/' + id, travelInfoData).subscribe(response => {
            console.log(JSON.stringify(response));
        });
    }
    deleteTravelInfo(travelInfoId) {
        return this.http.delete(BACKEND_URL + '/' + travelInfoId);
    }
    deleteComment(commentId) {
        return this.http.delete(BACKEND_URL + '/comment/' + commentId);
    }
    addComment(comment, travelInfoId, creator, name) {
        const commentData = { 'comment': comment, 'travelInfoId': travelInfoId, 'creator': creator, 'name': name };
        this.http
            .post(BACKEND_URL + '/comment', commentData)
            .subscribe((responseData) => {
            this.router.navigate(['/travel-info-detail', travelInfoId]);
        });
    }
    getComments(id) {
        return this.http.get(BACKEND_URL + '/' + id + '/comments');
    }
    updateComment(id, comment, travelInfoId, creator, name) {
        const commentData = { 'id': id, 'comment': comment, 'travelInfoId': travelInfoId, 'creator': creator, 'name': name };
        this.http
            .put(BACKEND_URL + '/comment/' + id, commentData)
            .subscribe((responseData) => {
            this.router.navigate(['/travel-info-detail', travelInfoId]);
        });
    }
};
TravelInfoService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] }
];
TravelInfoService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({ providedIn: 'root' })
], TravelInfoService);



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
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false,
    apiUrl: 'http://localhost:3000/api'
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/Jingting/Documents/Udemy/Tourism Advisor Project/Travel-Advisor/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map