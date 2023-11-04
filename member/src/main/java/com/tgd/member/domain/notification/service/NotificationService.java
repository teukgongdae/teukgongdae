package com.tgd.member.domain.notification.service;

import com.google.firebase.messaging.FirebaseMessaging;
import com.google.firebase.messaging.FirebaseMessagingException;
import com.google.firebase.messaging.Message;
import com.tgd.member.config.FirebaseConfig;
import com.tgd.member.domain.member.entity.Account;
import com.tgd.member.domain.member.repository.AccountRepository;
import com.tgd.member.domain.member.service.AccountService;
import com.tgd.member.domain.notification.entity.FCMToken;
import com.tgd.member.domain.notification.repository.FCMTokenRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import javax.persistence.EntityNotFoundException;
import java.util.Optional;

@Service
@RequiredArgsConstructor
public class NotificationService {

    private final FCMTokenRepository fcmTokenRepository;
    private final AccountRepository accountRepository;

    public String sendNotification(String token, String title, String body) {

//        updateFCMToken(token, 2L);

        Message message = Message.builder()
                .putData("title", title)
                .putData("body", body)
                .setToken(token)
                .build();

        try {
            return FirebaseMessaging.getInstance().send(message);
        } catch (FirebaseMessagingException e) {
            throw new RuntimeException(e);
        }
    }

    public void updateFCMToken(String token, Long accountId) {

        Account account = accountRepository.findById(accountId)
                .orElseThrow(() -> new EntityNotFoundException("Account not found with id: " + accountId));

        FCMToken fcmToken = new FCMToken();
        fcmToken.setToken(token);
        fcmToken.setAccountId(account);
        fcmTokenRepository.save(fcmToken);
    }



}