import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FirendComponent } from './firend.component';

describe('FirendComponent', () => {
  let component: FirendComponent;
  let fixture: ComponentFixture<FirendComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ FirendComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FirendComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
