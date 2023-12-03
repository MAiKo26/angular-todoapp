import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterOutlet } from '@angular/router';
import { Item } from '../interface/item.interface';

@Component({
  selector: 'app-todolist',
  standalone: true,
  imports: [CommonModule, RouterOutlet, RouterLink],
  templateUrl: './todolist.component.html',
  styleUrl: './todolist.component.scss',
})
export class TodolistComponent {
  constructor() {
    this.items = [
      {
        id: 0,
        task: 'Get Coffee',
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
    this.editMode = true;
  }
  editMode: boolean;
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

  editItem() {
    this.editMode = !this.editMode;
    console.log('Edit Mode is ', this.editMode);
  }

  deleteItem(e: Item) {
    this.items.map((item, index) => {
      console.log('Deleted this item', e);
      if (item.id === e.id) {
        this.items.splice(index, 1);
      }
    });
  }

  checkItem(e: Item) {
    if (this.editMode) {
      this.items[e.id].checked = !this.items[e.id].checked;
      console.log('Checked this item', e);
    }
  }
}
