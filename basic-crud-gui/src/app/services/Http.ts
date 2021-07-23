import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export class Http {
  private http: HttpClient;

  get(url): Observable<Object> {
    return this.http.get(url);
  }

  post(url, body): Observable<Object> {
    return this.http.post(url, body);
  }

  put(url, body): Observable<Object> {
    return this.http.put(url, body);
  }

  delete(url): Observable<Object> {
    return this.http.delete(url);
  }
}
