(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\angular\my-app\src\main.ts */"zUnb");


/***/ }),

/***/ "5Eur":
/*!******************************************!*\
  !*** ./src/app/todos/todos.component.ts ***!
  \******************************************/
/*! exports provided: TodosComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TodosComponent", function() { return TodosComponent; });
/* harmony import */ var _shared_todo_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../shared/todo.model */ "OKmj");
/* harmony import */ var _edit_todo_dialog_edit_todo_dialog_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../edit-todo-dialog/edit-todo-dialog.component */ "SGQt");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _shared_data_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/data.service */ "TVUz");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _todo_item_todo_item_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../todo-item/todo-item.component */ "Ompv");








function TodosComponent_div_18_p_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "p", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Please enter the text of your todo");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function TodosComponent_div_18_p_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "p", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Todo text must be at least 2 characters");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function TodosComponent_div_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, TodosComponent_div_18_p_1_Template, 2, 0, "p", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, TodosComponent_div_18_p_2_Template, 2, 0, "p", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", _r1.errors == null ? null : _r1.errors.required);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", _r1.errors == null ? null : _r1.errors.minlength);
} }
function TodosComponent_app_todo_item_22_Template(rf, ctx) { if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "app-todo-item", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("todoClicked", function TodosComponent_app_todo_item_22_Template_app_todo_item_todoClicked_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r8); const todo_r6 = ctx.$implicit; const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r7.toggleCompleted(todo_r6); })("editClicked", function TodosComponent_app_todo_item_22_Template_app_todo_item_editClicked_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r8); const todo_r6 = ctx.$implicit; const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r9.editTodo(todo_r6); })("deleteClicked", function TodosComponent_app_todo_item_22_Template_app_todo_item_deleteClicked_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r8); const todo_r6 = ctx.$implicit; const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r10.deleteTodo(todo_r6); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const todo_r6 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("todo", todo_r6);
} }
class TodosComponent {
    constructor(dataService, dialog) {
        this.dataService = dataService;
        this.dialog = dialog;
        this.showValidationErrors = false;
    }
    ngOnInit() {
        this.todos = this.dataService.getAllTodos();
    }
    onFormSubmit(form) {
        if (form.invalid) {
            return this.showValidationErrors = true;
        }
        this.dataService.addTodo(new _shared_todo_model__WEBPACK_IMPORTED_MODULE_0__["Todo"](form.value.text));
        this.showValidationErrors = false;
        form.reset();
    }
    toggleCompleted(todo) {
        todo.completed = !todo.completed;
    }
    editTodo(todo) {
        const index = this.todos.indexOf(todo);
        const dialogRef = this.dialog.open(_edit_todo_dialog_edit_todo_dialog_component__WEBPACK_IMPORTED_MODULE_1__["EditTodoDialogComponent"], {
            width: '700px',
            data: todo
        });
        dialogRef.afterClosed().subscribe(result => {
            if (result) {
                this.dataService.updateTodo(index, result);
            }
        });
    }
    deleteTodo(todo) {
        const index = this.todos.indexOf(todo);
        this.dataService.deleteTodo(index);
    }
}
TodosComponent.ɵfac = function TodosComponent_Factory(t) { return new (t || TodosComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_shared_data_service__WEBPACK_IMPORTED_MODULE_3__["DataService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MatDialog"])); };
TodosComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: TodosComponent, selectors: [["app-todos"]], decls: 23, vars: 2, consts: [[1, "heading-section"], [1, "title", "is-1", "has-text-centered"], [1, "container", "add-todo-box-container"], [1, "add-todo-box"], [3, "ngSubmit"], ["form", "ngForm"], [1, "title", "is-5"], [1, "field", "is-grouped", 2, "margin", "0"], [1, "control", "is-expanded"], ["ngModel", "", "required", "", "minlength", "2", "name", "text", "type", "text", "placeholder", "Type todo text here...", 1, "input"], ["todoTextField", "ngModel"], [1, "control"], [1, "button", "alt-gradient-button"], [1, "material-icons"], [4, "ngIf"], [1, "section"], [1, "container"], [1, "todos-list"], [3, "todo", "todoClicked", "editClicked", "deleteClicked", 4, "ngFor", "ngForOf"], ["class", "help is-danger", 4, "ngIf"], [1, "help", "is-danger"], [3, "todo", "todoClicked", "editClicked", "deleteClicked"]], template: function TodosComponent_Template(rf, ctx) { if (rf & 1) {
        const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "h1", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "Todos");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "form", 4, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngSubmit", function TodosComponent_Template_form_ngSubmit_5_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r11); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](6); return ctx.onFormSubmit(_r0); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "h2", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](8, "New todo");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "p", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](11, "input", 9, 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "p", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "button", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](15, "i", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](16, "add");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](17, " Add ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](18, TodosComponent_div_18_Template, 3, 2, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](19, "section", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](20, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](21, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](22, TodosComponent_app_todo_item_22_Template, 1, 1, "app-todo-item", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](18);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", _r1.invalid && ctx.showValidationErrors);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.todos);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["ɵangular_packages_forms_forms_ba"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgModel"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["MinLengthValidator"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgForOf"], _todo_item_todo_item_component__WEBPACK_IMPORTED_MODULE_7__["TodoItemComponent"]], styles: [".heading-section[_ngcontent-%COMP%] {\n  background: linear-gradient(to right, #02e4ab, #4ad7f0);\n  padding: 100px;\n  padding-bottom: 150px;\n}\n.heading-section[_ngcontent-%COMP%]   h1.title[_ngcontent-%COMP%] {\n  font-weight: bold;\n  color: #ffffff;\n  text-shadow: 0px 1px 2px rgba(0, 0, 0, 0.12);\n}\n.container[_ngcontent-%COMP%] {\n  max-width: 800px;\n}\n.add-todo-box-container[_ngcontent-%COMP%] {\n  position: sticky;\n  top: 0;\n  z-index: 1;\n}\n.add-todo-box[_ngcontent-%COMP%] {\n  padding: 25px;\n  background: white;\n  border-radius: 4px;\n  margin-top: -68px;\n  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXHRvZG9zLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsdURBQUE7RUFDQSxjQUFBO0VBQ0EscUJBQUE7QUFDRjtBQUNFO0VBQ0UsaUJBQUE7RUFDQSxjQUFBO0VBQ0EsNENBQUE7QUFDSjtBQUVBO0VBQ0UsZ0JBQUE7QUFDRjtBQUVBO0VBQ0UsZ0JBQUE7RUFDQSxNQUFBO0VBQ0EsVUFBQTtBQUNGO0FBRUE7RUFDRSxhQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0EsMENBQUE7QUFDRiIsImZpbGUiOiJ0b2Rvcy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5oZWFkaW5nLXNlY3Rpb257XHJcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCByZ2IoMiwgMjI4LCAxNzEpLCByZ2IoNzQsMjE1LDI0MCkpO1xyXG4gIHBhZGRpbmc6IDEwMHB4O1xyXG4gIHBhZGRpbmctYm90dG9tOiAxNTBweDtcclxuXHJcbiAgaDEudGl0bGV7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIGNvbG9yOiAjZmZmZmZmO1xyXG4gICAgdGV4dC1zaGFkb3c6IDBweCAxcHggMnB4IHJnYmEoYmxhY2ssIDAuMTIpO1xyXG4gIH1cclxufVxyXG4uY29udGFpbmVye1xyXG4gIG1heC13aWR0aDogODAwcHg7XHJcbn1cclxuXHJcbi5hZGQtdG9kby1ib3gtY29udGFpbmVye1xyXG4gIHBvc2l0aW9uOiBzdGlja3k7XHJcbiAgdG9wOiAwO1xyXG4gIHotaW5kZXg6IDE7XHJcbn1cclxuXHJcbi5hZGQtdG9kby1ib3h7XHJcbiAgcGFkZGluZzogMjVweDtcclxuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcclxuICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbiAgbWFyZ2luLXRvcDogLTY4cHg7XHJcbiAgYm94LXNoYWRvdzogMCA0cHggMTJweCByZ2JhKGJsYWNrLCAwLjA4KTtcclxufVxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcbiJdfQ== */"] });


/***/ }),

/***/ "AytR":
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

/***/ "OKmj":
/*!**************************************!*\
  !*** ./src/app/shared/todo.model.ts ***!
  \**************************************/
/*! exports provided: Todo */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Todo", function() { return Todo; });
class Todo {
    constructor(text, completed = false) {
        this.text = text;
        this.completed = completed;
    }
}


/***/ }),

