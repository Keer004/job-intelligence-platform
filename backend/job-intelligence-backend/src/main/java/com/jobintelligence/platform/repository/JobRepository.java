package com.jobintelligence.platform.repository;

import com.jobintelligence.platform.entity.Job;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;

import java.util.Optional;

public interface JobRepository
        extends JpaRepository<Job, Long>,
        JpaSpecificationExecutor<Job> {

    Page<Job> findByCompany(String company, Pageable pageable);

    Page<Job> findByLocation(String location, Pageable pageable);

    Page<Job> findByTitleContainingIgnoreCase(String title, Pageable pageable);

    Optional<Job> findByExternalIdAndSource(String externalId, String source);
}