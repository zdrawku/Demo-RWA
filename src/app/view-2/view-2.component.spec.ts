import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

import { IgxIconComponent, IGX_INPUT_GROUP_DIRECTIVES, IgxCheckboxComponent } from '@infragistics/igniteui-angular';
import { View2Component } from './view-2.component';

describe('View2Component', () => {
  let component: View2Component;
  let fixture: ComponentFixture<View2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [View2Component, NoopAnimationsModule, FormsModule, ReactiveFormsModule, IgxIconComponent, IGX_INPUT_GROUP_DIRECTIVES, IgxCheckboxComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(View2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
