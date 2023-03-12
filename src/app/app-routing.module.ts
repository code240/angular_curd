import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddComponent } from './Views/add/add.component';
import { Error404Component } from './Views/error404/error404.component';
import { FetchComponent } from './Views/fetch/fetch.component';
import { UpdateComponent } from './Views/update/update.component';
import { ViewUserComponent } from './Views/view-user/view-user.component';

const routes: Routes = [
  {
    path : '',
    pathMatch : 'full',
    redirectTo : 'Fetch'
  },
  { 
    path: 'Fetch', 
    component: FetchComponent 
  },
  { 
    path: 'Add', 
    component: AddComponent 
  },
  { 
    path: 'Update/:id', 
    component: UpdateComponent 
  },
  { 
    path: 'View/:id', 
    component: ViewUserComponent 
  },
  {
    path : '**',
    component : Error404Component
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
