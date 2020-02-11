(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var routes = [];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>\n<!-- <app-resume></app-resume> -->\n<app-flex-box></app-flex-box>\n<!-- Directive Practice -->\n<h1 appBasicHighlight>Hello world!</h1>\n<h1 appBetterHighlight [defaultColor]=\"'red'\" [highlightColor]=\"'yellow'\">Hello world better directive!</h1>\n<!-- <ng-template [ngIf]=\"!onlyOdd\" [ngTemplateOutlet]=\"outlet\" [ngOutletContext]=\"context\"></ng-template> -->\n<app-follow-eyes></app-follow-eyes>\n"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'portfolio';
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
        })
    ], AppComponent);
    return AppComponent;
}());



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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _resume_resume_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./resume/resume.component */ "./src/app/resume/resume.component.ts");
/* harmony import */ var _practice_flex_box_flex_box_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./practice/flex-box/flex-box.component */ "./src/app/practice/flex-box/flex-box.component.ts");
/* harmony import */ var _practice_angular_directives_basic_highligh_attribute_directive__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./practice/angular/directives/basic-highligh-attribute.directive */ "./src/app/practice/angular/directives/basic-highligh-attribute.directive.ts");
/* harmony import */ var _practice_angular_directives_better_highlight_attribute_directive__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./practice/angular/directives/better-highlight-attribute.directive */ "./src/app/practice/angular/directives/better-highlight-attribute.directive.ts");
/* harmony import */ var _components_follow_eyes_follow_eyes_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/follow-eyes/follow-eyes.component */ "./src/app/components/follow-eyes/follow-eyes.component.ts");










var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                _resume_resume_component__WEBPACK_IMPORTED_MODULE_5__["ResumeComponent"],
                _practice_flex_box_flex_box_component__WEBPACK_IMPORTED_MODULE_6__["FlexBoxComponent"],
                _practice_angular_directives_basic_highligh_attribute_directive__WEBPACK_IMPORTED_MODULE_7__["BasicHighlightAttributeDirective"],
                _practice_angular_directives_better_highlight_attribute_directive__WEBPACK_IMPORTED_MODULE_8__["BetterHighlightAttributeDirective"],
                _components_follow_eyes_follow_eyes_component__WEBPACK_IMPORTED_MODULE_9__["FollowEyesComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/components/follow-eyes/follow-eyes.component.html":
/*!*******************************************************************!*\
  !*** ./src/app/components/follow-eyes/follow-eyes.component.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1>Follow the eyes</h1>\n<div id=\"eyes\">\n  <div class=\"eye\">\n    <div class=\"ball\" #ball>\n    </div>\n  </div>\n  <div class=\"eye\">\n    <div class=\"ball\" #ball>\n    </div>\n  </div>\n</div>\n<!-- Practice positioning -->\n<div id=\"parent\">\n  Parent\n  <div class=\"child-one child\">One</div>\n  <div class=\"child-two child\">Two</div>\n  <div class=\"child-three child\">Three</div>\n</div>\n"

/***/ }),

