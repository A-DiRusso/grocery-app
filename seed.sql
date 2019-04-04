insert into users
(first_name, last_name, email, password)
values
('Margaret','ONeill','margaret@oneillfish.com','password1'),
('Rob','ONeill','roneill@columbiaprop','password1'),
('Madeline','ONeill','maddie@oneillcrew.com','password1'),
('Eileen','Pickett','epickett@gmail.com','password1'),
('Carol','Jantzen','cmjantzen@srs.gov','password1'),
('Emily','Sasser','ess@gmail.com','password1'),
('Lady', 'Godiva', 'chocobsessed@hotmail.com', 'nakedtruth!'),
    ('Nicolas', 'Flamel', 'tomorrowneverdies@netscape.net', 'g3t570n3d'),
    ('Cruella', 'DeVille', 'puppypower@yahoo.com', 'SpotsSpotsSpots'),
    ('Lennie', 'Small', 'bunnybuddy@outlook.com', 'nonAlgern0n');


insert into  stores ( store_name )
values
('Publix'),
('Trader Joes'),
('Tower Wine'),
('Whole Foods');

insert into user_stores 
(user_id, store_id)
values
(3,2),
(3,4),
(1,2);

insert into items 
(store_id, item)
values
(2,'bread'),
(2,'butter'),
(2,'cheese'),
(2,'two buck chuck'),
(4,'expensive cheese'),
(4,'expensive milk'),
(4,'gourmet shit');


