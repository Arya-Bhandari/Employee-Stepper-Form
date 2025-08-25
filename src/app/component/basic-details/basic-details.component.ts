import { Component, EventEmitter, Output } from '@angular/core';
import { basicDetais } from '../../interface/basicDetails.interface';
import { HttpClient } from '@angular/common/http';
import { designation } from '../../interface/designation.interface';
import { role } from '../../interface/role.interface';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-basic-details',
  standalone: false,
  templateUrl: './basic-details.component.html',
  styleUrl: './basic-details.component.css',
})
export class BasicDetailsComponent {
  public basicDetailsOfEmp: basicDetais[] = [];
  public designationDetails: designation[] = [];
  public roleDetail: role[] = [];
  @Output() basicDetaisChange = new EventEmitter<basicDetais>();
  @Output() next = new EventEmitter<void>();

  constructor(private http: HttpClient) {}

  empBasicDetails = new FormGroup({
    roleId: new FormControl(0),
    empId: new FormControl(0), 
    empName: new FormControl('',[Validators.required]),
    empEmailId: new FormControl('',[Validators.required, Validators.email]),
    empDesignationId: new FormControl(0),
    empContactNo: new FormControl('',[Validators.required, Validators.pattern('^\\+?[0-9]{10,15}$')]),
    empAltContactNo: new FormControl('',[Validators.required, Validators.pattern('^\\+?[0-9]{10,15}$')]),
    empPersonalEmailId: new FormControl('',[Validators.required, Validators.email]), 
    empExpTotalYear: new FormControl(0,[Validators.required]), 
    empExpTotalMonth: new FormControl(0,[Validators.required]),
    empCity: new FormControl('',[Validators.required]), 
    empState: new FormControl('',[Validators.required]),
    empPinCode: new FormControl('',[Validators.required]),
    empAddress: new FormControl('',[Validators.required]),
    empPerCity: new FormControl('',[Validators.required]),
    empPerState: new FormControl('',[Validators.required]),
    empPerPinCode: new FormControl('',[Validators.required]),
    empPerAddress: new FormControl('',[Validators.required]),
    password: new FormControl('',[Validators.required, Validators.pattern('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&].{8,}')]),
  })

  // getter for form
  get empName() { return this.empBasicDetails.get('empName'); }
  get empEmailId() { return this.empBasicDetails.get('empEmailId'); }
  get password() { return this.empBasicDetails.get('password'); }
  get roleId() { return this.empBasicDetails.get('roleId'); }
  get empDesignationId() { return this.empBasicDetails.get('empDesignationId'); }
  get empContactNo() { return this.empBasicDetails.get('empContactNo'); }
  get empAltContactNo() { return this.empBasicDetails.get('empAltContactNo'); }
  get empPersonalEmailId() { return this.empBasicDetails.get('empPersonalEmailId'); }
  get empExpTotalYear() { return this.empBasicDetails.get('empExpTotalYear'); }
  get empExpTotalMonth() { return this.empBasicDetails.get('empExpTotalMonth'); }
  get empCity() { return this.empBasicDetails.get('empCity'); }
  get empState() { return this.empBasicDetails.get('empState'); }
  get empPinCode() { return this.empBasicDetails.get('empPinCode'); }
  get empAddress() { return this.empBasicDetails.get('empAddress'); }
  get empPerCity() { return this.empBasicDetails.get('empPerCity'); }
  get empPerState() { return this.empBasicDetails.get('empPerState'); }
  get empPerPinCode() { return this.empBasicDetails.get('empPerPinCode'); }
  get empPerAddress() { return this.empBasicDetails.get('empPerAddress'); }

  ngOnInit() {
    this.loadDesignation();
    this.loadrole();
  }

  public loadDesignation() {
    this.http
      .get<designation[]>('http://localhost:3001/data')
      .subscribe((res: any) => {
        this.designationDetails = res;
      });
  }
  public loadrole() {
    this.http
      .get<role[]>('http://localhost:3002/roleData')
      .subscribe((res: any) => {
        this.roleDetail = res;
      });
  }

onNextClick() {
  const formValue = {
    ...this.empBasicDetails.value,
    roleId: +this.empBasicDetails.value.roleId!,
    empDesignationId: +this.empBasicDetails.value.empDesignationId!,
  } as basicDetais;

  this.basicDetaisChange.emit(formValue);
  this.next.emit();
}

}
