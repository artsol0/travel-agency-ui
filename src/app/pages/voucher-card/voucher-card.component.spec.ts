import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VoucherCardComponent } from './voucher-card.component';

describe('VoucherCardComponent', () => {
  let component: VoucherCardComponent;
  let fixture: ComponentFixture<VoucherCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VoucherCardComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(VoucherCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
