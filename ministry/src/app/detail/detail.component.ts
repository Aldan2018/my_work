import { Component, OnInit, Input } from '@angular/core';
import { Terr } from '../territories';
import { Location } from '@angular/common';
import { Router }   from '@angular/router';
import { DataManagementService } from '../data-management.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {

  apWin:boolean;
  sort:boolean;
  terDetaiNameEdit:boolean;
  terDetaiOwnEdit:boolean;
  firstAppartNum: number;
  lastAppartNum: number;

  checked: boolean = false;
  selectOrReady: string = 'Выбрать';
  showDelButton: boolean = false;
  arrID;

  constructor(private location: Location,
              private data: DataManagementService,
              private _rout: Router) { }

  ngOnInit() {this.data.getTerrotories()}

  getAppartArray(firstAppartNum, lastAppartNum):void {
    this.data.getAppartArray(+firstAppartNum, +lastAppartNum);
  }

  folloving(indicator):void {
    this.data.appIndex = this.data.newAppartArray.findIndex(i => i.num == +indicator);
    this.data.getIndex();
    if (this.checked == true) {
      return;
    }
    this._rout.navigate(/edit);
  }

  showChecked() {
    (this.checked == false) ? (this.checked = true) : (this.checked = false);
    (this.selectOrReady == 'Выбрать') ? (this.selectOrReady = 'Готово') : (this.selectOrReady = 'Выбрать');
    if (this.showDelButton == true) {
      this.showDelButton = false;
    }
    this.arrID = [];
  }

  goBack():void {
    this.location.back();
  }


}
