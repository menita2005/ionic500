import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ListaCarritoComponentComponent } from './lista-carrito-component.component';

describe('ListaCarritoComponentComponent', () => {
  let component: ListaCarritoComponentComponent;
  let fixture: ComponentFixture<ListaCarritoComponentComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [ListaCarritoComponentComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ListaCarritoComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
