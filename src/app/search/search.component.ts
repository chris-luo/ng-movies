import { Component, OnInit, ViewChild, ElementRef, NgZone, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { BaseComponent } from '../shared/base.component';
import { ApiService } from '../services/api.service';
import { fromEvent } from 'rxjs';
import { debounceTime, takeUntil, distinctUntilChanged, map } from 'rxjs/operators';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styles: [
    `
    .input-search {
      width: 100%;
    }
    .media-type {
      color: #bbb;
    }
    `
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SearchComponent extends BaseComponent implements OnInit {
  searchForm: FormGroup;
  @ViewChild('input') inputElRef: ElementRef;
  results: any[];

  constructor(
    private fb: FormBuilder,
    private apiService: ApiService,
    private cd: ChangeDetectorRef,
    private router: Router) { super(); }

  ngOnInit() {
    this.initForm();
    this.searchHandler();
  }

  initForm = () => {
    this.searchForm = this.fb.group({
      query: null
    });
  }

  searchHandler() {
    fromEvent(this.inputElRef.nativeElement, 'keyup')
      .pipe(
        takeUntil(this.destroy$),
        debounceTime(300),
        map(event => event['target'].value),
        distinctUntilChanged()
      )
      .subscribe(value => {
        if (value === '') {
          this.results = [];
          this.cd.detectChanges();
          return;
        }
        this.apiService.searchMovie(value)
          .subscribe(res => {
            console.log(res);
            this.results = res.results;
            this.cd.detectChanges();
          });
      });
  }

  onResult(result) {
    console.log(result);
    this.results = [];
    switch (result.media_type) {
      case 'movie':
        this.router.navigate(['movies', result.id]);
        this.searchForm.setValue({
          query: result.title
        });
        break;
      case 'tv':
        this.router.navigate(['tv', result.id]);
        this.searchForm.setValue({
          query: result.name
        });
        break;
      case 'person':
        this.router.navigate(['person', result.id]);
        this.searchForm.setValue({
          query: result.name
        });
        break;
      default:
        console.error(result.media_type, 'not implemented');
        break;
    }
  }
}
