import { Component, OnInit }          from '@angular/core';
import { InAppBrowser }               from '@ionic-native/in-app-browser';

@Component({
  selector: 'app-dropbox',
  templateUrl: './dropbox.component.html',
  styleUrls: ['./dropbox.component.scss']
})
export class DropboxComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  // Create the XHR object.
// createCORSRequest(method, url) {
//   var xhr = new XMLHttpRequest();
//   if ("withCredentials" in xhr) {
//    // XHR for Chrome/Firefox/Opera/Safari.
//    xhr.open(method, url, true);
//    xhr.withCredentials = true;
//    xhr.setRequestHeader('Access-Control-Allow-Origin', *);
//    xhr.setRequestHeader('Access-Control-Allow-Credentials', 'true');
//  }
//
//   return xhr;
// }
//
//
// // Make the actual CORS request.
// makeCorsRequest() {
//   // This is a sample server that supports CORS.
//   var url = 'https://www.dropbox.com/oauth2/authorize?client_id=5mbr0e5pievz4uk&response_type=code';
//
//   var xhr = this.createCORSRequest('GET', url);
//   if (!xhr) {
//     alert('CORS not supported');
//     return;
//   }
//
//
//
//   xhr.send();
// }

  goToDropbox() {
    // this.makeCorsRequest();
  //
    let url = 'https://www.dropbox.com/oauth2/authorize?client_id=5mbr0e5pievz4uk&response_type=token&redirect_uri=http://localhost';
  //
    let xhr = new XMLHttpRequest();
    xhr.open('GET', url, true);
    // xhr.withCredentials = true;
    // xhr.setRequestHeader('Content-Type', 'text / plain; charset = dropbox-cors-hack');
    // xhr.setRequestHeader('Access-Control-Allow-Credentials', 'true');
    xhr.send();
  //   fetch(url)
  //   .then(response => console.log(response))
  }

}


// { &reject_cors_preflight=true
//   method: 'POST',
//   code: '<AUTHORIZATION_CODE>',
//   grant_type: 'authorization_code',
//   redirect_uri: 'https://localhost',
//   '5mbr0e5pievz4uk': 'gqg7dgg6x7nzxh1'
// }