/***/ "./src/app/components/follow-eyes/follow-eyes.component.scss":
/*!*******************************************************************!*\
  !*** ./src/app/components/follow-eyes/follow-eyes.component.scss ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#eyes {\n  position: absolute;\n  top: 50%;\n  width: 100%;\n  text-align: center; }\n  #eyes .eye {\n    width: 240px;\n    height: 120px;\n    background: #fff;\n    display: inline-block;\n    margin: 40px;\n    border-radius: 50%;\n    position: relative;\n    overflow: hidden; }\n  #eyes .ball {\n    width: 40px;\n    height: 40px;\n    background: #000;\n    position: absolute;\n    top: 50%;\n    left: 50%;\n    transform: translate(-50%, -50%);\n    border-radius: 50%;\n    border: 15px solid #333; }\n  #parent {\n  background-color: gold;\n  border: 10px solid gold;\n  padding: 20px; }\n  #parent .child {\n    padding: 10px; }\n  #parent .child-one {\n    padding: 5px;\n    background-color: rosybrown; }\n  #parent .child-two {\n    background-color: burlywood; }\n  #parent .child-three {\n    background-color: darkkhaki; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9yYXZpbmFuZGFudHVsbHVyaS9zb3VyY2UvcG9ydGZvbGlvL3NyYy9hcHAvY29tcG9uZW50cy9mb2xsb3ctZXllcy9mb2xsb3ctZXllcy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGtCQUFrQjtFQUNsQixRQUFRO0VBRVIsV0FBVztFQUNYLGtCQUFrQixFQUFBO0VBTHBCO0lBUUksWUFBWTtJQUNaLGFBQWE7SUFDYixnQkFBZ0I7SUFDaEIscUJBQXFCO0lBQ3JCLFlBQVk7SUFDWixrQkFBa0I7SUFDbEIsa0JBQWtCO0lBQ2xCLGdCQUFnQixFQUFBO0VBZnBCO0lBbUJJLFdBQVc7SUFDWCxZQUFZO0lBQ1osZ0JBQWdCO0lBQ2hCLGtCQUFrQjtJQUNsQixRQUFRO0lBQ1IsU0FBUztJQUNULGdDQUFnQztJQUNoQyxrQkFBa0I7SUFDbEIsdUJBQXVCLEVBQUE7RUFJM0I7RUFDRSxzQkFBc0I7RUFDdEIsdUJBQXVCO0VBQ3ZCLGFBQWEsRUFBQTtFQUhmO0lBTUksYUFBYSxFQUFBO0VBTmpCO0lBVUksWUFBWTtJQUNaLDJCQUEyQixFQUFBO0VBWC9CO0lBZUksMkJBQTJCLEVBQUE7RUFmL0I7SUFtQkksMkJBQTJCLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2ZvbGxvdy1leWVzL2ZvbGxvdy1leWVzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiI2V5ZXMge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogNTAlO1xuICAvLyAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUpO1xuICB3aWR0aDogMTAwJTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuXG4gIC5leWUge1xuICAgIHdpZHRoOiAyNDBweDtcbiAgICBoZWlnaHQ6IDEyMHB4O1xuICAgIGJhY2tncm91bmQ6ICNmZmY7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIG1hcmdpbjogNDBweDtcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gIH1cblxuICAuYmFsbCB7XG4gICAgd2lkdGg6IDQwcHg7XG4gICAgaGVpZ2h0OiA0MHB4O1xuICAgIGJhY2tncm91bmQ6ICMwMDA7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogNTAlO1xuICAgIGxlZnQ6IDUwJTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgYm9yZGVyOiAxNXB4IHNvbGlkICMzMzM7XG4gIH1cbn1cblxuI3BhcmVudCB7XG4gIGJhY2tncm91bmQtY29sb3I6IGdvbGQ7XG4gIGJvcmRlcjogMTBweCBzb2xpZCBnb2xkO1xuICBwYWRkaW5nOiAyMHB4O1xuXG4gIC5jaGlsZCB7XG4gICAgcGFkZGluZzogMTBweDtcbiAgfVxuXG4gIC5jaGlsZC1vbmUge1xuICAgIHBhZGRpbmc6IDVweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByb3N5YnJvd247XG4gIH1cblxuICAuY2hpbGQtdHdvIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBidXJseXdvb2Q7XG4gIH1cblxuICAuY2hpbGQtdGhyZWUge1xuICAgIGJhY2tncm91bmQtY29sb3I6IGRhcmtraGFraTtcbiAgfVxufVxuIl19 */"

/***/ }),

/***/ "./src/app/components/follow-eyes/follow-eyes.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/components/follow-eyes/follow-eyes.component.ts ***!
  \*****************************************************************/
/*! exports provided: FollowEyesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FollowEyesComponent", function() { return FollowEyesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var FollowEyesComponent = /** @class */ (function () {
    function FollowEyesComponent(renderer) {
        this.renderer = renderer;
    }
    FollowEyesComponent.prototype.ngOnInit = function () {
    };
    FollowEyesComponent.prototype.ngAfterViewInit = function () {
        console.log(this.ball.nativeElement);
        // this.ball.nativeElement.style.backgroundColor = 'red';
    };
    FollowEyesComponent.prototype.onMouseMoved = function (event) {
        var x = (event.clientX * 100 / window.innerWidth) + '%';
        var y = (event.clientY * 100 / window.innerHeight) + '%';
        // console.log(x, y);
        this.renderer.setElementStyle(this.ball.nativeElement, 'backgroundColor', 'red');
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('ball'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], FollowEyesComponent.prototype, "ball", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('mouseup', ['$event']),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Function),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Object]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:returntype", void 0)
    ], FollowEyesComponent.prototype, "onMouseMoved", null);
    FollowEyesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-follow-eyes',
            template: __webpack_require__(/*! ./follow-eyes.component.html */ "./src/app/components/follow-eyes/follow-eyes.component.html"),
            styles: [__webpack_require__(/*! ./follow-eyes.component.scss */ "./src/app/components/follow-eyes/follow-eyes.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer"]])
    ], FollowEyesComponent);
    return FollowEyesComponent;
}());



