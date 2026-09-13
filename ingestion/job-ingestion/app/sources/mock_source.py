from typing import List

from app.models.external_job_response import ExternalJobResponse


class MockJobSource:

    def fetch_jobs(self) -> List[ExternalJobResponse]:
        return [
            ExternalJobResponse(
                job_title="  Java Backend Developer  ",
                company_name="Google LLC",
                city="Hyderabad, Telangana, India",
                description="<p> Build scalable backend applications using Java and Spring Boot. </p>",
                job_link="https://example.com/google-java"
            ),
            ExternalJobResponse(
                job_title=" Software Engineer ",
                company_name="Microsoft Corporation",
                city="Bangalore, Karnataka, India",
                description="<p> Develop cloud-based software applications. </p>",
                job_link="https://example.com/microsoft-software"
            )
        ]