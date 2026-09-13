package com.jobintelligence.platform.service;

import com.jobintelligence.platform.dto.CreateJobRequest;
import com.jobintelligence.platform.dto.JobSearchRequest;
import com.jobintelligence.platform.entity.Job;
import com.jobintelligence.platform.repository.JobRepository;
import com.jobintelligence.platform.specification.JobSpecification;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.*;
import org.springframework.data.jpa.domain.Specification;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
@RequiredArgsConstructor
public class JobService {

    private final JobRepository jobRepository;

    public Job createJob(CreateJobRequest request) {

        Optional<Job> existingJob =
                jobRepository.findByExternalIdAndSource(
                        request.getExternalId(),
                        request.getSource()
                );

        if (existingJob.isPresent()) {
            return existingJob.get();
        }

        Job job = Job.builder()
                .title(request.getTitle())
                .company(request.getCompany())
                .location(request.getLocation())
                .description(request.getDescription())
                .jobUrl(request.getJobUrl())
                .source(request.getSource())
                .externalId(request.getExternalId())
                .build();

        return jobRepository.save(job);
    }

    public Page<Job> getAllJobs(Pageable pageable) {
        return jobRepository.findAll(pageable);
    }

    public Page<Job> getJobsByCompany(String company, Pageable pageable) {
        return jobRepository.findByCompany(company, pageable);
    }

    public Page<Job> getJobsByLocation(String location, Pageable pageable) {
        return jobRepository.findByLocation(location, pageable);
    }

    public Page<Job> searchJobsByTitle(String title, Pageable pageable) {
        return jobRepository.findByTitleContainingIgnoreCase(title, pageable);
    }
    public Page<Job> searchJobs(JobSearchRequest request) {

        Specification<Job> specification =
                (root, query, criteriaBuilder) -> criteriaBuilder.conjunction();

        if (request.getKeyword() != null && !request.getKeyword().isBlank()) {
            specification = specification.and(
                    JobSpecification.hasKeyword(request.getKeyword())
            );
        }

        if (request.getCompany() != null && !request.getCompany().isBlank()) {
            specification = specification.and(
                    JobSpecification.hasCompany(request.getCompany())
            );
        }

        if (request.getLocation() != null && !request.getLocation().isBlank()) {
            specification = specification.and(
                    JobSpecification.hasLocation(request.getLocation())
            );
        }

        if (request.getSource() != null && !request.getSource().isBlank()) {
            specification = specification.and(
                    JobSpecification.hasSource(request.getSource())
            );
        }

        Sort.Direction direction =
                request.getSortDirection().equalsIgnoreCase("asc")
                        ? Sort.Direction.ASC
                        : Sort.Direction.DESC;

        Pageable pageable = PageRequest.of(
                request.getPage(),
                request.getSize(),
                Sort.by(direction, request.getSortBy())
        );

        return jobRepository.findAll(specification, pageable);
    }
}