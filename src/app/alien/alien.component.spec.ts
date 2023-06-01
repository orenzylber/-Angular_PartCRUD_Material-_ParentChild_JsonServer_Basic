import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlienComponent } from './alien.component';

describe('AlienComponent', () => {
  let component: AlienComponent;
  let fixture: ComponentFixture<AlienComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AlienComponent]
    });
    fixture = TestBed.createComponent(AlienComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
