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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _employee_list_employee_list_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./employee-list/employee-list.component */ "./src/app/employee-list/employee-list.component.ts");
/* harmony import */ var _employee_edit_employee_edit_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./employee-edit/employee-edit.component */ "./src/app/employee-edit/employee-edit.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var routes = [
    { path: '', component: _employee_list_employee_list_component__WEBPACK_IMPORTED_MODULE_2__["EmployeeListComponent"] },
    { path: 'employeeListComponent', component: _employee_list_employee_list_component__WEBPACK_IMPORTED_MODULE_2__["EmployeeListComponent"] },
    { path: 'employeeEditComponent', component: _employee_edit_employee_edit_component__WEBPACK_IMPORTED_MODULE_3__["EmployeeEditComponent"] },
    { path: 'employeeEditComponent/:id', component: _employee_edit_employee_edit_component__WEBPACK_IMPORTED_MODULE_3__["EmployeeEditComponent"] }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\n<div style=\"text-align:center\">\n  <img width=\"300\" alt=\"Angular Logo\" src=\"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNTAgMjUwIj4KICAgIDxwYXRoIGZpbGw9IiNERDAwMzEiIGQ9Ik0xMjUgMzBMMzEuOSA2My4ybDE0LjIgMTIzLjFMMTI1IDIzMGw3OC45LTQzLjcgMTQuMi0xMjMuMXoiIC8+CiAgICA8cGF0aCBmaWxsPSIjQzMwMDJGIiBkPSJNMTI1IDMwdjIyLjItLjFWMjMwbDc4LjktNDMuNyAxNC4yLTEyMy4xTDEyNSAzMHoiIC8+CiAgICA8cGF0aCAgZmlsbD0iI0ZGRkZGRiIgZD0iTTEyNSA1Mi4xTDY2LjggMTgyLjZoMjEuN2wxMS43LTI5LjJoNDkuNGwxMS43IDI5LjJIMTgzTDEyNSA1Mi4xem0xNyA4My4zaC0zNGwxNy00MC45IDE3IDQwLjl6IiAvPgogIDwvc3ZnPg==\">\n</div>\n<div class=\"container-fluid\">\n  <router-outlet></router-outlet>\n</div>\n"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'ridwanhumaidy';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _employee_list_employee_list_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./employee-list/employee-list.component */ "./src/app/employee-list/employee-list.component.ts");
/* harmony import */ var angular_6_datatable__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! angular-6-datatable */ "./node_modules/angular-6-datatable/index.js");
/* harmony import */ var angular_6_datatable__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(angular_6_datatable__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _employee_edit_employee_edit_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./employee-edit/employee-edit.component */ "./src/app/employee-edit/employee-edit.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _shared_pipe_searchFilterPipe__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./shared/pipe/searchFilterPipe */ "./src/app/shared/pipe/searchFilterPipe.ts");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var _auto_generated_auto_generated_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./auto-generated/auto-generated.component */ "./src/app/auto-generated/auto-generated.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                _employee_list_employee_list_component__WEBPACK_IMPORTED_MODULE_5__["EmployeeListComponent"],
                _employee_edit_employee_edit_component__WEBPACK_IMPORTED_MODULE_7__["EmployeeEditComponent"],
                _shared_pipe_searchFilterPipe__WEBPACK_IMPORTED_MODULE_11__["SearchFilterPipe"],
                _auto_generated_auto_generated_component__WEBPACK_IMPORTED_MODULE_13__["AutoGeneratedComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"],
                angular_6_datatable__WEBPACK_IMPORTED_MODULE_6__["DataTableModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_8__["ReactiveFormsModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_9__["BrowserAnimationsModule"],
                ngx_toastr__WEBPACK_IMPORTED_MODULE_10__["ToastrModule"].forRoot(),
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_12__["NgbModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/auto-generated/auto-generated.component.css":
/*!*************************************************************!*\
  !*** ./src/app/auto-generated/auto-generated.component.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* Add mobile styles for the component here.  */\n"

/***/ }),

/***/ "./src/app/auto-generated/auto-generated.component.html":
/*!**************************************************************!*\
  !*** ./src/app/auto-generated/auto-generated.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  auto-generated works!\n</p>\n"

/***/ }),

/***/ "./src/app/auto-generated/auto-generated.component.ts":
/*!************************************************************!*\
  !*** ./src/app/auto-generated/auto-generated.component.ts ***!
  \************************************************************/
