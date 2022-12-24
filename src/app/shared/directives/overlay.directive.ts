import { OverlayComponent } from './../components/overlay/overlay.component';
import { AfterViewInit, ComponentRef, Directive, ElementRef, Input, OnDestroy, Renderer2, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[asfeOverlay]'
})
export class OverlayDirective {
  @Input()
  content: string;
  @Input()
  view: TemplateRef<any>;
  component: OverlayComponent;
  componentRef: ComponentRef<OverlayComponent> | null;
  protected readonly disposables: Array<() => void> = [];

  constructor(
    private elementRef: ElementRef,
    private hostView: ViewContainerRef,
    private renderer: Renderer2,
  ) {}

  createComponent(): void {
    this.componentRef = this.hostView.createComponent(OverlayComponent);
    this.component = this.componentRef.instance as OverlayComponent;
  }
}
