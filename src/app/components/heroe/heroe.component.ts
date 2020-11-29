import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HeroesService, Heroe } from '../../services/heroes.service';

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
  styleUrls: ['./heroe.component.css'],
})
export class HeroeComponent implements OnInit {
  heroe: Heroe;
  casaImg: string;
  constructor(
    private _activatedRoute: ActivatedRoute,
    private _heroesService: HeroesService,
    private _router: Router
  ) {
    this._activatedRoute.params.subscribe((params) => {
      this.heroe = this._heroesService.getHeroe(params.id);
      if (this.heroe.casa === 'DC') {
        this.casaImg = 'assets/img/dc-logo.png';
      } else {
        this.casaImg = 'assets/img/marvel-logo.png';
      }
    });
  }

  ngOnInit(): void {}

  volverAtras(): void {
    this._router.navigate(['/heroes']);
  }
}
