import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Routes, RouterModule } from '@angular/router';
import { APP_BASE_HREF } from '@angular/common';
import { OwlModule } from 'ngx-owl-carousel';

import { AppComponent } from './app.component';
import { IndexComponent } from './index/index.component';
import { HeaderComponent } from './header/header.component';
import { CartComponent } from './cart/cart.component';
import { ProdescComponent } from './prodesc/prodesc.component';
import { FooterComponent } from './footer/footer.component';
import { CategoryComponent } from './category/category.component';
import { ContactComponent } from './contact/contact.component';
import { LoginSignupModelComponent } from './login-signup-model/login-signup-model.component';
import { RefundPolicyComponent } from './refund-policy/refund-policy.component';
import { OurPolicyComponent } from './our-policy/our-policy.component';
import { PrivacyPolicyComponent } from './privacy-policy/privacy-policy.component';
import { TermsConditionComponent } from './terms-condition/terms-condition.component';
import { GeneralqueryComponent } from './generalquery/generalquery.component';

import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatTabsModule } from '@angular/material/tabs';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule } from "@angular/forms";
import { ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { SpecialComponent } from './special/special.component';
import { BlogsComponent } from './blogs/blogs.component';
import { HttpClientModule } from '@angular/common/http';
import { CommonService } from './shared/common.service';
import { DashboardComponent } from './dashboard/dashboard.component';
import { EditAccountComponent } from './edit-account/edit-account.component';
import { EditAddressComponent } from './edit-address/edit-address.component';
import { AboutComponent } from './about/about.component';
import { PaymentFailComponent } from './payment-fail/payment-fail.component';
import { PaymentSuccessComponent } from './payment-success/payment-success.component';


const routes: Routes = [

  {
    path: 'sorry',
    component: PaymentFailComponent
  },
  {
    path: 'thankyou',
    component: PaymentSuccessComponent
  },
  {
    path: 'about',
    component: AboutComponent
  },
  {
    path: 'editaccount',
    component: EditAccountComponent
  },
  {
    path: 'editaddress',
    component: EditAddressComponent
  },
  {
    path: 'dashboard',
    component: DashboardComponent
  },
  {
    path: 'cart',
    component: CartComponent
  },
  {
    path: 'refundpolicy',
    component: RefundPolicyComponent
  },
  {
    path: 'ourpolicy',
    component: OurPolicyComponent
  },
  {
    path: 'privacypolicy',
    component: PrivacyPolicyComponent
  },
  {
    path: 'termscondition',
    component: TermsConditionComponent
  },
  {
    path: 'generalquery',
    component: GeneralqueryComponent
  },
  {
    path: 'prodesc/:id',
    component: ProdescComponent
  },
  {
    path: 'categorypage/:super_cat_id/:cat_id',
    component: CategoryComponent
  },
  {
    path: 'contact',
    component: ContactComponent
  },
  //adding the component developed by ashwin kushwah
  //component for MomskartSpecial
  {
    path: 'special',
    component: SpecialComponent
  },
  //for blog Component
  {
    path: 'blogs',
    component: BlogsComponent
  },
  {
    path: '**',
    component: IndexComponent
  }


];
@NgModule({
  declarations: [
    AppComponent,
    IndexComponent,
    HeaderComponent,
    CartComponent,
    ProdescComponent,
    FooterComponent,
    CategoryComponent,
    ContactComponent,
    LoginSignupModelComponent,
    RefundPolicyComponent,
    OurPolicyComponent,
    PrivacyPolicyComponent,
    TermsConditionComponent,
    GeneralqueryComponent,
    SpecialComponent,
    BlogsComponent,
    DashboardComponent,
    EditAccountComponent,
    EditAddressComponent,
    AboutComponent,
    PaymentFailComponent,
    PaymentSuccessComponent
  ],
  imports: [
    RouterModule.forRoot(routes, { useHash: true }),
    BrowserModule,
    OwlModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCardModule,
    MatTabsModule,
    FormsModule,
    MatInputModule,
    MatSelectModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatIconModule,
    MatExpansionModule,
    HttpClientModule
  ],

  providers: [CommonService, { provide: APP_BASE_HREF, useValue: '/' }],
  bootstrap: [AppComponent]
})
export class AppModule { }
