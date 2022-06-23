import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductProfilComponent } from './product-profil.component';

describe('ProductProfilComponent', () => {
  let component: ProductProfilComponent;
  let fixture: ComponentFixture<ProductProfilComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductProfilComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductProfilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
