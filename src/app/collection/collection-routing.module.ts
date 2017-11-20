import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CollectionComponent } from './collection.component';
import { BookDetailComponent } from '../book-detail/book-detail.component';
import { BookGuardService } from '../guards/book-guard.service';
import { CollectionResolver } from './collection.resolver';

const routes: Routes = [
  {
    path: '', component: CollectionComponent, resolve: {books: CollectionResolver} // -> this is the new

  },
  {
    path: ':id',
    canActivate: [BookGuardService],
    component: BookDetailComponent
  }
];
 @NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CollectionRoutingModule { }
