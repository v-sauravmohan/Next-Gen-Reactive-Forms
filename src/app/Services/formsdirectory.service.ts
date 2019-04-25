import { Injectable } from '@angular/core';
import { IForms } from './iforms.model';


const Directory: IForms[] =
[
{'formName': 'name1', 'formRoute': 'route1'},
{'formName': 'name2', 'formRoute': 'route2'},
{'formName': 'name3', 'formRoute': 'route3'},
{'formName': 'name4', 'formRoute': 'route4'},
{'formName': 'name5', 'formRoute': 'route5'}
];


@Injectable()

export class FormsDirectory {

    getForms(): IForms[] {
        return Directory;
    }
}
