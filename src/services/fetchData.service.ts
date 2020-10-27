
import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http'


@Injectable({
    providedIn: 'root'
})
export class FetchService{
    baseUri = 'https://1227d57e7d63.ngrok.io/fetchingData';

    constructor(private http: HttpClient) {}

    fetchArrayData(data){
        return this.http.post(this.baseUri, data)
    }
}