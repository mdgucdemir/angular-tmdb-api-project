import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  isInputVisible: boolean = false;
  inputValue: string = '';

  searchIcon() {
    this.isInputVisible = !this.isInputVisible;
  }

  keyDown() {
    console.log(this.inputValue);
    this.searchIcon();
    this.inputValue = '';
  }
}
