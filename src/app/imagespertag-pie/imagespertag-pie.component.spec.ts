import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ImagespertagPieComponent } from './imagespertag-pie.component';

describe('ImagespertagPieComponent', () => {
  let component: ImagespertagPieComponent;
  let fixture: ComponentFixture<ImagespertagPieComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ImagespertagPieComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ImagespertagPieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
