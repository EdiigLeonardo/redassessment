import { Component, OnInit } from '@angular/core';
import { MainService } from './services/main.service';
import {girlImages} from 'src/app/services/mockData';
import {data} from 'src/app/services/mockData';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'Reditus | Edig Leonardo';
  mockImages: any[] = [];
  girlImages = girlImages;
  isModalOpen = true;

  constructor(public mainService: MainService){
  }
  
  ngOnInit() {
    this.mockImages = <any>this.mainService.getDataFromLocalStorage('storedImages');
    console.log(this.mockImages);
    if(this.mockImages.length === 0){
      this.mainService.updateLocalStorage('storedImages', girlImages)
    }
  }
  
}
