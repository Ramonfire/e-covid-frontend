import { authInterceptorProviders } from './_helpers/auth.interceptor';
import { TablesComponent } from './views/admin/tables/tables.component';
import { SettingsComponent } from './views/admin/settings/settings.component';
import { MapsComponent } from './views/admin/maps/maps.component';
import { AdminComponent } from './layouts/auth/admin/admin.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CardPageVisitsComponent } from './components/cards/card-page-visits/card-page-visits.component';
import { CardProfileComponent } from './components/cards/card-profile/card-profile.component';
import { CardSettingsComponent } from './components/cards/card-settings/card-settings.component';
import { CardSocialTrafficComponent } from './components/cards/card-social-traffic/card-social-traffic.component';
import { CardStatsComponent } from './components/cards/card-stats/card-stats.component';
import { CardTableComponent } from './components/cards/card-table/card-table.component';
import { IndexDropdownComponent } from './components/dropdowns/index-dropdown/index-dropdown.component';
import { NotificationDropdownComponent } from './components/dropdowns/notification-dropdown/notification-dropdown.component';
import { PagesDropdownComponent } from './components/dropdowns/pages-dropdown/pages-dropdown.component';
import { TableDropdownComponent } from './components/dropdowns/table-dropdown/table-dropdown.component';
import { UserDropdownComponent } from './components/dropdowns/user-dropdown/user-dropdown.component';
import { FooterAdminComponent } from './components/footers/footer-admin/footer-admin.component';
import { FooterSmallComponent } from './components/footers/footer-small/footer-small.component';
import { FooterComponent } from './components/footers/footer/footer.component';
import { HeaderStatsComponent } from './components/headers/header-stats/header-stats.component';
import { MapExampleComponent } from './components/maps/map-example/map-example.component';
import { AdminNavbarComponent } from './components/navbars/admin-navbar/admin-navbar.component';
import { AuthNavbarComponent } from './components/navbars/auth-navbar/auth-navbar.component';
import { IndexNavbarComponent } from './components/navbars/index-navbar/index-navbar.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { AuthComponent } from './layouts/auth/auth.component';
import { LoginComponent } from './views/auth/login/login.component';
import { RegisterComponent } from './views/auth/register/register.component';
import { IndexComponent } from './views/index/index.component';
import { LandingComponent } from './views/landing/landing.component';
import { ProfileComponent } from './views/profile/profile.component';
import { StatsComponent } from './stats/stats.component';
import { ChartComponent } from './chart/chart.component'
import { NgChartsModule } from 'ng2-charts';
import { SachartComponent } from './sachart/sachart.component';
import { TachartComponent } from './tachart/tachart.component';
import { DashboardComponent } from './views/admin/dashboard/dashboard.component';
import {  FormsModule }   from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from 'src/in-memory-data.service';
import { LoaderComponent } from './views/loader/loader.component';
import { environment } from 'src/environments/environment';
import { ModalComponent } from './modal/modal.component';
import { CreateAccModalComponent } from './create-acc-modal/create-acc-modal.component';
import { AdminHeaderComponent } from './components/headers/admin-header/admin-header.component';
import { TestComponent } from './test/test.component';
import {NgbModule} from "@ng-bootstrap/ng-bootstrap";
import { XchartComponent } from './xchart/xchart.component';
import { YchartComponent } from './ychart/ychart.component';
import { ZchartComponent } from './zchart/zchart.component';
import { DataAnnotationComponent } from './data-annotation/data-annotation.component';

@NgModule({
  declarations: [AppComponent,
    DashboardComponent,
    ChartComponent,
    SachartComponent,
    TachartComponent,
    IndexDropdownComponent,
    PagesDropdownComponent,
    TableDropdownComponent,
    NotificationDropdownComponent,
    UserDropdownComponent,
    SidebarComponent,
    FooterComponent,
    FooterSmallComponent,
    FooterAdminComponent,
    CardPageVisitsComponent,
    CardProfileComponent,
    CardSettingsComponent,
    CardSocialTrafficComponent,
    CardStatsComponent,
    CardTableComponent,
    HeaderStatsComponent,
    MapExampleComponent,
    AuthNavbarComponent,
    AdminNavbarComponent,
    IndexNavbarComponent,
    AdminComponent,
    AuthComponent,
    MapsComponent,
    SettingsComponent,
    TablesComponent,
    LoginComponent,
    RegisterComponent,
    IndexComponent,
    LandingComponent,
    ProfileComponent,
    StatsComponent,
    LoaderComponent,
    ModalComponent,
    CreateAccModalComponent,
    AdminHeaderComponent,
    TestComponent,
    XchartComponent,
    YchartComponent,
    ZchartComponent,
    DataAnnotationComponent
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    NgbModule,
    AppRoutingModule,
    HttpClientModule,
    //environment.production ?[] : HttpClientInMemoryWebApiModule.forRoot(InMemoryDataService, { dataEncapsulation : false } ),
    NgChartsModule
  ],
  providers: [authInterceptorProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
