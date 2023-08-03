// import { Component } from '@angular/core';
// import { Course } from 'src/app/models/course.model';
// import { Registration } from 'src/app/models/registration.model';
// import { Student } from 'src/app/models/student.model';
// import { CourseService } from 'src/app/services/course.service';
// import { RegistrationService } from 'src/app/services/registration.service';
// import { StudentService } from 'src/app/services/student.service';

// @Component({
//   selector: 'app-view-registrations',
//   templateUrl: './view-registrations.component.html',
//   styleUrls: ['./view-registrations.component.css']
// })
// export class ViewRegistrationsComponent {
//   registrations: Registration[] = [];
//   courses: Course[] = [];
//   students: Student[] = [];

//   constructor(
//     private registrationService: RegistrationService,
//     private studentService: StudentService,
//     private courseService: CourseService
//   ) { }

//   ngOnInit(): void {
//     this.getRegistrations();
//     this.getStudents();
//     this.getCourses();
//   }
 
//   private getRegistrations() {
//     this.registrationService.getRegistrations().subscribe(data => {
//       this.registrations = data;
//     });
//   }

//   private getStudents() {
//     this.studentService.getStudents().subscribe(data => {
//       this.students = data;
//     });
//   }

//   private getCourses() {
//     this.courseService.getCourses().subscribe(data => {
//       this.courses = data;
//     });
//   }

//   getCourseName(courseId: number): string {
//     const course = this.courses.find(c => c.courseId === courseId);
//     return course ? course.courseName : '';
//   }

//   getStudentName(studentId: number): string {
//     const student = this.students.find(s => s.studentId === studentId);
//     return student ? student.firstName : '';
//   }

//   deleteRegistration(registrationId: number) {
//     if(confirm('Are you sure you want to delete this registration?')) {
//       this.registrationService.deleteRegistration(registrationId).subscribe(() => {
//         this.getRegistrations();
//       });
//     }
//   }
// }
