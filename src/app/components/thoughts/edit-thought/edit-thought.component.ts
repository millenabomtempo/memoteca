import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Thought } from '../thought';
import { ThoughtService } from '../thought.service';

@Component({
  selector: 'app-edit-thought',
  templateUrl: './edit-thought.component.html',
  styleUrls: ['./edit-thought.component.css']
})
export class EditThoughtComponent implements OnInit {

  thought: Thought = {
    id: 0,
    content: '',
    author: '',
    model: ''
  }

  constructor(
    private service: ThoughtService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id')
    this.service.findByID(parseInt(id!)).subscribe((thought) => {
      this.thought = thought
    })
  }

  editThought() {
    if (this.thought.id) {
      this.service.update(this.thought ).subscribe(() => {
        this.router.navigate(['/listarPensamento'])
      })
    }
  }

  cancel() {
    this.router.navigate(['/listarPensamento'])
  }

}
