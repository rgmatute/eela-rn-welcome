
export class Store {
    constructor(
        public value: any
    ) {
}

    public getValue <T> (key: string, callback?: (exits:boolean, value: T) => void ) {
        if(callback !== undefined)
            return callback((this.value[key] !== undefined), this.value[key])
        else
            return this.value[key] as T;
    }

    public setValue (key:string, value:any, callback?: () => void){
        this.value[key] = value;
        if(callback !== undefined){
            callback()
        }
    }

}