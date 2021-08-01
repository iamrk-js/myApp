import { Component } from "@angular/core";


@Component({
    selector : "app-severs",
    templateUrl : "./servers.component.html",
    // template:'<app-server></app-server><app-server></app-server>',
    // template:`
    //         <app-server></app-server>
    //         <app-server></app-server>
    // `,
    styles : [],
})
export class ServersComponent{
    newServerStatus:string = "No server created Yet";
    allowNewServer:boolean = true;
    btnclasses:string = "btn btn-primary";
    serverName:string = "";
    isActive:boolean = true;
    serverList:string[] = ["Test Server 1","Test Server 2"]
    constructor(){
        setTimeout(() => {
            this.allowNewServer = false
        },2000)
    }

    onServerCreated(){
        this.newServerStatus = "Server is created Now !!!"
        this.serverList.push(this.serverName)
    }

    onServerNameUpdate(eve:Event){
        console.log(eve.target)
        this.serverName = (<HTMLInputElement>eve.target).value;
    }

    onKeyUp(eve:any){
        if(eve.keyCode == 13){
            alert("Enter Is Pressed")
        }
    }
    onKeyUp2(eve:any){
            alert("Enter Is Pressed")
    }
}