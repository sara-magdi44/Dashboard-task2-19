import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DowndropComponent } from './downdrop.component';

describe('DowndropComponent', () => {
  let component: DowndropComponent;
  let fixture: ComponentFixture<DowndropComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DowndropComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DowndropComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
