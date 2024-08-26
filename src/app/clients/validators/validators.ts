import { AbstractControl, ValidationErrors } from '@angular/forms';

export function documentTypeValidator(control: AbstractControl): ValidationErrors | null {
  const validTypes = ['C', 'P'];

  return validTypes.includes(control.value) ? null : { invalidDocumentType: true };
}