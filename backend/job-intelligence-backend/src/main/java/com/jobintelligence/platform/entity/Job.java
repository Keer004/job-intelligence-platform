package com.jobintelligence.platform.entity;

import jakarta.persistence.*;
import lombok.*;

@Entity
@Table(name = "jobs")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class Job {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String title;

    private String company;

    private String location;

    private String description;

    @Column(name = "job_url")
    private String jobUrl;

    private String source;

    @Column(name = "external_id")
    private String externalId;
}