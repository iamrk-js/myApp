import { Component } from "@angular/core";


@Component({
    selector: "app-server",
    templateUrl : "./server.component.html",
    // styleUrls : ['./server.component.scss']
    styles:[`
         p{
            color: blueviolet;
        }
        .white{
            color: white;
        }
    `]
})
export class ServerComponent{
    serverId:number = 10;
    serverStatus : string = "";
    msgFromServer : string = "This msg comes from Server"
    constructor(){
        this.serverStatus = Math.random() > 0.5 ? "Online" : "Offline"
    }

    getColor(){
        // debugger
        return this.serverStatus == 'Online' ? 'yellowgreen' : 'orange'
    }

}