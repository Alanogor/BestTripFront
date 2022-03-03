import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AjouterGuideComponent } from './ajouter-guide.component';

describe('AjouterGuideComponent', () => {
  let component: AjouterGuideComponent;
  let fixture: ComponentFixture<AjouterGuideComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AjouterGuideComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AjouterGuideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
