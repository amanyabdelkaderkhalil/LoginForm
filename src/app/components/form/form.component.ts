import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms'
import { Component } from '@angular/core';
import { LoginData } from '../../models/login.data';
import { PassDataService } from '../../shared/services/pass_data.service';
import { Router } from '@angular/router';
@Component({
    selector: 'app-form',
    templateUrl: 'form.component.html',
    styleUrls: ['form.component.scss']
})
export class FormComponent {
    private form: FormGroup;
    private loginData: LoginData;
    private name = new FormControl('', Validators.required);
    private password = new FormControl('', Validators.required);

    constructor(
        fb: FormBuilder,
       private passDataService: PassDataService,
       private router: Router
    ) {
        this.form = fb.group({
            'name': this.name,
            'password': this.password
        });
    }
    onSubmit() {
        localStorage.clear();
        let name = this.form.get('name').value;
        let password = this.form.get('password').value;
        this.loginData = new LoginData(name, password);
        this.passDataService.changeData(this.loginData.name,this.loginData.password);
        this.router.navigate(['details'])
    }
}