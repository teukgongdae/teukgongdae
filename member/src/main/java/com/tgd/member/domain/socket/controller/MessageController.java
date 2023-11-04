//package com.tgd.member.domain.socket.controller;
//
//import io.swagger.v3.oas.annotations.parameters.RequestBody;
//import org.apache.logging.log4j.message.Message;
//import org.springframework.http.ResponseEntity;
//import org.springframework.web.bind.annotation.GetMapping;
//import org.springframework.web.bind.annotation.PostMapping;
//import org.springframework.web.bind.annotation.RequestMapping;
//import org.springframework.web.bind.annotation.RestController;
//
//import java.util.List;
//
//@RestController
//@RequestMapping("/api/messages")
//public class MessageController {
//
//    @GetMapping
//    public ResponseEntity<List<Message>> getMessages() {
//        // 메시지 조회 로직
//    }
//
//    @PostMapping
//    public ResponseEntity<Message> createMessage(@RequestBody Message message) {
//        // 메시지 저장 로직
//    }
//}