/***/ }),

/***/ "./src/app/practice/angular/directives/basic-highligh-attribute.directive.ts":
/*!***********************************************************************************!*\
  !*** ./src/app/practice/angular/directives/basic-highligh-attribute.directive.ts ***!
  \***********************************************************************************/
/*! exports provided: BasicHighlightAttributeDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BasicHighlightAttributeDirective", function() { return BasicHighlightAttributeDirective; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var BasicHighlightAttributeDirective = /** @class */ (function () {
    function BasicHighlightAttributeDirective(elementRef) {
        this.elementRef = elementRef;
    }
    BasicHighlightAttributeDirective.prototype.ngOnInit = function () {
        this.elementRef.nativeElement.style.backgroundColor = 'green';
    };
    BasicHighlightAttributeDirective = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
            selector: '[appBasicHighlight]'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]])
    ], BasicHighlightAttributeDirective);
    return BasicHighlightAttributeDirective;
}());



/***/ }),

/***/ "./src/app/practice/angular/directives/better-highlight-attribute.directive.ts":
/*!*************************************************************************************!*\
  !*** ./src/app/practice/angular/directives/better-highlight-attribute.directive.ts ***!
  \*************************************************************************************/
/*! exports provided: BetterHighlightAttributeDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BetterHighlightAttributeDirective", function() { return BetterHighlightAttributeDirective; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var BetterHighlightAttributeDirective = /** @class */ (function () {
    function BetterHighlightAttributeDirective(elementRef, renderer) {
        this.elementRef = elementRef;
        this.renderer = renderer;
        this.defaultColor = 'transparent';
        this.highlightColor = 'skyblue';
        this.backgroundColor = 'transparent';
    }
    BetterHighlightAttributeDirective.prototype.ngOnInit = function () {
        // this.renderer.setStyle(this.elementRef.nativeElement, 'background-color', 'blue');
    };
    BetterHighlightAttributeDirective.prototype.mouseover = function (eventData) {
        // this.renderer.setStyle(this.elementRef.nativeElement, 'background-color', 'blue');
        this.backgroundColor = this.highlightColor;
    };
    BetterHighlightAttributeDirective.prototype.mouseleave = function (eventData) {
        // this.renderer.setStyle(this.elementRef.nativeElement, 'background-color', 'transparent');
        this.backgroundColor = this.defaultColor;
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], BetterHighlightAttributeDirective.prototype, "defaultColor", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], BetterHighlightAttributeDirective.prototype, "highlightColor", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"])('style.backgroundColor'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], BetterHighlightAttributeDirective.prototype, "backgroundColor", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('mouseenter'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Function),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Event]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:returntype", void 0)
    ], BetterHighlightAttributeDirective.prototype, "mouseover", null);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('mouseleave'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Function),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Event]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:returntype", void 0)
    ], BetterHighlightAttributeDirective.prototype, "mouseleave", null);
    BetterHighlightAttributeDirective = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
            selector: '[appBetterHighlight]'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]])
    ], BetterHighlightAttributeDirective);
    return BetterHighlightAttributeDirective;
}());



/***/ }),

