package com.tgd.member.domain.notification.repository;

import com.tgd.member.domain.notification.entity.FCMToken;
import org.springframework.data.jpa.repository.JpaRepository;

public interface FCMTokenRepository extends JpaRepository<FCMToken, String> {

}
