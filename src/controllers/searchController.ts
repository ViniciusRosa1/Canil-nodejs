import { Request, Response} from 'express'
import {createMenuObjects } from '../helpers/createMenuObjects'
import { pet } from '../models/Pet'

export const search = (req: Request, res: Response)=>{
    let query: string = req.query.q as string;
    let listOfPets = pet.getPerName(query);
    if(!query){
        res.redirect('/');
        return;
    }
    res.render('pages/pages', {
        menu: createMenuObjects(''),
        listOfPets,
        query    
    });
};