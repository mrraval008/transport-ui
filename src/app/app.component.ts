import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'transport-ui';
  public isCollapsed = true;
  constructor(private router: Router) {}

  ngOnInit(): void {
    let installable = true;
    let deferredPrompt:any;
    if (!('serviceWorker' in navigator)){
      installable = false;
      window.addEventListener('beforeinstallprompt', async function(e){
        deferredPrompt = e;
        deferredPrompt.prompt();
        const { outcome } = await deferredPrompt.userChoice;
        deferredPrompt = null;
        if (outcome === 'accepted') {
          console.log('User accepted the install prompt.');
        } else if (outcome === 'dismissed') {
          console.log('User dismissed the install prompt');
        }
            });
          }
  }
  gotoRoute(routeName:string){
    this.router.navigate([routeName]);  // define your component where you want to go
}
}
