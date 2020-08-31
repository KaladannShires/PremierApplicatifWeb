import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateUtilisateurComponent } from './create-utilisateur.component';

describe('CreateUtilisateurComponent', () => {
  let component: CreateUtilisateurComponent;
  let fixture: ComponentFixture<CreateUtilisateurComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateUtilisateurComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateUtilisateurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
