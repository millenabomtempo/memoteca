import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Thought } from '../thought';
import { ThoughtService } from '../thought.service';

@Component({
  selector: 'app-create-thought',
  templateUrl: './create-thought.component.html',
  styleUrls: ['./create-thought.component.css']
})
export class CreateThoughtComponent implements OnInit {

  thought: Thought = {
    content: '',
    author: '',
    model: 'modelo1'
  }

  constructor(
      private service: ThoughtService,
      private router: Router
    ) { }

  ngOnInit(): void {
  }

  createThought() {
    this.service.create(this.thought).subscribe(() => {
      this.router.navigate(['/listarPensamento'])
    })
  }

  cancel() {
    this.router.navigate(['/listarPensamento'])
  }

}
