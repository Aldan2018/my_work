import { Component, OnInit, Input } from '@angular/core';
import { Router }                   from '@angular/router';
import { StatusBar }                from '@ionic-native/status-bar/ngx';
import { Terr }                     from '../territories';
import { DataManagementService }    from '../data-management.service';
import * as $                       from 'jquery';


@Component({
  selector: 'app-main-window',
  templateUrl: './main-window.component.html',
  styleUrls: ['./main-window.component.scss']
})
export class MainWindowComponent implements OnInit {

  arrID;
  checked: boolean = false;
  converter: boolean;
  dropConv: boolean = false;
  nameInTmpl: string;                            //Name of the territory that the user enters
  selectOrReady:boolean;
  showDelButton: boolean = false;
  sizeBtn:string = 'small';
  title: string = 'Групповые участки собрания';

  constructor(private data:DataManagementService,
              private _rout: Router,
              private statusBar: StatusBar) {  }

  ngOnInit() { this.data.getTerrotories();
                // let status bar overlay webview
                this.statusBar.overlaysWebView(true);

                // set status bar to white
                this.statusBar.backgroundColorByHexString('#ffffff'); }



  addAdress(nameInTmpl):void {
        // this.data.newTerrName = this.nameInTmpl;
        this.data.createNewTerr(nameInTmpl);
      }

  showChecked() {
    (this.checked == false) ? (this.checked = true) : (this.checked = false);
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

  terrArrayCheck() {
    if (this.data.territory.length == 0) {
      this.showDelButton = false;
    }
  }

}
