package com.jobintelligence.platform.ingestion;

import com.jobintelligence.platform.dto.ExternalJobResponse;

import java.util.List;

public interface JobSource {

    List<ExternalJobResponse> fetchJobs();
}