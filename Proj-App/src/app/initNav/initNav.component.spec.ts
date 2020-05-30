/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { InitNavComponent } from './initNav.component';

describe('InitNavComponent', () => {
  let component: InitNavComponent;
  let fixture: ComponentFixture<InitNavComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InitNavComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InitNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
