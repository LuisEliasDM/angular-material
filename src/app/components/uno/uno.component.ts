import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { MovieApiRequestService } from 'src/app/services/movie-api-request.service';
import {MatDialog} from '@angular/material/dialog';
import { MovieDialogComponent } from '../movie-dialog/movie-dialog.component';

@Component({
  selector: 'app-uno',
  templateUrl: './uno.component.html',
  styleUrls: ['./uno.component.scss']
})
export class UnoComponent implements OnInit {
  public movies$!: Observable<any>

  constructor(private movieApiRequest: MovieApiRequestService, public dialog: MatDialog) {
    this.movies$ = this.movieApiRequest.getMovies();
  }

  ngOnInit(): void {

  }

  openDialog(movie: string): void {
    this.dialog.open(MovieDialogComponent,{
      data: { movie: movie }
    });
  }

}