/*! exports provided: AutoGeneratedComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AutoGeneratedComponent", function() { return AutoGeneratedComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AutoGeneratedComponent = /** @class */ (function () {
    function AutoGeneratedComponent() {
    }
    AutoGeneratedComponent.prototype.ngOnInit = function () {
    };
    AutoGeneratedComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-auto-generated',
            template: __webpack_require__(/*! ./auto-generated.component.html */ "./src/app/auto-generated/auto-generated.component.html"),
            styles: [__webpack_require__(/*! ./auto-generated.component.css */ "./src/app/auto-generated/auto-generated.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], AutoGeneratedComponent);
    return AutoGeneratedComponent;
}());



/***/ }),

/***/ "./src/app/employee-edit/employee-edit.component.css":
/*!***********************************************************!*\
  !*** ./src/app/employee-edit/employee-edit.component.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/*\nAdd your NativeScript specific styles here.\nTo learn more about styling in NativeScript see:\nhttps://docs.nativescript.org/angular/ui/styling\n*/"

/***/ }),

/***/ "./src/app/employee-edit/employee-edit.component.html":
/*!************************************************************!*\
  !*** ./src/app/employee-edit/employee-edit.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n\t<h2>Employee Data</h2>\n\t<form name=\"employeeForm\" class=\"css-form\" (ngSubmit)=\"onSubmit()\"\n\t\t#employeeForm=\"ngForm\" novalidate>\n\n\t\t<div class=\"form-group\">\n\t\t\t<label for=\"nik\">NIK</label> <input type=\"text\" class=\"form-control\"\n\t\t\t\tid=\"nik\" [(ngModel)]=\"employee.nik\" #nik=\"ngModel\" name=\"nik\"\n\t\t\t\trequired disabled>\n\t\t\t<div *ngIf=\"nik.invalid && (nik.dirty || nik.touched)\"\n\t\t\t\tclass=\"alert alert-danger\">\n\t\t\t\t<div *ngIf=\"nik.errors.required\">NIK is required.</div>\n\t\t\t</div>\n\t\t</div>\n\t\t<div class=\"form-group\">\n\t\t\t<label for=\"name\">Name</label> <input type=\"text\"\n\t\t\t\tclass=\"form-control\" id=\"name\" [(ngModel)]=\"employee.name\"\n\t\t\t\t#name=\"ngModel\" name=\"name\" required>\n\t\t\t<div *ngIf=\"name.invalid && (name.dirty || name.touched)\"\n\t\t\t\tclass=\"alert alert-danger\">\n\t\t\t\t<div *ngIf=\"name.errors.required\">Name is required.</div>\n\t\t\t</div>\n\t\t</div>\n\n\t\t<div class=\"form-group\">\n\t\t\t<label for=\"division\">Division: </label> <select\n\t\t\t\t[(ngModel)]=\"employee.divisionId\" name=\"division\" id=\"division\"\n\t\t\t\t#division=\"ngModel\" class=\"form-control\" required>\n\t\t\t\t<option value=\"\">---Please select---</option>\n\t\t\t\t<option *ngFor=\"let division of divisions\" [ngValue]=\"division.id\">{{division.name}}</option>\n\t\t\t</select>\n\t\t\t<div *ngIf=\"division.invalid && (division.dirty || division.touched)\"\n\t\t\t\tclass=\"alert alert-danger\">\n\t\t\t\t<div *ngIf=\"division.errors.required\">Division is required.</div>\n\t\t\t</div>\n\t\t</div>\n\n\t\t<div class=\"form-group\">\n\t\t\t<label for=\"position\">Position: </label> <select\n\t\t\t\t[(ngModel)]=\"employee.positionId\" name=\"position\" id=\"position\" (change)=\"positionChanged()\"\n\t\t\t\t#position=\"ngModel\" class=\"form-control\" required>\n\t\t\t\t<option *ngFor=\"let position of positions\" [ngValue]=\"position.id\">{{position.name}}</option>\n\t\t\t</select>\n\t\t\t<div *ngIf=\"position.invalid && (position.dirty || position.touched)\"\n\t\t\t\tclass=\"alert alert-danger\">\n\t\t\t\t<div *ngIf=\"position.errors.required\">Position is required.</div>\n\t\t\t</div>\n\t\t</div>\n\t\t<div class=\"row\">\n\t\t\t<div class=\"col\">\n\t\t\t\t<input type=\"button\" class=\"btn btn-primary\"\n\t\t\t\t\trouterLink=\"/employeeListComponent\" value=\"Cancel\" />\n\t\t\t</div>\n\t\t\t<div class=\"col\">\n\t\t\t\t<input type=\"submit\" class=\"btn btn-primary\" value=\"Save\"\n\t\t\t\t\t[disabled]=\"employeeForm.invalid\" />\n\t\t\t</div>\n\t\t</div>\n\t</form>\n\n<!-- \t<div [formGroup]=\"employeeForm\"> -->\n<!-- \t\t<div formGroupName=\"employeeForm\"> -->\n<!-- \t\t\t<label> NIK: <input type=\"text\" class=\"form-control\" -->\n<!-- \t\t\t\tformControlName=\"nik\"></label> <label> Name: <input -->\n<!-- \t\t\t\ttype=\"text\" class=\"form-control\" formControlName=\"name\"></label> <label> -->\n<!-- \t\t\t\tDivision: <select class=\"form-control\" id=\"division\" -->\n<!-- \t\t\t\tformControlName=\"division\"> -->\n<!-- \t\t\t\t\t<option *ngFor=\"let division of divisions\" -->\n<!-- \t\t\t\t\t\t[ngValue]=\"division.name\">{{division.name}}</option> -->\n<!-- \t\t\t</select> -->\n<!-- \t\t\t</label> <label> Position: <select class=\"form-control\" id=\"position\" -->\n<!-- \t\t\t\tformControlName=\"position\"> -->\n<!-- \t\t\t\t\t<option *ngFor=\"let position of positions\" -->\n<!-- \t\t\t\t\t\t[ngValue]=\"position.name\">{{position.name}}</option> -->\n<!-- \t\t\t</select></label> -->\n<!-- \t\t</div> -->\n<!-- \t</div> -->\n</div>\n"

/***/ }),

