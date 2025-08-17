import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IndexComponent } from './index/index.component';
import { BannerComponent } from './banner/banner.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { FooterComponent } from './footer/footer.component';
import { PokemonComponent } from './pokemon/pokemon.component';
import { PokemonService } from './services/pokemon.service';
import { ApiService } from './services/api/api.service';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SpinnerComponent } from './spinner/spinner.component';
import { SpinnerService } from './services/spinner/spinner.service';
import { PokemonDetailsComponent } from './pokemon-details/pokemon-details.component';

@NgModule({
  declarations: [
    AppComponent,
    IndexComponent,
    BannerComponent,
    SidebarComponent,
    FooterComponent,
    PokemonComponent,
    SpinnerComponent,
    PokemonDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
  ],
  providers: [
    PokemonService,
    ApiService,
    SpinnerService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
