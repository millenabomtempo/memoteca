import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
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
      content: ['', Validators.compose([
        Validators.required,
        Validators.pattern(/(.|\s)*\S(.|\s)*/)
      ])],
      author: ['', Validators.compose([
        Validators.required,
        Validators.minLength(3)
      ])],
      model: ['modelo1']
    })
  }

  createThought() {
    if(this.form.valid) {
      this.service.create(this.form.value).subscribe(() => {
        this.router.navigate(['/listarPensamento'])
      })
    }
  }

  cancel() {
    this.router.navigate(['/listarPensamento'])
  }

  toggleButton(): string {
    if(this.form.valid) {
      return 'botão'
    } else {
      return 'botao__desabilitado'
    }
  }

}
