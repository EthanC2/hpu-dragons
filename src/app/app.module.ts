import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavbarComponent } from './navbar/navbar.component';
import { LevelSelectComponent } from './level-select/level-select.component';
import { ClueComponent } from './clue/clue.component';
import { GeomapComponent } from './geomap/geomap.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LevelSelectComponent,
    ClueComponent,
    GeomapComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
