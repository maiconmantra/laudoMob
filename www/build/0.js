webpackJsonp([0],{

/***/ 278:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LaudoPageModule", function() { return LaudoPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__laudo__ = __webpack_require__(283);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var LaudoPageModule = /** @class */ (function () {
    function LaudoPageModule() {
    }
    LaudoPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__laudo__["a" /* LaudoPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__laudo__["a" /* LaudoPage */]),
            ],
        })
    ], LaudoPageModule);
    return LaudoPageModule;
}());

//# sourceMappingURL=laudo.module.js.map

/***/ }),

/***/ 283:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LaudoPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_laudos_laudos__ = __webpack_require__(198);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Generated class for the LaudoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var LaudoPage = /** @class */ (function () {
    function LaudoPage(navCtrl, navParams, menu, laudoProvider) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.menu = menu;
        this.laudoProvider = laudoProvider;
        this.items = [];
        this.menuLaudo();
        this.laudoProvider.getAll(664).then(function (data) {
            _this.items = data;
        });
    }
    LaudoPage.prototype.menuLaudo = function () {
        this.activeMenu = 'menu-filter-laudos';
        this.menu.enable(false, 'menu-filter-graficos');
        this.menu.enable(true, 'menu-filter-laudos');
    };
    LaudoPage.prototype.menuGrafico = function () {
        this.activeMenu = 'menu-filter-graficos';
        this.menu.enable(false, 'menu-filter-laudos');
        this.menu.enable(true, 'menu-filter-graficos');
    };
    LaudoPage.prototype.expandItem = function (item) {
        this.items.map(function (listItem) {
            if (item == listItem) {
                listItem.expanded = !listItem.expanded;
            }
            else {
                listItem.expanded = false;
            }
            return listItem;
        });
    };
    LaudoPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad LaudoPage');
    };
    LaudoPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-laudo',template:/*ion-inline-start:"C:\Users\Usuario\Desktop\projects\laudoMob\src\pages\laudo\laudo.html"*/'<!--\n  Generated template for the LaudoPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar color="primary">\n    <ion-title>Laudos</ion-title>\n    <ion-buttons end>          \n        <button ion-button icon-only menuToggle>\n            <ion-icon name="options"></ion-icon>\n        </button>\n      </ion-buttons>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n    <ion-list>\n      <button ion-item *ngFor="let item of items">\n        <h3>{{ item.localizacao}}</h3>\n        <p>{{ item.equipamento}}</p>\n        <p>{{ item.tag}}</p>     \n        <button ion-button clear item-end >\n          <br><br>\n          <ion-icon name="square" color="nivel-{{item.id_niveis_alerta}}"></ion-icon>&nbsp;\n          {{ item.numero }}          \n        </button>\n      </button>\n    </ion-list>  \n</ion-content>\n'/*ion-inline-end:"C:\Users\Usuario\Desktop\projects\laudoMob\src\pages\laudo\laudo.html"*/,
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* MenuController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* MenuController */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_2__providers_laudos_laudos__["a" /* LaudosProvider */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__providers_laudos_laudos__["a" /* LaudosProvider */]) === "function" && _d || Object])
    ], LaudoPage);
    return LaudoPage;
    var _a, _b, _c, _d;
}());

//# sourceMappingURL=laudo.js.map

/***/ })

});
//# sourceMappingURL=0.js.map