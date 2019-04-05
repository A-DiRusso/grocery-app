insert into users
(first_name, last_name, email, password)
values
('Margaret','ONeill','margaret@oneillfish.com','$2a$10$ty51jaFTx27lJtYpLyJP4eWesL0Jds8woQN1AR8hkTO6/dpf7qPh2'),
('Rob','ONeill','roneill@columbiaprop','password1'),
('Madeline','ONeill','maddie@oneillcrew.com','$2a$10$fqFAywGYUHeGffolEzrdh.V//lc76UEvgc/BkOw.IDtXONIiCavn.'),
('Eileen','Pickett','epickett@gmail.com','$2a$10$itEjhJk2o7RLnTJdj1Dpxu5PR9FXKYTI5fgmBqqB43gm3ISE1fm8u'),
('Carol','Jantzen','cmjantzen@srs.gov','password1'),
('Emily','Sasser','ess@gmail.com','password1'),
('Lady', 'Godiva', 'chocobsessed@hotmail.com', 'nakedtruth!'),
    ('Nicolas', 'Flamel', 'tomorrowneverdies@netscape.net', 'g3t570n3d'),
    ('Cruella', 'DeVille', 'puppypower@yahoo.com', 'SpotsSpotsSpots'),
    ('Tony','Tony','tony@tony.com','$2a$10$JFepeF6WOqmW1BvXEWcBS.RIdKf6X.ya0tC9Rr1d/X/5z/wArHgsK'),
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
(3,1),
(1,2),
(1,4),
(1,3),
(1,1),
(10,1),
(10,2),
(10,3),
(10,4)
;

insert into items 
(store_id, item)
values
(1,'wine'),
(2,'bread'),
(2,'butter'),
(2,'cheese'),
(2,'two buck chuck'),
(1,'grapes'),
(2,'bananas'),
(1,'turnips'),
(1,'rutabegas'),
(3,'voda'),
(3,'vermouth'),
(3,'pampelmousse'),
(3,'mezcal'),
(3,'gin'),
(4,'expensive cheese'),
(4,'expensive milk'),
(4,'gourmet shit');


