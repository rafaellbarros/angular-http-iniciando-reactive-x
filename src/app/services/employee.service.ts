import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpResponse, HttpErrorResponse } from '@angular/common/http';
import { Employee } from '../models/employees';
import { Observable, throwError } from 'rxjs';
import { NotifyMessageService } from './notify-message.service';
import { catchError } from 'rxjs/operators';

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

  constructor(
    private http: HttpClient,
    private notifyMessage: NotifyMessageService) { }

  list({search, sort, pagination}: ListHttpParams): Observable<HttpResponse<Employee[]>> {

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

    return this.http.get<Employee[]>(this.baseUrl, {params, observe: 'response'})
                    .pipe(
                      catchError(error => this.handleError(error))
                    );
  }

  getById(id: number): Observable<Employee> {
    return this.http.get<Employee>(`${this.baseUrl}/${id}`)
              .pipe(
                catchError(error => this.handleError(error))
              );
  }

  create(employee: Employee): Observable<Employee> {
    return this.http.post<Employee>(this.baseUrl, employee)
              .pipe(
                catchError(error => this.handleError(error))
              );
  }

  edit(employee: Employee): Observable<Employee> {
    return this.http.put<Employee>(`${this.baseUrl}/${employee.id}`, employee)
              .pipe(
                catchError(error => this.handleError(error))
              );
  }

  delete(id: number): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/${id}`)
              .pipe(
                catchError(error => this.handleError(error))
              );
  }

  private handleError(error: HttpErrorResponse) {
    console.error('error => ', error);
    let errorMessage = '';

    if (error.error instanceof ErrorEvent) {
      // client-side error
      errorMessage = `Error: ${error.error.message}`;
    } else {
      // back-end error
      errorMessage = `Error: código - ${error.status}<br />, Mensagem: ${error.message}`;
    }
    this.notifyMessage.error('Não foi possível realizar a operação', errorMessage);
    return throwError(error);
  }

}


