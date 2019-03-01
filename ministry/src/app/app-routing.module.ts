import { NgModule }               from '@angular/core';
import { RouterModule, Routes }   from '@angular/router';
import { DetailComponent }        from './detail/detail.component';
import { EditComponent }          from './edit/edit.component';
import { MainWindowComponent }    from './main-window/main-window.component';

const routes: Routes = [
  { path: 'detail/:terr.name', component: DetailComponent },
  { path: 'edit', component: EditComponent },
  { path: 'main', component: MainWindowComponent },
  { path: '', redirectTo: '/main', pathMatch: 'full' }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
