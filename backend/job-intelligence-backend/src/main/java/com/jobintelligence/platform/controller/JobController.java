package com.jobintelligence.platform.controller;

import com.jobintelligence.platform.dto.CreateJobRequest;
import com.jobintelligence.platform.dto.JobSearchRequest;
import com.jobintelligence.platform.entity.Job;
import com.jobintelligence.platform.service.JobService;
import com.jobintelligence.platform.ingestion.JobIngestionService;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
@RestController
@RequestMapping("/api/jobs")
@RequiredArgsConstructor
public class JobController {

    private final JobService jobService;

    private final JobIngestionService jobIngestionService;

    @PostMapping
    public Job createJob(@Valid @RequestBody CreateJobRequest request) {
        return jobService.createJob(request);
    }

    @PostMapping("/ingest")
    public void ingestJobs() {
        jobIngestionService.ingestJobs();
    }

    @GetMapping
    public Page<Job> getAllJobs(Pageable pageable) {
        return jobService.getAllJobs(pageable);
    }
    @GetMapping("/company")
    public Page<Job> getJobsByCompany(
            @RequestParam String company,
            Pageable pageable) {

        return jobService.getJobsByCompany(company, pageable);
    }

    @GetMapping("/location")
    public Page<Job> getJobsByLocation(
            @RequestParam String location,
            Pageable pageable) {

        return jobService.getJobsByLocation(location, pageable);
    }


    @GetMapping("/search")
    public Page<Job> searchJobs(
            @RequestParam String title,
            Pageable pageable) {

        return jobService.searchJobsByTitle(title, pageable);
    }

    @PostMapping("/search")
    public Page<Job> searchJobs(@RequestBody JobSearchRequest request) {
        return jobService.searchJobs(request);
    }
}