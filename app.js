const resumeData = {
    "name": "Abhinaya Raj Pasula",
    "title": "Software Engineer",
    "contact": {
        "email": "abhinayaraj05@gmail.com",
        "phone": "+1234567890",
        "address": "123 AI Street, Hi-Tech City, Hyderabad, India"
    },
    "summary": "Experience of working majorly in Browser-side JavaScript environment",
    "experience": [
        {
            "title": "Promo Admin Tool (PAT)",
            "company": "GSPANN TECHNOLOGIES",
            "location": "Hyderabad, India",
            "dates": "2021 - 2021",
            "description": "Created Promotions, Coupons, and User Bindings in the system."
        },
        {
            "title": "DHL International Parcel logistics based Web Application",
            "company": "IT SOURCE GLOBAL - CLIENT MINDTREE",
            "location": "Bangalore, India",
            "dates": "2020 - 2021",
            "description": "Implemented different constraints and business logic for domestic (United Kingdom) and international shipments."
        },
        {
            "title": "Client Portal Admin Dashboard",
            "company": "XESOT TECHNOLOGIES",
            "location": "Hyderabad, India",
            "dates": "2017 - 2020",
            "description": "Implemented CRUD operations for the client portal dashboard application."
        }
    ],
    "education": [
        {
            "degree": "M.Tech",
            "institution": "G NARAYANAMMA INSTITUTE OF TECHNOLOGY & SCIENCES, HYDERABAD",
            "location": "JNTU, Hyderabad, India",
            "dates": "2014 - 2017"
        },
        {
            "degree": "B.Tech",
            "institution": "SREE VISVESVARAYA INSTITUTE OF TECHNOLOGY & SCIENCES, MAHABUBNAGAR",
            "location": "Mahabubnagar, Telangana, India",
            "dates": "2010 - 2014"
        }
    ],
    "skills": [
        "React",
        "React Router",
        "Redux",
        "Redux-Thunk",
        "HTML",
        "CSS",
        "SASS",
        "JavaScript",
        "jQuery",
        "Git",
        "Bootstrap",
        "Material-UI",
        "WordPress",
        "Webpack"
    ]
  }

  //Using for loop:
  for (let i = 0; i < resumeData.experience.length; i++) {
    const experience = resumeData.experience[i];
    console .log(experience.title, "at", experience.company);
  }

  //Using for in loop:
  for(let key in resumeData.contact) {
    console.log(key, ":", resumeData.contact[key]);
  }

  //Using for of loop:
  for(let skill of resumeData.skills) {
    console.log("skill: ", skill);
  }

  //Using for each loop:
  resumeData.education.forEach((education) => {
    console.log(education.degree, "in", education.institution);
  })