import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PutburgertogetherComponent } from './putburgertogether.component';

describe('PutburgertogetherComponent', () => {
  let component: PutburgertogetherComponent;
  let fixture: ComponentFixture<PutburgertogetherComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PutburgertogetherComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PutburgertogetherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
