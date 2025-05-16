import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { TrendingItems } from '../trending-items';
import { Router, RouterLink} from '@angular/router';

@Component({
  selector: 'app-trending-items',
  imports: [
    RouterLink
  ],
  templateUrl: './trending-items.component.html',
  styleUrl: './trending-items.component.scss'
})
export class TrendingItemsComponent {


public trends: TrendingItems[] = [];

 
  constructor(private http: HttpClient) {}

  ngOnInit(){
    this.getTrends();
  }

  getTrends(){
    this.http.get<TrendingItems[]>(`${environment.baseUrl}TrendingItems`).subscribe({
      next: result => this.trends = result, 
      error: error => console.error(error)
    }
    );
  }

}


