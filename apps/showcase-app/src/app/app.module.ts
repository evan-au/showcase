import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// Modules
import { AppRoutingModule } from './app-routing.module';
import { SharedUiModule } from '@showcase-ws/shared-ui';

// import { NgtCoreModule } from '@angular-three/core';
// import { NgtMeshModule } from '@angular-three/core/meshes';
// import { NgtMeshBasicMaterialModule } from '@angular-three/core/materials';
// import { NgtBoxGeometryModule } from '@angular-three/core/geometries';

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
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    SharedUiModule,
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
    // NgtCoreModule,
    // NgtMeshModule,
    // NgtBoxGeometryModule,
    // NgtMeshBasicMaterialModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
