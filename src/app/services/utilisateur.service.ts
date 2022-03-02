import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UtilisateurService {
  private baseURL="http://localhost:8080/users";
  // injection de la dépendance qui nous permet d'utiliser les verbes http :GET,PUT,DELETE et POST
  constructor(private httpClient:HttpClient) { } 
  public findAll() : Observable<any>{
    return this.httpClient.get(this.baseURL);  // http://localhost:9090/users
  }
  public delete(id:number):Observable<any>{
    return this.httpClient.delete(this.baseURL+"/"+id); // http://localhost:9090/users/5
  }
  public save(user:any):Observable<any>{
    return this.httpClient.post(this.baseURL,user);
  }
  
  public findOne(id:number):Observable<any>{
    return this.httpClient.get(this.baseURL+"/"+id);
  }

  public update(user:any):Observable<any>{
    var userParse=JSON.parse(user); //communication avec serveur, convertion texte vers Json
    return this.httpClient.put(this.baseURL+"/"+userParse.idUtilisateur,userParse);
  }
}
