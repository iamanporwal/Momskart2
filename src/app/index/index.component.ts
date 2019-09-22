import { Component, OnInit } from '@angular/core';
import { Product } from '../product';
import { CommonService } from '../shared/common.service';
import { UrlConstants } from '../shared/url-constant';


declare var $: any;

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss']
})
export class IndexComponent implements OnInit {
  // list: Product[];
  list = []
  newAddition = [];
  id1: number = 1000;
  id2: number = 1001;
  id3: number = 1002;
  id4: number = 1003;
  id5: number = 1004;

  constructor(private commonService: CommonService) { }

  ngOnInit() {
    const user = JSON.parse(window.localStorage.getItem('user'));
    this.commonService.post(UrlConstants.getHomeData, {
      user_id: user ? user['id'] : '',
      device_id: '123'
    }).subscribe(data => {
      if (data['status'] === true) {
        this.list = data['bestSellingProduct'];
      }
    });
    
    $('.owl-carousel').owlCarousel();

    this.commonService.get(UrlConstants.getNewAddition).subscribe(data => {
      if (data['status'] === true) {
        // this.list = data['bestSellingProduct'];
        // console.log(data);
        this.newAddition = data['category_list'];
      }
    });
  }

}

