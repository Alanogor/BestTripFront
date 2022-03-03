import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CommentaireRecommandation } from '../models/commentaire-recommandation';

@Injectable({
  providedIn: 'root'
})
export class CommentaireRecommandationService {

 
  baseURL="http://localhost:8080/commentaire_recommandation";

  constructor(private httpClient:HttpClient) { }

  public findAll():Observable<any>{
    return this.httpClient.get(this.baseURL);
  }

  public findOne(id:number):Observable<any>{
    return this.httpClient.get(this.baseURL+"/"+id);
  }

  public save(obj:CommentaireRecommandation):Observable<any>{
    return this.httpClient.post(this.baseURL,obj);
  }

  public delete(id:number):Observable<any>{
    return this.httpClient.delete(this.baseURL+"/"+id);
  }

  public update(id:number,obj:CommentaireRecommandation){
    return this.httpClient.put(this.baseURL+"/"+id,obj);
  }
}
