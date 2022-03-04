import { HttpClient, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Recommandation } from '../models/recommandation';

@Injectable({
  providedIn: 'root'
})
export class RecommandationService {

  baseURL="http://localhost:8080/recommandation";

  constructor(private httpClient:HttpClient) { }

  public findAll():Observable<any>{
    return this.httpClient.get(this.baseURL);
  }

  public findOne(id:number):Observable<any>{
    return this.httpClient.get(this.baseURL+"/"+id);
  }

  public save(file:File, recommandation:Recommandation):Observable<any>{
		const formData = new FormData();
		formData.append('titreR', recommandation.titreRecommandation);
		formData.append('descriptionR', recommandation.descriptionRecommandation);
		formData.append('typeR', recommandation.typeRecommandation);
		formData.append('paysR', recommandation.paysRecommandation);
    formData.append('prixR', recommandation.prixRecommandation.toString());
		formData.append('ratingR', recommandation.ratingRecommandation.toString());
    formData.append('fileU', file);
		const req = new HttpRequest('POST', this.baseURL, formData,
		{reportProgress:true, responseType:'text'});
		return this.httpClient.request(req);
	}

  public delete(id:number):Observable<any>{
    return this.httpClient.delete(this.baseURL+"/"+id);
  }

  public update(user:any):Observable<any>{
    var userParse=JSON.parse(user); //communication avec serveur, convertion texte vers Json
    return this.httpClient.put(this.baseURL+"/"+userParse.idRecommandation,userParse);
  }
}
