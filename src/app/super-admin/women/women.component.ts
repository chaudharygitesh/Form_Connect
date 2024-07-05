import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Modal } from 'bootstrap';
interface Card {
  title: string;
  source: string;
  description: string;
}
interface Product {
  productName: string;
  productColor:string;
  productPrice:number;
  productPhoto:string;
}
@Component({
  selector: 'app-women',
  templateUrl: './women.component.html',
  styleUrls: ['./women.component.scss']
})
export class WomenComponent {

  inputNode: any ;
  title: any;
  source: any;
  file: any;
  description: any;
  cards: Card[] = [];
  product: Product[] = [];
modal: Modal | undefined;

  ngOnInit() {
    if (localStorage.getItem('collections') === null) {
      localStorage.setItem('collections', JSON.stringify(this.product));
    }
    let getcollections = localStorage.getItem('collections');
    localStorage.setItem('collections', JSON.stringify(this.product));
    this.product = getcollections ? JSON.parse(getcollections) : [];
  }

  productForm: FormGroup;

  constructor(private router:Router) {
    this.productForm = new FormGroup({
      productName: new FormControl('', Validators.required),
      productColor: new FormControl('', Validators.required),
      productPrice: new FormControl('', [Validators.required, Validators.min(0)]),
      productPhoto: new FormControl('', Validators.required)
    });
  }
  // FileChange(event:any) {
  //   debugger;
  //   // this.file = event.target.files[0];
  //   this.inputNode= this.file.value.replace("C:\\fakepath\\", "");
// }
onSubmit() {
  if (this.productForm.valid) {
    debugger;
    this.product.push({
      productName: this.productForm.value.productName,
      productColor: this.productForm.value.productColor,
      productPrice: this.productForm.value.productPrice,
      productPhoto: this.productForm.value.productPhoto
    })

    console.log('Form submitted:', this.productForm.value);
    localStorage.setItem('collections', JSON.stringify(this.product));
  }
}
Buyer(){
  this.router.navigate(['/shop/buyer']);
}
menSeller(){
  this.router.navigate(['/men']);
}
WomenSeller(){
  this.router.navigate(['/women']);
}
Sellerlogin(){
  this.router.navigate(['/AdminLogin']);
}
}
