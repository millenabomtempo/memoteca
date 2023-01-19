import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-thought',
  templateUrl: './card-thought.component.html',
  styleUrls: ['./card-thought.component.css']
})
export class CardThoughtComponent implements OnInit {

  @Input() thought = {
    content: 'Conteúdo',
    author: 'Autoria',
    model: 'modelo3'
  }
  constructor() { }

  ngOnInit(): void {
  }

  larguraPensamento(): string {
    if(this.thought.content.length >= 256) {
      return 'pensamento-g'
    }

    return 'pensamento-p'
  }

}