import { Component, OnInit } from '@angular/core';
import { PassDataService } from '../../shared/services/pass_data.service';
@Component({
    selector: 'app- details',
    templateUrl: 'details.component.html'
})
export class DetailsComponent implements OnInit {
   private insertedName: string;
   private insertedPassword: string;
private insertedData: string= 'InsertedData';
    constructor(private passDataService: PassDataService) {
    }
    ngOnInit() {
        let storagData= JSON.parse(localStorage.getItem(this.insertedData));
        if( storagData != null){
            this.insertedName = storagData.name;
            this.insertedPassword = storagData.password;
        }
        else{
            this.passDataService.currentData.subscribe(data => {
                this.insertedName = data.name;
                this.insertedPassword = data.password;
                localStorage.setItem(this.insertedData,JSON.stringify(data));
            });
        }
    }
}