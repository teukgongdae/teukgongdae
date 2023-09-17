package com.tgd.space.service;

import com.tgd.space.entity.Space;
import com.tgd.space.repository.SpaceRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

import java.util.Optional;

@Service
@RequiredArgsConstructor
public class SpaceService {

    private final SpaceRepository spaceRepository;

    public void saveTest() {
        spaceRepository.saveAndFlush(new Space("hello", "bye"));
    }

    public Optional<Space> getOneSpaceTest() {
        return spaceRepository.findById(1L);
    }




    // 외부 api 불러오기
    public void saveAndGetAccount() {
        final String accountURL = "http://localhost:8080/account";

        RestTemplate restTemplate1 = new RestTemplate();
        ResponseEntity<Void> response1 = restTemplate1.postForEntity(accountURL, null ,Void.class);

        RestTemplate restTemplate2 = new RestTemplate();
        ResponseEntity<Object> response2 = restTemplate1.getForEntity(accountURL, Object.class);

        System.out.println(response2.getBody());
    }

}
