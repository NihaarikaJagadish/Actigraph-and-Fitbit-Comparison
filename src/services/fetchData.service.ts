
import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http'


@Injectable({
    providedIn: 'root'
})
export class FetchService{
    baseUri = 'http://localhost:5000/fetchingData';
    baseActivity = 'http://localhost:5000/activity';

    constructor(private http: HttpClient) {}

    fetchArrayData(data){
        return this.http.post(this.baseUri, data)
    }

    fetchActivityArrayData(data){
        return this.http.post(this.baseActivity, data)
    }
}