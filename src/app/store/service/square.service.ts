import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Board } from '../model/board.model';

@Injectable({
    providedIn: 'root'
  })
  export class SquareStoreService {
    constructor(private http: HttpClient) {}
    configUrl = 'http://localhost:8080/board';

    getSquare(difficulty:string): Observable<Board>{
      return this.http.get<Board>(this.configUrl+'?difficulty='+difficulty);
    }

    validateSquare(board: Board): Observable<any>{
      return this.http.post(this.configUrl+'/validate', board);
    }
  }
