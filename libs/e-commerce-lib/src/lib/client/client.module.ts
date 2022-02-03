import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Modules
import { ClientRoutingModule } from './client-routing.module';
import { BlogModule } from './features/blog/blog.module';
import { SearchStoreModule } from './features/search-store/search-store.module';

// Components
import { HeaderComponent } from '../client/components/header/header.component';
import { HeroComponent } from '../client/components/hero/hero.component';
import { NavigationComponent } from '../client/components/navigation/navigation.component';
import { HeaderBannerComponent } from '../client/components/header-banner/header-banner.component';
import { LogoComponent } from '../client/components/logo/logo.component';
import { FooterComponent } from '../client/components/footer/footer.component';
import { ShowcaseComponent } from '../client/components/showcase/showcase.component';
import { LandingModule } from './features/landing/landing.module';
// import { LandingComponent } from './containers/landing/landing.component';

@NgModule({
  declarations: [
    // LandingComponent,
    HeaderComponent,
    HeroComponent,
    NavigationComponent,
    HeaderBannerComponent,
    LogoComponent,
    FooterComponent,
    ShowcaseComponent,
  ],
  imports: [
    CommonModule,
    ClientRoutingModule,
    LandingModule,
    BlogModule,
    SearchStoreModule,
  ],
})
export class ClientModule {}
