import { Routes } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { HomeComponent } from './components/components/home/home.component';
import { ServiceComponent } from './components/components/service/service.component';
import { AboutusComponent } from './components/components/aboutus/aboutus.component';
import { DataAnalyticsComponent } from './components/components/data-analytics/data-analytics.component';
import { BusinessIntelligenceComponent } from './components/components/business-intelligence/business-intelligence.component';
import { AIMLComponent } from './components/components/aiml/aiml.component';
import { RoboticProcessAutomationComponent } from './components/components/robotic-process-automation/robotic-process-automation.component';
import { WebDevelopmentComponent } from './components/components/web-development/web-development.component';
import { DigitalMarketingComponent } from './components/components/digital-marketing/digital-marketing.component';

export const routes: Routes = [ 
//     { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
//     {
//         path: 'dashboard',
//         component: DashboardComponent,
//         children: [
//             { path: 'home', component: HomeComponent },
//             {
//                 path: 'service',
//                 component: ServiceComponent,
//                 children: [
//                     { path: 'dataanalytics', component: DataAnalyticsComponent },
//                     { path: 'businessintelligence', component: BusinessIntelligenceComponent },
//                     { path: 'aiml', component: AIMLComponent },
//                     { path: 'roboticprocessautomation', component: RoboticProcessAutomationComponent },
//                     { path: 'webdevelopment', component: WebDevelopmentComponent },
//                     { path: 'digitalmarketing', component: DigitalMarketingComponent },
//                 ]
//             },
//             { path: 'aboutus', component: AboutusComponent }
//         ]
//     }
// ];

       
    { path: 'home', component: HomeComponent },
    { path: 'service', component: ServiceComponent }, // Keep the service route here
    { path: 'aboutus', component: AboutusComponent },
    { path: 'service/dataanalytics', component: DataAnalyticsComponent }, // Move specific service routes here
    { path: 'service/businessintelligence', component: BusinessIntelligenceComponent },
    { path: 'service/aiml', component: AIMLComponent },
    { path: 'service/roboticprocessautomation', component: RoboticProcessAutomationComponent },
    { path: 'service/webdevelopment', component: WebDevelopmentComponent },
    { path: 'service/digitalmarketing', component: DigitalMarketingComponent },

    { path: '', redirectTo: '/home', pathMatch: 'full' },
];
    


