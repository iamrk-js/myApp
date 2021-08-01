import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgIfDirComponent } from './ng-if-dir.component';

describe('NgIfDirComponent', () => {
  let component: NgIfDirComponent;
  let fixture: ComponentFixture<NgIfDirComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgIfDirComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NgIfDirComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
