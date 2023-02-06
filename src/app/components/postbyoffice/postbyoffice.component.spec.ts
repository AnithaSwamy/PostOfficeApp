import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostbyofficeComponent } from './postbyoffice.component';

describe('PostbyofficeComponent', () => {
  let component: PostbyofficeComponent;
  let fixture: ComponentFixture<PostbyofficeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PostbyofficeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PostbyofficeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
