import { Component } from '@angular/core';
import { stepsResponse } from '../../interface/steps.interface';
import { AppRoutes } from '../../constant/app-route.constant';
import { HttpClient } from '@angular/common/http';
import { basicDetais } from '../../interface/basicDetails.interface';
import { Router } from '@angular/router';
import { ErpEmployeeSkills } from '../../interface/ErpEmployeeSkills.interface';
import { ErmEmpExperiences } from '../../interface/ErmEmpExperiences.interface';

@Component({
  selector: 'app-steps',
  standalone: false,
  templateUrl: './steps.component.html',
  styleUrl: './steps.component.css'
})
export class StepsComponent {
  public Routes = AppRoutes;
  public steps: stepsResponse[] = [];
  public basicDetailsOfEmp: basicDetais[] = [];

  stepList: stepsResponse[] =[
    {stepname: 'Basic Deatils', isComplete:false},
    {stepname: 'Skills', isComplete:false},
    {stepname: 'Experience', isComplete:false}
  ]
  activeStep: stepsResponse = this.stepList[0];
  constructor(private http: HttpClient, private router: Router){};

    employeeObj: basicDetais = {
      roleId: 0,
      empId: 0,
      empName: "",
      empEmailId: "",
      empDesignationId: 0,
      empContactNo: "",
      empAltContactNo: "",
      empPersonalEmailId: "",
      empExpTotalYear: 0,
      empExpTotalMonth: 0,
      empCity: "",
      empState: "",
      empPinCode: "",
      empAddress: "",
      empPerCity: "",
      empPerState: "",
      empPerPinCode: "",
      empPerAddress: "",
      password: "",
      ErpEmployeeSkills: [],
      ErmEmpExperiences: [],
    }
  
  onBasicDetailsRecived(details: basicDetais){
    this.employeeObj = {...this.employeeObj, ...details}
  }
  onSkillRecived(skill: ErpEmployeeSkills[]){
    this.employeeObj.ErpEmployeeSkills = skill;
  }
  onExpRecived(exp: ErmEmpExperiences[]){
    this.employeeObj.ErmEmpExperiences = exp;
  }
  stepperCompletionValue: number = 8;
  setActiveStep(activeStep: stepsResponse){
    this.activeStep = activeStep;
  }

  goToStep2(){
    const currentStep = this.stepList.find(m=>m.stepname == this.activeStep.stepname);
    if(currentStep)
    currentStep.isComplete = true;
    this.activeStep = this.stepList[1];
    this.stepperCompletionValue = 50;
  }
  goToStep3(){
    const currentStep = this.stepList.find(m=>m.stepname == this.activeStep.stepname);
    if(currentStep)
    currentStep.isComplete = true;
    this.activeStep = this.stepList[2];
    this.stepperCompletionValue = 100;
  }

  saveEmployee(){
  this.http.post("http://localhost:3000/employees", this.employeeObj)
  .subscribe({
    next: (res: any) => {
      if (res) {
        alert('Employee created successfully!');
        this.router.navigate([this.Routes.empTable]);
      } else {
        alert('Error: Employee not created');
      }
    },
    error: (err) => {
      console.error(err);
      alert('❌ Server error while creating employee');
    }
  });
  }
}
