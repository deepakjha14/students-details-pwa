import { Routes } from '@angular/router';

import { DashboardComponent } from "./components/dashboard/dashboard.component";
import { AllStudentsComponent } from "./components/all-students/all-students.component";
import { SubjectsComponent } from "./components/subjects/subjects.component";

export const routes: Routes = [
    {
        path: "",
        component: DashboardComponent
    },
    {
        path:"subjects/:subjectName",
        component: SubjectsComponent
    },
    {
        path:"allStudents",
        component: AllStudentsComponent
    }
];