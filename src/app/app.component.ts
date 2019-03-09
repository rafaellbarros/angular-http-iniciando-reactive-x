import { Component, OnInit, ViewChild, ViewContainerRef, AfterViewInit, TemplateRef } from '@angular/core';
import { template } from '@angular/core/src/render3';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, AfterViewInit {
  title = 'app';

  @ViewChild('employeeList', {read: ViewContainerRef})
  viewContainer: ViewContainerRef;

  @ViewChild('template')
  template: TemplateRef<any>;

  ngOnInit() {

  }

  ngAfterViewInit() {
    console.log(this.viewContainer);
    this.viewContainer.createEmbeddedView(this.template);
    this.viewContainer.clear();
  }

}