/***/ "./src/app/employee-edit/employee-edit.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/employee-edit/employee-edit.component.ts ***!
  \**********************************************************/
/*! exports provided: EmployeeEditComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmployeeEditComponent", function() { return EmployeeEditComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_employee_employee_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/employee/employee.service */ "./src/app/shared/employee/employee.service.ts");
/* harmony import */ var _model_employee__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../model/employee */ "./src/app/model/employee.ts");
/* harmony import */ var _model_position__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../model/position */ "./src/app/model/position.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var EmployeeEditComponent = /** @class */ (function () {
    function EmployeeEditComponent(employeeService, activatedRoute, route, toastr) {
        this.employeeService = employeeService;
        this.activatedRoute = activatedRoute;
        this.route = route;
        this.toastr = toastr;
        this.employee = new _model_employee__WEBPACK_IMPORTED_MODULE_2__["Employee"]();
        this.submitted = false;
        this.lastPosition = new _model_position__WEBPACK_IMPORTED_MODULE_3__["Position"]();
    }
    EmployeeEditComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.id = this.activatedRoute.snapshot.params.id;
        if (this.id != null) {
            this.getEmployeeById(this.id).subscribe(function (employee) {
                _this.employee = employee;
                _this.getPositionById(employee.positionId).subscribe(function (position) {
                    _this.lastPosition = position;
                });
            });
        }
        else {
            this.getEmployeeCurrentSequence().subscribe(function (data) {
                _this.employee.nik = 'EM' + _this.pad(data + 1, 5);
                _this.employee.type = 'PROMOTION';
            });
        }
        this.getAllPositions().subscribe(function (data) {
            _this.positions = data;
        });
        this.getAllDivisions().subscribe(function (data) {
            _this.divisions = data;
        });
    };
    EmployeeEditComponent.prototype.getEmployeeById = function (id) {
        return this.employeeService.getById(id);
    };
    EmployeeEditComponent.prototype.getAllPositions = function () {
        return this.employeeService.getAllPositions();
    };
    EmployeeEditComponent.prototype.getAllDivisions = function () {
        return this.employeeService.getAllDivisions();
    };
    EmployeeEditComponent.prototype.getEmployeeCurrentSequence = function () {
        return this.employeeService.getEmployeeCurrentSequence();
    };
    EmployeeEditComponent.prototype.getPositionById = function (id) {
        return this.employeeService.getPositionById(id);
    };
    EmployeeEditComponent.prototype.saveEmployee = function (employee) {
        return this.employeeService.saveEmployee(employee);
    };
    EmployeeEditComponent.prototype.positionChanged = function () {
        var _this = this;
        this.getPositionById(this.employee.positionId).subscribe(function (data) {
            if (data.level >= _this.lastPosition.level) {
                _this.employee.type = 'PROMOTION';
            }
            else {
                _this.employee.type = 'DEMOTION';
            }
            _this.employee.lastPosition = _this.lastPosition.name;
        });
    };
    EmployeeEditComponent.prototype.onSubmit = function () {
        var _this = this;
        this.submitted = true;
        this.saveEmployee(this.employee).subscribe(function (data) {
            _this.employee = data;
            _this.toastr.success('Employee Saved : ' + _this.employee.name, 'Success!');
            _this.route.navigateByUrl('');
        });
    };
    EmployeeEditComponent.prototype.pad = function (num, size) {
        var s = num + "";
        while (s.length < size)
            s = "0" + s;
        return s;
    };
    EmployeeEditComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-employee-edit',
            template: __webpack_require__(/*! ./employee-edit.component.html */ "./src/app/employee-edit/employee-edit.component.html"),
            styles: [__webpack_require__(/*! ./employee-edit.component.css */ "./src/app/employee-edit/employee-edit.component.css")]
        }),
        __metadata("design:paramtypes", [_shared_employee_employee_service__WEBPACK_IMPORTED_MODULE_1__["EmployeeService"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"], ngx_toastr__WEBPACK_IMPORTED_MODULE_5__["ToastrService"]])
    ], EmployeeEditComponent);
    return EmployeeEditComponent;
}());



