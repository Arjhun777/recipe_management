import { Component } from '@angular/core';
import { DataStoreService } from '../shared/data-store.service';
import { Response } from '@angular/http';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent {

  constructor(private dataStoreService: DataStoreService) { }

  onSaveData() {
    this.dataStoreService.storeRecipers().subscribe(
      (response: Response) => {
        console.log(response);
      }
    );
  }
}
