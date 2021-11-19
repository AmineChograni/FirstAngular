import { Component, OnInit } from '@angular/core';
import { CourseService } from './course.service';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent implements OnInit {

  constructor(courseService: CourseService) { 

    this.courses=courseService.getCourses();
  }

  title="La liste de mes cours";

  courses;

  getTitle(){
    return this.title;
  }

  ngOnInit(): void {
  }

}
