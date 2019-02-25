-- SEQUENCIAS
 
create sequence SCOTT.sqtest; 
 
select SCOTT.sqtest.nextval from dual;


-- TABLA MORMAL

create table SCOTT.test (   
  id number primary key,   
  dato varchar2(30)   
);

insert into scott.test
values(SCOTT.sqtest.nextval,'Gustavo Coronel');

COMMIT;

select * from scott.test;





-- TABLA TEMPORAL 1

create global temporary table SCOTT.test1 (   
  id number primary key,   
  dato varchar2(30)   
) on commit delete rows; 

insert into scott.test1
values(SCOTT.sqtest.nextval,'Gustavo Coronel');

insert into scott.test1
values(SCOTT.sqtest.nextval,'CLAUDIA RAMOS');

select * from scott.test1;

COMMIT;

select * from scott.test1;

-- TABLA TEMPORAL 2

create global temporary table SCOTT.test2 (   
  id number primary key,   
  dato varchar2(30)   
) on commit preserve rows;
 
 
insert into scott.test2
values(SCOTT.sqtest.nextval,'Gustavo Coronel');

insert into scott.test2
values(SCOTT.sqtest.nextval,'CLAUDIA RAMOS');

select * from scott.test2;

COMMIT;

select * from scott.test2;
 
 
 
 