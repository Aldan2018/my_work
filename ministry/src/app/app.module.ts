import { NgModule }                            from '@angular/core';
import { BrowserModule }                       from '@angular/platform-browser';
import { RouteReuseStrategy }                  from '@angular/router';
import { FormsModule }                         from '@angular/forms'; // <-- NgModel lives her
import { HttpClientModule }                    from '@angular/common/http'

import { IonicModule, IonicRouteStrategy }     from '@ionic/angular';
import { SplashScreen }                        from '@ionic-native/splash-screen/ngx';
import { StatusBar }                           from '@ionic-native/status-bar/ngx';

import { AppComponent }                        from './app.component';
import { AppRoutingModule }                    from './app-routing.module';
import { MainWindowComponent }                 from './main-window/main-window.component';
import { DetailComponent }                     from './detail/detail.component';
import { EditComponent }                       from './edit/edit.component';

import { ModalAddTerrPage }                    from './modal-add-terr/modal-add-terr.page';
import { ModalAddAppartPage }                  from './modal-add-appart/modal-add-appart.page';
import { ModalSortAppartPage }                 from './modal-sort-appart/modal-sort-appart.page';
import { ModalAddInfoPage }                    from './modal-add-info/modal-add-info.page';

import { DataManagementService }               from './data-management.service';
import { DataSaveService }                     from './data-save.service';
import { DropboxService }                      from './dropbox.service';
import { DropboxComponent }                    from './dropbox/dropbox.component';

@NgModule({
  declarations: [
    AppComponent,
    MainWindowComponent,
    DetailComponent,
    EditComponent,
    ModalAddTerrPage,
    ModalAddAppartPage,
    ModalAddInfoPage,
    ModalSortAppartPage,
    DropboxComponent
  ],
  entryComponents: [ModalAddTerrPage, ModalAddAppartPage, ModalSortAppartPage, ModalAddInfoPage],
  imports: [BrowserModule, HttpClientModule, IonicModule.forRoot(), AppRoutingModule, FormsModule],
  providers: [
    DataManagementService,
    DataSaveService,
    DropboxService,
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
