package com.tgd.member.domain.member.service;

import com.tgd.member.domain.member.entity.Account;
import com.tgd.member.domain.member.repository.AccountRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
@RequiredArgsConstructor
public class AccountService {

    private final AccountRepository accountRepository;

    public Account getAccountById(Long id) {
        Optional<Account> account = accountRepository.findById(id);
        if (account.isEmpty()) {
            System.out.println("[JAVA3] ERROR 데이터 불러오기 실패");
            throw new IllegalArgumentException();
        } else {
            System.out.println("[JAVA3] SUCCESS");
            return account.get();
        }
    }
}
