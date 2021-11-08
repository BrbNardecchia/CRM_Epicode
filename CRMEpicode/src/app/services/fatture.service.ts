import { HttpClient } from '@angular/common/http';
import { IFatture } from '../interfaces/ifatture';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FattureService {

  constructor(public http: HttpClient) { }
}
