import { Injectable }                            from '@angular/core';
import { HttpClient, HttpHeaders }               from '@angular/common/http'
// import { Response }                              from '@angular/http';

import { DataManagementService }                 from './data-management.service';
// import { Observable, of }                 from 'rxjs';
// import { Dropbox }                        from 'dropbox';
// import { InAppBrowser }                   from '@ionic-native/in-app-browser';
// import { Http, Headers }                  from '@angular/http';

@Injectable({
  providedIn: 'root'
})
export class DropboxService {

    constructor(private http: HttpClient,
                private data: DataManagementService) { }

  httpUpload() {

    let url = 'https://content.dropboxapi.com/2/files/upload';

    let terrUploadFile = JSON.stringify(this.data.territory);

    fetch(url, {
      method: 'POST',
      headers: {
        'Authorization': 'Bearer E1eIG-cRu8cAAAAAAAAkIFLOUg7iFdYMgRyo7gkNJUQ5CJ2jlRRu_ktxpWmu-udd',
        'Content-Type': 'application/octet-stream',
        'Dropbox-API-Arg': '{\"path\": \"/territories.json\",\"mode\": \"add\",\"autorename\": true,\"mute\": false,\"strict_conflict\": false}'
      },
      body: terrUploadFile
    })
      .then(response => alert('Data saved'))

  };

  httpDownload() {

    let url = 'https://content.dropboxapi.com/2/files/download';

    fetch(url, {
      method: 'POST',
      headers: {
        'Authorization': 'Bearer E1eIG-cRu8cAAAAAAAAkIFLOUg7iFdYMgRyo7gkNJUQ5CJ2jlRRu_ktxpWmu-udd',
        'Dropbox-API-Arg': '{\"path\": \"/territories.json\"}'
      }
    })
      .then(response => response.json())
      .then(data => console.log(data))

  };

}
