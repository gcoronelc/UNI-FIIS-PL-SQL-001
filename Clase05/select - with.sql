-- Caso 1
select * 
from scott.emp 
where rownum <= 10
order by 2;

-- Caso 2

with 
v1 as (
  select * from scott.emp order by 2
)
select * 
from v1 
where rownum <= 10;



