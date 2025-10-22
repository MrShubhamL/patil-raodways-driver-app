import { ComponentFixture, TestBed } from '@angular/core/testing';
import { InvoicePhotoPage } from './invoice-photo.page';

describe('InvoicePhotoPage', () => {
  let component: InvoicePhotoPage;
  let fixture: ComponentFixture<InvoicePhotoPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(InvoicePhotoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
