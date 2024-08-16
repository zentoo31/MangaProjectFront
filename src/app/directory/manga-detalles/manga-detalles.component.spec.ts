import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MangaDetallesComponent } from './manga-detalles.component';

describe('MangaDetallesComponent', () => {
  let component: MangaDetallesComponent;
  let fixture: ComponentFixture<MangaDetallesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MangaDetallesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MangaDetallesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
