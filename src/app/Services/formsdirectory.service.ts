import { Injectable } from '@angular/core';
import { IForms } from './iforms.model';
import { Routes } from './routeindex';

const Directory =
[
    new Routes('Login Form', '/login'),
    new Routes('Registeration Form', '/register'),
    new Routes('Contact Form', '/contactus')
];


@Injectable()

export class FormsDirectory {

    getForms(): Routes[] {
        return Directory;
    }
}
