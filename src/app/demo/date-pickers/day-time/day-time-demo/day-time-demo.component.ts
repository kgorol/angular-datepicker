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
  selector: 'dp-day-time-demo',
  templateUrl: './day-time-demo.component.html',
  styleUrls: ['./day-time-demo.component.less'],
  imports: [
    DatePickerComponent,
    FormsModule,
    ReactiveFormsModule,
    ConfigFormComponent,
  ],
})
export class DayTimeDemoComponent extends DateComponent implements OnInit {
  control: UntypedFormControl;
  config: IDatePickerConfig = {
    ...DEF_CONF,
    format: 'DD-MM-YYYY HH:mm:ss',
  };

  ngOnInit(): void {
    this.control = this.buildForm();
  }
}
