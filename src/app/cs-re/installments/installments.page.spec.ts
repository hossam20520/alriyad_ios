import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { InstallmentsPage } from './installments.page';

describe('InstallmentsPage', () => {
  let component: InstallmentsPage;
  let fixture: ComponentFixture<InstallmentsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InstallmentsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(InstallmentsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
