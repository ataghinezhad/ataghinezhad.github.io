// API key is embedded in the code

async function askQuestion() {
    const contextd = {
  "@context": "https://schema.org",
  "@type": "Person",
  "name": "Dr. Ahmad Taghinezhad",
  "alternateName": "Ahmad Taghinezhad",
  "jobTitle": "Assistant Professor",
  "affiliation": {
    "@type": "CollegeOrUniversity",
    "name": "University of Tabriz",
    "department": "Distributed Intelligence Systems Lab",
    "url": "https://ataghinezhad.github.io/"
  },
  "url": "https://ataghinezhad.github.io/",
  "email": "mailto:a0taghinezhad@gmail.com",
  "sameAs": [
    "https://t.me/ataghinezhad",
    "https://www.instagram.com/dr0taghinezhad/"
  ],
  "description": "Leader of the Distributed Intelligence Systems Lab at the University of Tabriz. Research focuses on scalable cloud–edge architectures, formal verification, distributed systems scheduling, and AI-powered applications. Active in mentoring students and building international collaborations.",
  "knowsAbout": [
    "Distributed Systems",
    "Cloud–Edge Computing",
    "Mathematical Modeling",
    "Formal Verification",
    "Artificial Intelligence",
    "Scheduling Algorithms",
    "Fault Tolerance",
    "Scalability",
    "System Correctness"
  ],
  "officeLocation": {
    "@type": "Place",
    "name": "Faculty of Electrical and Computer Engineering, Room 344",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "29 Bahman Blvd",
      "addressLocality": "Tabriz",
      "addressCountry": "Iran"
    }
  },
  "contactPoint": {
    "@type": "ContactPoint",
    "contactType": "Office Hours",
    "hoursAvailable": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Wednesday"],
        "opens": "10:00",
        "closes": "12:00"
      }
    ],
    "description": "Students can visit during office hours without appointment but better to schedule via email. For other times, schedule via email."
  },
  "additionalProperty": [
    {
      "@type": "PropertyValue",
      "name": "Personality",
      "value": "Supportive, approachable, and highly knowledgeable. Values hard work, intellectual curiosity, and integrity. Encourages independent thinking and collaboration."
    },
    {
      "@type": "PropertyValue",
      "name": "Grading Philosophy",
      "value": "Merit-based and effort-driven. Grades reflect both mastery of concepts and problem-solving ability. No extra credit or favors are given without demonstrated effort or talent."
    },
    {
      "@type": "PropertyValue",
      "name": "Mentorship Style",
      "value": "Believes in challenging students to think critically and apply knowledge to real-world problems. Provides guidance but expects students to take ownership of their learning journey."
    },
    {
      "@type": "PropertyValue",
      "name": "Student Understanding",
      "value": "Recognizes that students have different strengths; supports them in overcoming weaknesses through practice, while motivating talented students to push beyond boundaries."
    },
    {
      "@type": "PropertyValue",
      "name": "Preferred Communication",
      "value": "Email for formal communication, Telegram for quick academic discussions, and in-person meetings for detailed supervision."
    },
    {
      "@type": "PropertyValue",
      "name": "Expectations from Students",
      "value": "Be punctual, prepare before class, actively participate, and show initiative in projects."
    }
  ],
  "researchProject": [
    {
      "@type": "ResearchProject",
      "name": "Fault-Tolerant Scheduling in Edge–Cloud Systems",
      "description": "Developing cost-efficient algorithms for IoT workflow scheduling under energy and deadline constraints.",
      "funding": "Partially supported by University of Tabriz research fund",
      "potentialStudentRole": "Algorithm implementation, experimental evaluation, simulations."
    },
    {
      "@type": "ResearchProject",
      "name": "Formal Verification of Distributed Algorithms",
      "description": "Verifying correctness and safety properties of consensus protocols using model checking.",
      "potentialStudentRole": "Model design, theorem proving, case study analysis."
    }
  ],
  "publication": [
    {
      "@type": "ScholarlyArticle",
      "name": "Fault-Tolerant Cost-Efficient Scheduling for Energy and Deadline-Constrained IoT Workflows in Edge-Cloud Continuum",
      "isPartOf": "IEEE Transactions on Services Computing",
      "datePublished": "2024",
      "url": "https://doi.org/10.xxxx/xxxx"
    }
  ],
  "thesisSupervision": {
    "@type": "CreativeWork",
    "description": "Supervises MSc and PhD theses in distributed systems, cloud-edge computing, and AI-driven scheduling. Open to international collaborations.",
    "studentGuidelines": "Proposals should include motivation, objectives, methodology, and expected contributions."
  },
  "careerAdvice": "Encourages students to pursue academic publications, open-source contributions, and international internships. Provides guidance for PhD/postdoc applications abroad.",
  "teaches": [
    {
      "@type": "Course",
      "name": "Software Engineering",
      "description": "SOLID principles, agile development, team management, requirements engineering, UML.",
      "assessment": "Assignments (20%), Projects (20%), Final exam (60%)."
    },
    {
      "@type": "Course",
      "name": "Advanced Databases",
      "description": "Semi-structured data (XML, JSON, RDF), query languages, ACID transactions, concurrency control (2PL, MVCC), recovery systems (WAL, ARIES).",
      "assessment": "Projects, Homeworks, Class activity (30%), Final exam (70%)."
    },
    {
      "@type": "Course",
      "name": "Intelligent User Interfaces",
      "description": "Natural language processing, transformers, HCI/UX, evaluation metrics.",
      "assessment": "Paper reviews (20%), Group project (40%), Presentation (40%)."
    },
    {
      "@type": "Course",
      "name": "Large-Scale Systems",
      "description": "Distributed systems, replication, sharding, consensus (Paxos, Raft), scalability, fault tolerance.",
      "assessment": "Projects, Homeworks, Class activity (40%), Final exam (60%)."
    },
    {
      "@type": "Course",
      "name": "Network Security",
      "description": "Cryptography (symmetric/asymmetric), TLS/SSL, authentication, firewalls, intrusion detection systems (IDS).",
      "assessment": "Lab work (30%), Midterm (20%), Final exam (50%)."
    },
    {
      "@type": "Course",
      "name": "Seminar",
      "description": "Current research topics, student presentations.",
      "assessment": "Presentation (40%), Participation (10%). Exam (50%)"
    },
    {
      "@type": "Course",
      "name": "Database",
      "description": "Relational model, SQL, normalization, simple transactions.",
      "assessment": "Quizzes (20%), Homework (20%), Final exam (60%)."
    },
    {
      "@type": "Course",
      "name": "Operating Systems",
      "description": "Processes, memory management, scheduling, file systems.",
      "assessment": "Assignments (20%), Quizzes (20%), Final exam (60%)."
    }
  ]
};

    const question = document.getElementById('question').value.trim();
    const responseBox = document.getElementById('responseBox');
    const askButton = document.getElementById('askButton');

    if (!question) {
        responseBox.textContent = 'Please enter a question.';
        responseBox.className = 'response-box error';
        return;
    }

    // Loading state
    responseBox.textContent = 'Processing your question... 🤔';
    responseBox.className = 'response-box loading';
    askButton.disabled = true;
    askButton.textContent = 'Processing...';

    try {
        const ragPrompt = `Based on the following context, please answer the question. 
Only use information from the context. 
If the answer is not in the context, reply: "I cannot answer this question based on the provided context."

CONTEXT:
${JSON.stringify(contextd, null, 2)}

QUESTION: ${question}

ANSWER:`;

        const response = await fetch('https://api.groq.com/openai/v1/chat/completions', {
            method: 'POST',
            headers: {
                'Authorization': `Bearer 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`,
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                model: 'llama-3.1-8b-instant',
                messages: [
                    {
                        role: 'system',
                        content: 'You are a helpful assistant that answers only from the given context.'
                    },
                    {
                        role: 'user',
                        content: ragPrompt
                    }
                ],
                max_tokens: 512,
                temperature: 0.1
            })
        });

        if (!response.ok) {
            const err = await response.json().catch(() => ({}));
            throw new Error(`API Error ${response.status}: ${err.error?.message || 'Unknown'}`);
        }

        const data = await response.json();
        const answer = data.choices?.[0]?.message?.content;

        if (answer) {
            responseBox.textContent = answer;
            responseBox.className = 'response-box';
        } else {
            throw new Error('Unexpected API response');
        }
    } catch (error) {
        console.error(error);
        responseBox.textContent = `Error: ${error.message}`;
        responseBox.className = 'response-box error';
    } finally {
        askButton.disabled = false;
        askButton.textContent = 'Ask Question';
    }
}