/***/ "Ompv":
/*!**************************************************!*\
  !*** ./src/app/todo-item/todo-item.component.ts ***!
  \**************************************************/
/*! exports provided: TodoItemComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TodoItemComponent", function() { return TodoItemComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _shared_tool_tip_directive__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/tool-tip.directive */ "jV+l");



class TodoItemComponent {
    constructor() {
        this.todoClicked = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.editClicked = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.deleteClicked = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    ngOnInit() {
    }
    onTodoClicked() {
        this.todoClicked.emit();
    }
    onEditClicked() {
        this.editClicked.emit();
    }
    onDeleteClicked() {
        this.deleteClicked.emit();
    }
}
TodoItemComponent.ɵfac = function TodoItemComponent_Factory(t) { return new (t || TodoItemComponent)(); };
TodoItemComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TodoItemComponent, selectors: [["app-todo-item"]], inputs: { todo: "todo" }, outputs: { todoClicked: "todoClicked", editClicked: "editClicked", deleteClicked: "deleteClicked" }, decls: 13, vars: 3, consts: [[1, "todo-item", 3, "click"], [1, "check-box"], [1, "material-icons"], [1, "todo-text"], [1, "todo-controls-box", 3, "click"], ["appToolTip", "Edit todo", 1, "todo-control-button", 3, "click"], ["appToolTip", "Delete todo", 1, "todo-control-button", "is-danger", 3, "click"]], template: function TodoItemComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TodoItemComponent_Template_div_click_0_listener() { return ctx.onTodoClicked(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "i", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "check");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TodoItemComponent_Template_div_click_6_listener($event) { return $event.stopPropagation(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TodoItemComponent_Template_div_click_7_listener() { return ctx.onEditClicked(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "i", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "edit");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TodoItemComponent_Template_div_click_10_listener() { return ctx.onDeleteClicked(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "i", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "delete");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("completed", ctx.todo.completed);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.todo.text, " ");
    } }, directives: [_shared_tool_tip_directive__WEBPACK_IMPORTED_MODULE_1__["ToolTipDirective"]], styles: [".todo-item[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  position: relative;\n  cursor: pointer;\n  font-size: 18px;\n  padding: 35px 15px;\n  border-bottom: 1px solid #f2f3f5;\n}\n.todo-item.completed[_ngcontent-%COMP%] {\n  color: #aaa;\n}\n.todo-item[_ngcontent-%COMP%]   .check-box[_ngcontent-%COMP%] {\n  display: flex;\n  border: 2px solid #eeeeee;\n  border-radius: 50%;\n  margin-right: 20px;\n  height: 28px;\n  min-width: 28px;\n  transition: background-color 0.2s, border-color 0.2s;\n}\n.todo-item[_ngcontent-%COMP%]   .check-box[_ngcontent-%COMP%]   i.material-icons[_ngcontent-%COMP%] {\n  font-size: 20px;\n  margin: auto;\n  color: #333;\n  opacity: 0;\n  transition: opacity 0.2s;\n}\n.todo-item[_ngcontent-%COMP%]   .check-box[_ngcontent-%COMP%]:hover   i.material-icons[_ngcontent-%COMP%] {\n  opacity: 1;\n}\n.todo-item[_ngcontent-%COMP%]:hover   .check-box[_ngcontent-%COMP%] {\n  background: #eeeeee;\n}\n.todo-item[_ngcontent-%COMP%]:hover   .check-box[_ngcontent-%COMP%]   i.material-icons[_ngcontent-%COMP%] {\n  opacity: 0.28;\n}\n.todo-item.completed[_ngcontent-%COMP%]   .check-box[_ngcontent-%COMP%] {\n  background: #0bdfaa;\n  border-color: #0bdfaa;\n}\n.todo-item.completed[_ngcontent-%COMP%]   .check-box[_ngcontent-%COMP%]   i.material-icons[_ngcontent-%COMP%] {\n  opacity: 1;\n}\n.todo-item[_ngcontent-%COMP%]   .todo-controls-box[_ngcontent-%COMP%] {\n  position: absolute;\n  bottom: 0;\n  right: 5px;\n  display: flex;\n  opacity: 0;\n  visibility: hidden;\n  transform: translateY(2px);\n  transition: opacity 0.2s, visibility 0.2s, transform 0.2s;\n}\n.todo-item[_ngcontent-%COMP%]:hover   .todo-controls-box[_ngcontent-%COMP%] {\n  opacity: 1;\n  visibility: visible;\n  transition-delay: 0.4s;\n  transform: translateY(0);\n}\n.todo-controls-box[_ngcontent-%COMP%]   .todo-control-button[_ngcontent-%COMP%] {\n  display: flex;\n  background: #f5f7f8;\n  padding: 7px 10px;\n}\n.todo-controls-box[_ngcontent-%COMP%]   .todo-control-button[_ngcontent-%COMP%]   i.material-icons[_ngcontent-%COMP%] {\n  color: #555;\n  font-size: 20px;\n}\n.todo-controls-box[_ngcontent-%COMP%]   .todo-control-button[_ngcontent-%COMP%]:hover {\n  background: #eee;\n}\n.todo-controls-box[_ngcontent-%COMP%]   .todo-control-button[_ngcontent-%COMP%]:hover   i.material-icons[_ngcontent-%COMP%] {\n  color: #333;\n}\n.todo-controls-box[_ngcontent-%COMP%]   .todo-control-button[_ngcontent-%COMP%]:active {\n  background: #e5e7e8;\n}\n.todo-controls-box[_ngcontent-%COMP%]   .todo-control-button[_ngcontent-%COMP%]:first-of-type {\n  border-top-left-radius: 7px;\n}\n.todo-controls-box[_ngcontent-%COMP%]   .todo-control-button[_ngcontent-%COMP%]:last-of-type {\n  border-top-right-radius: 7px;\n}\n.todo-controls-box[_ngcontent-%COMP%]   .todo-control-button.is-danger[_ngcontent-%COMP%]:hover   i.material-icons[_ngcontent-%COMP%] {\n  color: #9b1b1b;\n}\n.todo-controls-box[_ngcontent-%COMP%]   .todo-control-button.is-danger[_ngcontent-%COMP%]:active   i.material-icons[_ngcontent-%COMP%] {\n  color: #bd2525;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXHRvZG8taXRlbS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtFQUNBLGdDQUFBO0FBQ0Y7QUFDRTtFQUNFLFdBQUE7QUFDSjtBQUlBO0VBQ0UsYUFBQTtFQUNBLHlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0VBQ0Esb0RBQUE7QUFERjtBQUdFO0VBQ0UsZUFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0EsVUFBQTtFQUNBLHdCQUFBO0FBREo7QUFLSTtFQUNFLFVBQUE7QUFITjtBQVFBO0VBQ0UsbUJBQUE7QUFMRjtBQU1FO0VBQ0UsYUFBQTtBQUpKO0FBUUE7RUFDRSxtQkFBQTtFQUNBLHFCQUFBO0FBTEY7QUFPRTtFQUNFLFVBQUE7QUFMSjtBQVNBO0VBQ0Usa0JBQUE7RUFDQSxTQUFBO0VBQ0EsVUFBQTtFQUNBLGFBQUE7RUFDQSxVQUFBO0VBQ0Esa0JBQUE7RUFDQSwwQkFBQTtFQUNBLHlEQUFBO0FBTkY7QUFTQTtFQUNFLFVBQUE7RUFDQSxtQkFBQTtFQUNBLHNCQUFBO0VBRUEsd0JBQUE7QUFQRjtBQVVBO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsaUJBQUE7QUFQRjtBQVNFO0VBQ0UsV0FBQTtFQUNBLGVBQUE7QUFQSjtBQVVFO0VBQ0UsZ0JBQUE7QUFSSjtBQVVJO0VBQ0UsV0FBQTtBQVJOO0FBWUU7RUFDRSxtQkFBQTtBQVZKO0FBYUU7RUFDRSwyQkFBQTtBQVhKO0FBY0U7RUFDRSw0QkFBQTtBQVpKO0FBZ0JBO0VBQ0UsY0FBQTtBQWJGO0FBZ0JBO0VBQ0UsY0FBQTtBQWJGIiwiZmlsZSI6InRvZG8taXRlbS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi50b2RvLWl0ZW17XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgZm9udC1zaXplOiAxOHB4O1xyXG4gIHBhZGRpbmc6IDM1cHggMTVweDtcclxuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2YyZjNmNTtcclxuXHJcbiAgJi5jb21wbGV0ZWR7XHJcbiAgICBjb2xvcjogI2FhYTtcclxuXHJcbiAgfVxyXG59XHJcblxyXG4udG9kby1pdGVtIC5jaGVjay1ib3h7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBib3JkZXI6IDJweCBzb2xpZCAjZWVlZWVlO1xyXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICBtYXJnaW4tcmlnaHQ6IDIwcHg7XHJcbiAgaGVpZ2h0OiAyOHB4O1xyXG4gIG1pbi13aWR0aDogMjhweDtcclxuICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIC4ycywgYm9yZGVyLWNvbG9yIC4ycztcclxuXHJcbiAgaS5tYXRlcmlhbC1pY29uc3tcclxuICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgIG1hcmdpbjogYXV0bztcclxuICAgIGNvbG9yOiAjMzMzO1xyXG4gICAgb3BhY2l0eTogMDtcclxuICAgIHRyYW5zaXRpb246IG9wYWNpdHkgLjJzO1xyXG4gIH1cclxuXHJcbiAgJjpob3ZlcntcclxuICAgIGkubWF0ZXJpYWwtaWNvbnN7XHJcbiAgICAgIG9wYWNpdHk6IDE7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG4udG9kby1pdGVtOmhvdmVyIC5jaGVjay1ib3h7XHJcbiAgYmFja2dyb3VuZDogI2VlZWVlZTtcclxuICBpLm1hdGVyaWFsLWljb25ze1xyXG4gICAgb3BhY2l0eTogLjI4O1xyXG4gIH1cclxufVxyXG5cclxuLnRvZG8taXRlbS5jb21wbGV0ZWQgLmNoZWNrLWJveCB7XHJcbiAgYmFja2dyb3VuZDogcmdiKDExLCAyMjMsIDE3MCk7XHJcbiAgYm9yZGVyLWNvbG9yOiByZ2IoMTEsIDIyMywgMTcwKTtcclxuXHJcbiAgaS5tYXRlcmlhbC1pY29ucyB7XHJcbiAgICBvcGFjaXR5OiAxO1xyXG4gIH1cclxufVxyXG5cclxuLnRvZG8taXRlbSAudG9kby1jb250cm9scy1ib3h7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIGJvdHRvbTogMDtcclxuICByaWdodDogNXB4O1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgb3BhY2l0eTogMDtcclxuICB2aXNpYmlsaXR5OiBoaWRkZW47XHJcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDJweCk7XHJcbiAgdHJhbnNpdGlvbjogb3BhY2l0eSAuMnMsIHZpc2liaWxpdHkgLjJzLCB0cmFuc2Zvcm0gLjJzO1xyXG59XHJcblxyXG4udG9kby1pdGVtOmhvdmVyIC50b2RvLWNvbnRyb2xzLWJveHtcclxuICBvcGFjaXR5OiAxO1xyXG4gIHZpc2liaWxpdHk6IHZpc2libGU7XHJcbiAgdHJhbnNpdGlvbi1kZWxheTogLjRzO1xyXG5cclxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCk7XHJcbn1cclxuXHJcbi50b2RvLWNvbnRyb2xzLWJveCAudG9kby1jb250cm9sLWJ1dHRvbntcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGJhY2tncm91bmQ6ICNmNWY3Zjg7XHJcbiAgcGFkZGluZzogN3B4IDEwcHg7XHJcblxyXG4gIGkubWF0ZXJpYWwtaWNvbnN7XHJcbiAgICBjb2xvcjogIzU1NTtcclxuICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICB9XHJcblxyXG4gICY6aG92ZXJ7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZWVlO1xyXG5cclxuICAgIGkubWF0ZXJpYWwtaWNvbnN7XHJcbiAgICAgIGNvbG9yOiAjMzMzO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgJjphY3RpdmV7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZTVlN2U4O1xyXG4gIH1cclxuXHJcbiAgJjpmaXJzdC1vZi10eXBle1xyXG4gICAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogN3B4O1xyXG4gIH1cclxuXHJcbiAgJjpsYXN0LW9mLXR5cGV7XHJcbiAgICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogN3B4O1xyXG4gIH1cclxufVxyXG5cclxuLnRvZG8tY29udHJvbHMtYm94IC50b2RvLWNvbnRyb2wtYnV0dG9uLmlzLWRhbmdlcjpob3ZlciBpLm1hdGVyaWFsLWljb25ze1xyXG4gIGNvbG9yOiByZ2IoMTU1LDI3LDI3KTtcclxufVxyXG5cclxuLnRvZG8tY29udHJvbHMtYm94IC50b2RvLWNvbnRyb2wtYnV0dG9uLmlzLWRhbmdlcjphY3RpdmUgaS5tYXRlcmlhbC1pY29uc3tcclxuICBjb2xvcjogcmdiKDE4OSwzNywzNyk7XHJcbn1cclxuIl19 */"] });


/***/ }),

