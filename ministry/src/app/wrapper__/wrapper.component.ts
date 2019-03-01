import { Component, OnInit, Input }        from '@angular/core';
import { Terr }                     from '../territories';
import { DataManagementService } from '../data-management.service';
import * as $ from 'jquery';

import { Router }   from '@angular/router';

@Component({
  selector: 'app-wrapper',
  templateUrl: './wrapper.component.html',
  styleUrls: ['./wrapper.component.scss']
})
export class WrapperComponent implements OnInit {

  @Input() checked;

  selectedTerr:Terr;
  index:number;
  press:any;

  constructor(private data: DataManagementService,
              private _rout: Router) { }

  ngOnInit() {
    this.data.getTerrotories();
  }

  onSelectTerr(terr:Terr): void {
    this.selectedTerr = terr;
  }

  folloving(indicator):void {
    // получение индекса выбранного элемента из массива участков
    this.data.terrIndex = this.data.territory.findIndex(i => i.name == indicator);
    this.data.getIndex()
    // переход по ссылке
    if (this.checked == true) {
      return;
    }
    this._rout.navigate(['/detail/{{terr.name}}']);
  }

  getDelIndex(indicator) {
    let s = this.data.territory.findIndex(i => i.name == indicator);
    console.log(indicator);
  }
}
