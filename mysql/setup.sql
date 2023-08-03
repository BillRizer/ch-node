ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY 'password';


CREATE DATABASE IF NOT EXISTS `app`;

USE app;

CREATE TABLE IF NOT EXISTS `people` (
  `id` int(11) NOT NULL auto_increment,   
  `name` varchar(250)  NOT NULL default '',     
   PRIMARY KEY  (`id`)
);

INSERT INTO app.people
(name)
VALUES('Joaozinho'),("Little Joe"),('Mariazinha')