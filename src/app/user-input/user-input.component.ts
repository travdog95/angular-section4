import { Component, EventEmitter, output, Output, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import type { UserInput } from './user-input.model';

@Component({
  selector: 'app-user-input',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './user-input.component.html',
  styleUrl: './user-input.component.css',
})
export class UserInputComponent {
  // initialInvestment = '10000';
  // annualInvestment = '1200';
  // expectedReturn = '5';
  // duration = '10';

  //Signals
  initialInvestment = signal('10000');
  annualInvestment = signal('1200');
  expectedReturn = signal('5');
  duration = signal('10');

  // @Output() calculate = new EventEmitter<UserInput>();
  calculate = output<UserInput>();

  onSubmit() {
    this.calculate.emit({
      initialInvestment: +this.initialInvestment(),
      annualInvestment: +this.annualInvestment(),
      expectedReturn: +this.expectedReturn(),
      duration: +this.duration(),
    });

    //reset the form after submission
    this.initialInvestment.set('10000');
    this.annualInvestment.set('1200');
    this.expectedReturn.set('5');
    this.duration.set('10');
  }
}
