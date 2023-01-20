import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Thought } from '../thought';
import { ThoughtService } from '../thought.service';

@Component({
  selector: 'app-create-thought',
  templateUrl: './create-thought.component.html',
  styleUrls: ['./create-thought.component.css']
})
export class CreateThoughtComponent implements OnInit {

  form!: FormGroup

  constructor(
      private service: ThoughtService,
      private router: Router,
      private formBuilder: FormBuilder
    ) { }

  ngOnInit(): void {

    this.form = this.formBuilder.group({
      content: ['Teste'],
      author: ['Teste'],
      model: ['modelo1']
    })
  }

  createThought() {
    this.service.create(this.form.value).subscribe(() => {
      this.router.navigate(['/listarPensamento'])
    })
  }

  cancel() {
    this.router.navigate(['/listarPensamento'])
  }

}
