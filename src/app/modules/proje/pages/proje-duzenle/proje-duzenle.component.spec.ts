import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjeDuzenleComponent } from './proje-duzenle.component';

describe('ProjeDuzenleComponent', () => {
  let component: ProjeDuzenleComponent;
  let fixture: ComponentFixture<ProjeDuzenleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProjeDuzenleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjeDuzenleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
