import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { ComboserviceService } from './comboservice.service';
import { LoginserviceService } from './loginservice.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [ComboserviceService,LoginserviceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
