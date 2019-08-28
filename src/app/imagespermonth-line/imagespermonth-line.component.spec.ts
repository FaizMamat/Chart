import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ImagespermonthLineComponent } from './imagespermonth-line.component';

describe('ImagespermonthLineComponent', () => {
  let component: ImagespermonthLineComponent;
  let fixture: ComponentFixture<ImagespermonthLineComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ImagespermonthLineComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ImagespermonthLineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
