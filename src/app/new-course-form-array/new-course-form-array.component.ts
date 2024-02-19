import { Component } from '@angular/core';
import { FormArray, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'new-course-form-array',
  templateUrl: './new-course-form-array.component.html',
  styleUrl: './new-course-form-array.component.css'
})
export class NewCourseFormArrayComponent {
  form = new FormGroup({
    topics: new FormArray([])
  })

  addTopic(topic: HTMLInputElement) {
    this.topicsAsFormArray.push(new FormControl(topic.value));
    topic.value = "";
  }

  removeTopic(topic: any) {
    const index = this.topicsAsFormArray.controls.indexOf(topic);
    this.topicsAsFormArray.removeAt(index);
  }

  get topicsAsFormArray(): FormArray {
    return this.form.get('topics') as FormArray;
  }
}
