package com.jobintelligence.platform.service;

import com.jobintelligence.platform.dto.ExternalJobResponse;
import com.jobintelligence.platform.entity.Job;
import org.springframework.stereotype.Service;

@Service
public class JobMappingService {

    public Job mapToJob(ExternalJobResponse externalJob) {

        return Job.builder()
                .title(externalJob.getJobTitle())
                .company(externalJob.getCompanyName())
                .location(externalJob.getCity())
                .description(externalJob.getDescription())
                .jobUrl(externalJob.getJobLink())
                .source("mock-source")
                .build();
    }
}