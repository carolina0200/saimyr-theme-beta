import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  private _menu: boolean;
  @Output() changeMenu = new EventEmitter();
  @Input('change') change: boolean;
  constructor() { }

  ngOnInit() {
    this.menu = true;
  }

  ngOnChanges(): void {
    console.log('entro');
    this.showMenu();
  }



  showMenu() {
    this.menu = !this.menu;
    this.changeMenu.emit({menu: this.menu});
  }

  public get menu(): boolean { return this._menu; }
  public set menu(value: boolean) {this._menu = value; }


}
