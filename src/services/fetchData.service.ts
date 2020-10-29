
import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http'


@Injectable({
    providedIn: 'root'
})
export class FetchService{
    baseUri = 'https://9135db5cf8cf.ngrok.io/fetchingData';
    baseActivity = 'https://9135db5cf8cf.ngrok.io/activity';

    constructor(private http: HttpClient) {}

    fetchArrayData(data){
        return this.http.post(this.baseUri, data)
    }

    fetchActivityArrayData(data){
        return this.http.post(this.baseActivity, data)
    }
}