package com.jobintelligence.platform.dto;

import lombok.Data;

@Data
public class JobSearchRequest {

    private String keyword;

    private String company;

    private String location;

    private String source;

    private int page = 0;

    private int size = 20;

    private String sortBy = "id";

    private String sortDirection = "desc";
}