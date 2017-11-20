import { Resolve } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { Ibook } from '../ibook';
import { DataService } from '../services/data.service';
import { Injectable } from '@angular/core';

@Injectable()
export class CollectionResolver implements Resolve<Ibook[]> {
    constructor(private _dataService: DataService) {}

  /**
  * resolve() is the method we have to implement for the Resolve interface.
  * The router will call this method when the users visits the route.
  * We can return Promises, Observables or any other value here.
  * When it's a Promise or Observable, the Angular Router waits for 
  * the result and then displays the page (which is what we want).
  */
  resolve(): Observable<Ibook[]> {
    return this._dataService.getBooks();
  }
}