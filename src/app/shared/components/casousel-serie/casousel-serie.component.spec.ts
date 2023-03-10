import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CasouselSerieComponent } from './casousel-serie.component';

describe('CasouselSerieComponent', () => {
  let component: CasouselSerieComponent;
  let fixture: ComponentFixture<CasouselSerieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CasouselSerieComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CasouselSerieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
