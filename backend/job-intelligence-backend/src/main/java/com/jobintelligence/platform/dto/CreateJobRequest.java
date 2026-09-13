package com.jobintelligence.platform.dto;

import jakarta.validation.constraints.NotBlank;
import lombok.*;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class CreateJobRequest {

    @NotBlank
    private String title;

    @NotBlank
    private String company;

    private String location;

    private String description;

    private String jobUrl;

    private String source;

    private String externalId;
}