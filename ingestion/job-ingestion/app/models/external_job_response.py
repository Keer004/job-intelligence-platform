from pydantic import BaseModel


class ExternalJobResponse(BaseModel):
    job_title: str
    company_name: str
    city: str
    description: str
    job_link: str