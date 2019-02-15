import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KeyspeakerlistComponent } from './keyspeakerlist.component';

describe('KeyspeakerlistComponent', () => {
  let component: KeyspeakerlistComponent;
  let fixture: ComponentFixture<KeyspeakerlistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KeyspeakerlistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KeyspeakerlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
