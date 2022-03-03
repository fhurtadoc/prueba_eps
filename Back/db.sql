CREATE TABLE EPS_Prueba.date_doctor (
	id INT auto_increment NULL,
	date_doctor DATETIME NULL,
	id_doctor int NULL
)
ENGINE=InnoDB
DEFAULT CHARSET=utf8mb4
COLLATE=utf8mb4_0900_ai_ci;

CREATE TABLE EPS_Prueba.Doctors (
	id_doctor int auto_increment NOT NULL,
	name VARCHAR(100) NULL,
	especialidad varchar(100) NULL
)
ENGINE=InnoDB
DEFAULT CHARSET=utf8mb4
COLLATE=utf8mb4_0900_ai_ci;

CREATE TABLE EPS_Prueba.especialidades (
	id_especialidad int auto_increment NOT NULL PRIMARY KEY,
	name varchar(100) NULL,
	Descripcion varchar(100) NULL
)
ENGINE=InnoDB
DEFAULT CHARSET=utf8mb4
COLLATE=utf8mb4_0900_ai_ci;


INSERT INTO EPS_Prueba.especialidades
(name, Descripcion)
VALUES('PEDIADRIA', 'Es la especialidad médica que estudia al niño y el adolescente, sus enfermedades y comportamientos');

INSERT INTO EPS_Prueba.especialidades
(name, Descripcion)
VALUES('oncología', 'especializada en el diagnóstico y tratamiento del cáncer.');

INSERT INTO EPS_Prueba.especialidades
(name, Descripcion)
VALUES('cirujano pediatra', 'Cirujano que tiene una formación especial para tratar niños.');


INSERT INTO EPS_Prueba.Doctors
(name, especialidad)
VALUES('JUAN MANUEL ROMERO', 1 );

INSERT INTO EPS_Prueba.Doctors
(name, especialidad)
VALUES('PEDRO CASTRO ROMERO', 2);

INSERT INTO EPS_Prueba.Doctors
(name, especialidad)
VALUES('IVAN CASTRO CORONEL', 3);