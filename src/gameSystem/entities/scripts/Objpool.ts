import HashTable from "./HashTable";

abstract class Objpool<T> {
    private expTime: number;

    private unlocked: HashTable; 
    private locked: HashTable;

    constructor(expTime: number) {
        this.expTime = expTime;
        this.unlocked = new HashTable();
        this.locked = new HashTable();
    }

    protected abstract create(): T;

    public abstract validate(o: T): boolean;

    public abstract expire(o: T): void;

    public synchronizedCheckOut(): T {
        var now = new Date().getMilliseconds();
        var o: T;
        if (this.unlocked.size > 0) {
            for (var i = 0; i < this.unlocked.size; i++) {
                o = this.unlocked.get(i);
                if ((now - this.unlocked.get(o)) > this.expTime) {
                    this.unlocked.remove(o);
                    this.expire(o);
                    //o = null;
                    return this.synchronizedCheckOut();
                } else {
                    if (this.validate(o)) {
                        this.unlocked.remove(o);
                        this.locked.put(o, now);
                        return o;
                    } else {
                        this.unlocked.remove(o);
                        this.expire(o);
                        //o = null;
                        return this.synchronizedCheckOut();
                    }
                }
            }
        }
        o = this.create();
        this.locked.put(o, now);
        return o;
    }

    public synchronizedCheckIn(o: T): void {
        this.locked.remove(o);
        this.unlocked.put(o, new Date().getMilliseconds());
    }

    

    /// <summary>
    /// The three remaining methods are abstract and 
    /// therefore must be implemented by the subclass
    /// </summary>
}

export { Objpool };