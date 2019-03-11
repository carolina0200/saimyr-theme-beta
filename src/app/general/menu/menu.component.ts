import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  private _items: any;
  constructor() { }
  @Input('menu') menu: any;

  ngOnInit() {
    this.items = [
      {name: 'Alerts', path: 'alerts', select: false},
      {name: 'Badge', path: 'badge', select: false},
      {name: 'Breadcrumb', path: 'breadcrumb', select: false},
      {name: 'Buttons', path: 'buttons', select: false},
      {name: 'Button group', path: 'button-group', select: false},
      {name: 'Card', path: 'card', select: false},
      {name: 'Carousel', path: 'carousel', select: false},
      {name: 'Collapse', path: 'collapse', select: false},
      {name: 'Dropdowns', path: 'dropdowns', select: false},
      {name: 'Forms', path: 'forms', select: false},
      {name: 'Input group', path: 'input-group', select: false},
      {name: 'Jumbotron', path: 'jumbotron', select: false},
      {name: 'List group', path: 'list-group', select: false},
      {name: 'Media object', path: 'media-object', select: false},
      {name: 'Modal', path: 'modal', select: false},
      {name: 'Navs', path: 'navs', select: false},
      {name: 'Navbar', path: 'navbar', select: false},
      {name: 'Pagination', path: 'pagination', select: false},
      {name: 'Popovers', path: 'popovers', select: false},
      {name: 'Progress', path: 'progress', select: false},
      {name: 'Scrollspy', path: 'scrollspy', select: false},
      {name: 'Spinners', path: 'spinners', select: false},
      {name: 'Toasts', path: 'toasts', select: false},
      {name: 'Tooltips', path: 'tooltips', select: false},
    ];
  }

  public goItem(item: any) {
    this.items.forEach(i => {
      i.select = false;
    });
    item.select = true;
  }

  public get items(): any { return this._items; }
  public set items(value: any) { this._items = value; }


}
