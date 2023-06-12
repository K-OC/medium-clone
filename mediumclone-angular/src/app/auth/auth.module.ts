import {CommonModule} from '@angular/common'
import {NgModule} from '@angular/core'
import {RouterModule} from '@angular/router'
import {RegisterEffect} from 'src/app/auth/store/effects/register.effect'
import {ReactiveFormsModule} from '@angular/forms'
import {StoreModule} from '@ngrx/store'

import {reducers} from 'src/app/auth/store/reducers'
import {RegisterComponent} from 'src/app/auth/components/register/register.component'
import {AuthService} from 'src/app/auth/services/auth.service'
import {EffectsModule} from '@ngrx/effects'
import {BackendErrorMessagesModule} from '../shared/modules/backendErrorMessages/backendErrorMessages.module'
import {PersistanceService} from '../shared/services/persistance.service'

const routes = [{path: 'register', component: RegisterComponent}]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    ReactiveFormsModule,
    StoreModule.forFeature('auth', reducers),
    EffectsModule.forFeature([RegisterEffect]),
    BackendErrorMessagesModule,
  ],
  declarations: [RegisterComponent],
  providers: [AuthService, PersistanceService],
})
export class AuthModule {}
