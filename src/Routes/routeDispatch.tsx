import React from "react";
import { CoornedanasRoute, Enrutamiento, GenerarRoute, HomeRoute, LoginRoute } from ".";
import { Context } from "../Context";
import { Coordenadas } from "../Views/Coordenadas";
import { Generar } from "../Views/Generar";
import { Home } from "../Views/Home";
import { Login } from "../Views/Login";


export const dispatch = (page: Enrutamiento, context: Context) => {

    if(page instanceof LoginRoute){
        return <Login context={context}></Login>
    }

    if (page instanceof HomeRoute){
        return <Home context={context}></Home>
    }

    if (page instanceof GenerarRoute){
        return <Generar context={context}></Generar>
    }

    if (page instanceof CoornedanasRoute){
        return <Coordenadas context={context}></Coordenadas>
    }
}