import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { ParamMap, ActivatedRoute, Router } from '@angular/router';
import { StatiServiceService } from '../stati-service.service';

@Component({
  selector: 'app-stato',
  templateUrl: './stato.component.html',
  styleUrls: ['./stato.component.css']
})
export class StatoComponent implements OnInit {

  routeObs: Observable<ParamMap>;
  nazione: any;
  pokeServiceObs: Observable<Object>;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private service: StatiServiceService) { }


  ngOnInit(): void {
    this.routeObs = this.route.paramMap;
    this.routeObs.subscribe(this.getRouterParam);
  }

  getRouterParam = (params: ParamMap) => {
    let code = params.get('alpha2Code');
    console.log(code)
    this.pokeServiceObs = this.service.getNation(code);
    this.pokeServiceObs.subscribe((data) => this.nazione = data)
  }
}
