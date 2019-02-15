import { Component, OnInit } from '@angular/core';
import { StorageService } from './services/storage.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  layout = 'saimyr-library';
  constructor(private storage: StorageService) {}

  ngOnInit() {
    this.storage.setItem('layout', 'with-menu');
    this.storage.watchStorage().subscribe(change => {
      if (change) {
        if (this.storage.getItem('layout') != null) {
          this.layout = this.storage.getItem('layout');
        }
      }
    });
  }
}
