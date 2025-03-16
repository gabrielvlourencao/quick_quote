import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../environments/environment';
import { Observable } from 'rxjs';
import { GenerateQuoteRequest } from './models/generate-quote-request';
import { SuggestionRequest } from './models/suggestion-request';

@Injectable({
  providedIn: 'root'
})
export class SaasUtilsService {

  constructor(private httpClient : HttpClient) { }

  generateQuote(request : GenerateQuoteRequest) : Observable<HttpResponse<Blob>> {
    const url = `${environment.api_url}quote/generate`;
    return this.httpClient.post<Blob>(url, request, { observe: 'response', responseType: 'blob' as 'json' })
  }

  sendSuggestion(request : SuggestionRequest) : Observable<any>{
    const url = `${environment.api_url}quote/suggestion`;
    return this.httpClient.post<any>(url, request);
  }
}
