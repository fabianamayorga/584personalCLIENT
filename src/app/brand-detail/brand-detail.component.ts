import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { BrandName } from '../brand-name';
import { environment } from '../../environments/environment';

@Component({
  selector: 'app-brand-detail',
  templateUrl: './brand-detail.component.html',
  styleUrl: './brand-detail.component.scss'
})
export class BrandDetailComponent implements OnInit {
  brand?: BrandName;

  constructor(private route: ActivatedRoute, private http: HttpClient) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.http.get<BrandName>(`${environment.baseUrl}api/ClothingItems/${id}`).subscribe({
      next: result => this.brand = result,
      error: error => console.error(error)
    });
  }
}
