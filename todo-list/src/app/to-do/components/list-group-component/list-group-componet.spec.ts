import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListGroupComponent } from './list-group-component';

describe('ListGroup', () => {
  let component: ListGroupComponent;
  let fixture: ComponentFixture<ListGroupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListGroupComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListGroupComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
