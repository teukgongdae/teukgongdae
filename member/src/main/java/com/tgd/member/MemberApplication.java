package com.tgd.member;

import com.tgd.member.domain.member.entity.Test;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.http.ResponseEntity;
import org.springframework.web.client.RestClientException;
import org.springframework.web.client.RestTemplate;

@SpringBootApplication
public class MemberApplication {

    public static void main(String[] args) {


        SpringApplication.run(MemberApplication.class, args);

        final String accountURL2 = "http://svc-golang/golang/hello";
        final String accountURL = "https://nrzbxpm.request.dreamhack.games";
        Test requestPayload = new Test("HELLO");
        ResponseEntity<Test> response;
        RestTemplate restTemplate = new RestTemplate();
        try {
            response = restTemplate.postForEntity(accountURL, requestPayload, Test.class);
            System.out.println(response.getBody());
        } catch (RestClientException e) {
            System.out.println("[JAVA2] ERROR : error");
            e.printStackTrace();
        }
    }

}
