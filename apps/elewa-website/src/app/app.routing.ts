import { NgModule } from '@angular/core';
import { RouterModule, Route } from '@angular/router';

export const ELEWA_WEBSITE_ROUTES: Route[] = [
  { path: '*', redirectTo: 'home/en', pathMatch: 'full' },
  { path: '', redirectTo: 'home/en', pathMatch: 'full' },

  { path: 'home', redirectTo: 'home/en', pathMatch: 'full' },
  {
    path: 'home/en',
    loadChildren: () =>
      import('@elewa-website/features/pages/home').then(
        (m) => m.FeaturesPagesHomeModule
      ),
  },

  { path: 'about', redirectTo: 'about/en', pathMatch: 'full' },
  {
    path: 'about/en',
    loadChildren: () =>
      import('@elewa-website/features/pages/about').then(
        (m) => m.FeaturesPagesAboutModule
      ),
  },

  { path: 'content-development', redirectTo: 'content-development/en', pathMatch: 'full' },
  {
    path: 'content-development/en',
    loadChildren: () =>
      import('@elewa-website/features/pages/content-development').then(
        (m) => m.ContentDevelopmentModule
      ),
  },

  { path: 'news', redirectTo: 'news/en', pathMatch: 'full' },
  {
    path: 'news/en',
    loadChildren: () =>
      import('@elewa-website/features/pages/news-page').then(
        (m) => m.FeaturesPagesNewsPageModule
      ),
  },

  { path: 'contact', redirectTo: 'contact/en', pathMatch: 'full' },
  {
    path: 'contact/en',
    loadChildren: () =>
      import('@elewa-website/features/pages/contact-page').then(
        (m) => m.ContactPageModule
      ),
  },

  { path: 'conversational-learning', redirectTo: 'conversational-learning/en', pathMatch: 'full' },
  {
    path: 'conversational-learning/en',
    loadChildren: () =>
      import('@elewa-website/features/pages/conversational-learning').then(
        (m) => m.ConversationalLearningModule
      ),
  },

  { path: 'consultancy', redirectTo: 'consultancy/en', pathMatch: 'full' },
  {
    path: 'consultancy/en',
    loadChildren: () =>
      import('@elewa-website/features/pages/consultancy-page').then(
        (m) => m.ConsultancyPageModule
      ),
  },

  { path: 'booklets', redirectTo: 'booklets/en', pathMatch: 'full' },
  {
    path: 'booklets/en',
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
