import re


class JobCleaner:

    def clean_text(self, text: str) -> str:
        if not text:
            return ""

        text = text.strip()

        # Remove HTML tags
        text = re.sub(r"<[^>]+>", " ", text)

        # Replace multiple whitespace characters with one space
        text = re.sub(r"\s+", " ", text)

        text = text.rstrip(' ,')

        # Remove leading and trailing whitespace
        return text



if __name__ == "__main__":
    cleaner = JobCleaner()

    test_locations = [
        "San Juan,",
        "Visakhapatnam Rural mandal,",
        "London Area,",
        "Msida,",
        "Agra,"
    ]

    for location in test_locations:
        print(f"BEFORE: [{location}]")
        print(f"AFTER:  [{cleaner.clean_text(location)}]")
        print("-" * 30)