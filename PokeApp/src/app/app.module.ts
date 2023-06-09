import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { PokemonContainerComponent } from './pokemon-container/pokemon-container.component';
import { DataWrapperComponent } from './data-wrapper/data-wrapper.component';
import { BasicDataComponent } from './basic-data/basic-data.component';
import { ExpandedDataComponent } from './expanded-data/expanded-data.component';
import { HttpClientModule } from '@angular/common/http';
import { PokemonHistoryComponent } from './pokemon-history/pokemon-history.component';

@NgModule({
  declarations: [
    AppComponent,
    PokemonContainerComponent,
    DataWrapperComponent,
    BasicDataComponent,
    ExpandedDataComponent,
    PokemonHistoryComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
