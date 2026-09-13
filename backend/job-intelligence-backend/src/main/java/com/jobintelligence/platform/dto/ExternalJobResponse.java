package com.jobintelligence.platform.dto;

import lombok.*;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class ExternalJobResponse {

    private String externalId;

    private String jobTitle;

    private String companyName;

    private String city;

    private String description;

    private String jobLink;

    private String source;
}