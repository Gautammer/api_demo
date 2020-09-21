import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  public apiKey:any='YOUR_API_KEY';
  constructor(public http:HttpClient) { }


  getNews(topic){
    return this.http.get('http://newsapi.org/v2/everything?q='+topic+'&from=2020-08-21&sortBy=publishedAt&apiKey='+this.apiKey);
  }
}
