import {Component} from 'angular2/core';
import {Vehicle} from './vehicle';
import {NgForm} from 'angular2/common';


export class VehicleFormComponent
{
    years = [2001, 2002];   
    
    model = new Vehicle(200,'Toyota',this.years[0]);
    
    submitted = false;
    
    onSubmit(){ this.submitted = true;}
    
    get diagnostic() {return JSON.stringify(this.model)}
    
}