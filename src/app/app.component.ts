import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterOutlet } from '@angular/router';
import { Item } from './interface/item.interface';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, RouterLink],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  constructor() {
    this.items = [
      {
        id: 0,
        task: 'Get Coffe',
        checked: true,
      },
      {
        id: 1,
        task: 'Get Milk',
        checked: false,
      },
      {
        id: 2,
        task: 'Do homework',
        checked: false,
      },
    ];
    this.itemPlaceholder = {
      id: 0,
      task: '',
      checked: false,
    };
  }
  items: Item[];
  itemPlaceholder: Item;

  onInput(e: any) {
    this.itemPlaceholder.task = e.target.value;
  }

  onSubmit(e: any) {
    e.preventDefault();
    if (this.itemPlaceholder.task === '') {
      return;
    }
    this.items.push({
      id: this.items.length,
      task: this.itemPlaceholder.task,
      checked: this.itemPlaceholder.checked,
    });
  }

  checkItem(e: Item) {
    this.items[e.id].checked = !this.items[e.id].checked;
    console.log(e);
  }
}
