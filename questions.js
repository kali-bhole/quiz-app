const questions = [
    {
        question: "What does CPU stand for?",
        answers: [
            { text: "Central Process Unit", correct: false },
            { text: "Central Processing Unit", correct: true },
            { text: "Central Program Unit", correct: false },
            { text: "Central Processor Utility", correct: false }
        ]
    },
    {
        question: "Which of these is a programming language?",
        answers: [
            { text: "HTML", correct: false },
            { text: "Python", correct: true },
            { text: "CSS", correct: false },
            { text: "HTTP", correct: false }
        ]
    },
    {
        question: "What does RAM stand for?",
        answers: [
            { text: "Random Access Memory", correct: true },
            { text: "Read Access Memory", correct: false },
            { text: "Read Advanced Memory", correct: false },
            { text: "Run Advanced Memory", correct: false }
        ]
    },
    {
        question: "Which device is used for storing data permanently?",
        answers: [
            { text: "RAM", correct: false },
            { text: "ROM", correct: true },
            { text: "Cache", correct: false },
            { text: "ALU", correct: false }
        ]
    },
    {
        question: "Which of the following is not an operating system?",
        answers: [
            { text: "Linux", correct: false },
            { text: "Windows", correct: false },
            { text: "Oracle", correct: true },
            { text: "MacOS", correct: false }
        ]
    },
    {
        question: "What does HTML stand for?",
        answers: [
            { text: "HyperText Markup Language", correct: true },
            { text: "HyperText Markdown Language", correct: false },
            { text: "HighText Markup Language", correct: false },
            { text: "Hyperlink Markup Language", correct: false }
        ]
    },
    {
        question: "Which of the following is a type of malware?",
        answers: [
            { text: "Firewall", correct: false },
            { text: "Antivirus", correct: false },
            { text: "Trojan Horse", correct: true },
            { text: "Server", correct: false }
        ]
    },
    {
        question: "What is the primary function of a firewall?",
        answers: [
            { text: "To store data", correct: false },
            { text: "To monitor network traffic", correct: true },
            { text: "To perform calculations", correct: false },
            { text: "To provide Wi-Fi access", correct: false }
        ]
    },
    {
        question: "Which company developed the Windows operating system?",
        answers: [
            { text: "Apple", correct: false },
            { text: "IBM", correct: false },
            { text: "Microsoft", correct: true },
            { text: "Google", correct: false }
        ]
    },
    {
        question: "What is a bit?",
        answers: [
            { text: "A large unit of data", correct: false },
            { text: "A binary digit", correct: true },
            { text: "A memory address", correct: false },
            { text: "A file type", correct: false }
        ]
    },
    {
        question: "Which programming language is known for its use in web development?",
        answers: [
            { text: "JavaScript", correct: true },
            { text: "C#", correct: false },
            { text: "Ruby", correct: false },
            { text: "Swift", correct: false }
        ]
    },
    {
        question: "Which protocol is used for secure data transfer over the internet?",
        answers: [
            { text: "FTP", correct: false },
            { text: "HTTP", correct: false },
            { text: "HTTPS", correct: true },
            { text: "SMTP", correct: false }
        ]
    },
    {
        question: "In binary code, what is the value of 1+1?",
        answers: [
            { text: "10", correct: true },
            { text: "11", correct: false },
            { text: "2", correct: false },
            { text: "0", correct: false }
        ]
    },
    {
        question: "What is the term for data storage measured in billions of bytes?",
        answers: [
            { text: "Kilobyte", correct: false },
            { text: "Megabyte", correct: false },
            { text: "Gigabyte", correct: true },
            { text: "Terabyte", correct: false }
        ]
    },
    {
        question: "What does CSS stand for?",
        answers: [
            { text: "Computer Style Sheets", correct: false },
            { text: "Cascading Style Sheets", correct: true },
            { text: "Creative Style Sheets", correct: false },
            { text: "Colorful Style Sheets", correct: false }
        ]
    },
    {
        question: "Which company developed the Java programming language?",
        answers: [
            { text: "Microsoft", correct: false },
            { text: "Apple", correct: false },
            { text: "Sun Microsystems", correct: true },
            { text: "IBM", correct: false }
        ]
    },
    {
        question: "Which of the following is an example of a database management system?",
        answers: [
            { text: "MySQL", correct: true },
            { text: "Python", correct: false },
            { text: "React", correct: false },
            { text: "Microsoft Word", correct: false }
        ]
    },
    {
        question: "What type of software is an operating system?",
        answers: [
            { text: "System software", correct: true },
            { text: "Application software", correct: false },
            { text: "Utility software", correct: false },
            { text: "Security software", correct: false }
        ]
    },
    {
        question: "What is the smallest unit of data in computing?",
        answers: [
            { text: "Byte", correct: false },
            { text: "Bit", correct: true },
            { text: "Kilobyte", correct: false },
            { text: "Nibble", correct: false }
        ]
    },
    {
        question: "Which of these is a relational database?",
        answers: [
            { text: "MongoDB", correct: false },
            { text: "MySQL", correct: true },
            { text: "Cassandra", correct: false },
            { text: "Redis", correct: false }
        ]
    },
    {
        question: "What does IDE stand for in programming?",
        answers: [
            { text: "Integrated Development Environment", correct: true },
            { text: "Internet Development Environment", correct: false },
            { text: "Internal Development Environment", correct: false },
            { text: "Independent Development Environment", correct: false }
        ]
    },
    {
        question: "What is the role of DNS in networking?",
        answers: [
            { text: "Data encryption", correct: false },
            { text: "Domain name resolution", correct: true },
            { text: "File storage", correct: false },
            { text: "Network security", correct: false }
        ]
    },
    {
        question: "What type of language is HTML?",
        answers: [
            { text: "Programming language", correct: false },
            { text: "Markup language", correct: true },
            { text: "Scripting language", correct: false },
            { text: "Query language", correct: false }
        ]
    }
    // Continue similarly to reach 100 questions...
];


export default questions;