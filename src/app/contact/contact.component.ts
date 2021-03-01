import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  submitted = false;

  feedbackForm!: FormGroup;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.feedbackForm = this.formBuilder.group({
      nameInput: ['', Validators.required],
      email: ['', Validators.required],
      feedback: ['', Validators.required]
    });
  }

  submitFeedback(){
    this.submitted = true;
  }



}
