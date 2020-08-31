import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateUtilisateursComponent } from './createUtilisateurs.component';

describe('CreateUtilisateursComponent', () => {
  let component: CreateUtilisateursComponent;
  let fixture: ComponentFixture<CreateUtilisateursComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateUtilisateursComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateUtilisateursComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
