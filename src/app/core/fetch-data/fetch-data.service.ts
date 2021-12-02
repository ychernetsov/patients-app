import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root"
})
export class FetchDataService {
  ordersURL = 'https://api.mocki.io/v2/79fb05cb';
  constructor(private http: HttpClient) {}

  fetchOrders() {
      return this.http.get(this.ordersURL);
  }
}
