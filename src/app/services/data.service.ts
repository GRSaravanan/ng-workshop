import { Injectable } from '@angular/core';
import { Ibook } from '../ibook';
import { Http,Response  } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class DataService {

  _booksUrl:string = 'http://waelsbookservice.azurewebsites.net/books';

  constructor(private _http: Http) { }
  
  
  private handleError(error: any) {
    let errMsg = (error.message) ? error.message : error.status ?   
    `${error.status} - ${error.statusText}` : 'Server error';
    console.error(errMsg);
    return Observable.throw(errMsg);
  }

  getBooks(): Observable<Ibook[]> {
    return this._http.get(this._booksUrl+"/GetBooks")
      .map((response: Response) => {
        let data: Ibook[] = <Ibook[]>response.json();
        return data;
      })
      .catch(this.handleError);
  }

  getBook(id: number): Observable<Ibook> {
    return this.getBooks()
      .map((books: Ibook[]) => books.find(b => b.id === id))
      //.do(data => console.log( JSON.stringify(data)))
      .catch(this.handleError);
  }

  
  getPreviousBookId(id: number): Observable<number> {
    return this.getBooks()
    .map((books: Ibook[]) => {
      return books[Math.max(0, books.findIndex(b => b.id === id) - 1)].id;
    })
    .catch(this.handleError);
  }

  getNextBookId(id: number): Observable<number> {
    return this.getBooks()
    .map((books: Ibook[]) => {
      return books[Math.min(books.length - 1, books.findIndex(b => b.id ===  
      id) + 1)].id;
    })
    .catch(this.handleError);
  }
            
  updateBook(book: Ibook): Observable<void> {
    return this._http.put(this._booksUrl+"/modifybook", book)
    .catch(this.handleError);
  }
  
  deleteBook(id: number): Observable<void> {
    return this._http.delete(`${this._booksUrl+"/deletebook"}/${id}`)
      .catch(this.handleError);
  }

  addBook(book: Ibook): Observable<void> {
    return this._http.post(this._booksUrl+"/addbook", book)
      .catch(this.handleError);
  }

  getNextId(): Observable<number> {
    return this._http.get(this._booksUrl+"/GetNextId")
      .map((response: Response) => {
        let nextId: number = <number>response.json();
        return nextId;
      })
      .catch(this.handleError);
  }

  canActivate(id): Observable<boolean> {
    return this._http.get(`${this._booksUrl+"/canactivate"}/${id}`)
      .map((response: Response) => {
        let canactivate: boolean = <boolean>response.json();
        return canactivate;
      })
      .catch(this.handleError);
  }


}
