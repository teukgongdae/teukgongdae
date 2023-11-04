package com.tgd.member.domain.socket.controller;

import com.tgd.member.domain.socket.dto.NotificationRequestDto;
import com.tgd.member.domain.socket.service.FCMService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequiredArgsConstructor
public class NotificationController {

    private final FCMService fcmService;

    @PostMapping("/send-notification")
    public String sendNotification(@RequestBody NotificationRequestDto notificationRequest) {
        return fcmService.sendNotification(notificationRequest.getToken(), notificationRequest.getTitle(), notificationRequest.getBody());
    }
}