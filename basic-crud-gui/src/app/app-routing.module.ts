import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const appRoutes: Routes = [
    { path: 'feed', component: FeedPageComponent },
    { path: '', component: FeedPageComponent  },
    { path: '**', redirectTo: '' }
];

export const routing = RouterModule.forRoot(appRoutes);
