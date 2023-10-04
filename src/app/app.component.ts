import { Component } from '@angular/core';
import emailjs, { EmailJSResponseStatus } from 'emailjs-com';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css']
})
export class ContactFormComponent {

  public sendEmail(e: Event) {
    e.preventDefault();
    emailjs.sendForm('service_qbeq1id', 'template_d37bkw6', e.target as HTMLFormElement, 'GbaQxc_ppEIbcc2h8')
      .then((result: EmailJSResponseStatus) => {
        console.log(result.text);
        alert('Email sent successfully!');
        // Reset the form
        (e.target as HTMLFormElement).reset();
      }, (error) => {
        console.log(error.text);
        alert('Error sending email: ' + error.text);
      });
  }
}

