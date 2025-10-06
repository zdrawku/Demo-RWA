import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IGX_DATE_PICKER_DIRECTIVES, IGX_INPUT_GROUP_DIRECTIVES, IGX_SELECT_DIRECTIVES, IgxButtonDirective, IgxCheckboxComponent, IgxIconComponent, IgxRippleDirective } from '@infragistics/igniteui-angular';

@Component({
  selector: 'app-view-1',
  imports: [IGX_INPUT_GROUP_DIRECTIVES, IGX_DATE_PICKER_DIRECTIVES, IGX_SELECT_DIRECTIVES, IgxIconComponent, IgxCheckboxComponent, IgxButtonDirective, IgxRippleDirective, FormsModule],
  templateUrl: './view-1.component.html',
  styleUrls: ['./view-1.component.scss']
})
export class View1Component {
  public value?: string;
  public value1?: string;
  public value2?: string;
  public value3?: string;
  public value4?: string;
  public value5?: string;
  public value6?: string;
  public value7?: string;
  public value8?: string;
  public value9?: string;
  public value10?: string;
  public value11?: string;
  public value12?: string;
  public value13?: string;
  public value14?: string;
  public value15?: string;
}
