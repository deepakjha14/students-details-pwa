import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { StudentsService } from '../services/students.service';
import { MatIconModule } from '@angular/material/icon';

import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-all-students',
  standalone: true,
  imports: [ CommonModule, MatCardModule, MatDividerModule, MatIconModule, RouterModule ],
  templateUrl: './all-students.component.html',
  styleUrl: './all-students.component.scss'
})
export class AllStudentsComponent {
  students: any = [{name:"a"}, {name: "b"}];

  constructor(
    private studentsService: StudentsService
  ) {
    this.studentsService.getAllStudents().subscribe(
      (res: any) => {
        this.students = res;
      }
    );
  }
}
