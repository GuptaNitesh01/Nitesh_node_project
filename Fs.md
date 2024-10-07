## Api Flow

file--app.js
const app = express();

require("./router")(app);






:::: Database syatem :
 data store in tableformat 

 database => multiple schemas =>  n number of  tables =>  n number of columns/attributes.

 schema => logical structure of any database.


structure query language::SQL
MSSQL,MYSQL,POSTGRATESQL
1. select* from table 



Client = class
client = instance of Client


NOSQL :: not only structure query language
=> mongoDB => database => colletions => documents(in JSON FORMAT )
JSON :: JAVASCRIPT OBJECT NOTATION 


SQl ::(STRUCTURE QUERY LANGUAGE)

DDl : DATA DEFINATION LANGUAGE          => TABLE        => table ke upar operation
DML : DATA MANIPULATION LANGUAGE        => dATA/rows    => table ke niche data level pe 
DCL  : DATA CONTROL LANGUAGE            => permission   => user level pe


CRUD::
                        QUERY       PARAMS          CALLBACK
CREATING DATA => .query(insert ,   [        ] ,             )
READING DATA  => .query(select ,   [        ] ,             )
UPDATING DATA => .query(update ,   [        ] ,             )
DELETING DATA => .query(delete ,   [        ] ,             )

variables , file_name ,folder_name : abc_def => snake case;
function : abc , abcDef => camel case;  