from app.models.external_job_response import ExternalJobResponse
from app.models.job import Job


class JobNormalizer:

    def normalize(self, external_job: ExternalJobResponse) -> Job:
        return Job(
            external_id=self.generate_external_id(external_job),
            title=external_job.job_title,
            company=external_job.company_name,
            location=external_job.city,
            description=external_job.description,
            job_url=external_job.job_link,
            source="REMOTE_OK"
        )

    def generate_external_id(self, external_job: ExternalJobResponse) -> str:
        return external_job.job_link