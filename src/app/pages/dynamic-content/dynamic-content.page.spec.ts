import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DynamicContentPage } from './dynamic-content.page';

describe('DynamicContentPage', () => {
  let component: DynamicContentPage;
  let fixture: ComponentFixture<DynamicContentPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DynamicContentPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DynamicContentPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
