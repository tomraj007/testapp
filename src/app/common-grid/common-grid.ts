import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

type Employee = {
  name: string;
  empId: string;
};

const STORAGE_KEY = 'employees';

@Component({
  selector: 'app-common-grid',
  imports: [CommonModule, FormsModule],
  templateUrl: './common-grid.html',
  styleUrl: './common-grid.css',
})
export class CommonGrid implements OnInit {
  employees: Employee[] = [];

  form: Employee = {
    name: '',
    empId: ''
  };

  editIndex: number | null = null;

  ngOnInit(): void {
    this.loadFromStorage();
  }

  private loadFromStorage(): void {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      this.employees = raw ? (JSON.parse(raw) as Employee[]) : [];
    } catch {
      this.employees = [];
    }
  }

  private saveToStorage(): void {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(this.employees));
  }

  addOrUpdate(): void {
    if (!this.form.name?.trim() || !this.form.empId?.trim()) {
      return;
    }

    const payload: Employee = {
      name: this.form.name.trim(),
      empId: this.form.empId.trim()
    };

    if (this.editIndex === null) {
      this.employees = [...this.employees, payload];
    } else {
      const next = [...this.employees];
      next[this.editIndex] = payload;
      this.employees = next;
      this.editIndex = null;
    }

    this.saveToStorage();
    this.resetForm();
  }

  edit(index: number): void {
    const target = this.employees[index];
    if (!target) return;
    this.form = { ...target };
    this.editIndex = index;
  }

  remove(index: number): void {
    const next = this.employees.filter((_, i) => i !== index);
    this.employees = next;
    this.saveToStorage();
    if (this.editIndex === index) {
      this.resetForm();
      this.editIndex = null;
    }
  }

  cancelEdit(): void {
    this.editIndex = null;
    this.resetForm();
  }

  private resetForm(): void {
    this.form = { name: '', empId: '' };
  }
}
