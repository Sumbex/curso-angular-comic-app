import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HeroesService, Heroe } from '../../services/heroes.service';

@Component({
  selector: 'app-buscar-heroe',
  templateUrl: './buscar-heroe.component.html',
  styleUrls: ['./buscar-heroe.component.css'],
})
export class BuscarHeroeComponent implements OnInit {
  heroes: Heroe[] = [];
  termino: string;
  constructor(
    private _heroesService: HeroesService,
    private _activatedRoute: ActivatedRoute,
    private _router: Router
  ) {}
  ngOnInit(): void {
    this._activatedRoute.params.subscribe((params) => {
      this.termino = params.termino;
      this.heroes = this._heroesService.buscarHeroes(params.termino);
    });
  }
  verHeroe(id: number): void {
    this._router.navigate(['/heroe', id]);
  }
}
