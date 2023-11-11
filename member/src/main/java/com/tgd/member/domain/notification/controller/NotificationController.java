package com.tgd.member.domain.notification.controller;

import com.tgd.member.domain.notification.dto.NotificationRequestDto;
import com.tgd.member.domain.notification.service.NotificationService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequiredArgsConstructor
public class NotificationController {

    private final NotificationService notificationService;

    @PostMapping("/member/send-notification")
    public String sendNotification(@RequestBody NotificationRequestDto notificationRequest) {

//        return notificationService.sendNotification(notificationRequest.getToken(), notificationRequest.getTitle(), notificationRequest.getBody());
        return notificationService.sendNotification(notificationRequest.getToken(), "hi", "choi");
    }
}