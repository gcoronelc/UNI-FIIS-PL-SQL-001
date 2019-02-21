
-- Creación del usuario

CREATE USER AULA
IDENTIFIED BY admin;

-- Asignandole recursos

GRANT CONNECT, RESOURCE TO AULA;

-- Iniciar sesión con el usuario aula

-- Crear una tabla
CREATE TABLE aula.alumno(
  ID NUMBER,
  nombre VARCHAR2(50),
  apellido VARCHAR2(50),
  CONSTRAINT pk_alumno PRIMARY KEY ( id )
);


-- Insertar Datos

INSERT INTO aula.alumno
VALUES(1,'GUSTAVO','CORONEL');

INSERT INTO aula.alumno
VALUES(2,'CLAUDIA','SANCHEZ');

COMMIT;











