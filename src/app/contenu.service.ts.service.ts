import { contenu } from './contenu';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError,  Observable, of, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ContenuServiceTsService {

  constructor(private http: HttpClient) { }

  getContenu():Observable<any>{
    return this.http.get('http://localhost:8080/content/all')
    
  }

  

 


  private log(response:any){
    console.table(response);
  }

  private handleError(error:Error , errorValue :any){
    console.table(error);
        return of(errorValue);
  }
  

}
