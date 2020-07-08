import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../shared/employee/employee.service';
import { Employee } from '../model/employee';
import { Division } from '../model/division';
import { Position } from '../model/position';
import { Observable } from 'rxjs';
import {ToastrService} from "ngx-toastr";

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {

  employees: Employee[];
  divisions: Division[];
  positions: Position[];

  constructor(private employeeService: EmployeeService, private toastr: ToastrService) { }

  ngOnInit() {
    this.getAllEmployees().subscribe(data => {
      this.employees = data;
      });
    this.getAllDivisions().subscribe(data => {
      this.divisions = data;
    });
    this.getAllPositions().subscribe(data => {
      this.positions = data;
    });
  }

  getAllEmployees(): Observable<Employee[]> {
    return this.employeeService.getAll();
  }

  getAllDivisions(): Observable<Division[]> {
    return this.employeeService.getAllDivisions();
  }

  getAllPositions(): Observable<Position[]> {
    return this.employeeService.getAllPositions();
  }

  deleteEmployee(id): Observable<Response> {
    return this.employeeService.deleteEmployee(id);
  }

  onDelete(employee) {
    if(confirm("Are you sure to delete "+employee.name)) {
      this.deleteEmployee(employee.id).subscribe(data => {
        this.getAllEmployees().subscribe(data => {
          this.employees = data;
          this.toastr.success('Employee Deleted : '+employee.name, 'Success!');
        });
      });
    }
  }

}
