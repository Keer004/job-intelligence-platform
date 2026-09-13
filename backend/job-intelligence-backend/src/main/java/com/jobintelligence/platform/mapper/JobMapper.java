package com.jobintelligence.platform.mapper;

import com.jobintelligence.platform.dto.ExternalJobResponse;
import com.jobintelligence.platform.entity.Job;
import org.springframework.stereotype.Component;

@Component
public class JobMapper {

    public Job toJob(ExternalJobResponse externalJob) {

        return Job.builder()
                .externalId(externalJob.getExternalId())
                .title(externalJob.getJobTitle())
                .company(externalJob.getCompanyName())
                .location(externalJob.getCity())
                .description(externalJob.getDescription())
                .jobUrl(externalJob.getJobLink())
                .source(externalJob.getSource())
                .build();
    }
}