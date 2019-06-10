import { Routes, RouterModule } from '@angular/router';
import { RouterUrl } from './configs/router-url.enum';
import { HomePageComponent } from './components/pages/home-page/home-page.component';
import { AboutPageComponent } from './components/pages/about-page/about-page.component';
import { PortfolioPageComponent } from './components/pages/portfolio-page/portfolio-page.component';
import { BlogPageComponent } from './components/pages/blog-page/blog-page.component';
import { ContactPageComponent } from './components/pages/contact-page/contact-page.component';

const routes: Routes = [
  { path: '', redirectTo: RouterUrl.HOME, pathMatch: 'full'},
  { path: RouterUrl.HOME, component: HomePageComponent},
  { path: RouterUrl.ABOUT, component: AboutPageComponent},
  { path: RouterUrl.PORTFOLIO, component: PortfolioPageComponent},
  { path: RouterUrl.BLOG, component: BlogPageComponent},
  { path: RouterUrl.CONTACT, component: ContactPageComponent},
];


export const routing = RouterModule.forRoot(routes);
