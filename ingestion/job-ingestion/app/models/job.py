from pydantic import BaseModel, ConfigDict, Field


class Job(BaseModel):

    model_config = ConfigDict(
        populate_by_name=True
    )

    external_id: str = Field(alias="externalId")
    title: str
    company: str
    location: str
    description: str
    job_url: str = Field(alias="jobUrl")
    source: str