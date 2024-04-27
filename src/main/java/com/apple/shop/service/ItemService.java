package com.apple.shop.service;

import com.apple.shop.entity.Item;
import com.apple.shop.repository.ItemRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class ItemService {

    private final ItemRepository itemRepository;

    public List<Item> list(){
        List<Item> result = itemRepository.findAll();

        System.out.println(result.get(0).getTitle());

        return result;
    }
}
