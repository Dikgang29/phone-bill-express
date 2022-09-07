module.exports = function Price_planner(){

    async function insertPricePlans(name){
        await db.any(`insert into user_names (plan_name, sms_price, call_price) values ($1,$2,$3 );`, [names,0.25,0.56])

    }

}