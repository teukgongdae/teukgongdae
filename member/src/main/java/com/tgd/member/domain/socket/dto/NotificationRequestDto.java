package com.tgd.member.domain.socket.dto;

import lombok.Builder;
import lombok.Getter;
import lombok.Setter;

@Builder
@Getter
@Setter
public class NotificationRequestDto {
    private String token;
    private String title;
    private String body;

}