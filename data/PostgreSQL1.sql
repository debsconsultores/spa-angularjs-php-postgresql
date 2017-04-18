/* 
	1. Crear Base de Datos en PostgreSQL
	2. Crear tabla pais
	3. Crear función para pais, que:
		- Devuelva todos los registro
		- Devuelva un único registro
	4. Realizar Pruebas desde PostgreSQL
		- Insertar registros manualmente.
	5. Crear servicio (factory) en AngularJS 
		que interactúe con el Servicio Web (PHP en este caso),
		para las operaciones GET.
	6. Crear "Servicio Web" en PHP para la tabla de pais,
		que ejecute operaciones GET.
	7. Modificar controlador y vista, para que realice operaciones 
		de consulta con la tabla país
*/
-- 1. 
CREATE DATABASE spaangularjs;

-- 2.
CREATE TABLE public.pais
(
  codpais serial NOT NULL,
  pais character varying(50) NOT NULL,
  CONSTRAINT pais_pkey PRIMARY KEY (codpais)
)
WITH (
  OIDS=FALSE
);
ALTER TABLE public.pais
  OWNER TO postgres;

  
--Probar Tabla
Select * from pais

--Insertar Manualmente Registros
Insert into public.pais (pais) values ('Nicaragua');
Insert into public.pais (pais) values ('México');
Insert into public.pais (pais) values ('Guatemala');
Insert into public.pais (pais) values ('El Salvador');

-- 3. 
CREATE OR REPLACE FUNCTION public.pais_get(pcod integer DEFAULT -1)
  RETURNS TABLE(codpais integer, pais character varying) AS
$BODY$
DECLARE
	_wher varchar(50);
	_sql varchar(200);
BEGIN
	_sql :=  'SELECT codpais,pais from pais ';
	IF pcod is null OR pcod=-1 THEN
		_wher := '';
	ELSE
		_wher := 'where codpais=' || pcod || ' ORDER BY 2 ';
		raise notice '%',_wher ;
	END IF;

	RAISE NOTICE  'Ejecución % % ',_sql,_wher;
	RETURN QUERY EXECUTE _sql || _wher;
END
$BODY$
  LANGUAGE plpgsql VOLATILE
  COST 100
  ROWS 1000;
ALTER FUNCTION public.pais_get(integer)
  OWNER TO postgres;
--////////

--Devolver todos los registros
Select * from public.pais_get();

--Devolver un único registro
Select * from public.pais_get(1);