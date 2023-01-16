import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-status',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './status.component.html',
  styleUrls: ['./status.component.scss']
})
export class StatusComponent {
    current_time = new Date();
    use_cookie = navigator.cookieEnabled;
    num_logical_processor = navigator.hardwareConcurrency;
    languages = navigator.languages;
    user_agent_data = navigator.userAgent;
    max_touch_points = navigator.maxTouchPoints;
}
