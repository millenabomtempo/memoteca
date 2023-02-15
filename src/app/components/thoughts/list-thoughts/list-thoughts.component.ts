import { Component, OnInit } from '@angular/core';
import { Thought } from '../thought';
import { ThoughtService } from '../thought.service';

@Component({
  selector: 'app-list-thoughts',
  templateUrl: './list-thoughts.component.html',
  styleUrls: ['./list-thoughts.component.css']
})
export class ListThoughtsComponent implements OnInit {

  listThoughts: Thought[] = []
  currentPage = 1
  hasMoreThoughts = true
  filter: string = ''

  constructor(private service: ThoughtService) { }

  ngOnInit(): void {
    this.service.listAll(this.currentPage, this.filter).subscribe((list) => {
      this.listThoughts = list
    })
  }

  loadMoreThoughts() {
    this.service.listAll(++this.currentPage, this.filter).subscribe(listThoughts => {
      this.listThoughts.push(...listThoughts)
      if(!listThoughts.length){
        this.hasMoreThoughts = false
      }
    })
  }

  searchThought() {
    this.hasMoreThoughts = true
    this.currentPage = 1;
    this.service.listAll(this.currentPage, this.filter)
      .subscribe(listThought => {
        this.listThoughts = listThought
      })
  }
}
