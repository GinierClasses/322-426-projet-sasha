import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageParametrageComponent } from './page-parametrage.component';

describe('PageParametrageComponent', () => {
  let component: PageParametrageComponent;
  let fixture: ComponentFixture<PageParametrageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PageParametrageComponent]
    });
    fixture = TestBed.createComponent(PageParametrageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
