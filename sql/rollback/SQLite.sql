BEGIN TRANSACTION;
DELETE FROM Books WHERE id = 3;
ROLLBACK