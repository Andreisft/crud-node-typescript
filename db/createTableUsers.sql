create table users (
	id serial primary key,
	cpf varchar(11) not null unique,
	name varchar(30) not null,
	age integer not null,
	phone varchar(15) not null unique
);

select * from users;