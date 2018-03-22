var casual = require('casual');
var	http = require('http');

// Endpoint
exports.url = 'https://api.turn-stage.io';

// Headers
exports.authorization = {
  "Authorization" : "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE1Mzg2NzY2MzYsImF1ZCI6IlF2MzlDaUlnR0FkNzl2N0hzenlVYXBWWWNhczRkUT09IiwiaXNzIjoiIiwiaWF0IjoxNTA3MTQwNjM2LCJzdWIiOiJyVDcyQnpVemF1MWRuREFqajdNUTVwWlg2ZkJKZkNHQ2R5eWxxVXU4N2RXX01lblpZTzY5SWh2LWFkUGk4NEZVIn0.7qbYfnpFjbfdgTykK6-L8O9J3IAxBIAypvoOzXRGnKA"
};

// 
exports.validCleanProfile = {
  "first_name": "Samwise",
  "last_name": "Gamgee",
  "phone_number": "3125551212",
  "ssn": "100101000",
  "bankruptcy": true,
  "criminal": false,
  "judgements": false,
  "liens": false,
  "location": false,
  "mobile_phone": false,
  "vehicles": false,
  "watchlist": false
};

exports.validCriminalProfile = {
  "first_name": "Darth",
  "last_name": "Vader",
  "phone_number": "8475551212",
  "ssn": "100101000",
  "bankruptcy": true,
  "criminal": false,
  "judgements": false,
  "liens": false,
  "location": false,
  "mobile_phone": false,
  "vehicles": false,
  "watchlist": false
};

// This identity will return a clean verified profile.
exports.responseCleanVerifiedProfile = {
    "checks": {
        "addresses": [
            {
                "address1": "2038 W STYLE ST APT 3",
                "address2": null,
                "city": "SHIRE",
                "first_seen": "10-2014",
                "last_seen": "04-25-2017",
                "state": "IL",
                "zip": "60618"
            },
            {
                "address1": "801 S DRAKE ST APT 205",
                "address2": null,
                "city": "SHIRE",
                "first_seen": "12-2006",
                "last_seen": "11-14-2014",
                "state": "IL",
                "zip": "60607"
            }
        ],
        "aliases": [
            {
                "first_name": "SAMWISE",
                "last_name": "GAMGEE",
                "middle_name": ""
            }
        ],
        "assets": null,
        "bankruptcies": null,
        "criminal": [],
        "judgements": null,
        "liens": null,
        "location": null,
        "ssn_name_match": "matched",
        "ssn_name_match_fuzzy": 100,
        "vehicles": null,
        "watchlist": null
    },
    "current_address": {
        "address1": "2038 W STYLE ST APT 3",
        "address2": null,
        "city": "SHIRE",
        "first_seen": "10-2014",
        "last_seen": "04-25-2017",
        "state": "IL",
        "status": "verified",
        "zip": "60618"
    },
    "date_of_birth": "1960-12-20",
    "disclaimer": "This is a non-production environment for testing purposes only.   The data contained in this response may not be used for any purpose other than testing the functionality of this application.",
    "drivers_license": "",
    "drivers_license_status": "none",
    "email": "****@turning.io",
    "email_status": "verified",
    "first_name": "SAMWISE",
    "last_name": "GAMGEE",
    "person_report": {
        "address_records": [
            {
                "city": "SHIRE",
                "date_first_seen": "04-25-2017",
                "date_last_seen": "10-2014",
                "latitude": null,
                "line_1": "2038 W STYLE ST APT 3",
                "line_2": null,
                "line_3": null,
                "longitude": null,
                "state": "IL",
                "zip": "60618",
                "zip4": "4979"
            },
            {
                "city": "SHIRE",
                "date_first_seen": "11-14-2014",
                "date_last_seen": "12-2006",
                "latitude": null,
                "line_1": "801 S DRAKE ST APT 205",
                "line_2": null,
                "line_3": null,
                "longitude": null,
                "state": "IL",
                "zip": "60607",
                "zip4": "4522"
            }
        ],
        "date_first_seen": null,
        "date_last_seen": null,
        "name_records": [
            {
                "date_first_seen": "01-05-2017",
                "date_last_seen": "12-01-1996",
                "first_name": "SAMWISE",
                "last_name": "GAMGEE",
                "middle_name": null,
                "name_suffix": null,
                "title": null
            }
        ],
        "ssn_records": [
            {
                "date_first_seen": null,
                "date_last_seen": null,
                "number": "XXX-XX-4456",
                "ssn_issue_place": "ILLINOIS",
                "ssn_issue_years": "1988-1989"
            }
        ]
    },
    "phone_number": [
        {
            "number": "***********",
            "status": "True"
        }
    ],
    "sign_up_date": "2017-09-27 00:08:44.526052",
    "ssn": {
        "deceased_date": null,
        "issue_date": "1988-1989",
        "issue_state": "ILLINOIS",
        "name_status": "matched",
        "number": "*****4555",
        "status": "verified"
    },
    "status": "verified",
    "user_provided_dob": "1960-12-20",
    "worker_id": "60519511-567b-4c58-989b-0c21689cf906"
};

