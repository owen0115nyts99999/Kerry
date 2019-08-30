import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MainContentComponent } from './main-content/main-content.component';
import { MenuComponent } from './menu/menu.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatToolbarModule, MatIconModule, MatSidenavModule, MatListModule, MatButtonModule } from  '@angular/material';
import { MoviesComponent } from './movies/movies.component';
import { SongsComponent } from './songs/songs.component';
import { GridModule, ExcelModule } from '@progress/kendo-angular-grid';
import { EditService } from './edit.service';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule, HttpClientJsonpModule } from '@angular/common/http';

import { ShipOrder } from '../app/model/BLL/ship-order';
import { ShipOrdero } from '../app/model/DAL/ship-order';
import { FormsModule } from '@angular/forms';
import { ThingComponent } from './thing/thing.component';

@NgModule({
  declarations: [
    AppComponent,
    MainContentComponent,
    MenuComponent,
    MoviesComponent,
    SongsComponent,
    ThingComponent
  ],
  imports: [
    BrowserModule,

    HttpClientModule,
    HttpClientJsonpModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatButtonModule,
    MatIconModule,

    AppRoutingModule,
    NgbModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    GridModule,
    FormsModule,
    ExcelModule
  ],
  providers: 
  [
    {
        deps: [HttpClient],
        provide: EditService,
        useFactory: (jsonp: HttpClient) => () => new EditService(jsonp)
    },ShipOrder,ShipOrdero
],
  bootstrap: [AppComponent]
})
export class AppModule {}

