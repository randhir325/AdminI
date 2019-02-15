import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SpeakerlistComponent } from './speakerlist.component';

describe('SpeakerlistComponent', () => {
  let component: SpeakerlistComponent;
  let fixture: ComponentFixture<SpeakerlistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SpeakerlistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpeakerlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
