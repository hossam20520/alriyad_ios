import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { FollowUpProjectsPage } from './follow-up-projects.page';

describe('FollowUpProjectsPage', () => {
  let component: FollowUpProjectsPage;
  let fixture: ComponentFixture<FollowUpProjectsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FollowUpProjectsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(FollowUpProjectsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
