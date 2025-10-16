import { CurrencyPipe } from '@angular/common';
import { Component, input, Input } from '@angular/core';
import type { InvestmentResult } from './investment-results.model';

@Component({
  selector: 'app-investment-results',
  standalone: true,
  imports: [CurrencyPipe],
  templateUrl: './investment-results.component.html',
  styleUrl: './investment-results.component.css',
})
export class InvestmentResultsComponent {
  // @Input() results: InvestmentResult[] = [];
  results = input<InvestmentResult[]>([]);
}
