CREATE TABLE todo_item (
    id int NOT NULL,
    title varchar(255),
    done boolean,
    due_date DATE ,
    PRIMARY KEY (id)
);
commit;