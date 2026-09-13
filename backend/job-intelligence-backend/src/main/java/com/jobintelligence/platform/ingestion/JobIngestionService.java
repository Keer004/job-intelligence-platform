package com.jobintelligence.platform.ingestion;

import com.jobintelligence.platform.dto.ExternalJobResponse;
import com.jobintelligence.platform.entity.Job;
import com.jobintelligence.platform.mapper.JobMapper;
import com.jobintelligence.platform.repository.JobRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
@RequiredArgsConstructor
public class JobIngestionService {

    private final JobSource jobSource;
    private final JobRepository jobRepository;
    private final JobMapper jobMapper;

    public void ingestJobs() {

        List<ExternalJobResponse> externalJobs = jobSource.fetchJobs();

        for (ExternalJobResponse externalJob : externalJobs) {

            Optional<Job> existingJob =
                    jobRepository.findByExternalIdAndSource(
                            externalJob.getExternalId(),
                            externalJob.getSource()
                    );

            if (existingJob.isEmpty()) {

                Job job = jobMapper.toJob(externalJob);

                jobRepository.save(job);
            }
        }
    }
}