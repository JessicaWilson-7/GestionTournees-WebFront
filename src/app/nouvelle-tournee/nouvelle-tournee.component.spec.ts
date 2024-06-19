import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NouvelleTourneeComponent } from './nouvelle-tournee.component';

describe('NouvelleTourneeComponent', () => {
  let component: NouvelleTourneeComponent;
  let fixture: ComponentFixture<NouvelleTourneeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NouvelleTourneeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NouvelleTourneeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
