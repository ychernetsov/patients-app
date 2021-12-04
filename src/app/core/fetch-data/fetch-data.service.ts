import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Order } from "app/shared/models/order.model";
import { Patient } from "app/shared/models/patient.model";
import { Observable } from "rxjs";
import { map, shareReplay } from "rxjs/operators";
import { OrdersResponse } from "../orders/orders.models";
import { PatientsResponse } from "../patients/patients.models";

const CACHE_SIZE = 1;

@Injectable({
  providedIn: "root"
})
export class FetchDataService {
    orderCache$: Observable<Order[]>;
    patientsCache$: Observable<Patient[]>;
    ordersURL = 'https://api.mocki.io/v2/79fb05cb';
    patientsURL = 'https://api.mocki.io/v2/51597ef3';
    constructor(private http: HttpClient) {}

    getOrders() {
        if(!this.orderCache$) {
            this.orderCache$ = this.fetchOrders().pipe(
                shareReplay(CACHE_SIZE)
            );
        }
        return this.orderCache$;
    }

    fetchOrders() {
        return this.http.get<OrdersResponse>(this.ordersURL).pipe(
            map(response => response.order)
        );
    }

    getPatients() {
        if(!this.patientsCache$) {
            this.patientsCache$ = this.fetchPatients().pipe(
                shareReplay(CACHE_SIZE)
            );
        }
        return this.patientsCache$;
    }

    fetchPatients() {
        return this.http.get<PatientsResponse>(this.patientsURL).pipe(
            map(response => response.patient)
        );
    }
}
