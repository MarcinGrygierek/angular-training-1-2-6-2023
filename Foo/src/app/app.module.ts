import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './child/child.component';
import { SmartInputComponent } from './smart-input/smart-input.component';
import { UsersComponent } from './users/users.component';
import { SubscriptionComponentComponent } from './subscription-component/subscription-component.component';
import { MapTestComponent } from './map-test/map-test.component';
import { HttpClientModule } from '@angular/common/http';
import { ObservableTestComponent } from './observable-test/observable-test.component';
import { SubjectTestComponent } from './subject-test/subject-test.component';
import { BehaviorSubjectTestComponent } from './behavior-subject-test/behavior-subject-test.component';
import { AsyncSubjectTestComponent } from './async-subject-test/async-subject-test.component';
import { MulticastTestComponent } from './multicast-test/multicast-test.component';
import { HttpTestComponent } from './http-test/http-test.component';
import { FormTestComponent } from './form-test/form-test.component';
import { ReactiveFormsModule } from '@angular/forms';
import { DetailsComponent } from './details/details.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    ParentComponent,
    ChildComponent,
    SmartInputComponent,
    UsersComponent,
    SubscriptionComponentComponent,
    MapTestComponent,
    ObservableTestComponent,
    SubjectTestComponent,
    BehaviorSubjectTestComponent,
    AsyncSubjectTestComponent,
    MulticastTestComponent,
    HttpTestComponent,
    FormTestComponent,
    DetailsComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
