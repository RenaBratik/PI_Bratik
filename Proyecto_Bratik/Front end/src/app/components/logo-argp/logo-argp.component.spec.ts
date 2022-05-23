import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LogoArgpComponent } from './logo-argp.component';

describe('LogoArgpComponent', () => {
  let component: LogoArgpComponent;
  let fixture: ComponentFixture<LogoArgpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LogoArgpComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LogoArgpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
