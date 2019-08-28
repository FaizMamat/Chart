import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LikepertagBarComponent } from './likepertag-bar.component';

describe('LikepertagBarComponent', () => {
  let component: LikepertagBarComponent;
  let fixture: ComponentFixture<LikepertagBarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LikepertagBarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LikepertagBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
