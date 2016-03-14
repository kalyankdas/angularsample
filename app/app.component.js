System.register(['angular2/core', './VehicleService'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, VehicleService_1;
    var AppComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (VehicleService_1_1) {
                VehicleService_1 = VehicleService_1_1;
            }],
        execute: function() {
            AppComponent = (function () {
                function AppComponent(_vehicleService) {
                    this._vehicleService = _vehicleService;
                    this.title = 'This is Test';
                    this.firstName = 'Kalyan';
                    this.vehicles = [];
                    this.vehicles = _vehicleService.getVehicles();
                }
                AppComponent = __decorate([
                    core_1.Component({
                        template: "\n     <h1>{{title}}</h1>\n        <div> <input\u00A0[value]=\"firstName\">\n     </div>\n     \n     <div *ngFor=\"#vehicle of vehicles; #i = index\">\n        {{vehicle.name}}\n    </div> ",
                        selector: 'my-app',
                        providers: [VehicleService_1.VehicleService],
                    }), 
                    __metadata('design:paramtypes', [VehicleService_1.VehicleService])
                ], AppComponent);
                return AppComponent;
            }());
            exports_1("AppComponent", AppComponent);
        }
    }
});
//# sourceMappingURL=app.component.js.map