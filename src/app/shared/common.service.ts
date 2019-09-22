import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { UrlConstants } from './url-constant';

@Injectable()
export class CommonService {
    headers = new HttpHeaders({
        'Content-Type': 'application/json'
    });
    options = { headers: this.headers };
    private loginCheck = new BehaviorSubject<any>(false);
    private cartItemCount = new BehaviorSubject<any>(0);

    constructor(private http: HttpClient) { }

    public post(url, data): Observable<any> {
        // return <Observable<any>>this.http.post(url, data, this.options);
        return this.http.post(url, data);
    }
    public get(url): Observable<any> {
        return this.http.get(url);
    }

    public checkLogin() {
        const userData = localStorage.getItem('user');
        if (userData) {
            const userDetails = JSON.parse(userData);
            return userDetails.id;
        }
        return false;
    }

    public addToCart(productId, productQuantity, userId): Observable<any> {
        if (!this.checkLogin()) {
            this.loginCheck.next(true);
            return null;
        }
        return this.http.post(UrlConstants.addToCart, {product_id: productId, user_id: userId, quantity: productQuantity});
    }

    public openLoginPopup(): Observable<any> {
        return this.loginCheck.asObservable();
    }

    public updateCartItemCount(count: number) {
        this.cartItemCount.next(count);
    }

    public getCartItemCount() {
        return this.cartItemCount.asObservable();
    }
    public getCurrentBestSellers(id) {
        return this.http.post(UrlConstants.getHomeData, id);
    }
}
