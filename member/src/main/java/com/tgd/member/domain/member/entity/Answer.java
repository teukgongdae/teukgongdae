package com.tgd.member.domain.member.entity;

import lombok.Data;

@Data
public class Answer {

    private String answer;

    public String getAnswer() {
        return answer;
    }

    public void setAnswer(String answer) {
        this.answer = answer;
    }

    public Answer(String answer) {
        this.answer = answer;
    }
}
