import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DirectoComponent } from './directo.component';

describe('DirectoComponent', () => {
  let component: DirectoComponent;
  let fixture: ComponentFixture<DirectoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DirectoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DirectoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
