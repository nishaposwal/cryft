import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {
  private prefix = 'jtam';

  addItem(key: any, value: any) {
    localStorage.setItem(`${this.prefix}.${key}`, JSON.stringify(value));
  }

  removeItem(key: any) {
    localStorage.removeItem(`${this.prefix}.${key}`);
  }

  getItem(key: any) {
    const item = localStorage.getItem(`${this.prefix}.${key}`);
    return item ? JSON.parse(item) : null;
  }

  clear() {
    localStorage.clear();
  }
}
