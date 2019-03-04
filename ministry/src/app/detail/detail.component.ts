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
  // indicator:number;

  constructor(private location: Location,
              private data: DataManagementService,
              private _rout: Router) { }

  ngOnInit() {this.data.getTerrotories()}

  getAppartArray(firstAppartNum, lastAppartNum):void {
    this.data.getAppartArray(+firstAppartNum, +lastAppartNum);
  }

//переход к описанию квартиры
  folloving(indicator):void {
    // this.indicator = +indicator;
    //получение индекса квартиры
    let merged = [].concat.apply([], this.data.territory[this.data.terrIndex].appartaments);
    this.data.appIndex = merged.findIndex(i => i.num == indicator);
    this.data.getIndex();
  //проверка, включен ли чекбокс
    if (this.checked == true) {
      return;
    }
    this._rout.navigate(['/edit']);
  }

// Переключение названий кнопок и активация/деактивация кнопки "Удалить"
  showChecked() {
    (this.checked == false) ? (this.checked = true) : (this.checked = false);
    (this.selectOrReady == 'Выбрать') ? (this.selectOrReady = 'Готово') : (this.selectOrReady = 'Выбрать');
    if (this.showDelButton == true) {
      this.showDelButton = false;
    }
    this.arrID = [];
  }

  getDelIndex(id) {
    let merged = [].concat.apply([], this.data.territory[this.data.terrIndex].appartaments); //объединение квартир по этажам в один массив
    let indexApp = merged.findIndex(i => i.num == +id); //получение индекса квартыры в общем массиве квартир подъезда
//проверка, есть ли уже эта квартира среди выбранных
    let verificationIndex = this.arrID.indexOf(indexApp);
    if (verificationIndex !== -1) {
      this.arrID.splice(verificationIndex, 1)
    } else {
      this.arrID.push(indexApp);
    };
  // включение/выключение кнопки "Удалить"
    if (this.arrID.length > 0) {
      this.showDelButton = true
    }  else {
      this.showDelButton = false
    }
  }

  goBack():void {
    this.location.back();
  }


}
