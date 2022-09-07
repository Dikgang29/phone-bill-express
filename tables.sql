create table price_plan(
	id serial not null primary key,
	plan_name VARCHAR ( 50 ) UNIQUE NOT NULL,
	sms_price decimal(10,2),
	call_price decimal(10,2),
	description text not null
);

create table usernames(
	id serial not null primary key,
	username VARCHAR ( 50 ) UNIQUE NOT NULL   
);

