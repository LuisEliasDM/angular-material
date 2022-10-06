import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MovieApiRequestService {

  constructor(private httpClient: HttpClient) { }

  getMovies(): Observable<any>{
    return this.httpClient.get("https://api.themoviedb.org/3/discover/movie?api_key=84a6dff2a455f96222eb911d3d697405&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_watch_monetization_types=flatrate")
    .pipe(
    )
  }

  getUserLikes(): number[]{
    if(localStorage.getItem("likes") == null) return [];
    return JSON.parse(localStorage.getItem("likes")??"");
  }

  addUserLike(id: number){
    let likes = this.getUserLikes();

    if(this.alreadyHaveLike(id)){
      likes = likes.filter((item) => item !== id)
    }else{
      likes.push(id)
    }

    localStorage.setItem("likes", JSON.stringify(likes))
  }

  alreadyHaveLike(id: number){
    let likes = this.getUserLikes();

    if(likes.indexOf(id) >= 0){
      return true
    }

    return false
  }

  getUserList(): number[]{
    if(localStorage.getItem("list") == null) return [];
    return JSON.parse(localStorage.getItem("list")??"");
  }

  addUserList(id: number){
    let list = this.getUserList();

    if(this.alreadyHaveList(id)){
      list = list.filter((item) => item !== id)
    }else{
      list.push(id)
    }

    localStorage.setItem("list", JSON.stringify(list))
  }

  alreadyHaveList(id: number){
    let list = this.getUserList();

    if(list.indexOf(id) >= 0){
      return true
    }

    return false
  }

}
