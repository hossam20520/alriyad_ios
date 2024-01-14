import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AlreadyAddedPage } from './already-added.page';

describe('AlreadyAddedPage', () => {
  let component: AlreadyAddedPage;
  let fixture: ComponentFixture<AlreadyAddedPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlreadyAddedPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AlreadyAddedPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