/***/ "SGQt":
/*!****************************************************************!*\
  !*** ./src/app/edit-todo-dialog/edit-todo-dialog.component.ts ***!
  \****************************************************************/
/*! exports provided: EditTodoDialogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditTodoDialogComponent", function() { return EditTodoDialogComponent; });
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _shared_todo_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/todo.model */ "OKmj");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");






function EditTodoDialogComponent_div_9_p_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "p", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Please enter the text of your todo");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function EditTodoDialogComponent_div_9_p_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "p", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Todo text must be at least 2 characters");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function EditTodoDialogComponent_div_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, EditTodoDialogComponent_div_9_p_1_Template, 2, 0, "p", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, EditTodoDialogComponent_div_9_p_2_Template, 2, 0, "p", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", _r1.errors == null ? null : _r1.errors.required);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", _r1.errors == null ? null : _r1.errors.minlength);
} }
class EditTodoDialogComponent {
    constructor(dialogRef, todo) {
        this.dialogRef = dialogRef;
        this.todo = todo;
    }
    ngOnInit() {
    }
    close() {
        this.dialogRef.close();
    }
    onFormSubmit(form) {
        if (form.invalid)
            return;
        const updatedTodo = Object.assign(Object.assign({}, this.todo), form.value);
        this.dialogRef.close(updatedTodo);
    }
}
EditTodoDialogComponent.ɵfac = function EditTodoDialogComponent_Factory(t) { return new (t || EditTodoDialogComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_0__["MatDialogRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_0__["MAT_DIALOG_DATA"])); };
EditTodoDialogComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: EditTodoDialogComponent, selectors: [["app-edit-todo-dialog"]], decls: 20, vars: 2, consts: [[1, "title"], ["mat-dialog-content", ""], [3, "ngSubmit"], ["form", "ngForm"], [1, "field"], [1, "control"], ["type", "text", "name", "text", "required", "", "minlength", "2", "placeholder", "Type todo text here...", 1, "input", 3, "ngModel"], ["todoTextField", "ngModel"], [4, "ngIf"], [1, "field", "is-grouped", "is-grouped-right"], ["type", "button", 1, "button", "is-light", 3, "click"], ["type", "submit", 1, "button", "alt-gradient-button"], [1, "material-icons"], ["class", "help is-danger", 4, "ngIf"], [1, "help", "is-danger"]], template: function EditTodoDialogComponent_Template(rf, ctx) { if (rf & 1) {
        const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "h1", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Edit Todo");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "form", 2, 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngSubmit", function EditTodoDialogComponent_Template_form_ngSubmit_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r5); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](4); return ctx.onFormSubmit(_r0); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](7, "input", 6, 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](9, EditTodoDialogComponent_div_9_Template, 3, 2, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](10, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "button", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function EditTodoDialogComponent_Template_button_click_13_listener() { return ctx.close(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14, "Cancel");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "button", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "i", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](18, "save");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](19, " Save ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.todo.text);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", _r1.invalid);
    } }, directives: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_0__["MatDialogContent"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵangular_packages_forms_forms_ba"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["MinLengthValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgModel"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJlZGl0LXRvZG8tZGlhbG9nLmNvbXBvbmVudC5zY3NzIn0= */"] });


