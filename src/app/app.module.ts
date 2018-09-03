import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { RouterModule } from '@angular/router';
import { NgxSpinnerModule } from 'ngx-spinner';
import { FormsModule,ReactiveFormsModule} from '@angular/forms';
import {NgxPaginationModule} from 'ngx-pagination';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { OrderModule } from 'ngx-order-pipe';
import { ToastrModule } from 'ngx-toastr';



import { AppComponent } from './app.component';
import { MovieListComponent } from './movie-list/movie-list.component';
import { HttpClientModule } from '@angular/common/http';
import { SearchPipe } from './searchPipe/pipe';
import { NotApplicable } from './notApplicable/not-applicable';
import { NotFoundComponent } from './not-found/not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    MovieListComponent,
    SearchPipe,
    NotApplicable,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,ReactiveFormsModule,
    HttpClientModule,
    NgxSpinnerModule,
    BrowserAnimationsModule,
    MatInputModule,
    OrderModule,
    ToastrModule.forRoot(),
    MatAutocompleteModule,
    MatFormFieldModule,
    NgxPaginationModule,
    RouterModule.forRoot([
      {path :'home',component:MovieListComponent},
      {path:'',redirectTo:'home',pathMatch:'full'},
      {path:'**',component:NotFoundComponent}
    ])
  ],
  providers: [],
  exports:[
    SearchPipe,
    NotApplicable,
    MatInputModule,
    MatAutocompleteModule,
    MatFormFieldModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
