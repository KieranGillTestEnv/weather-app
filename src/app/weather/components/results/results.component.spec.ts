import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { combineReducers, StoreModule } from '@ngrx/store';
import * as fromRoot from './../../store/reducers';
import * as fromReducers from './../../store';

import { ResultsComponent } from './results.component';

describe('ResultsComponent', () => {
    let component: ResultsComponent;
    let fixture: ComponentFixture<ResultsComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [ ResultsComponent ],
            imports: [
                StoreModule.forRoot(
                {
                    ...fromRoot.reducers,
                    weather: combineReducers(fromReducers.reducers)
                }),
            ],
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(ResultsComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    it('should display table headings', () => {
        const headings = fixture.debugElement.query(By.css('.thead-dark tr')).nativeElement.innerText;

        expect(headings).toContain('City');
        expect(headings).toContain('6 AM');
        expect(headings).toContain('12 PM');
        expect(headings).toContain('6 PM');
        expect(headings).toContain('12 AM');
    });
});
