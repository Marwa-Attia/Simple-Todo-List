package com.accenture.me.todo.service;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Service;

import com.accenture.me.todo.dao.ItemRepository;
import com.accenture.me.todo.entity.TodoItem;
@Service
public class ItemService implements GenericService<TodoItem, Long> {
	private ItemRepository itemRepository;
	
	public ItemService(ItemRepository itemRepository) {
		super();
		this.itemRepository = itemRepository;
	}

	@Override
	public Long getId(TodoItem entity) {
		return entity.getId();
	}

	@Override
	public CrudRepository<TodoItem, Long> getRepository() {
		return itemRepository;
	}

}
