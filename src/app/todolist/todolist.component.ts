import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterOutlet } from '@angular/router';
import { Item } from '../interface/item.interface';
import { TodolistService } from '../service/todolist.service';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-todolist',
  standalone: true,
  imports: [CommonModule, RouterOutlet, RouterLink, HttpClientModule],
  templateUrl: './todolist.component.html',
  styleUrl: './todolist.component.scss',
})
export class TodolistComponent implements OnInit {
  editMode: boolean;
  items: Item[] = [];
  itemPlaceholder: Item;

  constructor(private todolistService: TodolistService) {
    // this.items = [
    //   {
    //     id: 0,
    //     task: 'Get Coffee',
    //     checked: true,
    //   },
    //   {
    //     id: 1,
    //     task: 'Get Milk',
    //     checked: false,
    //   },
    //   {
    //     id: 2,
    //     task: 'Do homework',
    //     checked: false,
    //   },
    // ];
    this.itemPlaceholder = {
      id: 0,
      task: '',
      checked: false,
    };
    this.editMode = true;
  }

  ngOnInit(): void {
    this.todolistService.getItems().subscribe((data) => (this.items = data));
  }

  onInput(e: any) {
    this.itemPlaceholder.task = e.target.value;
  }

  onSubmit(e: any) {
    e.preventDefault();
    if (this.itemPlaceholder.task === '') {
      return;
    }
    this.todolistService.addItems(this.itemPlaceholder).subscribe(
      (response: any) => {
        console.log('Post successful', response);
      },
      (error: any) => {
        console.error('Error posting item', error);
      }
    );
    this.items.push({
      id: this.items.length,
      task: this.itemPlaceholder.task,
      checked: this.itemPlaceholder.checked,
    });
    this.itemPlaceholder.task = '';
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
    console.log('Checked this item', e);
    if (this.editMode) {
      this.items.map((item, index) => {
        if (item.id === e.id) {
          this.items[index].checked = !this.items[index].checked;
        }
      });
      console.log('Checked this item', e);
    }
  }
}
