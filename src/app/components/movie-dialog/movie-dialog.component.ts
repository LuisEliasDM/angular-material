import { Component, ElementRef, Inject, OnInit, Renderer2, ViewChild } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MovieApiRequestService } from 'src/app/services/movie-api-request.service';

@Component({
  selector: 'app-movie-dialog',
  templateUrl: './movie-dialog.component.html',
  styleUrls: ['./movie-dialog.component.scss']
})
export class MovieDialogComponent implements OnInit {
  public listIcon: string = "add";

  @ViewChild("likeBtn", {static:true}) likeBtn!: ElementRef;

  constructor(
    public dialogRef: MatDialogRef<MovieDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: {movie: any},
    private movieApi: MovieApiRequestService,
    private renderer2: Renderer2
    ) { }

  ngOnInit(): void {
    if(this.movieApi.alreadyHaveLike(this.data.movie.id)){
      this.renderer2.addClass(this.likeBtn.nativeElement, "active-like");
    }

    if(this.movieApi.alreadyHaveList(this.data.movie.id)){
      this.listIcon = "done"
    }
  }

  cancelar() {
    this.dialogRef.close();
  }

  addLike(){
    if(this.movieApi.alreadyHaveLike(this.data.movie.id)){
      this.renderer2.removeClass(this.likeBtn.nativeElement, "active-like");
    }else{
      this.renderer2.addClass(this.likeBtn.nativeElement, "active-like");
    }
    this.movieApi.addUserLike(this.data.movie.id)
  }

  addList(){
    if(this.movieApi.alreadyHaveList(this.data.movie.id)){
      this.listIcon = "add"
    }else{
      this.listIcon = "done"
    }
    this.movieApi.addUserList(this.data.movie.id)
  }
}
