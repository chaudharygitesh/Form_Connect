import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import { Router } from '@angular/router';
interface Product {
quantity: any;
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
  // capacity: any;
  constructor(private router :Router){  }
  ngOnInit() {
    if (localStorage.getItem('collections') === null) {
      localStorage.setItem('collections', JSON.stringify(this.product));
    }
    let getcollections1 = localStorage.getItem('collections');
    
    this.product = getcollections1 ? JSON.parse(getcollections1) : [];
  console.log(this.product)

  }

  capacity = new FormControl(0);

  // increment() {
  //   this.capacity.setValue(this.capacity.value + 1);
  // }

  // decrement() {
  //   if (this.capacity.value > 0) {
  //     this.capacity.setValue(this.capacity.value - 1);
  //   }
  // }

  


  Menuser(){
    this.router.navigate(['/men']);
  }
  womenuser(){
    this.router.navigate(['/women']);
  }
}
