import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';



import saleInfo from '../../../assets/json/salesdata.json';


@Component({
  selector: 'app-datasales',
  templateUrl: './datasales.component.html',
  styleUrls: ['./datasales.component.css'],
})
export class DatasalesComponent implements OnInit 
{
  data: any[];
  searchNumber: number;

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.getData();
  }

  getData(): void {
    this.http.get<any[]>('assets/json/salesdata.json')
      .subscribe(data => {
        this.data = data;
      });
  }

  filteredData(): any[] {
    return this.data.filter(item => item.id === this.searchNumber);
  }

}
