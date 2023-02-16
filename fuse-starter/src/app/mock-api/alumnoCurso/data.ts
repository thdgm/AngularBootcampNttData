import {Curso} from "../../modules/admin/curso/Curso";
import {Alumno} from "../../modules/admin/alumno/Alumno";

export const cursos: Curso[] = [
    {
        numero   : 4,
        letra: 'C',
        centro : 'Unizar',

    },
    {
        numero   : 1,
        letra: 'B',
        centro : 'Eina',

    },
    {
        numero   : 3,
        letra: 'B',
        centro : 'USAM',

    }
];

export const alumnos: Alumno[] = [
        {
            nombre   : 'Diego Garcia',
            edad: 23,
            graduado : true,

        },
        {
            nombre   : 'Sergio Romero',
            edad: 17,
            graduado : false,

        }
];
