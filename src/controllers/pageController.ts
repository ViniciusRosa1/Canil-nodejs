import { Request, Response} from 'express'
import {createMenuObjects } from '../helpers/createMenuObjects'
import { pet } from '../models/Pet'

export const home = (req: Request, res: Response)=>{
    let listOfPets = pet.getAll();
    res.render('pages/pages', {
        menu: createMenuObjects('all'),
        banner:{
            tittle: 'Todos os animais',
            background: 'allanimals.jpg',
        },
        listOfPets  
    });
};
export const dogs = (req: Request, res: Response)=>{
    let listOfPets = pet.getPerType('dog');
    res.render( 'pages/pages', {
        menu: createMenuObjects('dog'),
        banner:{
            tittle: 'Cachorros',
            background: 'banner_dog.jpg'
        },
        listOfPets
    })
};
export const cats = (req: Request, res: Response)=>{
    let listOfPets = pet.getPerType('cat');
    res.render(  'pages/pages', {
        menu: createMenuObjects('cat'),
        banner:{
            tittle: 'Gatos',
            background: 'banner_cat.jpg'
        },
        listOfPets
    })
};
export const fish = (req: Request, res: Response)=>{
    let listOfPets = pet.getPerType('fish');
    res.render( 'pages/pages',{
        menu: createMenuObjects('fish'),
        banner:{
            tittle: 'Peixes',
            background: 'banner_fish.jpg'
        },
        listOfPets
    })
};