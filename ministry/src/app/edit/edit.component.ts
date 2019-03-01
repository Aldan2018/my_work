import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { DataManagementService } from '../data-management.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditComponent implements OnInit {

  description:string;
  sex:string;
  age:number;

  constructor(private location: Location,
              private data: DataManagementService) { }

  ngOnInit() { this.data.getTerrotories()
  }

  getInfo():void {
    this.data.addInfoAboutAppart(this.sex, this.age, this.description);
  }

  goBack():void {
    this.location.back();
  }

}
