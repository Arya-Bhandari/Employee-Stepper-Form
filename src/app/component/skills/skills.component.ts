import { Component, EventEmitter, Output } from '@angular/core';
import { ErpEmployeeSkills } from '../../interface/ErpEmployeeSkills.interface';

@Component({
  selector: 'app-skills',
  standalone: false,
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.css',
})
export class SkillsComponent {
  public employeeSkillDetails: ErpEmployeeSkills[] = [];
  @Output() next = new EventEmitter<void>();
  @Output() empSkillChange = new EventEmitter<ErpEmployeeSkills[]>();

  empSkillObj: ErpEmployeeSkills = {
    empSkillId: 0,
    empId: 0,
    skill: '',
    totalYearExp: 0,
    lastVersionUsed: '',
  };

  public saveData() {
    if (
      this.empSkillObj.skill &&
      this.empSkillObj.totalYearExp &&
      this.empSkillObj.lastVersionUsed
    ) {
      this.employeeSkillDetails.push({ ...this.empSkillObj });

      this.empSkillObj = {
        empSkillId: 0,
        empId: 0,
        skill: '',
        totalYearExp: 0,
        lastVersionUsed: '',
      };
    }
  }

  public deleteSkill(index: number) {
    this.employeeSkillDetails.splice(index, 1);
  }

  onNextClick() {
    this.empSkillChange.emit(this.employeeSkillDetails);
    this.next.emit();
  }
}
