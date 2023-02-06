import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostbyidComponent } from './postbyid.component';

describe('PostbyidComponent', () => {
  let component: PostbyidComponent;
  let fixture: ComponentFixture<PostbyidComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PostbyidComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PostbyidComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
