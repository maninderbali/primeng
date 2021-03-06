"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var carservice_1 = require("./cars/carservice");
var PrimeCar = (function () {
    function PrimeCar(vin, year, brand, color, element) {
        this.vin = vin;
        this.year = year;
        this.brand = brand;
        this.color = color;
        this.element = element;
    }
    return PrimeCar;
}());
var AppComponent = (function () {
    function AppComponent(carService) {
        this.carService = carService;
        this.car = new PrimeCar('', '', '', '');
    }
    AppComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.carService.getCarsMedium().then(function (cars) { return _this.cars = cars; });
    };
    AppComponent.prototype.showDialogToAdd = function () {
        this.newCar = true;
        this.car = new PrimeCar('', '', '', '');
        this.displayDialog = true;
    };
    AppComponent.prototype.save = function () {
        if (this.newCar)
            this.cars.push(this.car);
        else
            this.cars[this.findSelectedCarIndex()] = this.car;
        this.car = null;
        this.displayDialog = false;
    };
    AppComponent.prototype.delete = function () {
        this.cars.splice(this.findSelectedCarIndex(), 1);
        this.car = null;
        this.displayDialog = false;
    };
    AppComponent.prototype.onRowSelect = function (event) {
        this.newCar = false;
        this.car = this.cloneCar(event.data);
        this.displayDialog = true;
    };
    AppComponent.prototype.cloneCar = function (c) {
        var car = new PrimeCar('', '', '', '');
        for (var prop in c) {
            car[prop] = c[prop];
        }
        return car;
    };
    AppComponent.prototype.findSelectedCarIndex = function () {
        return this.cars.indexOf(this.selectedCar);
    };
    AppComponent.prototype.onHeaderKeydown = function (event) {
        console.log('event is ', event);
        switch (event.keyCode) {
            case 38:
                // top arrow
                event.preventDefault();
                /* this.values[this.activeSpotIndex].deselect();
                 this.values[this.activeSpotIndex].blur();
         
                 this.activeSpotIndex--;
                 if (this.activeSpotIndex < 0) { this.activeSpotIndex = 0; }
         
                 this.values[this.activeSpotIndex].focus();*/
                break;
            case 40:
                // down arrow
                event.preventDefault();
                /*   this.values[this.activeSpotIndex].deselect();
                   this.values[this.activeSpotIndex].blur();
           
                   this.activeSpotIndex++;
                   if (this.activeSpotIndex > (this.values.length - 1)) {
                     this.activeSpotIndex =  (this.values.length - 1);
                   }
                   this.values[this.activeSpotIndex].focus();*/
                break;
            case 13:
                break;
        }
    };
    return AppComponent;
}());
AppComponent = __decorate([
    core_1.Component({
        templateUrl: 'app/app.component.html',
        selector: 'my-app'
    }),
    __metadata("design:paramtypes", [carservice_1.CarService])
], AppComponent);
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map