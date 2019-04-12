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
import { DefaultComponent } from './components/default/default.component';
import { RouterModule, Routes } from '@angular/router';
import { ModalComponent } from './components/modal/modal.component';
import { CodeComponent } from './components/code/code.component';
import { SmrLibModule } from 'smr-lib';

const appRoutes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full'},
  { path: 'home', component: DefaultComponent},
  { path: 'alerts', component: AlertsComponent },
  { path: 'badge', component: BadgeComponent },
  { path: 'buttons', component: ButtonsComponent },
  { path: 'button-group', component: ButtonGroupComponent },
  { path: 'card', component: CardComponent },
  { path: 'dropdowns', component: DropdownsComponent },
  { path: 'forms', component: FormsComponent },
  { path: 'input-group', component: InputGroupComponent },
  { path: 'navs', component: NavsComponent },
  { path: 'navbar', component: NavbarComponent },
  { path: 'modal', component: ModalComponent },
  { path: 'code', component: CodeComponent },
  { path: '**', component: DefaultComponent}
];

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
    NavbarComponent,
    DefaultComponent,
    ModalComponent,
    CodeComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes, {useHash: true}),
    SmrLibModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
