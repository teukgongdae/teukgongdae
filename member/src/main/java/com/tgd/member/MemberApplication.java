package com.tgd.member;

import com.tgd.member.domain.member.entity.Answer;
import com.tgd.member.domain.member.entity.Ask;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.http.ResponseEntity;
import org.springframework.web.client.RestClientException;
import org.springframework.web.client.RestTemplate;

@SpringBootApplication
public class MemberApplication {

    public static void main(String[] args) {



        final String accountURL = "http://svc-golang:8080/golang/hello";

        Ask requestPayload = new Ask("HELLO");
        ResponseEntity<Answer> response;
        RestTemplate restTemplate = new RestTemplate();
        try {
            response = restTemplate.postForEntity(accountURL, requestPayload, Answer.class);
            System.out.println(response.getBody());
        } catch (RestClientException e) {
            System.out.println("[JAVA2] ERROR : error");
            e.printStackTrace();
        }
        SpringApplication.run(MemberApplication.class, args);
    }

}
