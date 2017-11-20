import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CollectionRoutingModule } from './collection-routing.module';
import { CollectionComponent } from './collection.component';
import { RatingCategoryPipe } from '../pipes/rating-category.pipe';
import { RatingComponent } from '../rating/rating.component';
import { NewBookComponent } from '../new-book/new-book.component';
import { DataService } from '../services/data.service';
import { MatListModule, MatTabsModule, MatSnackBarModule, 
         MatDialogModule, MatCardModule, MatIconModule, 
         MatSlideToggleModule, MatButtonModule, MatLineModule, 
         MatInputModule, MatToolbarModule } from '@angular/material';
import { FormsModule } from '@angular/forms';
import { HttpModule }from '@angular/http';
import { BookDetailComponent } from '../book-detail/book-detail.component';
import { BookGuardService } from '../guards/book-guard.service';
import { CollectionResolver } from './collection.resolver';


@NgModule({
  imports: [
    CommonModule,
    CollectionRoutingModule,
    FormsModule,
    HttpModule,
    MatListModule,
    MatTabsModule,
    MatSnackBarModule,
    MatDialogModule,
    MatCardModule,
    MatIconModule,
    MatSlideToggleModule,
    MatButtonModule,
    MatLineModule,
    MatInputModule,
    MatToolbarModule
  ],
  entryComponents: [
      NewBookComponent
  ],
  declarations: [
    CollectionComponent,
    RatingComponent,
    BookDetailComponent,
    NewBookComponent,
    RatingCategoryPipe
  ],
  providers: [
      BookGuardService,
      DataService,
      CollectionResolver
  ]
})
export class CollectionModule { }
