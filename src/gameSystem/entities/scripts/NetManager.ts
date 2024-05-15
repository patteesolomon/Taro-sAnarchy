import { Entity } from "./Entity";

class NetManager extends Entity{
    static getConnection: any;
    super()
    {
        this.url = "";
    }
}

export { NetManager };