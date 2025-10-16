import { Routes } from '@angular/router';

import { LoginComponent } from './login/login.component';
import { ForgotPasswordComponent } from './auth/forgot-password/forgot-password.component';
import { RegisterComponent } from './register/register.component';
import { TermsPrivacyComponent } from './legal/terms-privacy.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AccountManagementComponent } from './system/account-management.component';
import { ShellComponent } from './layout/shell.component';
import { PlaceholderPageComponent } from './shared/placeholder-page.component';

export const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'app/dashboard' },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'forgot-password', component: ForgotPasswordComponent },
  { path: 'terms', component: TermsPrivacyComponent },
  {
    path: 'app',
    component: ShellComponent,
    children: [
      { path: '', pathMatch: 'full', redirectTo: 'dashboard' },
      { path: 'dashboard', component: DashboardComponent },
      { path: 'account-management', component: AccountManagementComponent },
      { path: 'members', component: PlaceholderPageComponent, data: { title: '會員列表' } },
      { path: 'members/tiers', component: PlaceholderPageComponent, data: { title: '會員等級 / 標籤' } },
      { path: 'members/blacklist', component: PlaceholderPageComponent, data: { title: '黑名單管理' } },
      { path: 'members/login-history', component: PlaceholderPageComponent, data: { title: '登入紀錄' } },
      { path: 'members/settings', component: PlaceholderPageComponent, data: { title: '會員設定' } },
      { path: 'products/list', component: PlaceholderPageComponent, data: { title: '商品管理' } },
      { path: 'products/new', component: PlaceholderPageComponent, data: { title: '新增商品' } },
      { path: 'catalog/categories', component: PlaceholderPageComponent, data: { title: '分類管理' } },
      { path: 'catalog/attributes', component: PlaceholderPageComponent, data: { title: '屬性管理' } },
      { path: 'inventory', component: PlaceholderPageComponent, data: { title: '庫存管理' } },
      { path: 'content/articles', component: PlaceholderPageComponent, data: { title: '內容管理' } },
      { path: 'content/announcements', component: PlaceholderPageComponent, data: { title: '公告管理' } },
      { path: 'orders', component: PlaceholderPageComponent, data: { title: '訂單列表' } },
      { path: 'payments', component: PlaceholderPageComponent, data: { title: '交易紀錄' } },
      { path: 'orders/refunds', component: PlaceholderPageComponent, data: { title: '退款管理' } },
      { path: 'orders/shipment', component: PlaceholderPageComponent, data: { title: '出貨與物流' } },
      { path: 'orders/invoices', component: PlaceholderPageComponent, data: { title: '發票紀錄' } },
      { path: 'marketing/coupons', component: PlaceholderPageComponent, data: { title: '優惠券管理' } },
      { path: 'marketing/campaigns', component: PlaceholderPageComponent, data: { title: '活動管理' } },
      { path: 'marketing/messages', component: PlaceholderPageComponent, data: { title: '推播與通知' } },
      { path: 'marketing/abtest', component: PlaceholderPageComponent, data: { title: 'A/B 測試' } },
      { path: 'marketing/scheduler', component: PlaceholderPageComponent, data: { title: '行銷排程' } },
      { path: 'reports/sales', component: PlaceholderPageComponent, data: { title: '銷售報表' } },
      { path: 'reports/members', component: PlaceholderPageComponent, data: { title: '會員報表' } },
      { path: 'reports/products', component: PlaceholderPageComponent, data: { title: '商品報表' } },
      { path: 'reports/revenue', component: PlaceholderPageComponent, data: { title: '收入報表' } },
      { path: 'reports/traffic', component: PlaceholderPageComponent, data: { title: '流量來源分析' } },
      { path: 'reports/export', component: PlaceholderPageComponent, data: { title: '匯出管理' } },
      { path: 'settings/general', component: PlaceholderPageComponent, data: { title: '基本設定' } },
      { path: 'settings/locale', component: PlaceholderPageComponent, data: { title: '多語與時區' } },
      { path: 'settings/templates', component: PlaceholderPageComponent, data: { title: '郵件與通知模板' } },
      { path: 'settings/feature-flags', component: PlaceholderPageComponent, data: { title: '功能開關' } },
      { path: 'settings/security', component: PlaceholderPageComponent, data: { title: '安全與憑證' } },
      { path: 'access/roles', component: PlaceholderPageComponent, data: { title: '角色與權限' } },
      { path: 'access/users', component: PlaceholderPageComponent, data: { title: '管理員帳號' } },
      { path: 'access/audit', component: PlaceholderPageComponent, data: { title: '操作日誌' } },
      { path: 'access/logins', component: PlaceholderPageComponent, data: { title: '登入紀錄' } },
      { path: 'developer/api-keys', component: PlaceholderPageComponent, data: { title: 'API Key 管理' } },
      { path: 'developer/webhooks', component: PlaceholderPageComponent, data: { title: 'Webhook 管理' } },
      { path: 'developer/integrations', component: PlaceholderPageComponent, data: { title: '外部整合' } },
      { path: 'developer/logs', component: PlaceholderPageComponent, data: { title: '錯誤日誌' } },
      { path: 'support/tickets', component: PlaceholderPageComponent, data: { title: '客服工單' } },
      { path: 'support/chat', component: PlaceholderPageComponent, data: { title: '聊天室' } },
      { path: 'support/faq', component: PlaceholderPageComponent, data: { title: 'FAQ' } },
      { path: 'support/announcements', component: PlaceholderPageComponent, data: { title: '系統公告' } }
    ]
  },
  { path: 'logout', component: PlaceholderPageComponent, data: { title: '登出', description: '此處將提供登出流程。' } },
  { path: '**', redirectTo: 'app/dashboard' }
];