/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");


class AppComponent {
    ngOnInit() {
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 1, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]], styles: [".container[_ngcontent-%COMP%] {\n  max-width: 900px;\n  margin: 0 auto;\n}\n\np[_ngcontent-%COMP%] {\n  font-size: 18px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcYXBwLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZ0JBQUE7RUFDQSxjQUFBO0FBQ0Y7O0FBRUE7RUFDRSxlQUFBO0FBQ0YiLCJmaWxlIjoiYXBwLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRhaW5lcntcclxuICBtYXgtd2lkdGg6IDkwMHB4O1xyXG4gIG1hcmdpbjogMCBhdXRvO1xyXG59XHJcblxyXG5we1xyXG4gIGZvbnQtc2l6ZTogMThweDtcclxufVxyXG4iXX0= */"] });


/***/ }),

/***/ "TVUz":
/*!****************************************!*\
  !*** ./src/app/shared/data.service.ts ***!
  \****************************************/
/*! exports provided: DataService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataService", function() { return DataService; });
/* harmony import */ var _todo_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./todo.model */ "OKmj");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");


class DataService {
    constructor() {
        this.todos = [
            new _todo_model__WEBPACK_IMPORTED_MODULE_0__["Todo"]('Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deleniti dolore ipsum optio ut velit. Doloremque est eveniet fugiat modi nemo nihil pariatur quas quod quos ratione, sint soluta vero voluptatibus!', false),
            new _todo_model__WEBPACK_IMPORTED_MODULE_0__["Todo"]('Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deleniti dolore ipsum optio ut velit. Doloremque est eveniet fugiat modi nemo nihil pariatur quas quod quos ratione, sint soluta vero voluptatibus!', false)
        ];
    }
    getAllTodos() {
        return this.todos;
    }
    addTodo(todo) {
        this.todos.push(todo);
    }
    updateTodo(index, updateTodo) {
        this.todos[index] = updateTodo;
    }
    deleteTodo(index) {
        this.todos.splice(index, 1);
    }
}
DataService.ɵfac = function DataService_Factory(t) { return new (t || DataService)(); };
DataService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: DataService, factory: DataService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _todos_todos_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./todos/todos.component */ "5Eur");
/* harmony import */ var _todo_item_todo_item_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./todo-item/todo-item.component */ "Ompv");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/platform-browser/animations */ "R1ws");
/* harmony import */ var _edit_todo_dialog_edit_todo_dialog_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./edit-todo-dialog/edit-todo-dialog.component */ "SGQt");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var _shared_tool_tip_directive__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./shared/tool-tip.directive */ "jV+l");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ "fXoL");











