import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { NgxSpinnerService } from 'ngx-spinner';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import {map, startWith, filter} from 'rxjs/operators';
import { OrderPipe } from 'ngx-order-pipe';
import { ToastrService } from 'ngx-toastr';



@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css']
})
export class MovieListComponent implements OnInit {
  public moviesList =[];
  public originalList =[];
  public searchTerm;
  public modalMovie;
  myControl = new FormControl();
  filteredOptions: Observable<string[]>;
  p: number = 1;
  public order = 'title_year';
  public reverse = true;

  constructor( private httpService : HttpService, private spinner :NgxSpinnerService, 
    private orderPipe : OrderPipe, private toastr: ToastrService) { }

  ngOnInit() {
    this.spinner.show();
    this.httpService.getMovies().subscribe(
      (data)=>{
        this.spinner.hide();
        console.log(data);
        this.moviesList= this.moviesList.concat(data) ;
        this.moviesList = this.orderPipe.transform(this.moviesList, 'title_year');
        this.originalList = this.moviesList;
      }
    );

    this.filteredOptions = this.myControl.valueChanges
      .pipe(
        startWith(''),
        map(value => this._filter(value))
      );
  }


  public reachHome = () => {
    this.moviesList = this.originalList;
  }

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this.moviesList.filter(movie => (movie.movie_title.toLowerCase().includes(filterValue)));
  }

  public modalClick =(movie) =>{
    this.modalMovie = movie;

  }

  public reverseSort =() =>{
    this.reverse = !this.reverse;
  }
  public countryFilter =(filterCountry)=>{
    this.toastr.info(`${filterCountry} filter applied!`)
    this.moviesList =  this.moviesList.filter(movie => (movie.country.includes(filterCountry)));

  }

  public languageFilter =(filterLanguage)=>{
    this.toastr.info(`${filterLanguage} filter applied!`)
    this.moviesList =  this.moviesList.filter(movie => (movie.language.includes(filterLanguage)));

  }

}
