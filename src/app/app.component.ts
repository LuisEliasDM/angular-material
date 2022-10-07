import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Observable } from 'rxjs';
import { MovieDialogComponent } from './components/movie-dialog/movie-dialog.component';
import { MovieApiRequestService } from './services/movie-api-request.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular-material';
  showFiller = false;
  genres$: Observable<any>;

  constructor(public dialog: MatDialog, private movieApiRequest: MovieApiRequestService) {
    this.genres$ = this.movieApiRequest.getGenres();
  }

  openDialog(): void {
    this.dialog.open(MovieDialogComponent);
  }
}
