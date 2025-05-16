import { Component, OnInit } from '@angular/core';
import { environment } from '../../environments/environment';
import { BrandName } from '../brand-name';
import { HttpClient } from '@angular/common/http';
import { Router, RouterLink } from '@angular/router'

@Component({
  selector: 'app-brand-name',
  imports: [
    RouterLink
  ],
  templateUrl: './brand-name.component.html',
  styleUrl: './brand-name.component.scss'
})
export class BrandNameComponent implements OnInit{
    public brands: BrandName[] = [];

    constructor(private http: HttpClient) {}

    ngOnInit(): void {
      this.getBrands();
    }

    getBrands() {
      this.http.get<BrandName[]>(`${environment.baseUrl}api/ClothingBrands`).subscribe({
        next: result => this.brands = result,
        error: error => console.error(error)
      })
    }
}
