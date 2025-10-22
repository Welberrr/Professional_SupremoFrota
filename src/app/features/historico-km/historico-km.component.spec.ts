import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HistoricoKmComponent } from './historico-km.component';

describe('HistoricoKmComponent', () => {
  let component: HistoricoKmComponent;
  let fixture: ComponentFixture<HistoricoKmComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HistoricoKmComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HistoricoKmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
