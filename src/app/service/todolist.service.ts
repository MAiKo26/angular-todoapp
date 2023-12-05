import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Item } from '../interface/item.interface';
import { Observable, catchError } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TodolistService {
  private url: string = 'http://localhost:8080/items';

  constructor(private http: HttpClient) {}

  getItems(): Observable<Item[]> {
    return this.http.get<Item[]>(this.url);
  }
  addItems(item: Item): Observable<any> {
    console.log('Service posting', item);

    // Make sure to return the observable and subscribe to it in the component
    return this.http.post(this.url, item);
  }
  deleteItem(item: Item): Observable<Item> {
    return this.http.delete<Item>(this.url + '/' + item.id);
  }
  updateItem(item: Item): Observable<Item> {
    return this.http.put<Item>(this.url + '/' + item.id, item);
  }
}
