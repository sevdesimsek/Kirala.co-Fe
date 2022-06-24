import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KullaniciKiraladiklariComponent } from './kullanici-kiraladiklari.component';

describe('KullaniciKiraladiklariComponent', () => {
  let component: KullaniciKiraladiklariComponent;
  let fixture: ComponentFixture<KullaniciKiraladiklariComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KullaniciKiraladiklariComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(KullaniciKiraladiklariComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
