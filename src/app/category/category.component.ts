import { Component, OnInit } from '@angular/core';
import { Product } from '../product';
import { CommonService } from '../shared/common.service';
import { UrlConstants } from '../shared/url-constant';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss']
})
export class CategoryComponent implements OnInit {
  userId: number;
  products: Product[];
  device_id: 123456;
  super_cat_id: number;
  cat_id : number;

  constructor(public commonService: CommonService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    const userData = localStorage.getItem('user');
    this.userId = userData ? JSON.parse(userData).id : '';
    this.route.params.subscribe(params => {
      this.device_id = 123456;
      this.super_cat_id = params.super_cat_id;
      this.cat_id = params.cat_id;

      this.commonService.post(UrlConstants.getProductList, {device_id: this.device_id,
        super_cat_id: this.super_cat_id, cat_id: this.cat_id} ).subscribe(data => {
        if (data.status === true) {
          this.products = data.result;
        } else {
          this.products = [];
        }
      });
    });
  }

  addToCart(productId, quantity) {
    if (!this.userId) {
      const userData = localStorage.getItem('user');
      this.userId = userData ? JSON.parse(userData).id : '';
    }
    const response = this.commonService.addToCart(productId, quantity, this.userId);
    if (response) {
      response.subscribe(data => {
        if (data.status === true) {
          this.router.navigate(['/cart']);
        } else {
          alert('Something went wrong, please try again later');
        }
      });
    }
  }

}
