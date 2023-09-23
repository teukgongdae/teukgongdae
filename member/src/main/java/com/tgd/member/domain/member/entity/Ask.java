package com.tgd.member.domain.member.entity;

import lombok.Data;

public class Ask {

    public Ask(String ask) {
        this.ask = ask;
    }

    public String getAsk() {
        return ask;
    }

    public void setAsk(String ask) {
        this.ask = ask;
    }

    private String ask;
}
