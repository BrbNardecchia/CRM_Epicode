import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientiBootstrapComponent } from './clienti-bootstrap.component';

describe('ClientiBootstrapComponent', () => {
  let component: ClientiBootstrapComponent;
  let fixture: ComponentFixture<ClientiBootstrapComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClientiBootstrapComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ClientiBootstrapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
