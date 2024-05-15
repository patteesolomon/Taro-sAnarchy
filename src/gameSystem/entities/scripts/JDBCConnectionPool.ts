import { Objpool } from "./Objpool";
import { ACR } from "./ACR";
import { NetManager } from './NetManager';

class JDBCConnectionPool extends Objpool<ACR> {
    private url: string;
    private user: string;
    private password: string;

    constructor(driver :string, url: string, user: string, password: string) {
        super(30000);
        try {
            // new instance
            var E = new JDBCConnectionPool(driver, url, user, password);
        } catch (error) {
            console.log(error);
            throw error;
        }
        this.url = url;
        this.user = user;
        this.password = password;
    }

    protected create(): ACR {
        try { return NetManager.getConnection(this.url, this.user, this.password);
        } catch (error) {
            //error.printStackTrace();
            //return null;
            console.log(error);
            throw error;
        }
    }

    public validate(o: ACR): boolean {
        try {
            return !o.isClosed();
        } catch (e) {
            return false;
        }
    }

    public expire(o: ACR): void {
        try {
            o.close();
        } catch (e) {
            console.log(e);
            //e.printStackTrace();
            throw e;
        }
    }
}