// This identity will return a profile with a criminal record
exports.responseCriminalProfile = {
    "checks": {
        "addresses": [
            {
                "address1": "1901 S MA AVE UNIT 2011",
                "address2": null,
                "city": "SHIRE",
                "first_seen": "04-01-2010",
                "last_seen": "04-24-2017",
                "state": "IL",
                "zip": "60616"
            },
            {
                "address1": "1901 S MAIN AVE # A",
                "address2": null,
                "city": "SHIRE",
                "first_seen": "07-02-2015",
                "last_seen": "07-02-2015",
                "state": "IL",
                "zip": "60616"
            }
        ],
        "aliases": [
            {
                "first_name": "DARTH",
                "last_name": "VADER",
                "middle_name": ""
            }
        ],
        "assets": null,
        "bankruptcies": null,
        "criminal": [
            {
                "a_k_as": null,
                "address_match": "ExactMatch",
                "arrest_date": null,
                "arresting_agency": "VILLAGE OF MORDOR",
                "birth_address": null,
                "birth_place": null,
                "build": null,
                "case_number": "10DT000616",
                "case_type": null,
                "charges_filed_date": "11-29-2010",
                "citizenship": null,
                "classification": null,
                "complexion": null,
                "conviction_date": null,
                "conviction_place": null,
                "counts": null,
                "county": null,
                "court": null,
                "crime_county": "SUSSEX",
                "crime_type": null,
                "current_age": null,
                "date_of_birth_match": "NA",
                "degree_of_offense": "CLASS A",
                "disposition": "PAID IN FULL/COMPLIANCE OF 705 CH.625 5/6-306.6(D)(2) DRV",
                "disposition_date": "04-04-2014",
                "drivers_license_issuing_state": null,
                "drivers_license_number": null,
                "employer": null,
                "employer_address": null,
                "ethnicity": null,
                "eyes": null,
                "fines": null,
                "first_name_match": "ExactMatch",
                "gender": null,
                "hair": null,
                "hair_length": null,
                "height": null,
                "is_sex_offender": "No",
                "last_name_match": "ExactMatch",
                "marital_status": null,
                "middle_name_match": "NoMatch",
                "military_service": null,
                "occupation": null,
                "offense_code": "625 5/11-501(A)(2)",
                "offense_date": "11-25-2010",
                "offense_description_1": "DRVG UNDER INFLU OF ALCOHOL",
                "other_addresses": null,
                "other_dates_of_birth": null,
                "plea": "NO PLEA ENTERED",
                "predator": null,
                "probation": null,
                "registration_date": null,
                "registration_end_date": null,
                "scars_marks": null,
                "sentence": null,
                "skin_tone": null,
                "source": "SUSSEX COUNTY",
                "source_state": "IL",
                "status": null,
                "status_date": null,
                "suspect_county": null,
                "suspect_first_name": "DARTH",
                "suspect_last_name": "VADER",
                "suspect_middle_name": null,
                "suspect_state": "IL",
                "victim": null,
                "victim_age": null,
                "victim_gender": null,
                "victim_is_minor": null,
                "violation": null,
                "violation_date": null,
                "weight": null
            }
        ],
        "judgements": null,
        "liens": null,
        "location": null,
        "ssn_name_match": "matched",
        "ssn_name_match_fuzzy": 100,
        "vehicles": null,
        "watchlist": null
    },
    "current_address": {
        "address1": "1901 S MAIN AVE UNIT 2011",
        "address2": null,
        "city": "SHIRE",
        "first_seen": "04-01-2010",
        "last_seen": "04-24-2017",
        "state": "IL",
        "status": "verified",
        "zip": "60616"
    },
    "date_of_birth": "11-03-1973",
    "disclaimer": "This is a non-production environment for testing purposes only.   The data contained in this response may not be used for any purpose other than testing the functionality of this application.",
    "drivers_license": "",
    "drivers_license_status": "none",
    "email": null,
    "email_status": "none",
    "first_name": "DARTH",
    "last_name": "VADER",
    "person_report": {
        "address_records": [
            {
                "city": "SHIRE",
                "date_first_seen": "04-24-2017",
                "date_last_seen": "04-01-2010",
                "latitude": null,
                "line_1": "1901 S MAIN AVE UNIT 2011",
                "line_2": null,
                "line_3": null,
                "longitude": null,
                "state": "IL",
                "zip": "60616",
                "zip4": "6024"
            },
            {
                "city": "SHIRE",
                "date_first_seen": "07-02-2015",
                "date_last_seen": "07-02-2015",
                "latitude": null,
                "line_1": "1901 S MAIN AVE # A",
                "line_2": null,
                "line_3": null,
                "longitude": null,
                "state": "IL",
                "zip": "60616",
                "zip4": "6045"
            }
        ],
        "date_first_seen": null,
        "date_last_seen": null,
        "name_records": [
            {
                "date_first_seen": "01-05-2017",
                "date_last_seen": "06-01-1992",
                "first_name": "DARTH",
                "last_name": "VADER",
                "middle_name": null,
                "name_suffix": null,
                "title": null
            }
        ],
        "ssn_records": [
            {
                "date_first_seen": null,
                "date_last_seen": null,
                "number": "XXX-XX-9907",
                "ssn_issue_place": "ILLINOIS",
                "ssn_issue_years": "1988-1989"
            }
        ]
    },
    "phone_number": [
        {
            "number": "***********",
            "status": "False"
        }
    ],
    "sign_up_date": "2017-09-27 22:39:21.292241",
    "ssn": {
        "deceased_date": null,
        "issue_date": "1988-1989",
        "issue_state": "ILLINOIS",
        "name_status": "matched",
        "number": "*****4407",
        "status": "verified"
    },
    "status": "verified",
    "user_provided_dob": "1980-11-03",
    "worker_id": "00b8b745-f00d-41fb-b490-3ddeee7f88ee"
};
