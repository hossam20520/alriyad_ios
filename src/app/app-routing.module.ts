import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import {AuthGuard} from './auth.guard';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    loadChildren: () => import('./user/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'login/first-time',
    loadChildren: () => import('./user/first-time/first-time.module').then( m => m.FirstTimePageModule)
  },
  {
    path: 'login/forgot',
    loadChildren: () => import('./user/forgot/forgot.module').then( m => m.ForgotPageModule)
  },
  {
    path: 'register',
    loadChildren: () => import('./user/register/register.module').then( m => m.RegisterPageModule)
  },
  {
    path: 'control',
    loadChildren: () => import('./user/control/control.module').then( m => m.ControlPageModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'home',
    loadChildren: () => import('./pages/home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'points',
    loadChildren: () => import('./points/view-points/view-points.module').then( m => m.ViewPointsPageModule)
  },
  {
    path: 'points/add-friends',
    loadChildren: () => import('./points/add-friends/add-friends.module').then( m => m.AddFriendsPageModule)
  },
  {
    path: 'points/friend-info',
    loadChildren: () => import('./points/friend-info/friend-info.module').then( m => m.FriendInfoPageModule)
  },
  {
    path: 'points/already-added',
    loadChildren: () => import('./points/already-added/already-added.module').then( m => m.AlreadyAddedPageModule)
  },
  {
    path: 'media',
    loadChildren: () => import('./pages/media/media.module').then( m => m.MediaPageModule)
  },
  {
    path: 'cat',
    loadChildren: () => import('./pages/cat/cat.module').then( m => m.CatPageModule)
  },
  {
    path: 'cat/:type',
    loadChildren: () => import('./pages/cat/cat.module').then( m => m.CatPageModule)
  },
  {
    path: 'cat/:type/:id',
    loadChildren: () => import('./pages/single/single.module').then( m => m.SinglePageModule)
  },
  {
    path: 'dynamic-content/:type',
    loadChildren: () => import('./pages/dynamic-content/dynamic-content.module').then( m => m.DynamicContentPageModule)
  },
  {
    path: 'dynamic/:id',
    loadChildren: () => import('./pages/dynamic/dynamic.module').then( m => m.DynamicPageModule)
  },
  {
    path: 'new-post/:type',
    loadChildren: () => import('./pages/new-post/new-post.module').then( m => m.NewPostPageModule),
    //canActivate: [AuthGuard]
  },
  {
    path: 'custom-modal',
    loadChildren: () => import('./pages/custom-modal/custom-modal.module').then( m => m.CustomModalPageModule)
  },
  {
    path: 'directory',
    loadChildren: () => import('./directory/gate/gate.module').then( m => m.GatePageModule)
  },
  {
    path: 'directory/decore',
    loadChildren: () => import('./directory/decore/decore.module').then( m => m.DecorePageModule)
  },
  {
    path: 'directory/:id',
    loadChildren: () => import('./directory/single/single.module').then( m => m.SinglePageModule)
  },
  {
    path: 'cs-re/financial-gate',
    loadChildren: () => import('./cs-re/financial-gate/financial-gate.module').then( m => m.FinancialGatePageModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'cs-re/financial-gate/forward-installments',
    loadChildren: () => import('./cs-re/forward-installments/forward-installments.module').then( m => m.ForwardInstallmentsPageModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'cs-re/financial-gate/account-statement',
    loadChildren: () => import('./cs-re/account-statement/account-statement.module').then( m => m.AccountStatementPageModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'cs-re/financial-gate/financial',
    loadChildren: () => import('./cs-re/installments/installments.module').then( m => m.InstallmentsPageModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'cs-re/financial-gate/pay',
    loadChildren: () => import('./cs-re/pay/pay.module').then( m => m.PayPageModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'cs-re/follow-up-projects',
    loadChildren: () => import('./cs-re/follow-up-projects/follow-up-projects.module').then( m => m.FollowUpProjectsPageModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'cs-re/inventory',
    loadChildren: () => import('./cs-re/inventory/inventory.module').then( m => m.InventoryPageModule),
    canActivate: [AuthGuard]
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
