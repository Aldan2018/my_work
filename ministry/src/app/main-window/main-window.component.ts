import { Component, OnInit, Input } from '@angular/core';
import { Router }   from '@angular/router';
import { Terr } from '../territories';
import { DataManagementService } from '../data-management.service';


@Component({
  selector: 'app-main-window',
  templateUrl: './main-window.component.html',
  styleUrls: ['./main-window.component.scss']
})
export class MainWindowComponent implements OnInit {

  title: string = 'Групповые участки собрания';
  converter: boolean;
  nameInTmpl: string;                            //Name of the territory that the user enters

  checked: boolean = false;
  selectOrReady: string = 'Выбрать';

  showDelButton: boolean = false;
  arrID;

  constructor(private data:DataManagementService,
              private _rout: Router) {  }

  ngOnInit() { this.data.getTerrotories(); }


  addAdress(nameInTmpl):void {
        // this.data.newTerrName = this.nameInTmpl;
        this.data.createNewTerr(nameInTmpl);
      }

  showChecked() {
    (this.checked == false) ? (this.checked = true) : (this.checked = false);
    (this.selectOrReady == 'Выбрать') ? (this.selectOrReady = 'Готово') : (this.selectOrReady = 'Выбрать');
    if (this.showDelButton == true) {
      this.showDelButton = false;
    }
    this.arrID = [];
  }

  folloving(indicator):void {
    // получение индекса выбранного элемента из массива участков
    this.data.terrIndex = indicator;
    this.data.getIndex()
    // переход по ссылке
    if (this.checked == true) {
      return;
    }
    this._rout.navigate(['/detail/{{terr.name}}']);
  }

  getDelIndex(id) {
    let verificationIndex = this.arrID.indexOf(id);
    if (verificationIndex !== -1) {
      this.arrID.splice(verificationIndex, 1)
    } else {
      this.arrID.push(id);
    };
    if (this.arrID.length > 0) {
      this.showDelButton = true
    }  else {
      this.showDelButton = false
    }
  }

}
