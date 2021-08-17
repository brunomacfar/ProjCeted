/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { MomentDatePipeComponent } from './MomentDatePipe.component';

describe('MomentDatePipeComponent', () => {
  let component: MomentDatePipeComponent;
  let fixture: ComponentFixture<MomentDatePipeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MomentDatePipeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MomentDatePipeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
