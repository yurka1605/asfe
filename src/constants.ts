export enum MessageTypes {
  Error = 'error',
  Warning = 'warn',
  Success = 'success',
  Info = 'info',
  Custom = 'custom',
};

export enum KeyboardKeys {
  None = 0,
  Backspace = 8,
  Tab = 9,
  Enter = 13,
  Escape = 27,
  Left = 37,
  Up = 38,
  Right = 39,
  Down = 40,
  Delete = 46,
};

export enum StorageKeysEnum {
  AUTHENTICATION = "AUTHENTICATION",
};

export enum InputTypeEnum {
  TEXT = 'text',
  PASSWORD = 'password',
}

export interface IMenuItem {
  name: string;
  link: string;
  childs: Array<IMenuItem>;
};

export const MenuList: Array<IMenuItem> = [
  {
    name: 'MENU_POINTS_SOLUTION',
    link: '',
    childs: [],
  },
  {
    name: 'MENU_POINTS_PLATFORM',
    link: '',
    childs: [],
  },
  {
    name: 'MENU_POINTS_EDUCATION',
    link: '',
    childs: [],
  },
  {
    name: 'MENU_POINTS_TARIFFS',
    link: '',
    childs: [],
  },
  {
    name: 'MENU_POINTS_FAST_START',
    link: '',
    childs: [],
  },
];
