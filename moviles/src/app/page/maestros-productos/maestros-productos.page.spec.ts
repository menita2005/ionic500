import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MaestrosProductosPage } from './maestros-productos.page';

describe('MaestrosProductosPage', () => {
  let component: MaestrosProductosPage;
  let fixture: ComponentFixture<MaestrosProductosPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(MaestrosProductosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
