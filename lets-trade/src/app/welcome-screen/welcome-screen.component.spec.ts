import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WelcomeScreenComponent } from './welcome-screen.component';

describe('WelcomeScreenComponent', () => {
  let component: WelcomeScreenComponent;
  let fixture: ComponentFixture<WelcomeScreenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WelcomeScreenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WelcomeScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Should return true for login', ()=>{
    expect(component.isLogin).toBe(true);
  })

  it('Should have register on false', ()=>{
    expect(component.isRegister).toBe(false);
  })

});
