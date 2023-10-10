import { Injectable } from "@angular/core";
import { Actions, ofType, createEffect } from "@ngrx/effects";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { catchError, map, mergeMap, tap } from "rxjs/operators";
import { of } from 'rxjs';
import { Router } from "@angular/router";

import { paymentRequestFailure, paymentRequestSuccess, setPaymentInfo } from "./userInfo.actions";
import { RESPONSE_PAGE } from "src/constants";

@Injectable()
export class PaymentInfoEffects {
    constructor(private actions$: Actions, private http: HttpClient, private router: Router) { }

    httpHeaders = {
        headers: new HttpHeaders({
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Methods': 'GET, POST, OPTIONS, PUT, DELETE',
            'Access-Control-Allow-Headers': 'Content-Type, Access-Control-Allow-Headers, X-Requested-With'
        }),
        mode: 'no cors'
    }

    processPayment$ = createEffect(() => this.actions$.pipe(
        ofType(setPaymentInfo),
        mergeMap((action) => this.http.post('/personalInfo', action.data, this.httpHeaders)
            .pipe(
                map((response: any) => paymentRequestSuccess({ paymentDataId: response.paymentDataId })),
                catchError(err => of(paymentRequestFailure({ error: err }))),
                tap(() => this.router.navigate([`./${RESPONSE_PAGE}`])),
            )),
    )
    )
}