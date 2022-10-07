import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Constants } from '../utils/constants/constants.class';

@Injectable()
export class RequestInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<any> {
    const newRequest: HttpRequest<any> = request.clone({
      params: request.params.set('api_key', Constants.API_KEY)
    })

    return next.handle(newRequest);
  }
}
