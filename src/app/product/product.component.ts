import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  product = [
    {
    id: 1,
    name: 'ai phôn 1',
    price: 1300000,
    desc: 'Áp bồ'
  },
  {
    id: 2,
    name: 'ai phôn 2',
    price: 1300000,
    desc: 'áp bồ'
  },
  {
    id: 3,
    name: 'ai phôn 3',
    price: 1300000,
    desc: 'áp bồ'
  },
  
];
  newProduct = {
    id: 0,
    name: '',
    price: 0,
    desc: ''
  };
  remove(id :number){
    const confirm = window.confirm("Bạn có muốn xóa không")
    this.product = this.product.filter(pro => pro.id !== id);
  }
  onChangeInput(event: any, key: string,){
    const inputValue = event.target.value;

    this.newProduct = {
      ...this.newProduct,
      [key]: inputValue
    };
  }
  onSubmit(product : any){
   
      if (this.newProduct.id) {
        // Neu co id thi se la cong viec chinh sua
        // Tim xem dau la phan tu co id la id dang duoc chinh sua
        for (let i = 0; i < this.product.length; i++) {
          // Kiem tra phan tu nao co id trung voi id cua du lieu chinh sua
          if (this.product[i].id === this.newProduct.id) {
            // Khi tim thay thi gan gia tri cho phan tu do
            this.product[i] = this.newProduct;
          }
        }
      } else {
      this.newProduct = {
        ...this.newProduct,
        id: this.product.length + 1,
        price: Number(this.newProduct.price)

      };
      this.product.push(this.newProduct);
    }
    
  };
  onEdit(p: any) {
    this.newProduct = p;
  }
}


  


