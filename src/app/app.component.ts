import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MovieDialogComponent } from './components/movie-dialog/movie-dialog.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular-material';
  showFiller = false;

  constructor(public dialog: MatDialog) {
  }

  openDialog(): void {
    this.dialog.open(MovieDialogComponent);
  }
}
