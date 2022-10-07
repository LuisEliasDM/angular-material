import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DosComponent } from './components/dos/dos.component';
import { TresComponent } from './components/tres/tres.component';
import { UnoComponent } from './components/uno/uno.component';

const routes: Routes = [
  {
    path: "uno",
    component: UnoComponent,
  },
  {
    path: "uno/:id",
    component: UnoComponent,
  },
  {
    path: "**",
    redirectTo: "tres",
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
