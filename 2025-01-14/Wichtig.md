Anleitung: dump der w3schools db in ein sql file hinein.

1. Schritt: 
Öffne das Terminal (oder die Eingabeaufforderung) und starte SQLite mit deiner Datenbank:

sqlite3 datenbankname.db

2. Schritt: 
Im SQLite-Prompt (nach Eingabe des oben genannten Befehls) kannst du den Dump mit dem Befehl .dump erzeugen:

.dump

3. Schritt: 
Um den Dump in eine Datei zu speichern, leite die Ausgabe um. Du kannst dies direkt beim Start von SQLite tun:

sqlite3 datenbankname.db .dump > dump.sql

4. Schritt: 
Wenn du nur bestimmte Tabellen oder Daten dumpen möchtest, kannst du die relevanten SQL-Befehle verwenden:

SELECT * FROM table_name; ODER .dump table_name

Wenn man diese Schritte erledigt hat ist man fertig. Nun zeige ich noch ein Beispiel für so einen Dump:

PRAGMA foreign_keys=OFF;
BEGIN TRANSACTION;
CREATE TABLE users (
    id INTEGER PRIMARY KEY,
    name TEXT,
    email TEXT
);
INSERT INTO users VALUES(1, 'Alice', 'alice@example.com');
INSERT INTO users VALUES(2, 'Bob', 'bob@example.com');
COMMIT;


