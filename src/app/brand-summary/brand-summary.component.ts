import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

interface BrandSummary {
  id: number;
  brandName: string;
  location: string;
  totalQuantity: number;
  itemCount: number;
}

@Component({
  selector: 'app-brand-summary',
  templateUrl: './brand-summary.component.html',
  styleUrl: './brand-summary.component.scss'
})
export class BrandSummaryComponent implements OnInit {
  summary?: BrandSummary;

  constructor(private route: ActivatedRoute, private http: HttpClient) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.http.get<BrandSummary>(`${environment.baseUrl}api/ClothingBrands/GetSummary/${id}`)
      .subscribe({
        next: res => this.summary = res,
        error: err => console.error(err)
      });
  }
}
