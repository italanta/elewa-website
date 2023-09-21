import { NgModule } from '@angular/core';
import { RouterModule, Route } from '@angular/router';

export const ELEWA_WEBSITE_ROUTES: Route[] = [
  { path: '*', redirectTo: 'home', pathMatch: 'full' },
  { path: '', redirectTo: 'home', pathMatch: 'full' },

  { path: 'home', redirectTo: 'home', pathMatch: 'full' },
  {
    path: 'home',
    loadChildren: () =>
      import('@elewa-website/features/pages/home').then(
        (m) => m.FeaturesPagesHomeModule
      ),
  },

  {
    path: 'about',
    loadChildren: () =>
      import('@elewa-website/features/pages/about').then(
        (m) => m.FeaturesPagesAboutModule
      ),
  },

  {
    path: 'content-development',
    loadChildren: () =>
      import('@elewa-website/features/pages/content-development').then(
        (m) => m.ContentDevelopmentModule
      ),
  },

  {
    path: 'news',
    loadChildren: () =>
      import('@elewa-website/features/pages/news-page').then(
        (m) => m.FeaturesPagesNewsPageModule
      ),
  },

  {
    path: 'contact',
    loadChildren: () =>
      import('@elewa-website/features/pages/contact-page').then(
        (m) => m.ContactPageModule
      ),
  },

  {
    path: 'conversational-learning',
    loadChildren: () =>
      import('@elewa-website/features/pages/conversational-learning').then(
        (m) => m.ConversationalLearningModule
      ),
  },

  {
    path: 'consultancy',
    loadChildren: () =>
      import('@elewa-website/features/pages/consultancy-page').then(
        (m) => m.ConsultancyPageModule
      ),
  },

  {
    path: 'booklets',
    loadChildren: () =>
      import('@elewa-website/features/pages/booklets-page').then(
        (m) => m.BookletsPageModule
      ),
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(ELEWA_WEBSITE_ROUTES, {
      scrollPositionRestoration: 'enabled',
      enableTracing: true,
      onSameUrlNavigation: 'reload',
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
