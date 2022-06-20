import { Component } from '@angular/core';
import { CoursesService } from './courses.service';

@Component({
    selector: "courses",
    template: `
        <h1>Courses</h1>
        <p>{{title}}</p>   
        <ul>
            <li *ngFor="let course of courses">{{course}}</li>
        </ul> 
   `
})
export class CoursesComponent {
    title = "List of courses";
    courses;

    constructor(service: CoursesService) {
        this.courses = service.getCourses()
    }
}