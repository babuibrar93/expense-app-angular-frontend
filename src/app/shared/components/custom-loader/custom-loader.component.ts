import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-custom-loader',
  standalone: false,
  templateUrl: './custom-loader.component.html',
  styleUrl: './custom-loader.component.css'
})
export class CustomLoaderComponent {
  @Input() size: string = '6'; // Default size (h-6 w-6)
  @Input() color: string = 'gray-400'; // Default color
  @Input() fullScreen: boolean = false; // Full-screen loader option
}
