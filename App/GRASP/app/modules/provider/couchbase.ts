import {Couchbase} from 'nativescript-couchbase';

export class CouchbaseProvider {

    private database: any;
    private isInstantiated: boolean;

    public constructor() {
        if(!this.isInstantiated) {
            this.database = new Couchbase("product-database");
            this.isInstantiated = true;
        }
    }

    public getDatabase() {
        return this.database;
    }

}
