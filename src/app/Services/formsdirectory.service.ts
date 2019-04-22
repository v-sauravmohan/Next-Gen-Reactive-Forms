import { Injectable } from '@angular/core';
import { IForms } from './iforms.model';

/*const Directory: string[][] =
[
['name1','route1'],
['name2','route2'],
['name3','route3'],
['name4','route4'],
['name5','route5'],
];*/

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
