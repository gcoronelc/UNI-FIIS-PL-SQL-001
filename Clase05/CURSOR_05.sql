create or replace procedure scott.pr120(cod number, delta number) 
is 
begin  

  update scott.emp   
  set sal = sal + delta   
  where empno = cod;  
  
  if sql%notfound then   
    dbms_output.put_line('Filas: ' || sql%rowcount);
    dbms_output.put_line('no existe');  
  else   
    dbms_output.put_line('Filas: ' || sql%rowcount);
    commit;   
    dbms_output.put_line('proceso ok');  
  end if; 
  
end;

select * from scott.emp;

call scott.pr120( 8899, 79.5 );


