import { Component } from '@angular/core';
import {
  GridDataResult,
  SortDescriptor,
  orderBy
} from '@progress/kendo-angular-grid';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Hello Angular 2!';
  private sort: SortDescriptor[] = [];
    private gridView: GridDataResult;
    private products: any[] = [{
        "ProductID": 1,
        "ProductName": "Chai",
        "UnitPrice": 18.0000,
        "Discontinued": false
    },{
        "ProductID": 2,
        "ProductName": "Chang",
        "UnitPrice": 19.0000,
        "Discontinued": false
    }];

    constructor() {
        this.loadProducts();
    }

    protected sortChange(sort: SortDescriptor[]): void {
        this.sort = sort;
        this.loadProducts();
    }

    private loadProducts(): void {
        this.gridView = {
            data: orderBy(this.products, this.sort),
            total: this.products.length
        };
    }
  selectEventHandler(event: any) {
    console.log(event);
  }
  // onButtonClick() {
  //   alert('Hello Kendo UI for Angular 2!');
  // }
}
