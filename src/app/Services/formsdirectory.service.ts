import { Injectable } from '@angular/core';
import { IForms } from './iforms.model';

const Directory: IForms[] =
[
{formName: 'name', formRoute: 'route'},
{formName: 'name', formRoute: 'route'},
{formName: 'name', formRoute: 'route'},
{formName: 'name', formRoute: 'route'},
{formName: 'name', formRoute: 'route'}
];

@Injectable()

export class FormsDirectory {

    getForms(): IForms[] {
        return Directory;
    }
}
