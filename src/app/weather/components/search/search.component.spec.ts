import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { By } from '@angular/platform-browser';

import { combineReducers, Store, StoreModule } from '@ngrx/store';
import * as fromRoot from './../../store/reducers';
import * as fromReducers from './../../store';

import { SearchComponent } from './search.component';

import Spy = jasmine.Spy;

describe('SearchComponent', () => {
    let component: SearchComponent;
    let fixture: ComponentFixture<SearchComponent>;
    let dispatchSpy: Spy;
    let searchSpy: Spy;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [ SearchComponent ],
            imports: [
                FormsModule,
                ReactiveFormsModule,
                StoreModule.forRoot(
                {
                    ...fromRoot.reducers,
                    weather: combineReducers(fromReducers.reducers)
                }
                )],
            schemas: [CUSTOM_ELEMENTS_SCHEMA]
        }).compileComponents();
    }));

    beforeEach(() => {
        dispatchSpy = spyOn(TestBed.get(Store), 'dispatch');
        fixture = TestBed.createComponent(SearchComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    it('should dispatch an action with city name when called', () => {
        const query = 'London';
        searchSpy = spyOn(component, 'search').and.callFake(() => {
            dispatchSpy.call(null);
        });

        searchSpy(query);

        fixture.detectChanges();

        expect(searchSpy).toHaveBeenCalledWith(query);
        expect(dispatchSpy).toHaveBeenCalled();
    });

    it('should display search input box', () => {
        expect(fixture.debugElement.query(By.css('.form-control')).nativeElement).toBeTruthy();
    });

    it('should display button with text "Search"', () => {
        expect(fixture.debugElement.query(By.css('.btn-search')).nativeElement).toBeTruthy();
        expect(fixture.debugElement.query(By.css('.btn-search')).nativeElement.innerText).toEqual('Search');
    });

    it('should display error message when errorMessage is true', () => {
        component.errorMessage = true;
        fixture.detectChanges();

        expect(fixture.debugElement.query(By.css('.errorMessage')).nativeElement).toBeTruthy();
        expect(fixture.debugElement.query(By.css('.errorMessage')).nativeElement.innerText).toEqual('City not found');
    });
});
