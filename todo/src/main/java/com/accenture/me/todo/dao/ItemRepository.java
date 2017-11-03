package com.accenture.me.todo.dao;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.accenture.me.todo.entity.TodoItem;

@Repository
public interface ItemRepository  extends CrudRepository<TodoItem, Long>{

}
