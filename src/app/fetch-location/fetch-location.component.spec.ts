import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FetchLocationComponent } from './fetch-location.component';

describe('FetchLocationComponent', () => {
  let component: FetchLocationComponent;
  let fixture: ComponentFixture<FetchLocationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FetchLocationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FetchLocationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
