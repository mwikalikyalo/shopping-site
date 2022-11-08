import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnlargedComponent } from './enlarged.component';

describe('EnlargedComponent', () => {
  let component: EnlargedComponent;
  let fixture: ComponentFixture<EnlargedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EnlargedComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EnlargedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
