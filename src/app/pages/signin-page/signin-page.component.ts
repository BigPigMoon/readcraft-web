import { Component, OnInit } from "@angular/core";
import {
  FormBuilder,
  FormControl,
  FormGroup,
  ValidationErrors,
  Validators,
} from "@angular/forms";
import { JWToken } from "src/app/models";
import { AuthService } from "src/app/services/auth.service";

@Component({
  selector: "app-signin-page",
  templateUrl: "./signin-page.component.html",
  styleUrls: ["./signin-page.component.scss"],
})
export class SigninPageComponent implements OnInit {
  loginForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
  ) {}

  allFieldsRequiredValidator(group: FormGroup): ValidationErrors | null {
    const isInvalid = Object.keys(group.controls).some((controlName) => {
      const control = group.get(controlName);
      return control && control.value === "";
    });

    return isInvalid ? { allFieldsRequired: true } : null;
  }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group(
      {
        email: new FormControl("", [
          Validators.required,
          Validators.minLength(4),
        ]),
        password: new FormControl(""),
      },
      { validators: this.allFieldsRequiredValidator },
    );
  }

  onLogin() {
    console.log(this.loginForm.value);

    this.authService.signIn(this.loginForm.value).subscribe(
      (ret: JWToken): void => {
        console.log(ret);
      },
      error => {
        console.warn(error);
      }
    );
  }
}
