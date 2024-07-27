import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component
({
	selector: 'app-root',
	standalone: true,
	imports: [RouterOutlet],
	templateUrl: './app-main.component.html',
	styleUrl: './app-main.component.scss'
})
export class AppComponent
{
  title = 'clothing-inventory-manager';
}