class AppModule {
}
AppModule.ɵfac = function AppModule_Factory(t) { return new (t || AppModule)(); };
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdefineInjector"]({ providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_1__["AppRoutingModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__["BrowserAnimationsModule"],
            _angular_material_dialog__WEBPACK_IMPORTED_MODULE_8__["MatDialogModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"],
        _todos_todos_component__WEBPACK_IMPORTED_MODULE_4__["TodosComponent"],
        _todo_item_todo_item_component__WEBPACK_IMPORTED_MODULE_5__["TodoItemComponent"],
        _edit_todo_dialog_edit_todo_dialog_component__WEBPACK_IMPORTED_MODULE_7__["EditTodoDialogComponent"],
        _shared_tool_tip_directive__WEBPACK_IMPORTED_MODULE_9__["ToolTipDirective"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_1__["AppRoutingModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__["BrowserAnimationsModule"],
        _angular_material_dialog__WEBPACK_IMPORTED_MODULE_8__["MatDialogModule"]] }); })();


/***/ }),

/***/ "jV+l":
/*!**********************************************!*\
  !*** ./src/app/shared/tool-tip.directive.ts ***!
  \**********************************************/
/*! exports provided: ToolTipDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ToolTipDirective", function() { return ToolTipDirective; });
/* harmony import */ var tippy_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tippy.js */ "b5oN");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");


class ToolTipDirective {
    constructor(elRef) {
        this.elRef = elRef;
    }
    ngAfterViewInit() {
        Object(tippy_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this.elRef.nativeElement, {
            content: this.toolTipContent
        });
    }
}
ToolTipDirective.ɵfac = function ToolTipDirective_Factory(t) { return new (t || ToolTipDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])); };
ToolTipDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({ type: ToolTipDirective, selectors: [["", "appToolTip", ""]], inputs: { toolTipContent: ["appToolTip", "toolTipContent"] } });


/***/ }),

/***/ "vY5A":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _todos_todos_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./todos/todos.component */ "5Eur");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");




const routes = [
    { path: '', component: _todos_todos_component__WEBPACK_IMPORTED_MODULE_1__["TodosComponent"] }
];
class AppRoutingModule {
}
AppRoutingModule.ɵfac = function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); };
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] }); })();


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "AytR");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ "zn8P":
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
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map