import {
  Component,
  ComponentRef,
  ViewChild,
  ViewContainerRef
} from '@angular/core';

import { DynamicItemComponent } from './components/dynamic-item/dynamic-item.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  @ViewChild('dynamicComponent', { read: ViewContainerRef })
  private viewRef!: ViewContainerRef;
  private componentRef!: ComponentRef<DynamicItemComponent>

  public addDynamicComponent() {
    this.viewRef.clear();
    this.componentRef = this.viewRef.createComponent(DynamicItemComponent);
  };
  public removeComponent() {
    this.viewRef.clear();
  };

}

