import { bootstrapApplication } from '@angular/platform-browser';
import { importProvidersFrom } from '@angular/core';
import { provideRouter, Routes, withComponentInputBinding } from '@angular/router';
import { provideHttpClient } from '@angular/common/http';
import { provideAnimations } from '@angular/platform-browser/animations';
import { AppComponent } from './app/app.component';
import { ParentDashboardComponent } from './app/components/parent-dashboard/parent-dashboard.component';
import { ChildDashboardComponent } from './app/components/child-dashboard/child-dashboard.component';
import { ParentGuard } from './app/guards/parent.guard';
import { ChildGuard } from './app/guards/child.guard';

const routes: Routes = [
  { path: 'parent-dashboard', component: ParentDashboardComponent, canActivate: [ParentGuard] },
  { path: 'child-dashboard', component: ChildDashboardComponent, canActivate: [ChildGuard] },
  { path: '', redirectTo: 'child-dashboard', pathMatch: 'full' }, // Default route
  { path: '**', redirectTo: 'child-dashboard' }, // Fallback route
];

bootstrapApplication(AppComponent, {
  providers: [
    provideRouter(routes, withComponentInputBinding()),
    provideHttpClient(),
    provideAnimations(),
  ],
}).catch((err) => console.error(err));
