import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VoucherCheckComponent } from './voucher-check.component';

describe('VoucherCheckComponent', () => {
  let component: VoucherCheckComponent;
  let fixture: ComponentFixture<VoucherCheckComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VoucherCheckComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(VoucherCheckComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
