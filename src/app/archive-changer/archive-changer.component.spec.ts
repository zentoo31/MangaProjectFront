import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArchiveChangerComponent } from './archive-changer.component';

describe('ArchiveChangerComponent', () => {
  let component: ArchiveChangerComponent;
  let fixture: ComponentFixture<ArchiveChangerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ArchiveChangerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ArchiveChangerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
