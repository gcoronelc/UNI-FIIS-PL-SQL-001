declare
  -- Declarar el cursor
  cursor c_demo( p_deptno number) is
    select * from scott.emp
    where deptno = p_deptno;
  -- Declarar el registro
  v_reg scott.emp%rowtype;
begin
  -- Abrir el cursor
  open c_demo( 88 );
  
  -- Bucle de extracción
  LOOP
    -- Recuperar la fila
    fetch c_demo into v_reg;
    EXIT WHEN C_DEMO%NOTFOUND;
    -- Mostrar la fila
    dbms_output.put_line(v_reg.empno || ' - ' || v_reg.ename);
  END LOOP;
  
  -- Cerrar el cursor
  close c_demo;
end;