import { Routes } from '@angular/router';

//Импортируем компоненты страниц
import { HomeComponent } from './pages/home/home.component';
import { ServicesComponent } from './pages/services/services.component';
import { ContactsComponent } from './pages/contacts/contacts.component';
import { BookingComponent } from './pages/booking/booking.component';
import { AboutComponent } from './pages/about/about.component';

export const routes: Routes = [
    {path: '', component: HomeComponent},               //Главная страница
    {path: 'about', component: AboutComponent},         //О салоне
    {path: 'booking', component: BookingComponent},     //Запись на услуги
    {path: 'contacts', component: ContactsComponent},   //Контакты
    {path: 'services', component: ServicesComponent},   //Услуги
    {path: '**', redirectTo: ''}                        //Перенаправление на главную страницу при неправильном URL
    
];
