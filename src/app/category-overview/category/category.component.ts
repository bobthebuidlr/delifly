import { animate, keyframes, state, style, transition, trigger } from '@angular/animations';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss'],
  animations: [
    trigger('showHide', [
      state(
        'hide',
        style({
          height: '0px',
          opacity: 0
        })
      ),
      state(
        'show',
        style({
          height: '100%',
          opacity: 0.6
        })
      ),
      transition('hide => show', animate('.6s ease', keyframes([
        style({height: '0px', opacity: 0, offset: 0}),
        style({height: '80px', opacity: 0, offset: 0.5}),
        style({height: '120px', opacity: 0.2, offset: 0.8}),
        style({height: '100%', opacity: 0.6, offset: 1})
      ])
      )),
      transition('show => hide', animate('.2s ease'))
  ]
    ),
    trigger('enableViewCategory', [
      state('disabled', style({
        'background-color': 'transparent'
      })),
      state('enabled', style({
        'background-color': '#dab552',
        width: '250px',
        height: '56px',
        'border-radius': '28px',
        color: '#222222',
        'letter-spacing': '1.21px',
        'font-size': '18px',
        'font-weight': '600'
      })),
      transition('disabled => enabled', animate('0.2s ease'))
    ])
  ]
})
export class CategoryComponent implements OnInit {

  @Input() category: any;
  @Input() active = false;
  @Output() clickedCategory: EventEmitter<string> = new EventEmitter();

  activeCategory = 'liquor';

  constructor(private router: Router) { }

  ngOnInit() {
  }

  triggerCategory() {
    if (this.active) {
      this.router.navigate([`/gallery/${this.category.name}`]);
    } else {
      this.clickedCategory.emit(this.category.name);
    }
    this.active = !this.active;
  }

}
