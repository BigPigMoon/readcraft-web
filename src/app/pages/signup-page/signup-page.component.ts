import { Component } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  ValidationErrors,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-signup-page',
  templateUrl: './signup-page.component.html',
  styleUrls: ['./signup-page.component.scss'],
})
export class SignupPageComponent {
  regForm: FormGroup;

  constructor(private formBuilder: FormBuilder) {}

  allFieldsRequiredValidator(group: FormGroup): ValidationErrors | null {
    const isInvalid = Object.keys(group.controls).some((controlName) => {
      const control = group.get(controlName);
      return control && control.value === '';
    });

    return isInvalid ? { allFieldsRequired: true } : null;
  }

  ngOnInit(): void {
    this.regForm = this.formBuilder.group(
      {
        name: new FormControl('', [
          Validators.required,
          Validators.minLength(4),
        ]),
        email: new FormControl('', [Validators.required]),
        password: new FormControl('', [Validators.required]),
        passwordRep: new FormControl('', [Validators.required]),
      },
      { validator: this.allFieldsRequiredValidator }
    );
  }

  onLogin() {
    console.log(this.regForm.value);
  }
}
