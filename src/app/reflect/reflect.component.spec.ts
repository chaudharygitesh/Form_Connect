import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReflectComponent } from './reflect.component';

describe('ReflectComponent', () => {
  let component: ReflectComponent;
  let fixture: ComponentFixture<ReflectComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ReflectComponent]
    });
    fixture = TestBed.createComponent(ReflectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
