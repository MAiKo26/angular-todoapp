import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, RouterLink],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  // : = 'angular-todoapp';
  placeholder: string;
  constructor() {
    this.placeholder = '';
  }
  onInput(e: any) {
    this.placeholder = e.target.value;
  }
  onSubmit() {
    if (this.placeholder === '') {
      return;
    }
    this.items.push(this.placeholder);
  }
  items: string[] = ['test', 'helo'];
}
