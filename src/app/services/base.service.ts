import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class BaseService {
  public baseUrl = 'https://api.themoviedb.org/3';
  private apiKey =
    'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1Y2MwZjA5MGI1NTc2MWIxMmU2ZGViZmNiYTE5NGUzYyIsInN1YiI6IjY1M2JlYjQ5YmMyY2IzMDEyYzMwYTYzYyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.k7xUd3UEeRVHZdDi0M5hrnx5nXvEtSX_MYCEIggmmGs';

  constructor(public http: HttpClient) {}

  getReq(url: any) {
    const reqHeader = new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: `Bearer ${this.apiKey}`,
    });

    return this.http.get<any>(this.baseUrlUpdate(url), {
      headers: reqHeader,
    });
  }

  baseUrlUpdate(url: string): string {
    return url.startsWith('/') ? this.baseUrl + url : url;
  }
}
