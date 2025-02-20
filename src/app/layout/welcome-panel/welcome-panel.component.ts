import { Component, Input, signal } from '@angular/core';

@Component({
  selector: 'app-welcome-panel',
  standalone: false,
  templateUrl: './welcome-panel.component.html',
  styleUrl: './welcome-panel.component.css',
})
export class WelcomePanelComponent {
  title = signal('Expense App');
  @Input() message: string = 'Create an account to get started.';
}
