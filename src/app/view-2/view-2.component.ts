import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IGX_INPUT_GROUP_DIRECTIVES, IgxCheckboxComponent, IgxIconComponent } from '@infragistics/igniteui-angular';

@Component({
  selector: 'app-view-2',
  imports: [IGX_INPUT_GROUP_DIRECTIVES, IgxIconComponent, IgxCheckboxComponent, FormsModule],
  templateUrl: './view-2.component.html',
  styleUrls: ['./view-2.component.scss']
})
export class View2Component {
  public value?: string;
  public value1?: string;
  public value2?: string;
  public value3?: string;
  public value4?: string;
  public value5?: string;
  public value6?: string;
  public value7?: string;
  public value8?: string;
}