/***/ "./src/app/practice/flex-box/flex-box.component.html":
/*!***********************************************************!*\
  !*** ./src/app/practice/flex-box/flex-box.component.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\n  <div class=\"wrapper\">\n    <div class=\"flex-container\">\n      <div class=\"box one\">ONE</div>\n      <div class=\"box two\">TWO</div>\n      <div class=\"box three\">THREE</div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/practice/flex-box/flex-box.component.scss":
/*!***********************************************************!*\
  !*** ./src/app/practice/flex-box/flex-box.component.scss ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".wrapper {\n  width: 100%;\n  margin: 0; }\n  .wrapper .flex-container {\n    background: #ffffff;\n    display: flex; }\n  .wrapper .flex-container .box {\n      height: 100px;\n      min-width: 100px;\n      flex-grow: 1; }\n  .wrapper .flex-container .one {\n      background: skyblue; }\n  .wrapper .flex-container .two {\n      background: green; }\n  .wrapper .flex-container .three {\n      background: red; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9yYXZpbmFuZGFudHVsbHVyaS9zb3VyY2UvcG9ydGZvbGlvL3NyYy9hcHAvcHJhY3RpY2UvZmxleC1ib3gvZmxleC1ib3guY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxXQUFXO0VBRVgsU0FBUyxFQUFBO0VBSFg7SUFNSSxtQkFBbUI7SUFDbkIsYUFBYSxFQUFBO0VBUGpCO01BVU0sYUFBYTtNQUNiLGdCQUFnQjtNQUVoQixZQUFZLEVBQUE7RUFibEI7TUFpQk0sbUJBQW1CLEVBQUE7RUFqQnpCO01BcUJNLGlCQUFpQixFQUFBO0VBckJ2QjtNQXlCTSxlQUFlLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9wcmFjdGljZS9mbGV4LWJveC9mbGV4LWJveC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi53cmFwcGVyIHtcbiAgd2lkdGg6IDEwMCU7XG4gIC8vICAgbWF4LXdpZHRoOiA5NjBweDtcbiAgbWFyZ2luOiAwO1xuXG4gIC5mbGV4LWNvbnRhaW5lciB7XG4gICAgYmFja2dyb3VuZDogI2ZmZmZmZjtcbiAgICBkaXNwbGF5OiBmbGV4O1xuXG4gICAgLmJveCB7XG4gICAgICBoZWlnaHQ6IDEwMHB4O1xuICAgICAgbWluLXdpZHRoOiAxMDBweDtcbiAgICAgIC8vIGZsb2F0OiBsZWZ0O1xuICAgICAgZmxleC1ncm93OiAxO1xuICAgIH1cblxuICAgIC5vbmUge1xuICAgICAgYmFja2dyb3VuZDogc2t5Ymx1ZTtcbiAgICB9XG5cbiAgICAudHdvIHtcbiAgICAgIGJhY2tncm91bmQ6IGdyZWVuO1xuICAgIH1cblxuICAgIC50aHJlZSB7XG4gICAgICBiYWNrZ3JvdW5kOiByZWQ7XG4gICAgfVxuICB9XG5cbiAgLy8gICAuZmxleC1jb250YWluZXI6OmFmdGVyIHtcbiAgLy8gICAgIGNvbnRlbnQ6IFwiXCI7XG4gIC8vICAgICBkaXNwbGF5OiBibG9jaztcbiAgLy8gICAgIGNsZWFyOiBib3RoO1xuICAvLyAgIH1cbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/practice/flex-box/flex-box.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/practice/flex-box/flex-box.component.ts ***!
  \*********************************************************/
/*! exports provided: FlexBoxComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FlexBoxComponent", function() { return FlexBoxComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var FlexBoxComponent = /** @class */ (function () {
    function FlexBoxComponent() {
    }
    FlexBoxComponent.prototype.ngOnInit = function () {
    };
    FlexBoxComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-flex-box',
            template: __webpack_require__(/*! ./flex-box.component.html */ "./src/app/practice/flex-box/flex-box.component.html"),
            styles: [__webpack_require__(/*! ./flex-box.component.scss */ "./src/app/practice/flex-box/flex-box.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], FlexBoxComponent);
    return FlexBoxComponent;
}());



/***/ }),

/***/ "./src/app/resume/resume.component.html":
/*!**********************************************!*\
  !*** ./src/app/resume/resume.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"resume\">\n  <div class=\"header\">\n    <div class=\"name\">{{headerDetails.name}}</div>\n    <div class=\"email\">{{headerDetails.email}}</div>\n    <div class=\"likidln_url\">{{headerDetails.likidlnUrl}}</div>\n    <div class=\"phone_number\">{{headerDetails.phoneNumber}}</div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/resume/resume.component.scss":
/*!**********************************************!*\
  !*** ./src/app/resume/resume.component.scss ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Jlc3VtZS9yZXN1bWUuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/resume/resume.component.ts":
/*!********************************************!*\
  !*** ./src/app/resume/resume.component.ts ***!
  \********************************************/
/*! exports provided: ResumeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResumeComponent", function() { return ResumeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ResumeComponent = /** @class */ (function () {
    function ResumeComponent() {
        this.headerDetails = {
            name: 'Ravinandan Tulluri',
            email: 'tulluri.ravinandan@gmail.com',
            likidlnUrl: 'linkedin.com/in/ravinandan-tulluri',
            phoneNumber: '+1(216)-482-7446'
        };
    }
    ResumeComponent.prototype.ngOnInit = function () {
    };
    ResumeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-resume',
            template: __webpack_require__(/*! ./resume.component.html */ "./src/app/resume/resume.component.html"),
            styles: [__webpack_require__(/*! ./resume.component.scss */ "./src/app/resume/resume.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ResumeComponent);
    return ResumeComponent;
}());



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
var environment = {
    production: false
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/ravinandantulluri/source/portfolio/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map