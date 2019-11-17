import { Component } from '@angular/core';

import { Observable } from 'rxjs/observable';

import { Store } from '@ngrx/store';
import * as fromStore from '../../store';

@Component({
    selector: 'app-results',
    templateUrl: './results.component.html'
})
export class ResultsComponent {
    cities$: Observable<any> = this.store.select(fromStore.getCity);

    constructor(
        private store: Store<fromStore.State>
    ) {}
}
