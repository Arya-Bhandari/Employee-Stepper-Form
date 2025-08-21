import { Component } from '@angular/core';
import { basicDetais } from '../../interface/basicDetails.interface';
import { HttpClient } from '@angular/common/http';
import { role } from '../../interface/role.interface';
import { designation } from '../../interface/designation.interface';
import { AppRoutes } from '../../constant/app-route.constant';

@Component({
  selector: 'app-emp-table',
  standalone: false,
  templateUrl: './emp-table.component.html',
  styleUrl: './emp-table.component.css',
})
export class EmpTableComponent {
  public employeeList: basicDetais[] = [];
  public roles: role[] = [];
  public designations: designation[] = [];
  public Route = AppRoutes;

  constructor(private http: HttpClient) {}

  ngOnInit() {
  this.loadRoles();
  this.loadDesignations();
  // setTimeout(()=>{
  
  // }, 400)
    this.loadEmpList();
  }

  getRoleName(roleId: number): string {
    if (!this.roles) return ''; 
    const role = this.roles.find(r => r.roleId === roleId);
    return role ? role.role : '';
  }
  
  getDesignationName(designationId: number): string {
    if (!this.designations) return '';
    const desig = this.designations.find(d => d.designationId === designationId);
    return desig ? desig.designation : '';
  }

  public loadEmpList() {
    this.http.get('http://localhost:3000/employees').subscribe((res: any) => {
      console.log("API Response:", res);
      this.employeeList = res.filter((emp: any) => {
        return emp.empName && emp.empName !== "string";
      });
      console.log("Employee List:", this.employeeList);
    });
  }

  loadRoles() {
    this.http.get('http://localhost:3002/roleData').subscribe((res: any) => {
      this.roles = res.roleData || res;
      console.log("Role:", this.roles);
    });
  }

  loadDesignations() {
    this.http.get('http://localhost:3001/data').subscribe((res: any) => {
        this.designations = res.data || res;
        console.log("Designation:", this.designations);
      });
  }

  public deleteEmp(id:string|undefined){
    this.http.delete(`http://localhost:3000/employees/${id}`).subscribe(()=>{
      this.loadEmpList();
    })
  }
}

