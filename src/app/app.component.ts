import { Component, OnInit } from '@angular/core';
import { StorageService } from './services/storage.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  layout = 'saimyr-library';
  constructor() { }
  private _menu: boolean;

  ngOnInit() {

  }

  changeMenu(event: any) {
    this.menu = event.menu;
  }


  public get menu(): boolean { return this._menu; }
  public set menu(value: boolean) { this._menu = value; }

}
