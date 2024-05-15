const hash = (key: any, size: number): number => {
    let hashedKey = 0;
    for (let i = 0; i < key.length; i++) {
      hashedKey += key.charCodeAt(i);
    }
  
    return hashedKey % size;
  };

class HashTable {
    public size: number;
    buckets: Map<any, any>[];
  
    constructor() {
      this.size = 10;
      this.buckets = Array(this.size);
  
      for (let i = 0; i < this.buckets.length; i++) {
        this.buckets[i] = new Map();
      }
    }

    get(key: any): any {
        return this.buckets[hash(key, this.size)].get(key);
    }

    put(key: any, value: any) {
        this.buckets[hash(key, this.size)].set(key, value);
    }
    insert(key: any, value: any) {
      const idx = hash(key, this.size);
      this.buckets[idx].set(key, `${value} [hash: ${idx}]`);
    }
  
    remove(key: any): any {
      const idx = hash(key, this.size);
      const deleted = this.buckets[idx].get(key);
      this.buckets[idx].delete(key);
      return deleted;
    }
  
    search(key: any): any {
      const idx = hash(key, this.size);
      return this.buckets[idx].get(key);
    }
  }

    export default HashTable;