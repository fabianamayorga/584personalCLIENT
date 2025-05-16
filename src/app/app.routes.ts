import { Routes } from '@angular/router';

import { BrandNameComponent } from './brand-name/brand-name.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { TrendingItemsComponent } from './trending-items/trending-items.component';
import { ArticleClothingComponent } from './article-clothing/article-clothing.component';
import { BrandDetailComponent } from './brand-detail/brand-detail.component';
import { BrandSummaryComponent } from './brand-summary/brand-summary.component';
import { LoginComponent } from './auth/login.component';
import { BrandEditComponent } from './brand-edit/brand-edit.component';

export const routes: Routes = [
    {
        path: "trends", 
        component: TrendingItemsComponent
    },
    {
        path: "brands", 
        component: BrandNameComponent
    },
    {
        path: "clothes", 
        component: ArticleClothingComponent
    },
    {
        path: "nav-bar",
        component: NavBarComponent
    },
    {   path: "brand/:id", 
        component: BrandDetailComponent
    },
    {
        path: "brand-summary/:id",
        component: BrandSummaryComponent
    },
    {
        path: "login",
        component: LoginComponent
    },
    {
        path: 'brandEdit/:id',
        component: BrandEditComponent
    },

    {
        path: "",
        component: TrendingItemsComponent,
        pathMatch: "full"
    }
    
];
