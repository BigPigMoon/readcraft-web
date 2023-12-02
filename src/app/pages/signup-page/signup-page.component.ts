import { Component } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  ValidationErrors,
  Validators,
} from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-signup-page',
  templateUrl: './signup-page.component.html',
  styleUrls: ['./signup-page.component.scss'],
})
export class SignupPageComponent {
  regForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private readonly authService: AuthService
  ) {}

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

  async onSubmit() {
    // const req = new RegisterRequest();
    // req.setEmail(this.regForm.value.email);
    // req.setUsername(this.regForm.value.name);
    // req.setPassword(this.regForm.value.password);
    // await this.authService.register(req);
  }
}
