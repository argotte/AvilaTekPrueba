import { Router } from "express";
import {readdirSync} from "fs";

const PATH_ROUTER = `${__dirname}/`;
const router = Router();

const cleanFileName = (fileName:string):string => 
    {
        const file = fileName.split(".").shift();
        return file as string;
    }
    

//read all files in the directory
readdirSync(PATH_ROUTER).filter((fileName)=>{
    const cleanName=cleanFileName(fileName);
    if(cleanName !== "indexRoutes"){
        console.log(`Loading route: /${cleanName}`);
        import(`./${cleanName}`).then((moduleRouter) => {
          router.use(`/${cleanName}`, moduleRouter.router);
          console.log(`anadido: /${cleanName}`);
        }); 
    }    
    
});

export {router};