import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchDecksComponent } from './search-decks.component';

describe('SearchDecksComponent', () => {
  let component: SearchDecksComponent;
  let fixture: ComponentFixture<SearchDecksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SearchDecksComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SearchDecksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
