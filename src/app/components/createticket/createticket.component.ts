import { Component } from '@angular/core';
import { BsDatepickerConfig } from 'ngx-bootstrap/datepicker';
import { FormBuilder,FormGroup,Validators } from '@angular/forms';
import { ServiceService } from 'src/app/services/service.service';


@Component({
  selector: 'app-createticket',
  templateUrl: './createticket.component.html',
  styleUrls: ['./createticket.component.css']
})
export class CreateticketComponent {
  selectedDate: Date = new Date();
  datepickerConfig: Partial<BsDatepickerConfig> = {
    containerClass: 'theme-dark-blue',
    dateInputFormat: 'DD/MM/YYYY', 
  };


  issueForm: FormGroup;

  constructor(private fb: FormBuilder, private service: ServiceService) {
    // Initialize the form group and form controls
    this.issueForm = this.fb.group({
      project: ['', Validators.required],
      issueType: ['', Validators.required],
      summary: ['', Validators.required],
      priority: [''],
      description: [''],
      startDate: [''],
      endDate: [''],
      status: ['']
    });
  }


  onSubmit() {
    if (this.issueForm.valid) {
      const formData = this.issueForm.value;
      this.service.postData(formData).subscribe(
        response => {
          console.log('Data posted successfully:', response);
          this.issueForm.reset();
        },
        error => {
          console.error('Error posting data:', error);
        }
      );
    } else {
    }
  }
  
  cancel() {
    console.log(this.issueForm.value)
  }
  
}
