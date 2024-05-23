import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, HttpClientModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  constructor(private http: HttpClient, private router: Router) { }

  user = {
    username: '',
    password: ''
  };

  onSubmit() {
    this.http.post('/api/login', this.user).subscribe((result) => {
      console.log(result);
      this.router.navigate(['/main']);
    });
  }
}
