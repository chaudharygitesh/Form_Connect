import { Component } from '@angular/core';
import { Router } from '@angular/router';
interface Product {
  productName: string;
  productColor:string;
  productPrice:number;
  productPhoto:string;
}
@Component({
  selector: 'app-buyer',
  templateUrl: './buyer.component.html',
  styleUrls: ['./buyer.component.scss']
})
export class BuyerComponent {
  product:Product []=[];
  constructor(private router :Router){  }
  ngOnInit() {
    if (localStorage.getItem('collections') === null) {
      localStorage.setItem('collections', JSON.stringify(this.product));
    }
    let getcollections1 = localStorage.getItem('collections');
    
    this.product = getcollections1 ? JSON.parse(getcollections1) : [];
  console.log(this.product)
  }
  Menuser(){
    this.router.navigate(['/men']);
  }
  womenuser(){
    this.router.navigate(['/women']);
  }
}
