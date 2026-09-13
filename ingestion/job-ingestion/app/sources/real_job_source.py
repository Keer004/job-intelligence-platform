import requests
from typing import List

from app.models.external_job_response import ExternalJobResponse


class RealJobSource:

    API_URL = "https://remoteok.com/api"

    def fetch_jobs(self) -> List[ExternalJobResponse]:

        response = requests.get(
            self.API_URL,
            timeout=20,
            headers={
                "User-Agent": "JobIntelligencePlatform/1.0"
            }
        )

        response.raise_for_status()

        data = response.json()

        jobs = []

        # First item in Remote OK response is metadata/legal information,
        # not an actual job.
        for item in data[1:]:

            if not item.get("position"):
                continue

            jobs.append(
                ExternalJobResponse(
                    job_title=item.get("position", ""),
                    company_name=item.get("company", ""),
                    city=item.get("location", ""),
                    description=item.get("description", ""),
                    job_link=item.get("url", "")
                )
            )

        return jobs