
import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http'


@Injectable({
    providedIn: 'root'
})
export class FetchService{
    baseUri = 'https://738d89a6e75b.ngrok.io/fetchingData';

    constructor(private http: HttpClient) {}

    fetchArrayData(data){
        return this.http.post(this.baseUri, data)
    }
}