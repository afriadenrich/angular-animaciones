import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { SlideInComponent } from './components/slide-in/slide-in.component';

export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'home',
  },
  {
    path: 'home',
    component: HomeComponent,
    data: { animation: 'Home' },
  },
  {
    path: 'slide',
    component: SlideInComponent,
    data: { animation: 'AboutPage' },
  },
];
