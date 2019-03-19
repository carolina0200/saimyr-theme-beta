import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  constructor() { }
  private _changeIcon: boolean;
  private _menu: boolean;

  ngOnInit() {
    this.menu = true;
    this.changeIcon = false;
  }

  changeMenu(event: any) {
    this.menu = event.menu;
  }

  selectItem(event: any) {
    this.changeIcon = !this.changeIcon;
    this.menu = !event.select;
  }

  public get menu(): boolean { return this._menu; }
  public set menu(value: boolean) { this._menu = value; }

  public get changeIcon(): boolean { return this._changeIcon; }
  public set changeIcon(value: boolean) { this._changeIcon = value; }

}
