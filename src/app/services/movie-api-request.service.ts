import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Endpoints } from '../utils/constants/endpoints.class';

@Injectable({
  providedIn: 'root'
})
export class MovieApiRequestService {

  constructor(private httpClient: HttpClient) { }

  getMovies(): Observable<any>{
    return this.httpClient.get(Endpoints.GENERAL_URL + Endpoints.TRENDING_URL)
  }

  getGenres(): Observable<any>{
    return this.httpClient.get(Endpoints.GENERAL_URL + Endpoints.GENRE_URL)
  }

  getMoviesByGenre(genre: string, page: number): Observable<any>{
    return this.httpClient.get(Endpoints.GENERAL_URL + Endpoints.getMoviesByGenre(genre, page))
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
