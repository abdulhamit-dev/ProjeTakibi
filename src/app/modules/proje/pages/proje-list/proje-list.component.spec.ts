import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjeListComponent } from './proje-list.component';

describe('ProjeListComponent', () => {
  let component: ProjeListComponent;
  let fixture: ComponentFixture<ProjeListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProjeListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjeListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
