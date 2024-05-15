class Entity {
    name: string;
    static _id = 0;
    id: number;
    url: string;
    constructor(ind: number, nIn: string, urlin:string) {
        this.id = ind;
        this.name = nIn;
        this.url = urlin;
    }
// dont define static
// static is always going to be
// nothing and nothing can be anything
// and anything is always different from
// this one 0
// so when you make SOMETHING
    // It will have a different ID and it should
    
    public static getNewId(): number {
        return this._id++;
    }
    public static setNewId(idd: number): void {
        this._id = idd;
    }
    public static resetId(): void {
        this._id = 0;
    }
    public setName(n :string): void{
        this.name = n;
    }
    public setId(im: number)
    {

    }
}

export { Entity };