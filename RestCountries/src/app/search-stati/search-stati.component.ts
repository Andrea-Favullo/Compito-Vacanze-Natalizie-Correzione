import { Component, OnInit } from '@angular/core';
import { StatiServiceService } from './stati-service.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-search-stati',
  templateUrl: './search-stati.component.html',
  styleUrls: ['./search-stati.component.css']
})
export class SearchStatiComponent {
  query: string;
  obsStati: Observable<Object>;
  nazioni: any;

  constructor(public stati_service: StatiServiceService) { }

  submit(query: HTMLInputElement): void {

    if (!query.value) {
      return;
    }
    this.query = query.value;
    this.obsStati = this.stati_service.search(this.query);
    this.obsStati.subscribe((data) => { this.nazioni = data; console.log(this.nazioni) });
  }
}
