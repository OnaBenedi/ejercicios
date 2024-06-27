
-- Task 1 : Display female passengers who survived and are older than 30.
SELECT *
FROM tested
WHERE survived = 1 AND sex = 'female' AND age > 30

-- Task 2 : Find the average age of men who didn't survive.

SELECT AVG(age) AS "Average Age" FROM tested
WHERE survived = 0 AND sex = 'male'

-- Task 3 : Display information for passengers who spent between $20 and $50 on their tickets and got on the ship at port 'C'."

SELECT* FROM tested
WHERE fare BETWEEN 20 AND 50
AND embarked = 'C'

-- Task 4: Find the total number of the survivors in the first class.

SELECT COUNT (*) AS 'Total Survivors'
FROM tested
WHERE survived = 1 and pclass = 1;

-- Task 5 :  Show the information of passengers who boarded from Cherbourg (port 'C') and spent more than $75 on their tickets.".

SELECT * FROM tested
WHERE embarked = 'C' AND fare > 75