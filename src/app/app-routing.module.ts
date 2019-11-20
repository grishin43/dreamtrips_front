import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {NotfoundComponent} from './landing/components/notfound/notfound.component';
import {HomeComponent} from './landing/components/home/home.component';
import {RouteguardService} from './routeguard.service';
import {LoginComponent} from './landing/components/login/login.component';
import {PolicyComponent} from './landing/components/policy/policy.component';
import {DpaComponent} from './landing/components/dpa/dpa.component';

const routes: Routes = [
    {path: '', component: HomeComponent},
    {path: 'login', component: LoginComponent},
    {path: 'admin', loadChildren: './admin/admin.module#AdminModule', canActivate: [RouteguardService]},
    {path: 'policy', component: PolicyComponent},
    {path: 'dpa', component: DpaComponent},
    {path: '404', component: NotfoundComponent},
    {path: '**', redirectTo: '/404'}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
