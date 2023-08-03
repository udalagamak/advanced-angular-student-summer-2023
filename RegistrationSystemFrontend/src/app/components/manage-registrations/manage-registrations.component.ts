// import { Component } from '@angular/core';
// import { ActivatedRoute, Router } from '@angular/router';
// import { Course } from 'src/app/models/course.model';
// import { Registration } from 'src/app/models/registration.model';
// import { Student } from 'src/app/models/student.model';
// import { CourseService } from 'src/app/services/course.service';
// import { RegistrationService } from 'src/app/services/registration.service';
// import { StudentService } from 'src/app/services/student.service';

// @Component({
//   selector: 'app-manage-registrations',
//   templateUrl: './manage-registrations.component.html',
//   styleUrls: ['./manage-registrations.component.css']
// })
// export class ManageRegistrationsComponent {
//   registration: Registration = {} as Registration;
//   courses: Course[] = [];
//   students: Student[] = [];

//   constructor(
//     private route: ActivatedRoute,
//     private router: Router,
//     private registrationService: RegistrationService,
//     private courseService: CourseService,
//     private studentService: StudentService
//   ) { }

//   ngOnInit(): void {
//     this.getCourses();

//     this.route.paramMap.subscribe(params  => {
//       const id = params.get('id');
//       console.log("id = "+id)
//       if (id) {
//         this.registrationService.getRegistrations().subscribe(data => {
//           this.registration = data.find(r => r.registrationId.toString() === id)!;
//         });
//       }
//     });
//   }

//   saveRegistration() {
//     if (this.registration.registrationId) {
//       this.registrationService.updateRegistration(this.registration).subscribe(() => {
//         this.router.navigate(['/registrations']);
//       });
//     } else {
//       this.registrationService.addRegistration(this.registration).subscribe(() => {
//         this.router.navigate(['/registrations']);
//       });
//     }
//   }

//   private getCourses() {
//     this.courseService.getCourses().subscribe(data => {
//       this.courses = data;
//     });
//   }
// }
