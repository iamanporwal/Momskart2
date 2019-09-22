import { Component, OnInit } from '@angular/core';
import { CommonService } from '../shared/common.service';
import { Router } from '@angular/router';
import { UrlConstants } from '../shared/url-constant';
import { Product } from '../product';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  public cartItems: Product[];
  public userId: number;
  public cartTotal: number;
  constructor(private commonService: CommonService, private router: Router) { }

  ngOnInit() {
    this.userId = this.commonService.checkLogin();
    if (!this.userId) {
      this.router.navigate(['/']);
      return;
    }
    this.getCartList();
  }

  updateQuantity(action, productId, quantity) {
    let result;
    if (action === 'plus') {
      result = this.commonService.addToCart(productId, +quantity + +1, this.userId);
    } else if (action === 'minus') {
      // document.getElementById('quantity').setAttribute('value', '6');
      result = this.commonService.addToCart(productId, +quantity - +1, this.userId);
    } else if (action === 'update') {
      result = this.commonService.addToCart(productId, quantity, this.userId);
    }

    result.subscribe(data => {
      if (data.status === true) {
        this.getCartList();
      }
    });
  }

  getCartList() {
    this.commonService.post(UrlConstants.getCartList, {user_id: this.userId}).subscribe(data => {
      console.log(data);
      if (data.status === true) {
        this.cartItems = data.result;
        this.cartTotal = data.calculateCartAmount;
        this.commonService.updateCartItemCount(data.cartItemQuantity);
      }
    });
  }

}
