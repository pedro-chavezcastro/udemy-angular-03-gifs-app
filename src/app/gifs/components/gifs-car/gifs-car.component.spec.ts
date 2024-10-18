import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GifsCarComponent } from './gifs-car.component';

describe('GifsCarComponent', () => {
  let component: GifsCarComponent;
  let fixture: ComponentFixture<GifsCarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [GifsCarComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GifsCarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
