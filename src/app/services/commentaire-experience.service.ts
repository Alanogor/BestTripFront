import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommentaireExperienceService {
  baseURL="http://localhost:8080/commentaire_experience";

  constructor(private httpClient:HttpClient) { }

  public findAll():Observable<any>{
    return this.httpClient.get(this.baseURL)
  }

  public findOne(id:number):Observable<any>{
    return this.httpClient.get(this.baseURL+"/"+id);
  }

  public delete(id:number):Observable<any>{
    return this.httpClient.delete(this.baseURL+"/"+id);
  }

  public update(id:number,obj:any):Observable<any>{
    return this.httpClient.put(this.baseURL+"/"+id,obj);
  }

  public save(obj:any):Observable<any>{
    return this.httpClient.post(this.baseURL,obj)
  }
}
