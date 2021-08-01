import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { ServerComponent } from './server/server.component';
import { ServersComponent } from './servers/servers.component';
import { StructuralDirectivesComponent } from './structural-directives/structural-directives.component';
import { NgIfDirComponent } from './structural-directives/ng-if-dir/ng-if-dir.component';
import { NgforDirComponent } from './structural-directives/ngfor-dir/ngfor-dir.component';
import { AttributeDirectiveComponent } from './attribute-directive/attribute-directive.component';
import { FormsModule } from '@angular/forms';
import { InputDecComponent } from './input-dec/input-dec.component';

@NgModule({
  declarations: [
    AppComponent,
    ServerComponent,
    ServersComponent,
    StructuralDirectivesComponent,
    NgIfDirComponent,
    NgforDirComponent,
    AttributeDirectiveComponent,
    InputDecComponent,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
