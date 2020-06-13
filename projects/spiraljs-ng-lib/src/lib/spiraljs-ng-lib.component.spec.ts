import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SpiraljsNgLibComponent } from './spiraljs-ng-lib.component';

describe('SpiraljsNgLibComponent', () => {
  let component: SpiraljsNgLibComponent;
  let fixture: ComponentFixture<SpiraljsNgLibComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SpiraljsNgLibComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpiraljsNgLibComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
