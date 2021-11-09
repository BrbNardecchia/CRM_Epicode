import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TablesClientComponent } from './tables-client.component';

describe('TablesClientComponent', () => {
  let component: TablesClientComponent;
  let fixture: ComponentFixture<TablesClientComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TablesClientComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TablesClientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
