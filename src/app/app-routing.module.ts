import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {ShowBookComponent} from "./show-book/show-book.component";
import {SaveBookComponent} from "./save-book/save-book.component";
import {EditBookComponent} from "./edit-book/edit-book.component";
import {DeleteComponent} from "./delete/delete.component";

const routes: Routes = [
  {
    path:'', component: ShowBookComponent
  },
  {
    path:'create', component:SaveBookComponent
  },
  {
    path:'edit/:id', component: EditBookComponent
  },
  {
    path:'delete/:id', component:DeleteComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
