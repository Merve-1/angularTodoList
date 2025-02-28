import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodoxComponent } from './todox.component';

describe('TodoxComponent', () => {
  let component: TodoxComponent;
  let fixture: ComponentFixture<TodoxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TodoxComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TodoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
