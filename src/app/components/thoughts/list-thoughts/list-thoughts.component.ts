import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-thoughts',
  templateUrl: './list-thoughts.component.html',
  styleUrls: ['./list-thoughts.component.css']
})
export class ListThoughtsComponent implements OnInit {

  listThoughts = [
    {
      content: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit.',
      author: 'Lorem ipsum',
      model: 'modelo3'
    },
    {
      content: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Perspiciatis commodi inventore quaerat fugiat doloribus quia amet architecto placeat, voluptatem minima dolorem accusamus eos, nisi autem, accusantium eius voluptates eaque laboriosam. Perspiciatis commodi inventore quaerat fugiat doloribus quia amet architecto placeat, voluptatem minima dolorem accusamus eos.',
      author: 'Lorem ipsum',
      model: 'modelo2'
    },
    {
      content: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit.',
      author: 'Lorem ipsum',
      model: 'modelo1'
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
