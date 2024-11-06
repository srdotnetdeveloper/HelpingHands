import { Component } from '@angular/core';
import {HeaderComponent } from './components/header/header.component';

import { RouterOutlet } from '@angular/router';
import {CommonModule } from '@angular/common';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule, HeaderComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Helping-Hands';
}
