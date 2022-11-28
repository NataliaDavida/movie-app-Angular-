import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormArray, FormBuilder} from '@angular/forms';
import { Router } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { SessionIdInterface, TokenInterface } from 'src/app/models';
import { AuthService } from 'src/app/services/auth.service';


@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent implements OnInit {

  formGroup : FormGroup;
 
  constructor(private authService: AuthService, private router: Router){}         

  ngOnInit() {
    this.validForm()
  }

  validForm () {
    this.formGroup = new FormGroup ({
      username: new FormControl ('', [Validators.required]),
      password: new FormControl('', [Validators.required])
    })
  }

  loginProces() {
    if(this.formGroup.valid){
      this.authService.login()
      .pipe(
        switchMap((token: TokenInterface)=>{
          const body = this.formGroup.value
          body.request_token = token.request_token
          return this.authService.validate(body)
        }),
        switchMap((token:TokenInterface )=>{
          return this.authService.createSession({request_token: token.request_token})
        })
      ).subscribe((session: SessionIdInterface)=>{
        localStorage.setItem('session_id', session.session_id)
        this.router.navigate(['/'])
      })
      
    }
  }
  
}
