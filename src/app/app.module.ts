import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MaterialModule } from './material-module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BasePageComponent } from './base-page/base-page.component';
import { BaseTableComponent } from './base-table/base-table.component';
import { InnerBoxComponent } from './inner-box/inner-box.component';
import {  NgxsModule } from '@ngxs/store';
import { SquareState } from './store/sudoku.store';
import { HttpClientModule } from '@angular/common/http';
import { SquareComponent } from './square/square.component';
import { FormsModule } from '@angular/forms';
import { SideNavComponent } from './side-nav/side-nav.component';

@NgModule({
  declarations: [
    AppComponent,
    BasePageComponent,
    BaseTableComponent,
    InnerBoxComponent,
    SquareComponent,
    SideNavComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    NgxsModule.forRoot([SquareState], { developmentMode: true }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
