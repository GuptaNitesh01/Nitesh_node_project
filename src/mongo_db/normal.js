// student nested json sample,

let test={
//   "_id": "609e1234567890abcdef9012",
  "personalInfo": {
    "firstName": "Aarav",
    "lastName": "Patel",
    "email": "aarav.patel@example.com",
    "phone": {
      "mobile": "+91-9876543210",
      "home": "+91-11-23456789"
    },
    "address": {
      "street": "123 MG Road",
      "city": "Mumbai",
      "state": "Maharashtra",
      "pinCode": "400001",
      "country": "India"
    },
    "dateOfBirth": "2002-08-10"
  },
  "academicDetails": {
    "enrollment": {
      "studentId": "S2023001",
      "program": "Bachelor of Technology in Computer Engineering",
      "institution": "Indian Institute of Technology, Mumbai",
      "startDate": "2020-07-01",
      "expectedGraduationDate": "2024-06-15",
      "status": "Active"
    },
    "GPA": 8.7,
    "courses": [
      {
        "courseId": "CSE101",
        "courseName": "Introduction to Programming",
        "credits": 4,
        "grade": "A",
        "semester": "2020-1"
      },
      {
        "courseId": "CSE202",
        "courseName": "Data Structures and Algorithms",
        "credits": 4,
        "grade": "A-",
        "semester": "2021-1"
      },
      {
        "courseId": "CSE303",
        "courseName": "Database Management Systems",
        "credits": 4,
        "grade": "B+",
        "semester": "2021-2"
      },
      {
        "courseId": "CSE404",
        "courseName": "Software Engineering",
        "credits": 4,
        "grade": "A",
        "semester": "2022-1"
      }
    ]
  },
  "extracurricularActivities": [
    {
      "activityName": "Coding Club",
      "position": "Secretary",
      "yearsActive": [
        {
          year: 2021,
          semester: "1"
        },
        {
          year: 2022,
          semester: "2"
        }
      ],
      "achievements": [
        "Organized inter-college hackathons",
        "Led workshops on competitive programming"
      ]
    },
    {
      "activityName": "Volunteer for NGO",
      "role": "Tutor",
      "yearsActive": [
        {
          year: 2020,
          semester: "2"
        },
        {
          year: 2021,
          semester: "1"
        }
      ],
      "achievements": [
        "Tutored underprivileged children in mathematics and science",
        "Helped in organizing educational camps"
      ]
    }
  ],
  "awards": [
    {
      "awardName": "Best Project Award",
      "year": 2022,
      "details": "For the project on AI-based traffic management system"
    },
    {
      "awardName": "Merit Scholarship",
      "year": 2021,
      "details": "Awarded for maintaining a GPA above 8.5"
    }
  ],
  "emergencyContact": {
    "contactPerson": {
      "name": "Neeta Patel",
      "relationship": "Mother",
      "phone": "+91-9876501234"
    },
    "alternateContact": {
      "name": "Rajesh Patel",
      "relationship": "Father",
      "phone": "+91-9876512345"
    }
  },
  "financialAid": {
    "scholarships": [
      {
        "name": "Government Merit Scholarship",
        "amount": 25000,
        "year": 2020
      },
      {
        "name": "Institutional Scholarship",
        "amount": 15000,
        "year": 2021
      }
    ],
    "loans": [
      {
        "loanId": "L2023001",
        "amount": 50000,
        "provider": "National Bank of India",
        "status": "Active"
      }
    ]
  }
}

/*
for loop 100 insertOne 100 bar
for loop store 100 data in variable and insertMany after loop


*/