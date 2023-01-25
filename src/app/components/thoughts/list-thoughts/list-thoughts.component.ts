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

  constructor(private service: ThoughtService) { }

  ngOnInit(): void {
    this.service.listAll(this.currentPage).subscribe((list) => {
      this.listThoughts = list
    })
  }

  loadMoreThoughts() {
    this.service.listAll(++this.currentPage).subscribe(listThoughts => {
      this.listThoughts.push(...listThoughts)
      if(!listThoughts.length){
        this.hasMoreThoughts = false
      }
    })
  }

}
