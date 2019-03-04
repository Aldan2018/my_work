import { Component, OnInit, Input } from '@angular/core';
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
  info:string;
  converter:boolean;
  @Input() indicator;

  constructor(private location: Location,
              private data: DataManagementService) { }

  ngOnInit() { this.data.getTerrotories(), this.showInfo()  }

  showInfo() {
    let c = this.data.territory[this.data.terrIndex].appartaments;
    let m = [].concat.apply([], c);
    this.info = m[this.data.appIndex].description;
    if (this.info) {
      this.converter = true;
  }
}

  getInfo():void {
    this.data.addInfoAboutAppart(5, this.sex, this.age, this.description);
  }

  goBack():void {
    this.location.back();
  }

}
