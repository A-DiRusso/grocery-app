create table users (
    id serial primary key,
    email varchar(200),
    password varchar(500),
    first_name varchar(100),
    last_name varchar(100)
    );

create table stores (
    id serial primary key,
    store_name varchar(100)
);

--multiple users can edit the same table
create table user_stores (
    user_id integer references users(id),  --foreign key
    store_id integer references stores(id) ,
    PRIMARY KEY(user_id, store_id)
);

create table items (
    id serial primary key,
    store_id integer references stores(id),
    item varchar(150),
    quantity integer,
    comments varchar(500),
    checked boolean DEFAULT false
);