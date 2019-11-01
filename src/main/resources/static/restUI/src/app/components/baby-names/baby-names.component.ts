import { Component, OnInit } from '@angular/core';
import {FirstCryService} from 'src/app/first-cry.service';
import {FirstCryCare} from 'src/app/first-cry-care';

@Component({
  selector: 'app-baby-names',
  templateUrl: './baby-names.component.html',
  styleUrls: ['./baby-names.component.css']
})
export class BabyNamesComponent implements OnInit {

 displayedColumns: string[] = ['id', 'name','meaning','gender'];
  datasource: FirstCryCare[] = [];
  selectedHero: any;
  //isLoadingResults = true;
  constructor(private firstCryService:FirstCryService) { }

  ngOnInit() {
    //this.getAllBabyNames();   
      this.firstCryService.getAllnames().subscribe(resp=>{
        this.datasource = resp;
        //this.isLoadingResults = false;
      })
    
  }
  onSelect(hero): void {
    this.selectedHero = hero;
  }
 
}
