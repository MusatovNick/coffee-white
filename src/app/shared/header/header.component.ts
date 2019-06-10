import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { RouterUrl } from '../../configs/router-url.enum';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.less']
})
export class HeaderComponent {

  constructor(private router: Router) { }

  public onHomeClick(): void {
    this.router.navigate([RouterUrl.HOME]);
  }

  public onAboutClick(): void {
    this.router.navigate([RouterUrl.ABOUT]);
  }

  public onPortfolioClick(): void {
    this.router.navigate([RouterUrl.PORTFOLIO]);
  }

  public onBlogClick(): void {
    this.router.navigate([RouterUrl.BLOG]);
  }

  public onContactClick(): void {
    this.router.navigate([RouterUrl.CONTACT]);
  }

}
