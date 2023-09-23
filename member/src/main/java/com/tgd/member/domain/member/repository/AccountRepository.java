package com.tgd.member.domain.member.repository;

import com.tgd.member.domain.member.entity.Account;
import org.springframework.data.jpa.repository.JpaRepository;

public interface AccountRepository extends JpaRepository<Account, Long> {


}
