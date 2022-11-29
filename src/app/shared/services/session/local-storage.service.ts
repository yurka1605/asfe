import { Inject, Injectable } from '@angular/core';
import { StorageService } from './abstract-session.service';

@Injectable()
export class LocalStorageService extends StorageService {

  private storage: Storage;

  constructor(@Inject('Window') private window: Window) {
    super();
    this.storage = this.window.localStorage;
  }

  getItem(name: string): string | null {
    return this.storage.getItem(name);
  }

  setItem(name: string, data: string): void {
    this.storage.setItem(name, data);
  }

  deleteItem(name: string): void {
    this.storage.removeItem(name);
  }

  clear(): void {
    this.storage.clear();
  }
}
