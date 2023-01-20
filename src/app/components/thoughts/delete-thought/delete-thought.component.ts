import { Thought } from './../thought';
import { Component, OnInit } from '@angular/core';
import { ThoughtService } from '../thought.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-delete-thought',
  templateUrl: './delete-thought.component.html',
  styleUrls: ['./delete-thought.component.css']
})
export class DeleteThoughtComponent implements OnInit {

  thought: Thought = {
    id: 0,
    content: '',
    author: '',
    model: 'modelo1'
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

  deleteThought() {
    if (this.thought.id) {
      this.service.delete(this.thought.id).subscribe(() => {
        this.router.navigate(['/listarPensamento'])
      })
    }
  }

  cancel(){
    this.router.navigate(['/listarPensamento'])
  }

}