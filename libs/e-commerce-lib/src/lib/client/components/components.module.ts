import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './footer/footer.component';
import { HeaderBannerComponent } from './header-banner/header-banner.component';
import { HeaderComponent } from './header/header.component';
import { HeroComponent } from './hero/hero.component';
import { LogoComponent } from './logo/logo.component';
import { NavigationComponent } from './navigation/navigation.component';
import { ShowcaseComponent } from './showcase/showcase.component';

@NgModule({
  declarations: [
    HeaderComponent,
    HeroComponent,
    NavigationComponent,
    HeaderBannerComponent,
    LogoComponent,
    FooterComponent,
    ShowcaseComponent,
  ],
  imports: [CommonModule],
})
export class ComponentsModule {}
