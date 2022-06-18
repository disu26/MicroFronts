import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { APP_BASE_HREF } from "@angular/common";
import { BrowserModule } from '@angular/platform-browser';
import { Routes, RouterModule } from "@angular/router";

import { AppComponent } from './app.component';
import { PokemonComponent } from './pokemon/pokemon.component';
import { EmptyRouteComponent } from './empty-route/empty-route.component';

const routes: Routes = [{ path: "**", component: EmptyRouteComponent }];

@NgModule({
  declarations: [AppComponent, PokemonComponent],
  imports: [BrowserModule, HttpClientModule,FormsModule, RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [{ provide: APP_BASE_HREF, useValue: "/" }],
  bootstrap: [AppComponent],
})
export class AppRoutingModule {}
