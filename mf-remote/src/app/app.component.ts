import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TestModule } from './test/test.module';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    TestModule,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'rm-remote';
}
