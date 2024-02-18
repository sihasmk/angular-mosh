import { Component } from '@angular/core';

@Component({
  selector: 'new-course-form',
  templateUrl: './new-course-form.component.html',
  styleUrl: './new-course-form.component.css'
})
export class NewCourseFormComponent {
  categories = [
    {id: 1, name: "Development"},
    {id: 2, name: "Arts"},
    {id: 3, name: "Languages"},
  ]

  submit(formData: any) {
    console.log(formData);
  }
}
