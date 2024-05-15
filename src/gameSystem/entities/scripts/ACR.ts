import { Entity } from "./Entity";

const statb = [0, 0, 0, 0, 0, 0, 0, 0, 0,];

class ACR extends Entity{
    constructor()
    {
        super(0,'','');
    }
    static getConnection(url, user, password) {
        throw new Error("Method not implemented.");
    }
    close() {
        throw new Error("Method not implemented.");
    }
    isClosed(ve = false) {
        return ve;
    }
}

export default {ACR};