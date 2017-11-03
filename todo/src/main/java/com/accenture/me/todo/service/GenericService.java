package com.accenture.me.todo.service;
import java.io.Serializable;

import org.springframework.data.repository.CrudRepository;


/**
 * 
 * @author Marwa Attia
 * @param <T>
 * @param <ID>
 */

public interface GenericService<T, ID extends Serializable> {
	public default Iterable<T> findAll() {
		return getRepository().findAll();
	}
	
	public default T get(ID id) {
		return getRepository().findOne(id);
	}
	
	public default T save(T entity) {
		return getRepository().save(entity);
	}
	
	public default void delete(ID id) throws Exception {
		if (getRepository().exists(id)) {
			getRepository().delete(id);
		}
		else {
			throw new Exception("TODO >> 'id' doesn't exists: " + id);
		}
	}
	
	public default void update(T entity) throws Exception {
		if (getRepository().exists(getId(entity))) {
			getRepository().save(entity);
		}
		else {
			throw new Exception("Can't update TODO item because it doesn't exist in DB: " + entity);
		}
	}
	
	public ID getId(T entity);
	
	public CrudRepository<T, ID> getRepository();
}
