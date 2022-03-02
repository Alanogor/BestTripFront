import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UtilisateurService {
  private baseURL="http://localhost:8080/users"

  //Linjection de la dependance nous permet d'utiliser les verbe http (GET, PUT, DELETE, POST)
  constructor(private httpClient:HttpClient) { 
  }

  public findAll():Observable<any>{
    return this.httpClient.get(this.baseURL); // http://localhost:8080/users
  }

  public deleteUser(id:number):Observable<any>{
    return this.httpClient.delete(this.baseURL+"/"+id) //http://localhost:8080/users/5 (par exemple)
  }

  public saveUser(user:any):Observable<any>{
    return this.httpClient.post(this.baseURL,user);
  }
}
