import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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
  favotites: boolean = false
  listFavorites: Thought[] = []
  title: string = 'Meu Mural'

  constructor(private service: ThoughtService, private router: Router) { }

  ngOnInit(): void {
    this.service.listAll(this.currentPage, this.filter, this.favotites).subscribe((list) => {
      this.listThoughts = list
    })
  }

  loadMoreThoughts() {
    this.service.listAll(++this.currentPage, this.filter, this.favotites).subscribe(listThoughts => {
      this.listThoughts.push(...listThoughts)
      if(!listThoughts.length){
        this.hasMoreThoughts = false
      }
    })
  }

  searchThought() {
    this.hasMoreThoughts = true
    this.currentPage = 1;
    this.service.listAll(this.currentPage, this.filter, this.favotites)
      .subscribe(listThought => {
        this.listThoughts = listThought
      })
  }

  getFavorites() {
    this.title = 'Meus Favoritos'
    this.favotites = true
    this.hasMoreThoughts = true
    this.currentPage = 1
    this.service.listAll(this.currentPage, this.filter, this.favotites)
      .subscribe(listFavoritesThoughts => {
        this.listThoughts = listFavoritesThoughts
        this.listFavorites = listFavoritesThoughts
      })
  }

  reloadComponent() {

    this.favotites = false
    this.currentPage = 1

    this.router.routeReuseStrategy.shouldReuseRoute = () => false
    this.router.onSameUrlNavigation = 'reload'
    this.router.navigate([this.router.url])
  }
}
