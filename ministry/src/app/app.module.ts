import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { FormsModule } from '@angular/forms'; // <-- NgModel lives her

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

// import { File } from '@ionic-native/file';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { MainWindowComponent } from './main-window/main-window.component';
import { DetailComponent } from './detail/detail.component';
import { EditComponent } from './edit/edit.component';
// import { WrapperComponent } from './wrapper/wrapper.component';
import { DataManagementService } from './data-management.service';
import { DataSaveService } from './data-save.service';

@NgModule({
  declarations: [
    AppComponent,
    MainWindowComponent,
    DetailComponent,
    EditComponent
    // WrapperComponent
  ],
  entryComponents: [],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule, FormsModule],
  providers: [
    DataManagementService,
    DataSaveService,
    StatusBar,
    // File,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
