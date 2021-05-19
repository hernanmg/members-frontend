import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TranslationModule } from './modules/translation/translate.module';

export const routes: Routes = [
  //****** TODO: Here is the routing of the application ******
 
  {
    path:'',
    redirectTo:'translate',
    pathMatch: 'full'
  },
  {
    path: '',
    children: [
      { path: 'translate', loadChildren: () => TranslationModule },
    ]
  }
  
];
@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
