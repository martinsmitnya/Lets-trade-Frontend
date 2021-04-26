/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { CorsComponent } from './cors.component';

describe('CorsComponent', () => {
  let component: CorsComponent;
  let fixture: ComponentFixture<CorsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CorsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
