import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

// tutorial dasar-1
// import { ServicesComponent } from './services/services.component';
// import { HomeComponent } from './home/home.component';

// const routes: Routes = [
//   {
//     path: 'services',
//     component: ServicesComponent,
//   },
//   {
//     path: 'home',
//     component: HomeComponent,
//   },
//   {
//     path: '',
//     redirectTo: 'home',
//     pathMatch: 'full',
//   },
// ];
const routes: Routes = [
  {
    path: 'admin',
    loadChildren: () =>
      import('./administrator/administrator.module').then(
        (mod) => mod.AdministratorModule
      ),
  },
];
@NgModule({
  imports: [CommonModule, RouterModule.forRoot(routes)],
  exports: [RouterModule],
  declarations: [],
})
export class AppRoutingModule {}
