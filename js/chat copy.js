// API key is embedded in the code
const apkey = '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';

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
    }
  ],
  "teaches": [
    {
      "@type": "Course",
      "name": "Software Engineering",
      "description": "SOLID principles, agile development, team management, requirements engineering, UML."
    },
    {
      "@type": "Course",
      "name": "Advanced Databases",
      "description": "Semi-structured data (XML, JSON, RDF), query languages, ACID transactions, concurrency control (2PL, MVCC), recovery systems (WAL, ARIES)."
    },
    {
      "@type": "Course",
      "name": "Intelligent User Interfaces",
      "description": "Natural language processing, transformers, HCI/UX, evaluation metrics."
    },
    {
      "@type": "Course",
      "name": "Large-Scale Systems",
      "description": "Distributed systems, replication, sharding, consensus (Paxos, Raft), scalability, fault tolerance."
    },
    {
      "@type": "Course",
      "name": "Network Security",
      "description": "Cryptography (symmetric/asymmetric), TLS/SSL, authentication, firewalls, intrusion detection systems (IDS)."
    },
    {
      "@type": "Course",
      "name": "Seminar",
      "description": "Current research topics, student presentations."
    },
    {
      "@type": "Course",
      "name": "Database (Intro)",
      "description": "Relational model, SQL, normalization, simple transactions."
    },
    {
      "@type": "Course",
      "name": "Computer Lab",
      "description": "Programming exercises and lab projects."
    },
    {
      "@type": "Course",
      "name": "Operating Systems",
      "description": "Processes, memory management, scheduling, file systems."
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
                'Authorization': `Bearer ${apkey}`,
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