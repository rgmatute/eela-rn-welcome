import { Route } from "react-native";



export class Context {
    constructor( public onRoute: (enrutamiento: Route) => void ) {
    }
}