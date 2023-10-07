import { Component } from '@angular/core';

interface IProduct {
  id: number
  title: string
  price: number
};

@Component({
  selector: 'app-dynamic-item',
  templateUrl: './dynamic-item.component.html',
  styleUrls: ['./dynamic-item.component.css']
})


export class DynamicItemComponent {

  public products: IProduct[] = [
    {
      id: 1,
      title: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
      price: 109.95
    },
    {
      id: 2,
      title: "Mens Casual Premium Slim Fit T-Shirts ",
      price: 22.3
    },
    {
      id: 3,
      title: "Mens Cotton Jacket",
      price: 55.99
    },
    {
      id: 4,
      title: "Mens Casual Slim Fit",
      price: 15.99
    }
  ];

}