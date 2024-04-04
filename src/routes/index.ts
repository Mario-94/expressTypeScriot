import { Router } from "express";
import { readdirSync } from 'fs'
/* NOTE:  Cargador dinamico de rutas, se encarga de estar agregando el nombre siguiente de la ruta cuando creo un nuevo archivo
esto con la finalidad de no estar exportando multiples rutas a cada ratoa mi app.ts */

const PATH_ROUTER = `${__dirname}`;
const router = Router();
/**
 * 
 * @param fileName 
 * @returns 
 */
const cleanFileName = (fileName: string) => {
    const file = fileName.split(".").shift();
    return file;
};

readdirSync(PATH_ROUTER).filter((fileName) => {
    const cleanName = cleanFileName(fileName);
    if (cleanName !== "index") {
        import(`./${cleanName}`).then((moduleRouter) => {
            router.use(`/${cleanName}`, moduleRouter.router);
        });
    }
});


export { router }