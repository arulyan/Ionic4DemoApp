import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Testing1Page } from './testing1.page';

describe('Testing1Page', () => {
  let component: Testing1Page;
  let fixture: ComponentFixture<Testing1Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Testing1Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Testing1Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
