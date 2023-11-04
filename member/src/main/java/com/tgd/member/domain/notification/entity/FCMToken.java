package com.tgd.member.domain.notification.entity;

import com.tgd.member.domain.member.entity.Account;
import lombok.Getter;
import lombok.Setter;
import org.springframework.data.jpa.domain.support.AuditingEntityListener;

import javax.persistence.*;


@Getter
@Setter
@Entity
@Table(name = "registrationToken")
@EntityListeners(AuditingEntityListener.class)
//@NoArgsConstructor(access = AccessLevel.PUBLIC)
public class FCMToken {

    @Id
    @Column(name = "token")
    private String token;

    @OneToOne
    @JoinColumn(name = "member_id")
    private Account accountId;


}
