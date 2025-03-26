import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment.development';
import { TrendingItems } from '../trending-items';

@Component({
  selector: 'app-trending-items',
  imports: [],
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
    this.http.get<TrendingItems[]>(`${environment.baseUrl}trendingItems`).subscribe({
      next: result => this.trends = result, 
      error: error => console.error(error)
    }
    );
  }

}


