import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ProductoMasterPage } from './producto-master.page';

describe('ProductoMasterPage', () => {
  let component: ProductoMasterPage;
  let fixture: ComponentFixture<ProductoMasterPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductoMasterPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
