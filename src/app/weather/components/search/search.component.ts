import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

import { Observable } from 'rxjs/observable';

import { Store } from '@ngrx/store';
import * as fromStore from '../../store';
import { Subscription } from 'rxjs/Subscription';

@Component({
    selector: 'app-search',
    templateUrl: './search.component.html'
})
export class SearchComponent implements OnInit, OnDestroy {
    failed$: Observable<any> = this.store.select(fromStore.getCityFailed);

    city: FormControl = new FormControl('', Validators.required);
    errorMessage = false;
    errorSub: Subscription;

    constructor(
        private store: Store<fromStore.State>
    ) {}

    ngOnInit(): void {
        this.errorSub = this.failed$.subscribe(data => {
            this.errorMessage = data;
        });
    }

    ngOnDestroy(): void {
        this.errorSub.unsubscribe();
    }

    search(): void {
        if (this.city.valid) {
            this.store.dispatch(new fromStore.GetCity(this.city.value.toLowerCase()));

            this.city.reset();
        }
    }
}
