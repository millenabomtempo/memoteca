import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-create-thought',
  templateUrl: './create-thought.component.html',
  styleUrls: ['./create-thought.component.css']
})
export class CreateThoughtComponent implements OnInit {

  thought = {
    id: '1',
    content: 'Aprendendo Angular',
    author: 'Dev',
    model: 'modelo1'
  }

  constructor() { }

  ngOnInit(): void {
  }

  createThought() {
    alert('Novo pensamento criado')
  }

  cancel() {
    alert('Cancelado')
  }

}
