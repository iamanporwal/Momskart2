import { Component, OnInit } from '@angular/core';
import { Router, ParamMap, ActivatedRoute  } from '@angular/router';
declare var $: any;

@Component({
  selector: 'app-special',
  templateUrl: './special.component.html',
  styleUrls: ['./special.component.scss']
})
export class SpecialComponent implements OnInit {

public quantity=1;
private sub:any;
public id:any;
constructor(private route: ActivatedRoute,
  private router: Router,) { }
  prodlist=[
    { "id":1000,"img":"/assets/product/1.jpg","name":"Product 1","price":25 },
    { "id":1001,"img":"/assets/product/2.jpg","name":"Product 2","price":67 },
    { "id":1002,"img":"/assets/product/3.jpg","name":"Product 3","price":88 },
    { "id":1003,"img":"/assets/product/4.jpg","name":"Product 4","price":78 },
    { "id":1004,"img":"/assets/product/5.jpg","name":"Product 5","price":62 },
    { "id":1005,"img":"/assets/product/6.jpg","name":"Product 6","price":31 },
    { "id":1006,"img":"/assets/product/7.jpg","name":"Product 7","price":18 },
    { "id":1007,"img":"/assets/product/8.jpg","name":"Product 8","price":56 },
    { "id":1008,"img":"/assets/product/9.jpg","name":"Product 9","price":77 },
    { "id":1009,"img":"/assets/product/10.jpg","name":"Product 10","price":22 },
    { "id":1010,"img":"/assets/product/11.jpg","name":"Product 11","price":29 },
    { "id":1011,"img":"/assets/product/12.jpg","name":"Product 12","price":79 },
  ]
ngOnInit() {

  $('.owl-carousel').owlCarousel();

  this.sub = this.route.params.subscribe(params => {
    this.id = params['id'];
    });
    // console.log('Prodesc sub',this.sub);
    // console.log('Prodesc id',this.id);
  }

  increment(){
    this.quantity+=1
  }
  decrement(){
    if(this.quantity>1){
      this.quantity-=1
    }
  }
  getitem(){
    return this.prodlist.filter((item)=>item.id == this.id);
  }

}
