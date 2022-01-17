import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

// Modules
import { SharedUiModule } from '@showcase-ws/shared-ui';

// Components
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { BodyComponent } from './components/body/body.component';
import { FooterComponent } from './components/footer/footer.component';
import { SidenavComponent } from './components/sidenav/sidenav.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    BodyComponent,
    SidenavComponent,
  ],
  imports: [BrowserModule, SharedUiModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
