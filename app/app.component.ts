import {Component} from 'angular2/core'


@Component({
    template : `
     <h1>{{title}}</h1>
    <div> <input [value]="firstName">
     </div>`,
    selector : 'my-app'
    
})
export class AppComponent
{
    public title = 'This is Test' 
    
    public  firstName = 'Kalyan';    
}