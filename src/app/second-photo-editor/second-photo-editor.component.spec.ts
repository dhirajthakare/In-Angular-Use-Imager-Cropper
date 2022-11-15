import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SecondPhotoEditorComponent } from './second-photo-editor.component';

describe('SecondPhotoEditorComponent', () => {
  let component: SecondPhotoEditorComponent;
  let fixture: ComponentFixture<SecondPhotoEditorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SecondPhotoEditorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SecondPhotoEditorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
