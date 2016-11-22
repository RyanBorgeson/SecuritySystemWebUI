/**
 * Data service handles interactions between the database and application
 * in regards to handling data information, sensor information, and retrieving
 * information from the API.
 * @Author Ryan Borgeson
 **/
import { Inject, Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class DataService {
    
    constructor( @Inject(Http) private _Http: Http) {
    }
    
    GetData() {
        return this._Http.get('http://ssapi.ryanborgeson.com/api/data')
            .map((response) => { return response.json(); });
    }

}