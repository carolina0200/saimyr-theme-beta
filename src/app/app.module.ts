import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MenuComponent } from './general/menu/menu.component';
import { HeaderComponent } from './general/header/header.component';
import { AlertsComponent } from './components/alerts/alerts.component';
import { BadgeComponent } from './components/badge/badge.component';
import { ButtonsComponent } from './components/buttons/buttons.component';
import { ButtonGroupComponent } from './components/button-group/button-group.component';
import { CardComponent } from './components/card/card.component';
import { DropdownsComponent } from './components/dropdowns/dropdowns.component';
import { FormsComponent } from './components/forms/forms.component';
import { InputGroupComponent } from './components/input-group/input-group.component';
import { NavsComponent } from './components/navs/navs.component';
import { NavbarComponent } from './components/navbar/navbar.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    HeaderComponent,
    AlertsComponent,
    BadgeComponent,
    ButtonsComponent,
    ButtonGroupComponent,
    CardComponent,
    DropdownsComponent,
    FormsComponent,
    InputGroupComponent,
    NavsComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
