-- Big Countries
SELECT
    name, population, area
FROM
    World
WHERE
    area > 3000000 OR 
    population > 25000000

-- Swap Salaries

UPDATE salary
SET
    sex = CASE sex
        WHEN 'm' THEN 'f'
        ELSE 'm'
    END;

