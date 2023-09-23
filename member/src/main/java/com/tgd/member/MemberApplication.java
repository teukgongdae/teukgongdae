package com.tgd.member;

import com.tgd.member.domain.member.entity.Test;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.http.ResponseEntity;
import org.springframework.web.client.RestTemplate;

@SpringBootApplication
public class MemberApplication {

    public static void main(String[] args) {
        final String accountURL = " http://svc-golang/golang/hello";

        RestTemplate restTemplate = new RestTemplate();
        ResponseEntity<Test> response = restTemplate.postForEntity(accountURL, new Test("HELLO"), Test.class);
        System.out.println(response.getBody());

        SpringApplication.run(MemberApplication.class, args);
    }

}
