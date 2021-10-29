import { Route } from "react-native";
import { Store } from "./Store";



export class Context {
    constructor( 
        public onRoute: (enrutamiento: Route) => void,
        public store: Store,
        public session: any,
        public setSession: (s: any) => void
    ) {
    }
}