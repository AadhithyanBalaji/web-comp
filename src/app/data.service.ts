import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {
apiKey = '9ad9c8c7f25344acb8f52b2c5e9b3adb';
  constructor(private httpClient: HttpClient) { }
  get(){
    return this.httpClient.get(`https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=${this.apiKey}`);
  }
}
