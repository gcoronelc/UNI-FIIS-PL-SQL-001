declare
  -- Declarar el cursor
  cursor c_demo( p_deptno number) is
    select * from scott.emp
    where deptno = p_deptno;
  -- Declarar el registro
  v_reg scott.emp%rowtype;
begin
  -- Abrir el cursor
  open c_demo( 20 );
  
  -- Recuperar la fila 1
  fetch c_demo into v_reg;
  dbms_output.put_line(v_reg.empno || ' - ' || v_reg.ename);
  
  -- Recuperar la fila 2
  fetch c_demo into v_reg;
  dbms_output.put_line(v_reg.empno || ' - ' || v_reg.ename);
  
  -- Cerrar el cursor
  close c_demo;
end;