import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgforDirComponent } from './ngfor-dir.component';

describe('NgforDirComponent', () => {
  let component: NgforDirComponent;
  let fixture: ComponentFixture<NgforDirComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgforDirComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NgforDirComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
