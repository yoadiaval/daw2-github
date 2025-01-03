import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaNominasComponent } from './lista-nominas.component';

describe('ListaNominasComponent', () => {
  let component: ListaNominasComponent;
  let fixture: ComponentFixture<ListaNominasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListaNominasComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ListaNominasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
