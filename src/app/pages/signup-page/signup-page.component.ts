import { Component } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  ValidationErrors,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { UserSignUp } from 'src/app/models';
import { AuthService } from 'src/app/services/auth.service';
import { JwtService } from 'src/app/services/jwt.service';

@Component({
  selector: 'app-signup-page',
  templateUrl: './signup-page.component.html',
  styleUrls: ['./signup-page.component.scss'],
})
export class SignupPageComponent {
  regForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private jwtService: JwtService,
    private router: Router,
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
      { validator: this.allFieldsRequiredValidator },
    );
  }

  onSubmit() {
    const user: UserSignUp = {
      password: this.regForm.value.password,
      email: this.regForm.value.email,
      name: this.regForm.value.name,
    };

    this.authService.signUp(user).subscribe((ret) => {
      this.jwtService.setTokens(ret);
      this.router.navigate(['/']);
    });
  }
}
