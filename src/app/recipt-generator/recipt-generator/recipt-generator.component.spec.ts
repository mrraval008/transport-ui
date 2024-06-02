import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReciptGeneratorComponent } from './recipt-generator.component';

describe('ReciptGeneratorComponent', () => {
  let component: ReciptGeneratorComponent;
  let fixture: ComponentFixture<ReciptGeneratorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReciptGeneratorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReciptGeneratorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
