import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Author } from '@models/author';
import { apiUrlNames } from '@constants/api.names';

@Injectable({
  providedIn: 'root'
})
export class AuthorsService {
  private static url = apiUrlNames.AUTHORS;

  constructor(private http: HttpClient) {}

  getResults(searchTerm = ''): Observable<Author[]> {
    return this.http.get<Author[]>(AuthorsService.url, {
      params: { textFragment: searchTerm }
    });
  }
}
