import { Component, OnInit } from '@angular/core';
import { DateComponent } from '../../../common/date-component.component';
import {
  UntypedFormControl,
  FormsModule,
  ReactiveFormsModule,
} from '@angular/forms';
import { IDatePickerConfig } from '../../../../../../projects/ng2-date-picker/src/public-api';
import { DEF_CONF } from '../../../common/conts/consts';
import { DatePickerDirective } from '../../../../../../projects/ng2-date-picker/src/lib/date-picker/date-picker.directive';
import { ConfigFormComponent } from '../../../config-form/config-form.component';

@Component({
  selector: 'dp-month-directive-demo',
  templateUrl: './month-directive-demo.component.html',
  styleUrls: ['./month-directive-demo.component.less'],
  imports: [
    FormsModule,
    DatePickerDirective,
    ReactiveFormsModule,
    ConfigFormComponent,
  ],
})
export class MonthDirectiveDemoComponent
  extends DateComponent
  implements OnInit
{
  control: UntypedFormControl;
  config: IDatePickerConfig = {
    ...DEF_CONF,
    format: 'MMM, YYYY',
  };

  ngOnInit(): void {
    this.control = this.buildForm();
  }
}
