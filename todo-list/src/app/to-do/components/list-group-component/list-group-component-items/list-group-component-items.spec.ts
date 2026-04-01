import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListGroupComponentItems } from './list-group-component-items';

describe('ListGroupComponentItems', () => {
  let component: ListGroupComponentItems;
  let fixture: ComponentFixture<ListGroupComponentItems>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListGroupComponentItems]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListGroupComponentItems);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
