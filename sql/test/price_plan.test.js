const assert = require('assert');
const Price_plan = require('../price_plan');
const pgp = require('pg-promise')();

// we are using a special test database for the tests
const connectionString = process.env.DATABASE_URL || 'postgresql://localhost:5432/my_products_test';

const db = pgp(connectionString);

describe('The basic database web app', function(){

    beforeEach(async function(){
        // clean the tables before each test run
        await db.none("delete from price_plan;");
        // await db.none("delete from categories;");
    });

    it('should pass the db test', async function(){
        
        // the Factory Function is called CategoryService
        // let price_plan = Price_plan(db);
        // await categoryService.add({
        //     description : "Diary"
        // });

    });

    after(function(){
        db.$pool.end
    })
});