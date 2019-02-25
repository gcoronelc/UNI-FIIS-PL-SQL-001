declare
  v_reg_emp scott.emp%rowtype;
begin
  select * into v_reg_emp
  from scott.emp
  where empno = 7369;

  dbms_output.put_line(v_reg_emp.empno);  
  dbms_output.put_line(v_reg_emp.ename);
  dbms_output.put_line(v_reg_emp.sal);
end;