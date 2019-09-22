import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Router } from '@angular/router';
import { CommonService } from '../shared/common.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { UrlConstants } from '../shared/url-constant';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  public userData: any;
  public cartItemCount = 0;
  searchForm: FormGroup;
  menuItems = [];

  @ViewChild('loginButton') public loginButton: ElementRef<HTMLElement>;

  constructor(public router: Router, public commonService: CommonService, private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.searchForm = this.formBuilder.group({
      serchData: ['', Validators.required],
    });
    this.commonService.get(UrlConstants.getMenuItems).subscribe(data => {
      if (data.status === true && data.code === 200) {
        this.menuItems = data.super_cat_list;
      }
    });
    this.commonService.openLoginPopup().subscribe(data => {
      if (data) {
        this.loginButton.nativeElement.click();
      }
    });

    this.commonService.getCartItemCount().subscribe(data => {
      if (data) {
        this.cartItemCount = data;
      }
    });
    this.userData = localStorage.getItem('user');
    if (this.userData) {
      this.userData = JSON.parse(this.userData);
    }
  }

  performAction(event) {
    this.userData = event;
  }

  logout() {
    localStorage.removeItem('user');
    this.userData = null;
    this.cartItemCount = 0;
    this.router.navigate(['/']);
  }
  search(){

  }

}
