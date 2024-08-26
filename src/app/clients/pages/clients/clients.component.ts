import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import {documentTypeValidator} from '../../validators/validators';
import { ClientService } from '../../services/client.service';

@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrl: './clients.component.css'
})
export class ClientsComponent {
onSave() {
throw new Error('Method not implemented.');
}
   public myForm: FormGroup = this.fb.group({
    documentType: ['', [Validators.required, documentTypeValidator]],
    numberDocument: ['', [Validators.required, Validators.minLength(8), Validators.maxLength(11)]],

  });

    constructor(private fb: FormBuilder , private clientService: ClientService, private router: Router ) {}
    validateNumber(event: KeyboardEvent) {
    const charCode = event.charCode;
    if (charCode < 48 || charCode > 57) {
      event.preventDefault();
    }
  }

  formatNumber(event: any) {
    let value = event.target.value.replace(/\D/g, '');
    value = value.replace(/\B(?=(\d{3})+(?!\d))/g, '');
    this.myForm.get('numberDocument')?.setValue(value, { emitEvent: false });
  }


    summit(): void {
    this.clientService.getClientByDocument(this.myForm.get('documentType')?.value, this.myForm.get('numberDocument')?.value).subscribe(
      (client) => {
        console.log('Client data:', client);
        this.router.navigate(['/detail']);
        
      },
      (error) => {
        console.error('Error fetching client data:', error);
      }
    );
  }
}
