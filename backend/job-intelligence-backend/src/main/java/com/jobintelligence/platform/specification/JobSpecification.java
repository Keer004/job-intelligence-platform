package com.jobintelligence.platform.specification;

import com.jobintelligence.platform.entity.Job;
import org.springframework.data.jpa.domain.Specification;

public class JobSpecification {

    public static Specification<Job> hasKeyword(String keyword) {
        return (root, query, criteriaBuilder) ->
                criteriaBuilder.like(
                        criteriaBuilder.lower(root.get("title")),
                        "%" + keyword.toLowerCase() + "%"
                );
    }

    public static Specification<Job> hasCompany(String company) {
        return (root, query, criteriaBuilder) ->
                criteriaBuilder.equal(
                        criteriaBuilder.lower(root.get("company")),
                        company.toLowerCase()
                );
    }

    public static Specification<Job> hasLocation(String location) {
        return (root, query, criteriaBuilder) ->
                criteriaBuilder.like(
                        criteriaBuilder.lower(root.get("location")),
                        "%" + location.toLowerCase() + "%"
                );
    }

    public static Specification<Job> hasSource(String source) {
        return (root, query, criteriaBuilder) ->
                criteriaBuilder.equal(
                        criteriaBuilder.lower(root.get("source")),
                        source.toLowerCase()
                );
    }
}