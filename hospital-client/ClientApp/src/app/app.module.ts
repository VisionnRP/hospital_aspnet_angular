import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatDialogModule } from '@angular/material/dialog';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';

import { AppComponent } from './app.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { HomeComponent } from './home/home.component';
import { CounterComponent } from './counter/counter.component';
import { FetchDataComponent } from './fetch-data/fetch-data.component';
import { PatientPageComponent } from './components/patient-page/patient-page.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';


import { FlexLayoutModule } from '@angular/flex-layout';
import { MatIconModule } from '@angular/material/icon';
import { PatientDialogComponent } from './dialogs/patient-dialog/patient-dialog.component';
import { PractitionerDialogComponent } from './dialogs/practitioner-dialog/practitioner-dialog.component';
import { PractitionerPageComponent } from './components/practitioner-page/practitioner-page.component';
import { AcademicTitlePageComponent } from './components/academic-title-page/academic-title-page.component';
import { AcademicTitleDialogComponent } from './dialogs/academic-title-dialog/academic-title-dialog.component';
import { MatNativeDateModule } from '@angular/material/core';
import { AppointmentTypePageComponent } from './components/appointment-type-page/appointment-type-page.component';
import { AppointmentTypeDialogComponent } from './dialogs/appointment-type-dialog/appointment-type-dialog.component';
import { ColorPickerModule } from 'ngx-color-picker';
import { AppointmentDialogComponent } from './dialogs/appointment-dialog/appointment-dialog.component';
import { AppointmentPageComponent } from './components/appointment-page/appointment-page.component';
import { CommonModule } from '@angular/common';
import { RegisterPageComponent } from './components/register-page/register-page.component';
import { AuthorizePageComponent } from './components/authorize-page/authorize-page.component';
import { ProfileComponent } from './components/profile/profile.component';


@NgModule({
  declarations: [
    AppComponent,
    NavMenuComponent,
    HomeComponent,
    PatientPageComponent,
    PractitionerPageComponent,
    CounterComponent,
    FetchDataComponent,
    PatientDialogComponent,
    PractitionerDialogComponent,
    AcademicTitlePageComponent,
    AcademicTitleDialogComponent,
    ProfileComponent,
    AppointmentTypeDialogComponent,
    AppointmentTypePageComponent,
    AppointmentDialogComponent,
    AppointmentPageComponent,
    RegisterPageComponent,
    AuthorizePageComponent
  ],
  entryComponents: [
    PatientDialogComponent,
    PractitionerDialogComponent,
    AcademicTitleDialogComponent,
    AppointmentDialogComponent,
    AppointmentTypeDialogComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    MatButtonModule,
    ColorPickerModule,
    MatDialogModule,
    MatNativeDateModule,
    CommonModule,
    MatCheckboxModule,
    ReactiveFormsModule,
    MatExpansionModule,
    MatInputModule,
    MatRadioModule,
    MatSelectModule,
    MatIconModule,
    FlexLayoutModule,
    MatDatepickerModule,
    MatFormFieldModule,
    FormsModule,
    RouterModule.forRoot([

      { path: '', component: RegisterPageComponent, pathMatch: 'full' },
      { path: 'authorize-page', component: AuthorizePageComponent },
      { path: 'practitioner-records', component: PractitionerPageComponent },
      { path: 'patient-records', component: PatientPageComponent },
      { path: 'profile', component: ProfileComponent },
      { path: 'appointment-records', component: AppointmentPageComponent },
      { path: 'academic-title-records', component: AcademicTitlePageComponent },
      { path: 'appointment-type-records', component: AppointmentTypePageComponent },
      { path: 'fetch-data', component: FetchDataComponent },
    ]),
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
