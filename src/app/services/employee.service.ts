import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Employee } from '../models/employees';
import { Observable } from 'rxjs';

interface ListHttpParams {
  search;
  sort: { column, sort};
  pagination: {
    page: number;
    perPage: number;
  };
}

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  private baseUrl = 'http://localhost:3000/employees';

  constructor(private http: HttpClient) { }

  list({search, sort, pagination}: ListHttpParams): Observable<Employee[]> {

    let filterObject = {
      _sort: sort.column,
      _order: sort.sort,
      _page: pagination.page + '',
      _limit: pagination.perPage + ''
    };

    if ( search !== '') {
      filterObject = Object.assign({}, filterObject, { name: search});
    }

    const params = new HttpParams({
      fromObject: filterObject
    });

    return this.http.get<Employee[]>(this.baseUrl, {params});
  }

  getById(id: number): Observable<Employee> {
    return this.http.get<Employee>(`${this.baseUrl}/${id}`);
  }

  create(employee: Employee): Observable<Employee> {
    return this.http.post<Employee>(this.baseUrl, employee);
  }

  edit(employee: Employee): Observable<Employee> {
    return this.http.put<Employee>(`${this.baseUrl}/${employee.id}`, employee);
  }

  delete(id: number): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/${id}`);
  }

}


