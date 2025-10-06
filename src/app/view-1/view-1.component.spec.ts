import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

import { IgxIconComponent, IGX_INPUT_GROUP_DIRECTIVES, IgxCheckboxComponent, IgxButtonDirective, IgxRippleDirective, IGX_SELECT_DIRECTIVES, IGX_DATE_PICKER_DIRECTIVES } from '@infragistics/igniteui-angular';
import { View1Component } from './view-1.component';

describe('View1Component', () => {
  let component: View1Component;
  let fixture: ComponentFixture<View1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [View1Component, NoopAnimationsModule, FormsModule, ReactiveFormsModule, IgxIconComponent, IGX_INPUT_GROUP_DIRECTIVES, IgxCheckboxComponent, IgxButtonDirective, IgxRippleDirective, IGX_SELECT_DIRECTIVES, IGX_DATE_PICKER_DIRECTIVES]
    })
    .compileComponents();

    fixture = TestBed.createComponent(View1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
