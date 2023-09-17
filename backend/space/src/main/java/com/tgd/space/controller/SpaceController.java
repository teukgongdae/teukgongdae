package com.tgd.space.controller;

import com.tgd.space.entity.Space;
import com.tgd.space.service.SpaceService;
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

@Tag(name = "space", description = "공간 대여 관련 API")
@RestController
@RequiredArgsConstructor
public class SpaceController {

    private final SpaceService spaceService;

    @Operation(summary = "1번 글 불러오기")
    @ApiResponses(value = {
            @ApiResponse(responseCode = "200")
    })
    @GetMapping("/space")
    public ResponseEntity<Optional<Space>> getFirstSpace() {
        return ResponseEntity.ok(spaceService.getOneSpaceTest());
    }

    @Operation(summary = "글 저장하기")
    @ApiResponses(value = {
            @ApiResponse(responseCode = "204")
    })
    @PostMapping("/space")
    public ResponseEntity<Void> getFirstGather() {
        spaceService.saveTest();
        return ResponseEntity.status(HttpStatus.OK).build();
    }

    @Operation(summary = "외부 API 호출 테스트")
    @ApiResponses(value = {
            @ApiResponse(responseCode = "200")
    })
    @PostMapping("/test")
    public ResponseEntity<Void> get() {
        spaceService.saveAndGetAccount();
        return ResponseEntity.status(HttpStatus.OK).build();
    }
}
