import { Component, OnInit } from '@angular/core';
import { DateComponent } from '../../../common/date-component.component';
import {
  UntypedFormControl,
  FormsModule,
  ReactiveFormsModule,
} from '@angular/forms';
import { IDatePickerConfig } from '../../../../../../projects/ng2-date-picker/src/public-api';
import { DEF_CONF } from '../../../common/conts/consts';
import { TimeSelectComponent } from '../../../../../../projects/ng2-date-picker/src/lib/time-select/time-select.component';
import { ConfigFormComponent } from '../../../config-form/config-form.component';

@Component({
  selector: 'dp-time-inline-demo',
  templateUrl: './time-inline-demo.component.html',
  styleUrls: ['./time-inline-demo.component.less'],
  imports: [
    TimeSelectComponent,
    FormsModule,
    ReactiveFormsModule,
    ConfigFormComponent,
  ],
})
export class TimeInlineDemoComponent extends DateComponent implements OnInit {
  control: UntypedFormControl;
  config: IDatePickerConfig = {
    ...DEF_CONF,
    format: 'HH:mm:ss',
  };

  ngOnInit(): void {
    this.control = this.buildForm();
  }
}
