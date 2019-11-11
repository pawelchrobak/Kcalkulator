import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-export',
  templateUrl: './data-export.component.html',
  styleUrls: ['./data-export.component.scss']
})
export class DataExportComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  onSubmit(value) {
    console.log(value);
  }

  exportData() {
    // let dataToExport = {};

    // for (const key in localStorage) {
    //   localStorage[key];
    //   if (localStorage.hasOwnProperty(key)) {
    //     const element = localStorage[key];
    //     console.log(element);
    //   }
    // }


    let file = new Blob([JSON.stringify(localStorage)]),
        url = URL.createObjectURL(file),
        a = document.createElement('a');
    
    a.href = url;
    a.download = 'kcal_data.json';
    a.click();
  }

}
