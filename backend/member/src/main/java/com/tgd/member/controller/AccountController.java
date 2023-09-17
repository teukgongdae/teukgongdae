package com.tgd.member.controller;

import com.tgd.member.entity.Account;
import com.tgd.member.service.AccountService;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.responses.ApiResponse;
import io.swagger.v3.oas.annotations.responses.ApiResponses;
import io.swagger.v3.oas.annotations.tags.Tag;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.Optional;

@Tag(name = "account", description = "계정 관련 API")
@RestController
@RequiredArgsConstructor
public class AccountController {

    private final AccountService accountService;

    @Operation(summary = "1번 계정 불러오기")
    @ApiResponses(value = {
            @ApiResponse(responseCode = "200")
    })
    @GetMapping("/account")
    public ResponseEntity<Optional<Account>> getFirstSpace() {
        return ResponseEntity.ok(accountService.getOneAccountTest());
    }

    @Operation(summary = "계정 저장하기")
    @ApiResponses(value = {
            @ApiResponse(responseCode = "204")
    })
    @PostMapping("/account")
    public ResponseEntity<Void> getFirstGather() {
        accountService.saveTest();
        return ResponseEntity.status(HttpStatus.OK).build();
    }
}