/***/ }),

/***/ "./src/app/employee-list/employee-list.component.css":
/*!***********************************************************!*\
  !*** ./src/app/employee-list/employee-list.component.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/*\nAdd your NativeScript specific styles here.\nTo learn more about styling in NativeScript see:\nhttps://docs.nativescript.org/angular/ui/styling\n*/"

/***/ }),

/***/ "./src/app/employee-list/employee-list.component.html":
/*!************************************************************!*\
  !*** ./src/app/employee-list/employee-list.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"card\">\n  <div class=\"card-header\">\n    <h1>Employees</h1>\n  </div>\n  <div class=\"card-body\">\n    <div class=\"row\">\n      <table class=\"table table-striped\" [mfData]=\"employees\"\n             #mf=\"mfDataTable\" [mfRowsOnPage]=\"5\">\n        <thead>\n        <tr>\n          <th><mfDefaultSorter by=\"id\">ID</mfDefaultSorter></th>\n          <th><mfDefaultSorter by=\"nik\">NIK</mfDefaultSorter></th>\n          <th><mfDefaultSorter by=\"name\">Name</mfDefaultSorter></th>\n          <th>Division</th>\n          <th>Position</th>\n          <th>Type</th>\n          <th>Last Position</th>\n          <th>Created Date</th>\n          <th></th>\n          <th></th>\n        </tr>\n        </thead>\n        <tbody>\n        <tr *ngFor=\"let item of mf.data\">\n          <td>{{item.id}}</td>\n          <td>{{item.nik}}</td>\n          <td>{{item.name}}</td>\n          <td *ngFor=\"let division of divisions | searchfilter: 'id' : item.divisionId\">{{division.name}}</td>\n          <td *ngFor=\"let position of positions | searchfilter: 'id' : item.positionId\">{{position.name}}</td>\n          <td>{{item.type}}</td>\n          <td>{{item.lastPosition}}</td>\n          <td>{{item.createdDate | date}}</td>\n          <td>\n            <button type=\"button\" class=\"btn btn-info\" routerLink=\"/employeeEditComponent/{{item.id}}\">Edit</button>\n          </td>\n          <td>\n            <button type=\"button\" class=\"btn btn-danger\" (click)=\"onDelete(item)\">Delete</button>\n          </td>\n        </tr>\n        </tbody>\n        <tfoot>\n        <tr>\n          <td colspan=\"4\"><mfBootstrapPaginator\n            [rowsOnPageSet]=\"[5,10,25]\"></mfBootstrapPaginator></td>\n        </tr>\n        </tfoot>\n      </table>\n    </div>\n\n    <button type=\"button\" class=\"btn btn-primary\" routerLink=\"/employeeEditComponent\">\n      Add an Employee\n    </button>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/employee-list/employee-list.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/employee-list/employee-list.component.ts ***!
  \**********************************************************/
