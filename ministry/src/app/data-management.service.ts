import { Component, OnInit, Input } from '@angular/core';
import { Injectable } from '@angular/core';
import * as _ from "lodash";
import { Terr, Appart, Indexes } from './territories';
import { TerritoriesCongService }   from './territories-cong.service';
// import { WrapperComponent }   from './wrapper/wrapper.component';
import { DataSaveService } from './data-save.service';

@Injectable({
  providedIn: 'root'
})

export class DataManagementService {

  territory;
  terrIndex:number;
  appIndex:number;
  newTerr:Terr;
  index:Indexes;
  dataBase;

  newAppartArray:Appart[];

  constructor(private terCongServ: TerritoriesCongService,
              private dataSave: DataSaveService) { }

// territory

getIndex():void {
  this.index = new Indexes;
  this.index.terrIndex = +this.terrIndex;
  this.index.appIndex = +this.appIndex;
  this.dataSave.createAppJSON(this.index);
}

  getTerrotories():void {
    this.dataBase = this.terCongServ.getTerrotories();
    this.territory = this.dataBase.BASETERR;
    this.terrIndex = this.dataBase.BASEINDEX.terrIndex;
    this.appIndex = this.dataBase.BASEINDEX.appIndex;
    console.log('this.territory - ', this.territory, 'this.terrIndex - ', this.terrIndex, 'this.appIndex - ', this.appIndex)

  // this.terCongServ.getTerrotories()
  //     .subscribe(territory => this.territory = territory);
    }

  createNewTerr(newTerrName):void {
    let counter:number = 0;
    if (this.territory.length !== 0) {
      for (let i=0; i<this.territory.length; i++) {
        if (this.territory[i].name === newTerrName) {
          counter++
        }
      }
      if (counter == 0) {
        this.newTerr = new Terr(newTerrName, 'не назначен', 0);
        this.pushNewTerr();
      } else {
        alert('Такой участок уже есть');
      }
    } else {
      this.newTerr = new Terr(newTerrName, 'не назначен', 0);
      this.pushNewTerr();
    }
  }

  pushNewTerr():void {
      this.territory.push(this.newTerr);
      this.dataSave.createJSON(this.territory);
    }

// appartaments

getAppartArray(firstAppartNum, lastAppartNum):void {

  let numOfAppart = lastAppartNum - firstAppartNum + 1;

  if (!this.territory[this.terrIndex].appartaments) {
    this.newAppartArray = [];

  for (let i=firstAppartNum; i<=lastAppartNum; i++) {
    this.newAppartArray.push(new Appart(i));
  }
    } else {
      for (let i=firstAppartNum; i<=lastAppartNum; i++) {
        this.newAppartArray.push(new Appart(i));
        this.newAppartArray = _.sortBy(this.newAppartArray, 'num');
    }
  }
  this.newAppartArray.reverse();
  this.sortByFloor();

}

sortByFloor():void {
  let porch = [];
  let floorCapacity = 4;
  for (let i=0; i<this.newAppartArray.length; i = i + floorCapacity) {
    let floor = [];
    while (floor.length<floorCapacity) {
      let appartOnFloor = this.newAppartArray[i+floor.length];
        if (!appartOnFloor) {
          break;
        }
      floor.push(appartOnFloor);
    }
    floor.reverse();
    porch.push(floor);
  }
  this.territory[this.terrIndex].appartaments = porch;
  this.dataSave.createJSON(this.territory);
}

resorting(floorCapacity) {
  let porch = [];
  let merged = [].concat.apply([], this.territory[this.terrIndex].appartaments);
  merged = _.sortBy(merged, 'num');
  merged.reverse();
  for (var i:number = 0; i<merged.length; i = i + floorCapacity) {
    let floor = [];
    while (floor.length<floorCapacity) {
      let appartOnFloor = merged[i + floor.length];
        if (!appartOnFloor) {
          break;
        }
      floor.push(appartOnFloor);
    }
    floor = _.sortBy(floor, 'num');
    porch.push(floor);
  }
  this.territory[this.terrIndex].appartaments = porch;
  this.dataSave.createJSON(this.territory);
}

addInfoAboutAppart(sex, age, description):void {
  this.newAppartArray[this.appIndex].sex = sex;
  this.newAppartArray[this.appIndex].age = age;
  this.newAppartArray[this.appIndex].description = description;
  this.dataSave.createJSON(this.territory);
}

deleteItem(arrID) {
  arrID.sort(function(a, b) {return b-a});
  for (let i = 0; i<arrID.length; i++) {
    this.territory.splice(arrID[i], 1);
  }
  this.dataSave.createJSON(this.territory);
}

deleteAppart() {
  
}

}
