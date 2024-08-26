import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { ClientsComponent } from './clients.component';

describe('ClientsComponent', () => {
  let component: ClientsComponent;
  let fixture: ComponentFixture<ClientsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClientsComponent ],
      imports: [ ReactiveFormsModule,HttpClientTestingModule ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ClientsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

    it('should have a form with documentType and numberDocument controls', () => {
      expect(component.myForm.contains('documentType')).toBeTruthy();
      expect(component.myForm.contains('numberDocument')).toBeTruthy();
  });

  it('should make the documentType control required', () => {
    const control = component.myForm.get('documentType');
    control?.setValue('');
    expect(control?.valid).toBeFalsy();
  });

    it('should make the numberDocument control required and validate length', () => {
    const control = component.myForm.get('numberDocument');
    control?.setValue('');
    expect(control?.valid).toBeFalsy();

    control?.setValue('1234567'); // Less than 8 characters
    expect(control?.valid).toBeFalsy();

    control?.setValue('12345678'); // Valid length
    expect(control?.valid).toBeTruthy();

    control?.setValue('123456789012'); // More than 11 characters
    expect(control?.valid).toBeFalsy();
  });



});