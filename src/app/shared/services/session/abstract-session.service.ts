/**
 * Abstract Session for all sessions
 *
 * @description
 * The Session interface of the Web Session API provides access to a particular domain's session or local storage.
 * It allows, for example, the addition, modification, or deletion of stored data items.
 */
export abstract class StorageService {
  abstract clear(): void;
  abstract getItem(name: string): string | null;
  abstract setItem(name: string, data: any): void;
  abstract deleteItem(name: string): void;
}
