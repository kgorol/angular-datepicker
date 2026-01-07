import { Component, OnInit } from '@angular/core';
import { DateComponent } from '../../../common/date-component.component';
import {
  UntypedFormControl,
  FormsModule,
  ReactiveFormsModule,
} from '@angular/forms';
import { IDatePickerConfig } from '../../../../../../projects/ng2-date-picker/src/public-api';
import { DEF_CONF } from '../../../common/conts/consts';
import { DatePickerComponent } from '../../../../../../projects/ng2-date-picker/src/lib/date-picker/date-picker.component';
import { ConfigFormComponent } from '../../../config-form/config-form.component';

@Component({
  selector: 'dp-month-demo',
  templateUrl: './month-demo.component.html',
  styleUrls: ['./month-demo.component.less'],
  imports: [
    DatePickerComponent,
    FormsModule,
    ReactiveFormsModule,
    ConfigFormComponent,
  ],
})
export class MonthDemoComponent extends DateComponent implements OnInit {
  control: UntypedFormControl;
  config: IDatePickerConfig = {
    ...DEF_CONF,
    format: 'MMM, YYYY',
  };

  ngOnInit(): void {
    this.control = this.buildForm();
  }
}
