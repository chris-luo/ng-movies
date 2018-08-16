import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable()
export class ApiService {
  constructor(private http: HttpClient) { }

  searchMovie(query) {
    return this.http.get<SearchResponse>(`${environment.apiEP}/search/multi`, {
      params: {
        api_key: environment.apiKey,
        query: query
      }
    });
  }

  getMovie(id: number) {
    return this.http.get<any>(`${environment.apiEP}/movie/${id}`, {
      params: {
        api_key: environment.apiKey
      }
    });
  }

  getTV(id: number) {
    return this.http.get<any>(`${environment.apiEP}/tv/${id}`, {
      params: {
        api_key: environment.apiKey
      }
    });
  }

  getPerson(id: number) {
    return this.http.get<any>(`${environment.apiEP}/person/${id}`, {
      params: {
        api_key: environment.apiKey
      }
    });
  }
}

interface SearchResponse {
  page: number;
  results: any[];
  total_pages: number;
  total_results: number;
}
