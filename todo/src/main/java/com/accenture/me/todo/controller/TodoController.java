package com.accenture.me.todo.controller;





import java.net.URI;

import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.accenture.me.todo.entity.TodoItem;
import com.accenture.me.todo.service.ItemService;
import com.accenture.me.todo.vo.ResponseVO;


/**
 * 
 * @author Marwa Attia
 */
@RestController
@RequestMapping("/todo")
public class TodoController {
	private final ItemService itemService;

	public TodoController(final ItemService itemService) {
		this.itemService = itemService;
	}

	@GetMapping(produces = MediaType.APPLICATION_JSON_VALUE)
	public ResponseEntity<ResponseVO<Iterable<TodoItem>>> findAll() {
		return ResponseEntity.ok(new ResponseVO<>(itemService.findAll()));
	}

	@GetMapping(value = "/{todo_id}", produces = MediaType.APPLICATION_JSON_VALUE)
	public ResponseEntity<ResponseVO<TodoItem>> get(@PathVariable("todo_id") Long todoId) {
		return ResponseEntity.ok(new ResponseVO<>(itemService.get(todoId)));
	}

	@DeleteMapping(value = "/{todo_id}", produces = MediaType.APPLICATION_JSON_VALUE)
	public ResponseEntity<ResponseVO<Long>> delete(@PathVariable("todo_id") Long todoId) {
		try {
			itemService.delete(todoId);
		} catch (Exception e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		return ResponseEntity.ok(new ResponseVO<>(todoId));
	}

	@PostMapping(consumes = MediaType.APPLICATION_JSON_VALUE, produces = MediaType.APPLICATION_JSON_VALUE)
	public ResponseEntity<ResponseVO<TodoItem>> create(@RequestBody TodoItem item) {
		TodoItem savedItem = itemService.save(item);
		return ResponseEntity.created(URI.create("/" + item.getId())).body(new ResponseVO<>(savedItem));
	}

	@PutMapping(consumes = MediaType.APPLICATION_JSON_VALUE)
	public ResponseEntity<?> update(@RequestBody TodoItem item) {
		try {
			itemService.update(item);
		} catch (Exception e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		return ResponseEntity.noContent().build();
	}
}

