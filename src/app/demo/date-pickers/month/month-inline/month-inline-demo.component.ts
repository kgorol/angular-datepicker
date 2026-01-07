import { Component, OnInit } from '@angular/core';
import { DateComponent } from '../../../common/date-component.component';
import {
  UntypedFormControl,
  FormsModule,
  ReactiveFormsModule,
} from '@angular/forms';
import { IDatePickerConfig } from '../../../../../../projects/ng2-date-picker/src/public-api';
import { DEF_CONF } from '../../../common/conts/consts';
import { MonthCalendarComponent } from '../../../../../../projects/ng2-date-picker/src/lib/month-calendar/month-calendar.component';
import { ConfigFormComponent } from '../../../config-form/config-form.component';

@Component({
  selector: 'dp-month-inline',
  templateUrl: './month-inline-demo.component.html',
  styleUrls: ['./month-inline-demo.component.less'],
  imports: [
    MonthCalendarComponent,
    FormsModule,
    ReactiveFormsModule,
    ConfigFormComponent,
  ],
})
export class MonthInlineDemoComponent extends DateComponent implements OnInit {
  control: UntypedFormControl;
  config: IDatePickerConfig = {
    ...DEF_CONF,
    format: 'MMM, YYYY',
  };

  ngOnInit(): void {
    this.control = this.buildForm();
  }
}
