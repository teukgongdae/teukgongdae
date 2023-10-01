package com.tgd.member.domain.member.service;

import com.tgd.member.domain.member.entity.Account;
import com.tgd.member.domain.member.repository.AccountRepository;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;

import java.util.Optional;

import static org.assertj.core.api.AssertionsForClassTypes.assertThat;
import static org.mockito.Mockito.when;

@ExtendWith(MockitoExtension.class)
class AccountServiceTest {

    @InjectMocks
    AccountService accountService;

    @Mock
    AccountRepository accountRepository;


    @Test
    void getMemberById() {
        //given
        Long id = 1L; int age = 10;
        Account account = new Account(id, age);

        //when
        when(accountRepository.findById(id)).thenReturn(Optional.of(account));

        Account result = accountService.getAccountById(id);

        //then
        assertThat(result.getAge()).isEqualTo(age);
    }
}