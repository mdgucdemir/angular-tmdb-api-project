import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  isInputVisible: boolean = false;
  inputValue: string = '';

  constructor(private router: Router) {}

  searchIcon() {
    this.isInputVisible = !this.isInputVisible;
  }

  keyDown() {
    // console.log(this.inputValue);
    this.searchIcon();
    this.router.navigate(['/search'], {
      queryParams: { query: this.inputValue },
    });
    this.inputValue = '';
  }
}
