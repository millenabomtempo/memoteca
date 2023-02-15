import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Thought } from '../thought';
import { ThoughtService } from '../thought.service';

@Component({
  selector: 'app-edit-thought',
  templateUrl: './edit-thought.component.html',
  styleUrls: ['./edit-thought.component.css']
})
export class EditThoughtComponent implements OnInit {

  form!: FormGroup

  constructor(
    private service: ThoughtService,
    private router: Router,
    private route: ActivatedRoute,
    private formBuilder: FormBuilder
  ) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id')
    this.service.findByID(parseInt(id!)).subscribe((thought) => {
      this.form = this.formBuilder.group({
        id: thought.id,
        content: [thought.content, Validators.compose([
          Validators.required,
          Validators.pattern(/(.|\s)*\S(.|\s)*/)
        ])],
        author: [thought.author, Validators.compose([
          Validators.required,
          Validators.minLength(3)
        ])],
        model: [thought.model],
        favorite: [thought.favorite]
      })
    })
  }

  editThought() {
    this.service.update(this.form.value).subscribe(() => {
      this.router.navigate(['/listarPensamento'])
    })
  }

  cancel() {
    this.router.navigate(['/listarPensamento'])
  }

  toggleButton(): string {
    if(this.form.valid) {
      return "botao"
    }
    else return "botao__desabilitado"
  }
}
