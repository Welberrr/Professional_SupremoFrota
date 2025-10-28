import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideHttpClient } from '@angular/common/http';
import { MotoristaUpdateComponent } from './motorista-update.component';

describe('MotoristaUpdateComponent', () => {
  let component: MotoristaUpdateComponent;
  let fixture: ComponentFixture<MotoristaUpdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MotoristaUpdateComponent],
      providers: [provideHttpClient()],
    }).compileComponents();

    fixture = TestBed.createComponent(MotoristaUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
