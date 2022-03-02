import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CommentaireGuide } from 'app/models/commentaire-guide';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommentaireGuideService {

  baseURL="http://localhost:8080/commentaire_guide";

  constructor(private commentaireGuide:CommentaireGuide,private httpClient:HttpClient) { }

  public findAll():Observable<any>{
    return this.httpClient.get(this.baseURL);
  }

  public findOne(id:number):Observable<any>{
    return this.httpClient.get(this.baseURL+"/"+id);
  }

  public save(obj:CommentaireGuide):Observable<any>{
    return this.httpClient.post(this.baseURL,obj);
  }

  public delete(id:number):Observable<any>{
    return this.httpClient.delete(this.baseURL+"/"+id);
  }

  public update(id:number,obj:CommentaireGuide){
    return this.httpClient.put(this.baseURL+"/"+id,obj);
  }

}
