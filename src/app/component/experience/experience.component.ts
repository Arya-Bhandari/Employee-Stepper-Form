import { Component, EventEmitter, Output } from '@angular/core';
import { ErmEmpExperiences } from '../../interface/ErmEmpExperiences.interface';

@Component({
  selector: 'app-experience',
  standalone: false,
  templateUrl: './experience.component.html',
  styleUrl: './experience.component.css',
})
export class ExperienceComponent {
  public empExpDetail: ErmEmpExperiences[] = [];
  @Output() empExpChanges = new EventEmitter<ErmEmpExperiences[]>;
  @Output() finishedSaved = new EventEmitter<void>;


  empExpObj: ErmEmpExperiences = {
    empExpId: 0,
    empId: 0,
    companyName: '',
    startDate: '',
    endDate: '',
    designation: '',
    projectsWorkedOn: ''
  };

  public onSave(){
    if(this.empExpObj.companyName && this.empExpObj.startDate && this.empExpObj.endDate && this.empExpObj.designation && this.empExpObj.projectsWorkedOn){
      this.empExpDetail.push({ ...this.empExpObj})

        this.empExpObj = {
          empExpId: 0,
          empId: 0,
          companyName: '',
          startDate: '',
          endDate: '',
          designation: '',
          projectsWorkedOn: '',
        };
    }
  }
  public deleteSkill(index: number){
    this.empExpDetail.splice(index, 1)
  }

  public finish(){
    this.empExpChanges.emit(this.empExpDetail);
    this.finishedSaved.emit();
  }
}
