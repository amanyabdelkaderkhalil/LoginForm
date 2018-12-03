import { Component, OnInit } from '@angular/core';
import { PassDataService } from '../../shared/services/pass_data.service';
@Component({
    selector: 'app- details',
    templateUrl: 'details.component.html'
})
export class DetailsComponent implements OnInit {
    insertedName: string;
    insertedPassword: string;
    constructor(private passDataService: PassDataService) {
    }
    ngOnInit() {
        this.passDataService.currentData.subscribe(data => {
            this.insertedName = data.name;
            this.insertedPassword = data.password;
        });
    }
}