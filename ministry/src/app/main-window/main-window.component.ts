import { Component, OnInit, Input, ViewChild }    from '@angular/core';
import { Router }                                 from '@angular/router';
import { ModalController }                        from '@ionic/angular';
import { Terr }                                   from '../territories';

import { DataManagementService }                  from '../data-management.service';
import { DropboxService }                         from '../dropbox.service';

import { ModalAddTerrPage }                       from '../modal-add-terr/modal-add-terr.page';

import * as $                                     from 'jquery';


@Component({
  selector: 'app-main-window',
  templateUrl: './main-window.component.html',
  styleUrls: ['./main-window.component.scss']
})
export class MainWindowComponent implements OnInit {

  dropConv: boolean = false;                         //переменная для скрытия/показа кнопок сортировки

  title: string = 'Групповые участки собрания';

  // selectOrReady:boolean;                          //эти переменные используются при наличии удаления с "чекбоксом"
  // showDelButton: boolean = false;
  // checked: boolean = false;
  // arrID;

  @ViewChild('slidingList') slidingList;            //обходной путь, чтобы повторное удаление происходило без перезагрузки
                                                    // (https://github.com/ionic-team/ionic/issues/15486#issuecomment-420025772)


  constructor(private data:DataManagementService,
              private _rout: Router,
              public modalController: ModalController,
              public dbxServ: DropboxService) {  }

  ngOnInit() { this.data.getTerrotories(); }

  folloving(indicator):void {
    // получение индекса выбранного элемента из массива участков
    this.data.terrIndex = indicator;
    this.data.getIndex()

    // переход по ссылке
    // if (this.checked == true) {                 //этот блок нужен, если есть "чекбокс"
    //   return;
    // }
    this._rout.navigate(['/detail/{{terr.name}}']);
  }

  goToDropbox() {
    this._rout.navigate(['dropbox']);
  }

  async delete() {
    await this.slidingList.closeSlidingItems();
  }

  async presentModal() {
    const modal = await this.modalController.create({component: ModalAddTerrPage,
                                                      cssClass: 'modalAddTerr'});
    return await modal.present();
  }


  // эти функции нужны, если есть удаление участков с помощью "чекбокса"
// showChecked() {
  //   (this.checked == false) ? (this.checked = true) : (this.checked = false);
  //   if (this.showDelButton == true) {
    //     this.showDelButton = false;
    //   }
    //   this.arrID = [];
    // }
  // getDelIndex(id) {
  //   let verificationIndex = this.arrID.indexOf(id);
  //   if (verificationIndex !== -1) {
  //     this.arrID.splice(verificationIndex, 1)
  //   } else {
  //     this.arrID.push(id);
  //   };
  //   if (this.arrID.length > 0) {
  //     this.showDelButton = true
  //   }  else {
  //     this.showDelButton = false
  //   }
  // }
  // terrArrayCheck() {
  //   if (this.data.territory.length == 0) {
  //     this.showDelButton = false;
  //   }
  // }

}
