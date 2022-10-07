import { Component, HostListener, OnInit } from '@angular/core';
import { merge, Observable, reduce } from 'rxjs';
import { MovieApiRequestService } from 'src/app/services/movie-api-request.service';
import {MatDialog} from '@angular/material/dialog';
import { MovieDialogComponent } from '../movie-dialog/movie-dialog.component';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-uno',
  templateUrl: './uno.component.html',
  styleUrls: ['./uno.component.scss']
})
export class UnoComponent implements OnInit {
  public movies: any[] = [];
  genre!: string ;
  page: number = 1;

  constructor(private activatedRoute: ActivatedRoute, private movieApiRequest: MovieApiRequestService, public dialog: MatDialog) {
    this.activatedRoute.params.subscribe(params => {
      this.page = 1;
      this.genre = params['genre'] || null;
      this.movieApiRequest.getMoviesByGenre(this.genre, this.page).subscribe(response => {
        this.movies = response.results
      });
    });
  }

  ngOnInit(): void {
    this.page = 1;
  }

  openDialog(movie: string): void {
    this.dialog.open(MovieDialogComponent,{
      data: { movie: movie }
    });
  }

  doSomethingOnScroll(event: any){
    if(event.target.offsetHeight + event.target.scrollTop >= event.target.scrollHeight - 600){
      this.page += 1
      this.movieApiRequest.getMoviesByGenre(this.genre, this.page).subscribe(response => {
        this.movies = this.movies.concat(response.results);
      })
    }
  }
}
