package com.tgd.member.domain.member.controller;

import com.tgd.member.domain.member.entity.Account;
import com.tgd.member.domain.member.service.AccountService;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.responses.ApiResponse;
import io.swagger.v3.oas.annotations.responses.ApiResponses;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.Optional;

@RestController
@RequiredArgsConstructor
public class AccountController {

    private final AccountService accountService;

    @Operation(summary = "2번 계정 불러오기")
    @ApiResponses(value = {
            @ApiResponse(responseCode = "200"),
            @ApiResponse(responseCode = "400")
    })
    @GetMapping("/member")
    public ResponseEntity<Optional<Account>> getFirstGather() {
        return ResponseEntity.ok(Optional.ofNullable(accountService.getAccountById(2L)));
    }

}
