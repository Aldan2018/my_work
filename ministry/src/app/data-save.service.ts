import { Injectable } from '@angular/core';
// import { File } from '@ionic-native/file';

@Injectable({
  providedIn: 'root'
})
export class DataSaveService {

  constructor(/*private file: File*/) { }

  createJSON(territory):void {
    let terrJSON = JSON.stringify(territory);
    this.saveInLocalStorage(terrJSON, false);
    // this.saveOnDevice(territory);
  }

  createAppJSON(index):void {
    let indexJSON = JSON.stringify(index);
    this.saveInLocalStorage(false, indexJSON);
  }

  saveInLocalStorage(terrJSON, indexJSON):void {
    if (indexJSON === false) {
      localStorage.setItem('data', terrJSON);
    } else {
      localStorage.setItem('index', indexJSON);
    }
  }

  // saveOnDevice(territory) {
  //   this.file.writeFile(this.file.dataDirectory, 'terr.json', JSON.stringify(territory), {replace: true}).then(_ => console.log('Directory exists')).catch(err => console.log('Directory doesn\'t exist'));
  // }

}
