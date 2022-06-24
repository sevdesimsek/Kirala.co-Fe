import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KullaniciUrunleriComponent } from './kullanici-urunleri.component';

describe('KullaniciUrunleriComponent', () => {
  let component: KullaniciUrunleriComponent;
  let fixture: ComponentFixture<KullaniciUrunleriComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KullaniciUrunleriComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(KullaniciUrunleriComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
