import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../shared/employee/employee.service';
import { Employee } from '../model/employee';
import { Division } from '../model/division';
import { Position } from '../model/position';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-employee-edit',
  templateUrl: './employee-edit.component.html',
  styleUrls: ['./employee-edit.component.css']
})
export class EmployeeEditComponent implements OnInit {
  positions: Position[];
  divisions: Division[];
  employee =  new Employee();
  submitted = false;
  id: number;
  lastPosition = new Position();

  constructor(private employeeService: EmployeeService, private activatedRoute: ActivatedRoute, private route: Router, private toastr: ToastrService) { }

  ngOnInit() {
    this.id = this.activatedRoute.snapshot.params.id;
    if (this.id != null) {
      this.getEmployeeById(this.id).subscribe(employee => {
        this.employee = employee;
        this.getPositionById(employee.positionId).subscribe(position =>{
          this.lastPosition = position;
        });
      });
    }else{
      this.getEmployeeCurrentSequence().subscribe(data=>{
        this.employee.nik = 'EM'+this.pad(data+1,5);
        this.employee.type = 'PROMOTION';
      });
    }

    this.getAllPositions().subscribe(data => {
      this.positions = data;
    });

    this.getAllDivisions().subscribe(data => {
      this.divisions = data;
    });
  }

  getEmployeeById(id): Observable<Employee> {
    return this.employeeService.getById(id);
  }

  getAllPositions(): Observable<Position[]> {
    return this.employeeService.getAllPositions();
  }

  getAllDivisions(): Observable<Division[]> {
    return this.employeeService.getAllDivisions();
  }

  getEmployeeCurrentSequence(): Observable<number> {
    return this.employeeService.getEmployeeCurrentSequence();
  }

  getPositionById(id): Observable<Position> {
    return this.employeeService.getPositionById(id);
  }


  saveEmployee(employee): Observable<Employee> {

    return this.employeeService.saveEmployee(employee);
  }

  positionChanged(){
    this.getPositionById(this.employee.positionId).subscribe(data =>{
      if(data.level >= this.lastPosition.level){
        this.employee.type = 'PROMOTION';
      }else{
        this.employee.type = 'DEMOTION';
      }
      this.employee.lastPosition = this.lastPosition.name;
    });
  }

  onSubmit() {
    this.submitted = true;
    this.saveEmployee(this.employee).subscribe(data => {
      this.employee = data;
      this.toastr.success('Employee Saved : '+this.employee.name, 'Success!');
      this.route.navigateByUrl('');
    });
  }

  pad(num:number, size:number): string {
    let s = num+"";
    while (s.length < size) s = "0" + s;
    return s;
  }

}
