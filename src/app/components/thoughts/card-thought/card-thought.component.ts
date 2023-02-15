import { Component, Input, OnInit } from '@angular/core';
import { Thought } from '../thought';
import { ThoughtService } from '../thought.service';

@Component({
  selector: 'app-card-thought',
  templateUrl: './card-thought.component.html',
  styleUrls: ['./card-thought.component.css']
})
export class CardThoughtComponent implements OnInit {

  @Input() thought: Thought = {
    id: 0,
    content: 'Conteúdo',
    author: 'Autoria',
    model: 'modelo3',
    favorite: false
  }

  @Input() listFavorites: Thought[] = []

  constructor(private service: ThoughtService) { }

  ngOnInit(): void {
  }

  larguraPensamento(): string {
    if(this.thought.content.length >= 256) {
      return 'pensamento-g'
    }

    return 'pensamento-p'
  }

  toggleFavoriteIcon(): string {
    if(this.thought.favorite == false) {
      return 'inativo'
    }
    return 'ativo'
  }

  refreshFavorites() {
    this.service.toggleFavorite(this.thought).subscribe(() => {
      this.listFavorites.splice(this.listFavorites.indexOf(this.thought), 1)
    })
  }

}
