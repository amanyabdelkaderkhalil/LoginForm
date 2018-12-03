import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { LoginData } from '../../models/login.data';

@Injectable()
export class PassDataService{
private dataSource= new BehaviorSubject(new LoginData('test','123456'));
currentData= this.dataSource.asObservable();
constructor(){}
changeData(name: string, password:string){
    let newData= new LoginData(name,password);
    this.dataSource.next(newData);
}
}