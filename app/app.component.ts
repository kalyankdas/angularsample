import {Component} from 'angular2/core'
import {VehicleService} from './VehicleService'
import {VehicleFormComponent} from './vehicle-form.component'

@Component({
    template : `
     <h1>{{title}}</h1>
        <div> <input [value]="firstName">
     </div>
     
     <div *ngFor="#vehicle of vehicles; #i = index">
        {{vehicle.name}}
    </div> `,
     
    selector : 'my-app',
    providers : [VehicleService],
    
})

export class AppComponent
{
    public title = 'This is Test' 
    
    public  firstName = 'Kalyan';  
    
    public vehicles = []; 
    
    constructor(private _vehicleService: VehicleService)
    {
        this.vehicles = _vehicleService.getVehicles();
    } 
    
    
}



