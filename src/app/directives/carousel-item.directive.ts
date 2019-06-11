import {Directive, OnInit, TemplateRef, ViewContainerRef} from '@angular/core';

@Directive({
  selector: '[carouselItem]',
})
export class CarouselItemDirective implements OnInit {

  constructor(private template: TemplateRef<any>,
              private view: ViewContainerRef
  ) { }

  ngOnInit(): void {
    this.view.createEmbeddedView(this.template);
  }

}
