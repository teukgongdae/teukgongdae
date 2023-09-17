package com.tgd.member.service;

import com.tgd.member.entity.Account;
import com.tgd.member.repository.AccountRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
@RequiredArgsConstructor
public class AccountService {

    private final AccountRepository accountRepository;

    public void saveTest() {
        accountRepository.saveAndFlush(new Account("최곤욕"));
    }

    public Optional<Account> getOneAccountTest() {
        return accountRepository.findById(1L);
    }

}
