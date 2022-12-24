import { Component } from '@angular/core';
import { MenuList } from 'src/constants';

@Component({
  selector: 'asfe-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent {
  readonly menuList = MenuList;
}
