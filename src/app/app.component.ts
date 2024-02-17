import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { HttpClientModule } from "@angular/common/http";

import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';

import { StudentsService } from "./components/services/students.service";

import { DashboardComponent } from "./components/dashboard/dashboard.component";
import { UserComponent } from "./components/user/user.component";
import { AllStudentsComponent } from "./components/all-students/all-students.component";
import { SubjectsComponent } from "./components/subjects/subjects.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [AllStudentsComponent, DashboardComponent, UserComponent, SubjectsComponent, CommonModule, HttpClientModule, RouterOutlet, MatIconModule, MatButtonModule, MatToolbarModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  providers: [StudentsService],
})
export class AppComponent {
  title = 'students-details-pwa';
}
