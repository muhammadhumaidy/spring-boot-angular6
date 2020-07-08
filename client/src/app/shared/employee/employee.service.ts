import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Employee } from '../../model/employee';
import { Division } from '../../model/division';
import { Position } from '../../model/position';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  private employeeUrl = '//0.0.0.0:8080/main/employees';
  private positionUrl = '//0.0.0.0:8080/main/positions';
  private divisionUrl = '//0.0.0.0:8080/main/divisions';
  private employeeSequenceUrl = '//0.0.0.0:8080/main/employee-sequence';
  constructor(private http: HttpClient) {
  }

  getAll(): Observable<Employee[]> {
    return this.http.get<Employee[]>(this.employeeUrl);
  }

   getById(id): Observable<Employee> {
    return this.http.get<Employee>(this.employeeUrl + '/' + id);
  }

  getAllPositions(): Observable<Position[]> {
    return this.http.get<Position[]>(this.positionUrl);
  }

  getPositionById(id): Observable<Position> {
    return this.http.get<Position>(this.positionUrl + '/' + id);
  }

  getAllDivisions(): Observable<Division[]> {
    return this.http.get<Division[]>(this.divisionUrl);
  }

  getEmployeeCurrentSequence(): Observable<number>{
    return this.http.get<number>(this.employeeSequenceUrl);
  }

  saveEmployee(employee): Observable<Employee> {
    return this.http.post<Employee>(this.employeeUrl,employee);
  }

  deleteEmployee(id): Observable<Response> {
    return this.http.delete<Response>(this.employeeUrl + '/' + id);
  }
}
