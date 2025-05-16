import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { FormGroup, FormControl, Validators, ReactiveFormsModule } from '@angular/forms';
import { environment } from '../../environments/environment';
import { BrandName } from '../brand-name';

// Angular Material modules
import { CommonModule } from '@angular/common';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-brand-edit',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterLink,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule
  ],
  templateUrl: './brand-edit.component.html',
  styleUrl: './brand-edit.component.scss'
})
export class BrandEditComponent implements OnInit {
  form!: FormGroup;
  brandId!: number;

  constructor(
    private http: HttpClient,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.brandId = Number(this.route.snapshot.paramMap.get('id'));

    this.form = new FormGroup({
      brandName: new FormControl('', Validators.required),
      location: new FormControl('', Validators.required)
    });

    this.loadBrand();
  }

  loadBrand() {
    this.http.get<BrandName>(`${environment.baseUrl}api/ClothingBrands/${this.brandId}`).subscribe({
      next: (brand) => this.form.patchValue(brand),
      error: (err) => console.error('Failed to load brand', err)
    });
  }

  onSubmit() {
    this.http.put(`${environment.baseUrl}api/ClothingBrands/${this.brandId}`, this.form.value).subscribe({
      next: () => this.router.navigate(['/brands']),
      error: (err) => console.error('Update failed', err)
    });
  }
}
