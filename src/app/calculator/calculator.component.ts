import { Component } from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.scss'],
})
export class CalculatorComponent {
  displayValue: string = '';
  buttons: string[] = [
    '7', '8', '9', '/',
    '4', '5', '6', '*',
    '1', '2', '3', '-',
    'C', 'CE', '=', '+',
    'sin', 'cos', 'tan', '√',
    'π', 'e', '^', 'log',
    'Enter'
  ];
  //Rodin Andriamalaza


  onButtonClick(value: string) {
    if (value === 'C') {
      this.displayValue = ''; // Réinitialise tout
    } else if (value === 'CE') {
      this.displayValue = this.displayValue.slice(0, -1); // Supprime le dernier caractère
    } else if (value === '=' || value === 'Enter') {
      try {
        this.displayValue = new Function(`return ${this.displayValue}`)();
      } catch {
        this.displayValue = 'Error';
      }
    } else if (value === 'π') {
      this.displayValue += Math.PI.toString();
    } else if (value === 'e') {
      this.displayValue += Math.E.toString();
    } else if (['sin', 'cos', 'tan', 'log', '√'].includes(value)) {
      this.handleScientificFunctions(value);
    } else {
      this.displayValue += value;
    }
  }


  handleScientificFunctions(func: string) {
    try {
      const input = parseFloat(this.displayValue);
      switch (func) {
        case 'sin':
          this.displayValue = Math.sin(input).toString();
          break;
        case 'cos':
          this.displayValue = Math.cos(input).toString();
          break;
        case 'tan':
          this.displayValue = Math.tan(input).toString();
          break;
        case 'log':
          this.displayValue = Math.log10(input).toString();
          break;
        case '√':
          this.displayValue = Math.sqrt(input).toString();
          break;
        default:
          break;
      }
    } catch {
      this.displayValue = 'Error';
    }
  }
}
