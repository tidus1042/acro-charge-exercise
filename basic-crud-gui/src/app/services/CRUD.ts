import { Http } from './Http';
import { Observable } from 'rxjs';

export class CRUD {
  http = new Http();
  basicUrl: string;

  constructor(basicUrl: string) {
    this.basicUrl = basicUrl;
  }

  getAllDocuments(): Observable<any> {
    return this.http.get(this.basicUrl);
  }

  createNewDocument(document: object): Observable<any> {
    return this.http.post(this.basicUrl, document);
  }

  updateDocument(document: object): Observable<any> {
    // @ts-ignore
    return this.http.put(`${this.basicUrl}/${document._id}`, document);
  }

  deleteDocument(documentId: string): Observable<any> {
    return this.http.delete(`${this.basicUrl}/${documentId}`);
  }
}
