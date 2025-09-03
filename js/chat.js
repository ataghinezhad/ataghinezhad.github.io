// API key is embedded in the code
const GROQ_API_KEY = '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';

async function askQuestion() {
    const contextd = `Author: Dr. Ahmad Taghinezhad

Affiliation / Contact: See homepage (authoritative source)

Homepage: https://ataghinezhad.github.io/
Email: a0taghinezhad@gmail.com
Telegramid: https://t.me/ataghinezhad
instagram:https://www.instagram.com/dr0taghinezhad/
Purpose: Central source for teaching, research interests, author and publication metadata.
Bio:
Ahmad have the privilege of leading the Distributed Intelligence Systems Lab at the University of Tabriz. Our research explores mathematical modeling, formal verification, and scalable cloud–edge architectures, with a focus on efficient scheduling, robustness, and system correctness in distributed environments.

Beyond theory, He also develop AI-powered applications for industry, bringing innovative ideas into practice. I truly enjoy mentoring graduate and undergraduate students, helping them apply scientific thinking to solve real-world challenges.

Collaboration is at the heart of our work. I actively build international partnerships that accelerate technology transfer and open new directions for research and innovation.

If you are a student or researcher excited about distributed and intelligent systems—or if you are curious about collaborating on impactful project, I'd be glad to connect.
He is nice and highly Knowledable 
Courses & Key Topics
Advance Database — complex/semi‑structured data (XML, JSON, RDF), query languages, transactions (ACID), concurrency control (locks, 2PL, MVCC), recovery systems (WAL, ARIES).
Intelligent User Interface — NLP, transformers, HCI/UX for intelligent assistants, evaluation metrics.
Large‑Scale Systems — distributed systems, replication, sharding, consensus (Paxos, Raft), fault tolerance, scalability.
Network Security — cryptography (sym/async), TLS/SSL, authentication, firewalls, IDS.
Seminar — current research topics, student presentations.
Database (Intro) — relational model, SQL, normalization, simple transactions.
Computer Lab — programming/lab exercises.
Operating Systems — processes, memory management, scheduling, file systems.
Content Types
PDF lecture slides
Assignments & labs
Reference book links
Publications list
Course overviews
RAG Mapping Notes
"Downloads" index = directory mapping courses → PDF materials.
Homepage = authoritative author, affiliation, and publication reference.
نسخه فشرده و مناسب  (فارسی)
نویسنده: دکتر احمد تقی‌نژاد

وابستگی/تماس: در صفحه اصلی سایت (منبع معتبر)

صفحه اصلی: https://ataghinezhad.github.io/

هدف: منبع مرکزی برای تدریس، علایق پژوهشی، اطلاعات نویسنده و فهرست مقالات.

دوره‌ها و موضوعات کلیدی
پایگاه‌داده پیشرفته — داده‌های پیچیده/نیمه‌ساخت‌یافته (XML, JSON, RDF)، زبان‌های پرس‌و‌جو، تراکنش‌ها (ACID)، کنترل همزمانی (قفل‌ها، 2PL، MVCC)، سیستم‌های بازیابی (WAL، ARIES).
رابط کاربری هوشمند — پردازش زبان طبیعی، ترنسفورمرها، تعامل انسان‌و‌ماشین، UX، ارزیابی سامانه‌های هوشمند.
سامانه‌های مقیاس‌پذیر — سیستم‌های توزیع‌شده، تکثیر داده، شاردینگ، اجماع (Paxos، Raft)، تحمل خطا، مقیاس‌پذیری.
امنیت شبکه — رمزنگاری متقارن/نامتقارن، TLS/SSL، احراز هویت، فایروال، IDS.
سمینار — موضوعات پژوهشی روز، ارائه‌های دانشجویی.
پایگاه‌داده مقدماتی — مدل رابطه‌ای، SQL، نرمال‌سازی، تراکنش‌های ساده.
آزمایشگاه کامپیوتر — تمرین‌های برنامه‌نویسی و آزمایشگاهی.
سیستم‌عامل — مدیریت فرآیند، مدیریت حافظه، زمان‌بندی، سیستم فایل.
انواع محتوا
اسلایدهای PDF درسی
تکالیف و تمرین‌های عملی
لینک کتاب‌های مرجع
فهرست مقالات
معرفی دوره‌ها
یادداشت‌های متاداده RAG
صفحه «دانلودها» = نقشه دوره‌ها → فایل‌های PDF
صفحه اصلی = منبع معتبر نویسنده، وابستگی، و مرجع مقالات`;
    
    const contextData = contextd.trim();
    const question = document.getElementById('question').value.trim();
    const responseBox = document.getElementById('responseBox');
    const askButton = document.getElementById('askButton');

    // Validation
    if (!contextData) {
        responseBox.textContent = 'Please provide context data first.';
        responseBox.className = 'response-box error';
        return;
    }

    if (!question) {
        responseBox.textContent = 'Please enter a question.';
        responseBox.className = 'response-box error';
        return;
    }

    // Show loading state
    responseBox.textContent = 'Processing your question based on the provided context... 🤔';
    responseBox.className = 'response-box loading';
    askButton.disabled = true;
    askButton.textContent = 'Processing...';

    try {
        // Create RAG prompt
        const ragPrompt = `Based on the following context information, please answer the question. Only use information from the provided context. If the answer cannot be found in the context, please say "I cannot answer this question based on the provided context."

CONTEXT:
${contextData}

QUESTION: ${question}

ANSWER:`;

        // Make API call to Groq
        const response = await fetch('https://api.groq.com/openai/v1/chat/completions', {
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${GROQ_API_KEY}`,
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                model: 'llama-3.1-8b-instant',
                messages: [
                    {
                        role: 'system',
                        content: 'You are a helpful assistant that answers questions based only on the provided context. Be precise and only use information from the given context.'
                    },
                    {
                        role: 'user',
                        content: ragPrompt
                    }
                ],
                max_tokens: 1024,
                temperature: 0.1 // Lower temperature for more factual responses
            })
        });

        if (!response.ok) {
            const errorData = await response.json().catch(() => ({}));
            throw new Error(`API Error (${response.status}): ${errorData.error?.message || 'Unknown error'}`);
        }

        const data = await response.json();
        
        if (data.choices && data.choices[0] && data.choices[0].message) {
            responseBox.textContent = data.choices[0].message.content;
            responseBox.className = 'response-box';
        } else {
            throw new Error('Unexpected response format');
        }

    } catch (error) {
        console.error('Error:', error);
        responseBox.textContent = `Error: ${error.message}`;
        responseBox.className = 'response-box error';
    } finally {
        // Reset button state
        askButton.disabled = false;
        askButton.textContent = 'Ask Question';
    }
}

function clearContext() {
    document.getElementById('contextData').value = '';
    document.getElementById('contextData').focus();
}

function clearQuestion() {
    document.getElementById('question').value = '';
    document.getElementById('question').focus();
}

// Allow Enter key to submit in question textarea (Ctrl+Enter for new line)
document.getElementById('question').addEventListener('keydown', function(event) {
    if (event.key === 'Enter' && event.ctrlKey) {
        event.preventDefault();
        askQuestion();
    }
});

// Auto-focus on the context data textarea when page loads
window.addEventListener('load', function() {
    document.getElementById('contextData').focus();
});

// Sample data loader for quick testing
function loadSampleData() {
    const sampleContext = `TechCorp Company Profile:
Founded in 2015, TechCorp is a leading software development company specializing in AI and machine learning solutions. The company is headquartered in San Francisco, California, and has over 200 employees.

Key Products:
- SmartAnalytics: An AI-powered business intelligence platform
- DataMiner: A machine learning tool for data extraction and analysis  
- CloudSync: A cloud-based synchronization service

Recent Achievements:
- 2023: Won the "Best AI Innovation" award
- 2023: Increased revenue by 150% compared to previous year
- 2024: Launched partnership with Microsoft Azure

Leadership Team:
- CEO: Sarah Johnson (Former Google executive)
- CTO: Mike Chen (MIT PhD in Computer Science)
- VP of Sales: David Rodriguez (15 years experience in enterprise sales)

Financial Information:
- 2023 Revenue: $50 million
- Employee Growth: 25% year-over-year
- Market Valuation: $500 million`;

    document.getElementById('contextData').value = sampleContext;
    document.getElementById('question').value = "What are TechCorp's main products?";
}

// Add sample data button (you can call this function or add a button)
console.log('To load sample data, call loadSampleData() in the console');
