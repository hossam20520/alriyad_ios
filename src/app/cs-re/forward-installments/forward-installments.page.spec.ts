import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ForwardInstallmentsPage } from './forward-installments.page';

describe('ForwardInstallmentsPage', () => {
  let component: ForwardInstallmentsPage;
  let fixture: ComponentFixture<ForwardInstallmentsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ForwardInstallmentsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ForwardInstallmentsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
