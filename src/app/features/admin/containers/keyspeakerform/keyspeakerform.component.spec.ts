import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KeyspeakerformComponent } from './keyspeakerform.component';

describe('KeyspeakerformComponent', () => {
  let component: KeyspeakerformComponent;
  let fixture: ComponentFixture<KeyspeakerformComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KeyspeakerformComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KeyspeakerformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
