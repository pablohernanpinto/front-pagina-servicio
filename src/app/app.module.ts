import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SliderPresentacion1Component } from './sliders/slider-presentacion-1/slider-presentacion-1.component';
import { TitulosComponent } from './components/titulos/titulos.component';
import { BotonesComponent } from './components/botones/botones.component';
import { Slider2Component } from './sliders/slider-2/slider-2.component';
import { Slider3Component } from './sliders/slider-3/slider-3.component';
import { Slider4Component } from './sliders/slider-4/slider-4.component';
import { TituloSecundarioComponent } from './components/titulo-secundario/titulo-secundario.component';
import { Slider5Component } from './sliders/slider-5/slider-5.component';
import { Slider6Component } from './sliders/slider-6/slider-6.component';


@NgModule({
  declarations: [
    AppComponent,
    SliderPresentacion1Component,
    TitulosComponent,
    BotonesComponent,
    Slider2Component,
    Slider3Component,
    Slider4Component,
    TituloSecundarioComponent,
    Slider5Component,
    Slider6Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
