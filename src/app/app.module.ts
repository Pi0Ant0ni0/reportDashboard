import {APP_INITIALIZER, LOCALE_ID, NgModule} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToolBarComponent } from './report-list-page/tool-bar/tool-bar.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from "@angular/material/icon";
import {MatInputModule} from "@angular/material/input";
import { ReportsTableComponent } from './report-list-page/reports-table/reports-table.component';
import {MatTableModule} from "@angular/material/table";
import {MatMenuModule} from "@angular/material/menu";
import {HttpClientModule} from "@angular/common/http";
import {MatDatepickerModule} from "@angular/material/datepicker";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MatNativeDateModule} from "@angular/material/core";
import { DetailsTableComponent } from './details-page/details-table/details-table.component';
import { DetailsDialogComponent } from './details-page/details-dialog/details-dialog.component';
import {MatDialogModule} from "@angular/material/dialog";

import localePt from '@angular/common/locales/pt';
import {registerLocaleData} from "@angular/common";
import {initializeKeycloak} from "./keycloak/keycloack-initialization";
import {KeycloakService} from "keycloak-angular";
import {AuthService} from "./keycloak/auth.service";
registerLocaleData(localePt, 'pt-IT');
@NgModule({
  declarations: [
    AppComponent,
    ToolBarComponent,
    ReportsTableComponent,
    DetailsTableComponent,
    DetailsDialogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatInputModule,
    MatTableModule,
    MatMenuModule,
    HttpClientModule,
    MatDatepickerModule,
    FormsModule,
    MatNativeDateModule,
    ReactiveFormsModule,
    MatDialogModule
  ],
  providers: [
    KeycloakService,
    { provide: LOCALE_ID, useValue: 'pt-IT'},
  {
    provide: APP_INITIALIZER,
    useFactory: initializeKeycloak,
    multi: true,
    deps: [KeycloakService],
  },
      AuthService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
