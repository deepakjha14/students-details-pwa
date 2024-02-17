import { Component } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { StudentsService } from '../services/students.service';
import { UserComponent } from "../user/user.component";

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [ HttpClientModule, RouterModule, UserComponent ],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent {
  teachersProfile: any;
  
	constructor(
		private studentsService: StudentsService
	) {
		this.studentsService.getTeachersProfile().subscribe(
			(res: any) => {
				this.teachersProfile = res;
			}
		);
	}

}
