
CREATE OR REPLACE PACKAGE scott.testpackage as  

  function suma( n1 in number, n2 in number ) return number; 
  
  function suma( n1 in number, n2 in number, n3 in number ) return number; 
  
END testpackage; 
/


CREATE OR REPLACE PACKAGE BODY scott.testpackage as

function suma( n1 in number, n2 in number ) 
return number  
as   
  rtn number;  
begin   
  rtn := n1 + n2;   
  return rtn;  
end;  

function suma( n1 in number, n2 in number, n3 in number ) 
return number  
as   
  rtn number;  
begin   
  rtn := n1 + n2 + n3;   
  return rtn;  
end;  

END testpackage; 
/

select scott.testpackage.suma(34,56) from dual;

select scott.testpackage.suma(34,56,87) from dual;


