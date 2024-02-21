import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'new-course-form-array',
  templateUrl: './new-course-form-array.component.html',
  styleUrl: './new-course-form-array.component.css'
})
export class NewCourseFormArrayComponent {
  form;

  constructor(fb: FormBuilder) {
    this.form = fb.group({
      name: ["", Validators.required],
      contact: fb.group({
        email: [],
        phone: []
      }),
      topics: fb.array([])
    })
  }
}
