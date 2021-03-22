import { Sex } from "../Enums/enums";

export interface Patient {
  id: string,
  firstname: string,
  lastname: string,
  birthday: string,
  insurance: boolean,
  avatar?: string,
  sex: Sex,
}

export interface Practitioner {
  id: string,
  firstname: string,
  lastname: string,
  birthday: string,
  avatar: string,
  sex: Sex,
  academicTitleId?: string,
  academicTitle?: AcademicTitle
}

export interface AcademicTitle {
  id: string,
  name: string
}

export interface AppointmentType {
  id: string,
  name: string,
  color: string,
  duration: string
}

export interface Appointment {
  id: string;
  begin: string,
  end: string,
  status: string,
  appointmentTypeId?: string,
  patientId?: string;
  practitionerId?: string;
  appointmentType: AppointmentType,
  patient: Patient,
  practitioner: Practitioner
}
