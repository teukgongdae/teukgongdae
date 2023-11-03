package com.tgd.member.domain.socket;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.amqp.rabbit.annotation.RabbitListener;
import org.springframework.amqp.rabbit.core.RabbitTemplate;
import org.springframework.messaging.simp.SimpMessagingTemplate;
import org.springframework.stereotype.Component;


@Slf4j
@Component
@RequiredArgsConstructor
public class WebSocketMessageHandler {

    private final SimpMessagingTemplate template;
    private final RabbitTemplate rabbitTemplate;

    public void sendMessageToRabbit(String message) {
        rabbitTemplate.convertAndSend("your-exchange-name", "your-routing-key", message);
    }

    @RabbitListener(queues = "your-queue-name")
    public void listen(String message) {
        template.convertAndSend("/topic/your-topic", message);
    }
}