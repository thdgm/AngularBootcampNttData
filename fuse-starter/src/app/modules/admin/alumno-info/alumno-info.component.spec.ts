import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlumnoInfoComponent } from './alumno-info.component';

describe('AlumnoInfoComponent', () => {
  let component: AlumnoInfoComponent;
  let fixture: ComponentFixture<AlumnoInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AlumnoInfoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AlumnoInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
