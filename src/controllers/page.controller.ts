import { Request, Response } from 'express';

import Pet from '../models/pet'

export const home = (req: Request, res: Response) => {
    let lint = Pet.getAll()

    res.render('pages/home', {
        banner: {
            title: "Todos os animais",
            background: 'allanimals.jpg'
        },
        lint
    })
}

export const dogs = (req: Request, res: Response) => {
    let lint = Pet.getFromType('dog')
    res.render('pages/home', {
        banner: {
            title: "Cachorro",
            background: 'banner_dog.jpg'
        },
        lint
    })
}

export const cats = (req: Request, res: Response) => {
    let lint = Pet.getFromType('cat')
    res.render('pages/home', {
        banner: {
            title: "Gato",
            background: 'banner_cat.jpg'
        },
        lint
    })
}

export const fishes = (req: Request, res: Response) => {
    let lint = Pet.getFromType('fish')
    res.render('pages/home', {
        banner: {
            title: "Peixes",
            background: 'banner_fish.jpg'
        },
        lint
    })
}