/*! exports provided: EmployeeListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmployeeListComponent", function() { return EmployeeListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_employee_employee_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/employee/employee.service */ "./src/app/shared/employee/employee.service.ts");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var EmployeeListComponent = /** @class */ (function () {
    function EmployeeListComponent(employeeService, toastr) {
        this.employeeService = employeeService;
        this.toastr = toastr;
    }
    EmployeeListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.getAllEmployees().subscribe(function (data) {
            _this.employees = data;
        });
        this.getAllDivisions().subscribe(function (data) {
            _this.divisions = data;
        });
        this.getAllPositions().subscribe(function (data) {
            _this.positions = data;
        });
    };
    EmployeeListComponent.prototype.getAllEmployees = function () {
        return this.employeeService.getAll();
    };
    EmployeeListComponent.prototype.getAllDivisions = function () {
        return this.employeeService.getAllDivisions();
    };
    EmployeeListComponent.prototype.getAllPositions = function () {
        return this.employeeService.getAllPositions();
    };
    EmployeeListComponent.prototype.deleteEmployee = function (id) {
        return this.employeeService.deleteEmployee(id);
    };
    EmployeeListComponent.prototype.onDelete = function (employee) {
        var _this = this;
        if (confirm("Are you sure to delete " + employee.name)) {
            this.deleteEmployee(employee.id).subscribe(function (data) {
                _this.getAllEmployees().subscribe(function (data) {
                    _this.employees = data;
                    _this.toastr.success('Employee Deleted : ' + employee.name, 'Success!');
                });
            });
        }
    };
    EmployeeListComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-employee-list',
            template: __webpack_require__(/*! ./employee-list.component.html */ "./src/app/employee-list/employee-list.component.html"),
            styles: [__webpack_require__(/*! ./employee-list.component.css */ "./src/app/employee-list/employee-list.component.css")]
        }),
        __metadata("design:paramtypes", [_shared_employee_employee_service__WEBPACK_IMPORTED_MODULE_1__["EmployeeService"], ngx_toastr__WEBPACK_IMPORTED_MODULE_2__["ToastrService"]])
    ], EmployeeListComponent);
    return EmployeeListComponent;
}());



/***/ }),

/***/ "./src/app/model/employee.ts":
/*!***********************************!*\
  !*** ./src/app/model/employee.ts ***!
  \***********************************/
/*! exports provided: Employee */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Employee", function() { return Employee; });
var Employee = /** @class */ (function () {
    function Employee() {
    }
    return Employee;
}());



/***/ }),

/***/ "./src/app/model/position.ts":
/*!***********************************!*\
  !*** ./src/app/model/position.ts ***!
  \***********************************/
/*! exports provided: Position */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Position", function() { return Position; });
var Position = /** @class */ (function () {
    function Position() {
    }
    return Position;
}());



/***/ }),

/***/ "./src/app/shared/employee/employee.service.ts":
/*!*****************************************************!*\
  !*** ./src/app/shared/employee/employee.service.ts ***!
  \*****************************************************/
/*! exports provided: EmployeeService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmployeeService", function() { return EmployeeService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var EmployeeService = /** @class */ (function () {
    function EmployeeService(http) {
        this.http = http;
        this.employeeUrl = '//localhost:8080/main/employees';
        this.positionUrl = '//localhost:8080/main/positions';
        this.divisionUrl = '//localhost:8080/main/divisions';
        this.employeeSequenceUrl = '//localhost:8080/main/employee-sequence';
    }
    EmployeeService.prototype.getAll = function () {
        return this.http.get(this.employeeUrl);
    };
    EmployeeService.prototype.getById = function (id) {
        return this.http.get(this.employeeUrl + '/' + id);
    };
    EmployeeService.prototype.getAllPositions = function () {
        return this.http.get(this.positionUrl);
    };
    EmployeeService.prototype.getPositionById = function (id) {
        return this.http.get(this.positionUrl + '/' + id);
    };
    EmployeeService.prototype.getAllDivisions = function () {
        return this.http.get(this.divisionUrl);
    };
    EmployeeService.prototype.getEmployeeCurrentSequence = function () {
        return this.http.get(this.employeeSequenceUrl);
    };
    EmployeeService.prototype.saveEmployee = function (employee) {
        return this.http.post(this.employeeUrl, employee);
    };
    EmployeeService.prototype.deleteEmployee = function (id) {
        return this.http.delete(this.employeeUrl + '/' + id);
    };
    EmployeeService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], EmployeeService);
    return EmployeeService;
}());



/***/ }),

/***/ "./src/app/shared/pipe/searchFilterPipe.ts":
/*!*************************************************!*\
  !*** ./src/app/shared/pipe/searchFilterPipe.ts ***!
  \*************************************************/
/*! exports provided: SearchFilterPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchFilterPipe", function() { return SearchFilterPipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var SearchFilterPipe = /** @class */ (function () {
    function SearchFilterPipe() {
    }
    SearchFilterPipe.prototype.transform = function (items, field, value) {
        if (!items)
            return [];
        return items.filter(function (it) { return it[field] == value; });
    };
    SearchFilterPipe = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"])({
            name: 'searchfilter'
        }),
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])()
    ], SearchFilterPipe);
    return SearchFilterPipe;
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

module.exports = __webpack_require__(/*! /Users/muhammad.humaidy/Documents/project/spring-boot/sample-springboot-angular6/client/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map