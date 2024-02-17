import { Component } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { switchMap } from 'rxjs';

import { StudentsService } from "../services/students.service";

@Component({
  selector: 'app-subjects',
  standalone: true,
  imports: [MatListModule, MatIconModule, CommonModule, RouterModule],
  templateUrl: './subjects.component.html',
  styleUrl: './subjects.component.scss'
})
export class SubjectsComponent {
	studentsData: any;
	topper: any = {
		name: "",
		marks: Number.MIN_SAFE_INTEGER
	};

  constructor(
		private route: ActivatedRoute,
		private studentsService: StudentsService
	) {

		this.route.params.pipe(switchMap(
			(res: any) => this.studentsService.getSubjectData(res?.subjectName)
		)).subscribe(
			(res: any) => {
				this.studentsData = res;
				this.updateTopper();
			}
		);
  }

  updateTopper() {
		for (let i = 0 ; i< this.studentsData.length; i++) {
			if (this.topper.marks < this.studentsData[i].marks) {
				this.topper = this.studentsData[i];
			}
		}
	}

}
