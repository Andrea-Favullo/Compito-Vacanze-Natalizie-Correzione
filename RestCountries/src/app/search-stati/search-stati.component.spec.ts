import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchStatiComponent } from './search-stati.component';

describe('SearchStatiComponent', () => {
  let component: SearchStatiComponent;
  let fixture: ComponentFixture<SearchStatiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SearchStatiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchStatiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
