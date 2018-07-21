# Stash Your Mash

## Step one

```
npm install dotenv --save
psql -U postgres -f recipes.sql
psql -U postgres
# \c recipes_db
# \d recipes

Tabela "public.recipes"
   Kolumna   |             Typ             | Porˇwnanie | Nullowalne |              Domyťlnie
-------------+-----------------------------+------------+------------+-------------------------------------
 id          | integer                     |            | not null   | nextval('recipes_id_seq'::regclass)
 title       | character varying           |            |            |
 style       | character varying           |            |            |
 ingredients | character varying           |            |            |
 process     | character varying           |            |            |
 create_date | timestamp without time zone |            |            | CURRENT_TIMESTAMP
```
