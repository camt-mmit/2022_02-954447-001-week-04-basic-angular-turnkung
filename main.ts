import { bootstrapApplication } from "@angular/platform-browser";

import { provideRouter } from '@angular/router';

import { AppComponent } from "./app/app.component";
import { FirendComponent } from "./app/firend/firend.component";
import { HelloWorldComponent } from "./app/hello-world/hello-world.component";
import { ProfileComponent } from "./app/profile/profile.component";
import { StatusComponent } from "./app/status/status.component";

bootstrapApplication(AppComponent, {
  providers: [
    provideRouter([{ path: 'hello-world', component: HelloWorldComponent},
                    {path: 'profile', component: ProfileComponent},
                    {path: 'friend', component: FirendComponent},
                    {path: 'status', component: StatusComponent},
                    {path: '', redirectTo: '/profile', pathMatch: 'full'}],),
  ],
}).catch((error) => console.error(error))

/*import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';


platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));*/
