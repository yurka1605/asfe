import { MenuComponent } from './components/header/menu/menu.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ViewComponent } from './view/view.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { WidgetModule } from "../widgets/widgets.module";
import { CoreRoutingModule } from './core-routing.module';
import { TranslocoRootModule } from '../transloco-root.module';

@NgModule({
    declarations: [
      ViewComponent,
      HeaderComponent,
      FooterComponent,
      MenuComponent,
    ],
    imports: [
      CommonModule,
      CoreRoutingModule,
      TranslocoRootModule,
      WidgetModule,
    ]
})
export class CoreModule {}
