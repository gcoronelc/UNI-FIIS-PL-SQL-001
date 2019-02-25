-- SEQUENCIAS
 
create sequence SCOTT.sqtest; 
 
select SCOTT.sqtest.nextval from dual;


-- TABLA MORMAL

create table SCOTT.test (   
  id number primary key,   
  dato varchar2(30)   
);



-- TABLA TEMPORAL 1

create global temporary table SCOTT.test1 (   
  id number primary key,   
  dato varchar2(30)   
) on commit delete rows; 




-- TABLA TEMPORAL 2

create global temporary table SCOTT.test2 (   
  id number primary key,   
  dato varchar2(30)   
) on commit preserve rows;
 
 
 
 
 
 
 