package com.jobintelligence.platform.ingestion.source;

import com.jobintelligence.platform.dto.ExternalJobResponse;
import com.jobintelligence.platform.ingestion.JobSource;
import org.springframework.stereotype.Component;

import java.util.List;

@Component
public class MockJobSource implements JobSource {

    @Override
    public List<ExternalJobResponse> fetchJobs() {

        ExternalJobResponse job1 = ExternalJobResponse.builder()
                .externalId("google-java-001")
                .jobTitle("Java Backend Developer")
                .companyName("Google")
                .city("Hyderabad")
                .description("Build scalable backend applications using Java and Spring Boot.")
                .jobLink("https://example.com/google-java")
                .build();

        ExternalJobResponse job2 = ExternalJobResponse.builder()
                .externalId("microsoft-software-001")
                .jobTitle("Software Engineer")
                .companyName("Microsoft")
                .city("Bangalore")
                .description("Develop cloud-based software applications.")
                .jobLink("https://example.com/microsoft-software")
                .build();

        return List.of(job1, job2);
    }
}