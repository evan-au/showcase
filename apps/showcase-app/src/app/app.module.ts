import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// Modules
import { AppRoutingModule } from './app-routing.module';
import { SharedUiModule } from '@showcase-ws/shared-ui';
import { SharedNgThreeModule } from '@showcase-ws/shared-ng-three';

// Components
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { BodyComponent } from './components/body/body.component';
import { FooterComponent } from './components/footer/footer.component';
import { SidenavComponent } from './components/sidenav/sidenav.component';
import { BottomSheetMenuComponent } from './components/bottom-sheet-menu/bottom-sheet-menu.component';
import { IntroPageComponent } from './components/intro-page/intro-page.component';
import { DigitalClockComponent } from './components/digital-clock/digital-clock.component';
import { LogoComponent } from './components/logo/logo.component';
import { ThemeButtonComponent } from './components/theme-button/theme-button.component';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { IntroContentComponent } from './components/intro-page/components/intro-content/intro-content.component';
import { IntroSnowflakeCanvasComponent } from './components/intro-page/components/intro-snowflake-canvas/intro-snowflake-canvas.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    BodyComponent,
    SidenavComponent,
    BottomSheetMenuComponent,
    IntroPageComponent,
    DigitalClockComponent,
    LogoComponent,
    ThemeButtonComponent,
    IntroContentComponent,
    IntroSnowflakeCanvasComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    SharedUiModule,
    SharedNgThreeModule,
    StoreModule.forRoot(
      {},
      {
        metaReducers: !environment.production ? [] : [],
        runtimeChecks: {
          strictActionImmutability: true,
          strictStateImmutability: true,
        },
      }
    ),
    EffectsModule.forRoot([]),
    !environment.production ? StoreDevtoolsModule.instrument() : [],
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
