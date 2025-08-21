import { ErpEmployeeSkills } from './ErpEmployeeSkills.interface';
import { ErmEmpExperiences } from "./ErmEmpExperiences.interface";

export interface basicDetais {
  id?: string,
  roleId: number;
  empId: number;
  empName: string;
  empEmailId: string;
  empDesignationId: number;
  empContactNo: string;
  empAltContactNo: string;
  empPersonalEmailId: string;
  empExpTotalYear: number;
  empExpTotalMonth: number;
  empCity: string;
  empState: string;
  empPinCode: string;
  empAddress: string;
  empPerCity: string;
  empPerState: string;
  empPerPinCode: string;
  empPerAddress: string;
  password: string;
  ErpEmployeeSkills: ErpEmployeeSkills[];
  ErmEmpExperiences: ErmEmpExperiences[];
}
