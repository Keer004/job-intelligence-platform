import requests

from app.cleaners.job_cleaner import JobCleaner
from app.normalizers.job_normalizer import JobNormalizer
from app.sources.real_job_source import RealJobSource


JAVA_API_URL = "http://localhost:8080/api/jobs"


def main():
    source = RealJobSource()
    cleaner = JobCleaner()
    normalizer = JobNormalizer()

    external_jobs = source.fetch_jobs()

    for external_job in external_jobs:

        cleaned_job = external_job.model_copy(
            update={
                "job_title": cleaner.clean_text(external_job.job_title),
                "company_name": cleaner.clean_text(external_job.company_name),
                "city": cleaner.clean_text(external_job.city),
                "description": cleaner.clean_text(external_job.description)
            }
        )
        print("RAW LOCATION:", repr(external_job.city))
        print("CLEANED LOCATION:", repr(cleaned_job.city))

        job = normalizer.normalize(cleaned_job)
        print("RAW JOB LINK:")
        print(external_job.job_link)

        print("NORMALIZED JOB URL:")
        print(job.job_url)

        # Convert Python model into API-ready JSON structure
        api_payload = job.model_dump(by_alias=True)

        print("Sending job to Java API:")
        print(api_payload)

        # Send job to Spring Boot
        response = requests.post(
            JAVA_API_URL,
            json=api_payload,
            timeout=10
        )

        response.raise_for_status()

        print("Java API response:")
        print(response.json())
        print("-" * 50)


if __name__ == "__main__":
    main()