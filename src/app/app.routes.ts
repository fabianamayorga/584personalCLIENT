import { Routes } from '@angular/router';

import { BrandNameComponent } from './brand-name/brand-name.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { TrendingItemsComponent } from './trending-items/trending-items.component';
import { ArticleClothingComponent } from './article-clothing/article-clothing.component';


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
    {
        path: "",
        component: TrendingItemsComponent,
        pathMatch: "full"
    }
    
];
