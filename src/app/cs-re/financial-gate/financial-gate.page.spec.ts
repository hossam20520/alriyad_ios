import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { FinancialGatePage } from './financial-gate.page';

describe('FinancialGatePage', () => {
  let component: FinancialGatePage;
  let fixture: ComponentFixture<FinancialGatePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FinancialGatePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(FinancialGatePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
