// Answer the following questions in this file
// You can run this file with `node new.js`
// Ensure your node version is 18 or higher
// You can check your node version with `node -v`
// I'd suggest using nvm to install node 18
// https://github.com/nvm-sh/nvm
// You can install node 18 with `nvm install 18` or `nvm install --lts`

// Q1.
// Use fetch to get data from the API
// Use async/await to get data from the API
// The API url is https://jsonplaceholder.typicode.com/todos/

const fetchTodos = async () => {};

// Q2.
// Use the function you just wrote but only return
// the first 20 todos
const fetchFirst20Todos = async () => {};

// Q3.
// Write a function that returns the first 20 completed todos
const fetchFirst20CompletedTodos = async () => {};

// Q4.
// Write a function that returns all the courses that are genEds
// Use the mockCourses array below
const getGenEdCourses = () => {};

// Q5.
// Write a function that returns all a users bookmarked reviews
// as well as their bookedmarked courses
// This function should return an object with two keys
// bookmarkedReviews and bookmarkedCourses
// e.g. {bookmarkedReviews: [], bookmarkedCourses: []}
// Use the mockReviews array below and the mockUser object below
const getBookmarks = () => {};

// Q6.
// Write a function that returns all the courses which have a rating that is greater than
// or equal to 4. This function should return an array of courses, as well
// as all the reviews for that course. If a course has no reviews, it should still be returned with
// an empty reviews array.
// e.g. [{course: {}, reviews: []}]
// Use the mockCourses and mockReviews array below
// This question has no tests and will be manually marked.
// # Will be very impressed :)
const getGoodCourses = () => {};

// Data for questions
const mockCourses = [
  {
    courseCode: "COMP1511",
    archived: false,
    attributes: ["yeet"],
    calendar: "cal-123",
    campus: "Kensington",
    description:
      "An introduction to problem-solving via programming, which aims to have students develop \
      proficiency in using a high level programming language. Topics: algorithms, program structures \
      (statements, sequence, selection, iteration, functions), data types (numeric, character), data \
      structures arrays, tuples, pointers, lists), storage structures (memory, addresses), introduction \
      to analysis of algorithms, testing, code quality, teamwork, and reflective practice. The course \
      includes extensive practical work in labs and programming projects. Additional Information: \
      This course should  be taken by all CSE majors, and any other students who have an interest \
      in computing or who wish to be extended. It does not require any prior computing knowledge \
      or experience. COMP1511 leads on to COMP1521, COMP1531, COMP2511 and COMP2521, which form the \
      core of the study of computing at UNSW and which are pre-requisites for the full range of further \
      computing courses. Due to overlapping material, students who complete COMP1511 may not also enrol \
      in COMP1911 or COMP1921.",
    enrolmentRules: "",
    equivalents: ["COMP1917", "DPST1091"],
    exclusions: ["DPST1091"],
    faculty: "Faculty of Engineering",
    fieldOfEducation: "ugrad",
    genEd: true,
    level: 1,
    school: "School of Computer Science and Engineering",
    studyLevel: "ugrad",
    terms: [0, 1, 2, 3],
    title: "Programming Fundamentals",
    uoc: 6,
    rating: 4,
    reviewCount: 4,
    overallRating: 4,
    manageability: 4,
    usefulness: 4,
    enjoyability: 4,
  },
  {
    courseCode: "COMP1531",
    archived: false,
    attributes: ["yeet"],
    calendar: "cal-123",
    campus: "Kensington",
    description:
      "This course provides an introduction to software engineering principles: basic software \
      lifecycle concepts, modern development methodologies, conceptual modeling and how these \
      activities relate to programming. It also introduces the basic notions of team-based project \
      management via conducting a project to design, build and deploy a simple web-based application. \
      It is typically taken in the term after completing COMP1511, but could be delayed and taken \
      later. It provides essential background for the teamwork and project management required in \
      many later courses.The goal of this course is to expose the students to:basic elements of \
      software engineering: including requirements elicitation, analysis and specification; design; \
      construction; verification and validation; deployment; and operation and maintenancedata modelling \
      software engineering methodologies, processes, measurements, tools and techniquesWeb-based \
      system architecture and development practices on Web platforms.",
    enrolmentRules:
      "Prerequisite: COMP1511 or DPST1091 or COMP1917 or COMP1921",
    equivalents: [],
    exclusions: ["SENG1010", "SENG1020", "SENG1031"],
    faculty: "Faculty of Engineering",
    fieldOfEducation: "ugrad",
    genEd: true,
    level: 1,
    school: "School of Computer Science and Engineering",
    studyLevel: "ugrad",
    terms: [2, 3],
    title: "Software Engineering Fundamentals",
    uoc: 6,
    rating: 4.5,
    reviewCount: 4,
    overallRating: 4,
    manageability: 4,
    usefulness: 4,
    enjoyability: 4,
  },
  {
    courseCode: "POGG1011",
    archived: false,
    attributes: ["yeet"],
    calendar: "cal-123",
    campus: "Kensington",
    description: "pog course with epic rating",
    enrolmentRules: "",
    equivalents: [],
    exclusions: [],
    faculty: "Faculty of Science",
    fieldOfEducation: "ugrad",
    genEd: true,
    level: 1,
    school: "School of Computer Science and Engineering",
    studyLevel: "ugrad",
    terms: [0],
    title: "Pog Fundamentals Fundamentals",
    uoc: 6,
    rating: 5,
    reviewCount: 4,
    overallRating: 4,
    manageability: 4,
    usefulness: 4,
    enjoyability: 4,
  },
  {
    courseCode: "UNPOG101",
    archived: false,
    attributes: ["yeet"],
    calendar: "cal-123",
    campus: "Kensington",
    description: "unpog course with crap rating",
    enrolmentRules: "",
    equivalents: [],
    exclusions: [],
    faculty: "Faculty of Science",
    fieldOfEducation: "ugrad",
    genEd: true,
    level: 1,
    school: "School of Computer Science and Engineering",
    studyLevel: "ugrad",
    terms: [0],
    title: "Unpog Fundamentals",
    uoc: 6,
    rating: 1,
    reviewCount: 4,
    overallRating: 4,
    manageability: 4,
    usefulness: 4,
    enjoyability: 4,
  },
  {
    courseCode: "COMP1010",
    description:
      "Computational thinking is a critical skill in modern society. This course aims to provide you with an understanding of the foundations of computing, how software systems work, and how to construct new software systems. By the end of the course, you will have produced an application (app) of your choice, solving a problem that's important to you.",
    equivalents: [],
    exclusions: ["ENGG1811"],
    faculty: "Engineering",
    school: "School of Computer Science and Engineering",
    terms: [1, 2, 3],
    title: "The Art of Computing",
    uoc: 6,
    genEd: true,
    fieldOfEducation: "ugrad",
    studyLevel: "ugrad",
    level: 1,
    campus: "Kensington",
    calendar: "cal-123",
    attributes: ["yeet"],
    archived: false,
    enrolmentRules: "",
    rating: 2.5,
  },
  {
    courseCode: "COMP1511",
    description:
      "An introduction to problem-solving via programming, which aims to have students develop proficiency in using a high level programming language. Topics: algorithms, program structures (statements, sequence, selection, iteration, functions), data types (numeric, character), data structures (arrays, tuples, pointers, lists), storage structures (memory, addresses), introduction to\u00a0analysis of algorithms, testing, code quality, teamwork, and reflective practice. The course includes extensive practical work in labs and programming projects.",
    equivalents: ["COMP1917", "DPST1091"],
    exclusions: ["DPST1091"],
    faculty: "Engineering",
    school: "School of Computer Science and Engineering",
    terms: [1, 2, 3],
    title: "Programming Fundamentals",
    uoc: 6,
    genEd: true,
    fieldOfEducation: "ugrad",
    studyLevel: "ugrad",
    level: 1,
    campus: "Kensington",
    calendar: "cal-123",
    attributes: ["yeet"],
    archived: false,
    enrolmentRules: "",
    rating: 4.5,
  },
  {
    courseCode: "COMP1521",
    description:
      "This course provides a programmer's view on how a computer system executes programs, manipulates data and communicates. It enables students to become effective programmers in dealing with issues of performance, portability, and robustness. It is typically taken in the term after completing COMP1511, but could be delayed and taken later. It serves as a foundation for later courses on networks, operating systems, computer architecture and compilers, where a deeper understanding of systems-level issues is required.",
    equivalents: ["DPST1092"],
    exclusions: ["DPST1092"],
    faculty: "Engineering",
    school: "School of Computer Science and Engineering",
    terms: [1, 2, 3],
    title: "Computer Systems Fundamentals",
    uoc: 6,
    genEd: true,
    fieldOfEducation: "ugrad",
    studyLevel: "ugrad",
    level: 1,
    campus: "Kensington",
    calendar: "cal-123",
    attributes: ["yeet"],
    archived: false,
    enrolmentRules: "",
    rating: 4.5,
  },
  {
    courseCode: "COMP1531",
    description: "The goal of this course is to expose the students to:",
    equivalents: [],
    exclusions: ["SENG1010", "SENG1020", "SENG1031"],
    faculty: "Engineering",
    school: "School of Computer Science and Engineering",
    terms: [1, 2, 3],
    title: "Software Engineering Fundamentals",
    uoc: 6,
    genEd: true,
    fieldOfEducation: "ugrad",
    studyLevel: "ugrad",
    level: 1,
    campus: "Kensington",
    calendar: "cal-123",
    attributes: ["yeet"],
    archived: false,
    enrolmentRules: "",
    rating: 3.0,
  },
  {
    courseCode: "COMP1911",
    description:
      "This course introduces students to the basics of programming. The objective of the course is for students to develop proficiency in program design and construction using a high-level programming language. Topics covered include: fundamental programming concepts, the C programming language, programming style, program design and organisation, program testing and debugging. Practical experience of these topics is supplied\u00a0through laboratory exercises and programming assignments.",
    equivalents: [],
    exclusions: [],
    faculty: "Engineering",
    school: "School of Computer Science and Engineering",
    terms: [2],
    title: "Computing 1A",
    uoc: 6,
    genEd: true,
    fieldOfEducation: "ugrad",
    studyLevel: "ugrad",
    level: 1,
    campus: "Kensington",
    calendar: "cal-123",
    attributes: ["yeet"],
    archived: false,
    enrolmentRules: "",
    rating: 4.5,
  },
  {
    courseCode: "COMP2041",
    description:
      "Software system decomposition and design. Overview of the software development life-cycle. Command languages. Version control and configuration management, programming for reliability. Testing and debugging techniques. Profiling and code improvement techniques. Practical work involving programming-in-the-large.",
    equivalents: ["COMP9044"],
    exclusions: [],
    faculty: "Engineering",
    school: "School of Computer Science and Engineering",
    terms: [2],
    title: "Software Construction: Techniques and Tools",
    uoc: 6,
    genEd: false,
    fieldOfEducation: "ugrad",
    studyLevel: "ugrad",
    level: 2,
    campus: "Kensington",
    calendar: "cal-123",
    attributes: ["yeet"],
    archived: false,
    enrolmentRules: "",
    rating: 3.0,
  },
  {
    courseCode: "COMP2111",
    description:
      "This course introduces rigorous and formal methods for modelling system behaviour. These methods support the modelling of abstract specifications and the refinement of abstract specifications through to concrete implementations. Consistency of formal development is verified by proof obligations and formal proof. The course will cover: specification, refinement, implementation, proof obligations, and proof. It re-inforces, and builds on, prerequisite knowledge from MATH1081, especially set theory and predicate logic. The course will use case-studies and assignments to develop competence. The methods developed in this course are used in the SENG2011 workshops and in safety-critical industrial contexts.",
    equivalents: [],
    exclusions: ["COMP2110"],
    faculty: "Engineering",
    school: "School of Computer Science and Engineering",
    terms: [1],
    title: "System Modelling and Design",
    uoc: 6,
    genEd: false,
    fieldOfEducation: "ugrad",
    studyLevel: "ugrad",
    level: 2,
    campus: "Kensington",
    calendar: "cal-123",
    attributes: ["yeet"],
    archived: false,
    enrolmentRules: "",
    rating: 5.0,
  },
  {
    courseCode: "COMP2511",
    description:
      "This course aims to introduce students to the principles of object-oriented design and to fundamental techniques in object-oriented programming. It is typically taken in the second year of study, after COMP2521, to ensure an appropriate background in data structures.\u00a0The knowledge gained in COMP2511 is useful in a wide range of later-year CS courses.",
    equivalents: [],
    exclusions: ["COMP2011", "COMP2911"],
    faculty: "Engineering",
    school: "School of Computer Science and Engineering",
    terms: [2, 3],
    title: "Object-Oriented Design & Programming",
    uoc: 6,
    genEd: true,
    fieldOfEducation: "ugrad",
    studyLevel: "ugrad",
    level: 2,
    campus: "Kensington",
    calendar: "cal-123",
    attributes: ["yeet"],
    archived: false,
    enrolmentRules: "",
    rating: 3.5,
  },
  {
    courseCode: "COMP2521",
    description:
      "The goal of this course is to deepen students' understanding of data structures and algorithms and how these can be employed effectively in the design of software systems. We anticipate that it will generally be taken in the second year of a program, but since its only pre-requisite is COMP1511, is it possible to take it in first year. It is an important course in covering a range of core data structures and algorithms that will be used in context in later courses.",
    equivalents: [],
    exclusions: ["COMP1927"],
    faculty: "Engineering",
    school: "School of Computer Science and Engineering",
    terms: [1, 2, 3],
    title: "Data Structures and Algorithms",
    uoc: 6,
    genEd: true,
    fieldOfEducation: "ugrad",
    studyLevel: "ugrad",
    level: 2,
    campus: "Kensington",
    calendar: "cal-123",
    attributes: ["yeet"],
    archived: false,
    enrolmentRules: "",
    rating: 3.0,
  },
  {
    courseCode: "COMP3121",
    description:
      "Correctness and efficiency of algorithms. Computational complexity: time and space bounds. Techniques for best-case, worst-case and average-case time and space analysis. Designing algorithms using induction, divide-and-conquer and greedy strategies. Algorithms: sorting and order statistics, trees, graphs, matrices. Intractability: classes P, NP, and NP-completeness, approximation algorithms.",
    equivalents: ["COMP3821", "COMP9801"],
    exclusions: ["COMP9101", "COMP9801"],
    faculty: "Engineering",
    school: "School of Computer Science and Engineering",
    terms: [1, 2, 3],
    title: "Algorithms and Programming Techniques",
    uoc: 6,
    genEd: false,
    fieldOfEducation: "ugrad",
    studyLevel: "ugrad",
    level: 3,
    campus: "Kensington",
    calendar: "cal-123",
    attributes: ["yeet"],
    archived: false,
    enrolmentRules: "",
    rating: 1.0,
  },
  {
    courseCode: "COMP3131",
    description:
      "Covers the fundamental principles in programming languages and implementation techniques for compilers (emphasis on compiler front ends). Course contents include: program syntax and semantics, formal translation of programming languages, finite-state recognisers and regular expressions, context-free parsing techniques such as LL(k( and LR(k), attribute grammars, syntax-directed translation, type checking and code generation. Lab: implementation of a compiler in a modern programming language for a small programming language.",
    equivalents: ["COMP9102"],
    exclusions: [],
    faculty: "Engineering",
    school: "School of Computer Science and Engineering",
    terms: [1],
    title: "Programming Languages and Compilers",
    uoc: 6,
    genEd: false,
    fieldOfEducation: "ugrad",
    studyLevel: "ugrad",
    level: 3,
    campus: "Kensington",
    calendar: "cal-123",
    attributes: ["yeet"],
    archived: false,
    enrolmentRules: "",
    rating: 4.5,
  },
  {
    courseCode: "COMP3141",
    description:
      "This course will present rigorous and formal methods for the design and implementation phases of software system development. Also considered are testing and reuse of designs. As far as possible, software tools that can assist the process will be used. The material will be presented using case studies, and students will be required to undertake a project.",
    equivalents: [],
    exclusions: [],
    faculty: "Engineering",
    school: "School of Computer Science and Engineering",
    terms: [2],
    title: "Software System Design and Implementation",
    uoc: 6,
    genEd: false,
    fieldOfEducation: "ugrad",
    studyLevel: "ugrad",
    level: 3,
    campus: "Kensington",
    calendar: "cal-123",
    attributes: ["yeet"],
    archived: false,
    enrolmentRules: "",
    rating: 3.0,
  },
  {
    courseCode: "COMP3151",
    description:
      "Concurrency = processes + communication. Communication via shared variables vs message passing. Models of concurrency: true concurrency vs interleaving. Abstractions: atomicity, locks and barriers, semaphores, monitors, threads, RPC, rendezvous. Classical problems: mutual exclusion, dining philosophers, sleeping barber, termination detection, gravitational N-body problem.Practical work: programming assignments and proving of program safety and liveness properties.",
    equivalents: ["COMP9154"],
    exclusions: [],
    faculty: "Engineering",
    school: "School of Computer Science and Engineering",
    terms: [2],
    title: "Foundations of Concurrency",
    uoc: 6,
    genEd: false,
    fieldOfEducation: "ugrad",
    studyLevel: "ugrad",
    level: 3,
    campus: "Kensington",
    calendar: "cal-123",
    attributes: ["yeet"],
    archived: false,
    enrolmentRules: "",
    rating: 4.5,
  },
  {
    courseCode: "COMP3153",
    description:
      "It is virtually impossible to guarantee the correctness of a system, and in turn the absence of bugs by standard software engineering practice such as code review, systematic testing and good software design alone. The formal methods community has developed various rigorous, mathematically sound techniques and tools that allow the automatic analysis of systems and software. The application of these fully automatic techniques is typically called algorithmic verification. The course will describe several automatic verification techniques, the algorithms they are based on, and the tools that support them. We will discuss examples to which the techniques have been applied, and provide experience with the use of several tools.",
    equivalents: ["COMP9153"],
    exclusions: [],
    faculty: "Engineering",
    school: "School of Computer Science and Engineering",
    terms: [2],
    title: "Algorithmic Verification",
    uoc: 6,
    genEd: false,
    fieldOfEducation: "ugrad",
    studyLevel: "ugrad",
    level: 3,
    campus: "Kensington",
    calendar: "cal-123",
    attributes: ["yeet"],
    archived: false,
    enrolmentRules: "",
    rating: 0.0,
  },
  {
    courseCode: "COMP3161",
    description:
      "Programming language paradigms:  imperative, object oriented, declarative (i.e., functional and logic).  Theoretical foundations of programming languages:  syntax, operatational, axiomatic and denotational semantics.  Implementation aspects of central language features, such as dynamic and strong typing, polymorphism, overloading and automatic memory management.  Abstracting over programming languages and architectures: byte code approach, component software.",
    equivalents: [],
    exclusions: [],
    faculty: "Engineering",
    school: "School of Computer Science and Engineering",
    terms: [3],
    title: "Concepts of Programming Languages",
    uoc: 6,
    genEd: false,
    fieldOfEducation: "ugrad",
    studyLevel: "ugrad",
    level: 3,
    campus: "Kensington",
    calendar: "cal-123",
    attributes: ["yeet"],
    archived: false,
    enrolmentRules: "",
    rating: 0.5,
  },
  {
    courseCode: "COMP3211",
    description:
      "Study the architecture & organisation of modern processors, and influences upon these, with emphasis on pipelined RISC machines; gain understanding of the design of the memory subsystem, I/O, and system level interconnect; become proficient in the use of tools such as VHDL and SimpleScalar for the description, simulation, and verification of architectural designs; complete a series of assignments leading to the design, implementation, validatation and assessment of a RISC system. It is assumed students are familiar with combinational and sequential logic design principles and have some experience in the use of CAD tools to describe and simulate digital systems.",
    equivalents: ["COMP9211"],
    exclusions: [],
    faculty: "Engineering",
    school: "School of Computer Science and Engineering",
    terms: [1],
    title: "Computer Architecture",
    uoc: 6,
    genEd: false,
    fieldOfEducation: "ugrad",
    studyLevel: "ugrad",
    level: 3,
    campus: "Kensington",
    calendar: "cal-123",
    attributes: ["yeet"],
    archived: false,
    enrolmentRules: "",
    rating: 1.5,
  },
  {
    courseCode: "COMP3222",
    description:
      "This course aims to provide students with a knowledge of problem solving with digital systems (computer systems and digital circuits). The basic building blocks of combinational and sequential circuits are introduced to develop circuit solutions to problems and to understand and implement the design and operation of hardware models of digital and computer systems. HDLs will be used to describe circuits and state of the art computer aided design tools will be used to design complex systems.",
    equivalents: ["COMP2021", "COMP9022", "COMP9222"],
    exclusions: ["ELEC2141"],
    faculty: "Engineering",
    school: "School of Computer Science and Engineering",
    terms: [3],
    title: "Digital Circuits and Systems",
    uoc: 6,
    genEd: false,
    fieldOfEducation: "ugrad",
    studyLevel: "ugrad",
    level: 3,
    campus: "Kensington",
    calendar: "cal-123",
    attributes: ["yeet"],
    archived: false,
    enrolmentRules: "",
    rating: 2.5,
  },
  {
    courseCode: "COMP3231",
    description:
      "Operating System Organisation and services. Process management: scheduling, synchronisation and multiprocessors. Memory management: virtual memory, and paging. Storage management: file systems and I/O. Case studies include: UNIX & Windows. Programming assignments. Assumed Knowledge: C",
    equivalents: ["COMP3891", "COMP9201", "COMP9283"],
    exclusions: [],
    faculty: "Engineering",
    school: "School of Computer Science and Engineering",
    terms: [1],
    title: "Operating Systems",
    uoc: 6,
    genEd: false,
    fieldOfEducation: "ugrad",
    studyLevel: "ugrad",
    level: 3,
    campus: "Kensington",
    calendar: "cal-123",
    attributes: ["yeet"],
    archived: false,
    enrolmentRules: "",
    rating: 0.0,
  },
  {
    courseCode: "COMP3311",
    description:
      "Data models: entity-relationship, relational, object-oriented. Relational database management systems: data definition, query languages, development tools. Database application design and implementation. Architecture of relational database management systems: storage management, query processing, transaction processing. Lab: design and implementation of a database application.",
    equivalents: [],
    exclusions: ["COMM1822", "COMP9311", "INFS1603", "INFS5992"],
    faculty: "Engineering",
    school: "School of Computer Science and Engineering",
    terms: [1, 3],
    title: "Database Systems",
    uoc: 6,
    genEd: false,
    fieldOfEducation: "ugrad",
    studyLevel: "ugrad",
    level: 3,
    campus: "Kensington",
    calendar: "cal-123",
    attributes: ["yeet"],
    archived: false,
    enrolmentRules: "",
    rating: 0.5,
  },
  {
    courseCode: "COMP3331",
    description:
      "Networking technology overview. Protocol design and validation using the finite state automata in conjunction with time-lines. Overview of the IEEE802 network data link protocol standards. Addressing at the data link and network layers. Network layer services. Introduction to routing algorithms such as Distance Vector and Link State. Congestion control mechanisms. Internetworking issues in connecting networks. The Internet Protocol Suite overview. The Internet protocols IPv4 and IPv6. Address resolution using ARP and RARP. Transport layer: issues, transport protocols TCP and UDP. Application level protocols such as: File Transfer Protocol (FTP), Domain Name System (DNS) and Simple Mail Transfer Protocol (SMTP). Introduction to fundamental network security concepts, 802.11 wireless networks and peer to peer networks. There is a substantial network programming component in the assessable material.",
    equivalents: ["COMP9331"],
    exclusions: ["COMP3931"],
    faculty: "Engineering",
    school: "School of Computer Science and Engineering",
    terms: [1, 2, 3],
    title: "Computer Networks and Applications",
    uoc: 6,
    genEd: false,
    fieldOfEducation: "ugrad",
    studyLevel: "ugrad",
    level: 3,
    campus: "Kensington",
    calendar: "cal-123",
    attributes: ["yeet"],
    archived: false,
    enrolmentRules: "",
    rating: 1.5,
  },
  {
    courseCode: "COMP3411",
    description:
      "Machine intelligence. Principles: knowledge representation, automated reasoning, machine learning. Tools: AI programming languages, control methods, search strategies, pattern matching. Applications: computer vision, speech recognition, natural language processing, expert systems, game playing, computer-aided learning. Philosophical and psychological issues. Lab: logic programming assignments.",
    equivalents: [],
    exclusions: ["COMP9414", "COMP9814"],
    faculty: "Engineering",
    school: "School of Computer Science and Engineering",
    terms: [1],
    title: "Artificial Intelligence",
    uoc: 6,
    genEd: false,
    fieldOfEducation: "ugrad",
    studyLevel: "ugrad",
    level: 3,
    campus: "Kensington",
    calendar: "cal-123",
    attributes: ["yeet"],
    archived: false,
    enrolmentRules: "",
    rating: 3.0,
  },
  {
    courseCode: "COMP3421",
    description:
      "Graphics hardware: scan conversion of lines and polygons. 2D transformations: windowing, clipping, viewports. User interfaces. 3D transformations: perspective transformation, 3D clipping, hidden surface removal, lighting and texture maps. Hierarchical modelling of objects, modelling curves and surfaces with splines and fractals. Graphics standards. Lab: programming assignments.",
    equivalents: ["COMP9415"],
    exclusions: [],
    faculty: "Engineering",
    school: "School of Computer Science and Engineering",
    terms: [3],
    title: "Computer Graphics",
    uoc: 6,
    genEd: false,
    fieldOfEducation: "ugrad",
    studyLevel: "ugrad",
    level: 3,
    campus: "Kensington",
    calendar: "cal-123",
    attributes: ["yeet"],
    archived: false,
    enrolmentRules: "",
    rating: 4.0,
  },
  {
    courseCode: "COMP3431",
    description:
      "An introduction to Intelligent agent design.  Picking actions using planning, learning or engineered control.  Both practical and theoretical components.  Practical component: Re-implement parts of a real agent architecture on a robot.  Assignment based.  Emphasis on engineering a working system.  Theoretical component: Introduction to a variety of research agent architectures including classical planning and reinforcement learning.  Lecture and lab based.",
    equivalents: ["COMP9434"],
    exclusions: [],
    faculty: "Engineering",
    school: "School of Computer Science and Engineering",
    terms: [3],
    title: "Robotic Software Architecture",
    uoc: 6,
    genEd: false,
    fieldOfEducation: "ugrad",
    studyLevel: "ugrad",
    level: 3,
    campus: "Kensington",
    calendar: "cal-123",
    attributes: ["yeet"],
    archived: false,
    enrolmentRules: "",
    rating: 4.0,
  },
  {
    courseCode: "COMP3511",
    description:
      "Provides an introduction to user-system interactions, both analysis and design. The approach is cognitive, focusing on matching user goals with computer technologies. Topics: the human information processing system, models of interaction, strategies for and process of design and evaluation. Project work is emphasised.",
    equivalents: ["COMP9511"],
    exclusions: [],
    faculty: "Engineering",
    school: "School of Computer Science and Engineering",
    terms: [0, 2],
    title: "Human Computer Interaction",
    uoc: 6,
    genEd: true,
    fieldOfEducation: "ugrad",
    studyLevel: "ugrad",
    level: 3,
    campus: "Kensington",
    calendar: "cal-123",
    attributes: ["yeet"],
    archived: false,
    enrolmentRules: "",
    rating: 3.5,
  },
  {
    courseCode: "ARTS1010",
    description:
      "In this course you will examine the practice of the short story. Considering a variety of modernist and contemporary examples, you will explore the principles that have shaped the development of this form such as the use of stream of consciousness, epiphany, the function of compression and the rise of contemporary first person testimonies. In addition, we will look at techniques and strategies crucial to the success of the short form and useful to your development as writers, including point of view, narrative design, the development of voice and the use of economy and symbolism.",
    equivalents: [],
    exclusions: [],
    faculty: "Arts, Design and Architecture",
    school: "School of the Arts and Media",
    terms: [1],
    title: "The Life of Words",
    uoc: 6,
    genEd: true,
    fieldOfEducation: "ugrad",
    studyLevel: "ugrad",
    level: 1,
    campus: "Kensington",
    calendar: "cal-123",
    attributes: ["yeet"],
    archived: false,
    enrolmentRules: "",
    rating: 5.0,
  },
  {
    courseCode: "ARTS1011",
    description:
      "What does it mean to write about ourselves in an age of reality hunger, with genres such as autofiction and memoir proliferating, and with social media providing everyone with a public profile?\u00a0If print culture of the Gutenberg era has given way to digital culture of the Google era, this has only increased the amount of text that we are immersed in. In this course\u00a0you will explore how literature has competed with, absorbed, and remediated new technologies of communication. You will\u00a0approach\u00a0\u2018creative writing\u2019 as a mode of expression that emerges from and circulates\u00a0within a much larger textual environment,\u00a0and you will\u00a0produce your\u00a0own innovative engagements with contemporary media in a practical workshop situation.",
    equivalents: [],
    exclusions: [],
    faculty: "Arts, Design and Architecture",
    school: "School of the Arts and Media",
    terms: [3],
    title: "Inventing the Self: Creative Writing in the Digital Age",
    uoc: 6,
    genEd: true,
    fieldOfEducation: "ugrad",
    studyLevel: "ugrad",
    level: 1,
    campus: "Kensington",
    calendar: "cal-123",
    attributes: ["yeet"],
    archived: false,
    enrolmentRules: "",
    rating: 2.0,
  },
  {
    courseCode: "ARTS1030",
    description:
      "This course introduces you\u00a0to English through the study of literary form. Focusing on the major literary genres of poetry, prose and drama, the course will examine ways of writing in English from a range of periods and cultural traditions including non-British and pre-Twentieth century. It will also introduce you\u00a0to the specialised vocabulary of literary and textual analysis.",
    equivalents: [],
    exclusions: [],
    faculty: "Arts, Design and Architecture",
    school: "School of the Arts and Media",
    terms: [1],
    title: "Forms of Writing: Literature, Genre, Culture",
    uoc: 6,
    genEd: true,
    fieldOfEducation: "ugrad",
    studyLevel: "ugrad",
    level: 1,
    campus: "Kensington",
    calendar: "cal-123",
    attributes: ["yeet"],
    archived: false,
    enrolmentRules: "",
    rating: 1.0,
  },
  {
    courseCode: "ARTS1031",
    description:
      "This course charts a roughly chronological path through the tradition of literature in English from the Renaissance to the twentieth-first century. As we move through the term, you will become familiar with some of the most significant periods and movements in English literary history, immerse yourself in the work of some amazing writers and learn many of the critical tools you need to read, analyse, and understand literature. As the course title implies, one of the themes that we will encounter along the way is the idea of \u201creading\u201d itself: what special practices of reading do we cultivate as students of literature, where did these practices come from and how is the way we read changing and evolving today - as a result, for instance, of changes in the media landscape? Like other English subjects, one of the aims of this course is to help you sharpen your critical reading skills. But it is also one of our assumptions that reading and studying the history of literature in English is the single best way to become a better writer.",
    equivalents: [],
    exclusions: [],
    faculty: "Arts, Design and Architecture",
    school: "School of the Arts and Media",
    terms: [3],
    title: "Reading Through Time",
    uoc: 6,
    genEd: true,
    fieldOfEducation: "ugrad",
    studyLevel: "ugrad",
    level: 1,
    campus: "Kensington",
    calendar: "cal-123",
    attributes: ["yeet"],
    archived: false,
    enrolmentRules: "",
    rating: 2.5,
  },
];

const mockReviews = [
  {
    reviewId: "rev-12345",
    zid: "z5555555",
    authorName: "test",
    description: "amazing",
    courseCode: "COMP1511",
    grade: 75,
    termTaken: "T1",
    createdTimestamp: new Date(),
    updatedTimestamp: new Date(),
    upvotes: ["z513131"],
    manageability: 3,
    enjoyability: 4,
    usefulness: 5,
    overallRating: 4.5,
  },
  {
    reviewId: "rev-1234",
    zid: "z5555555",
    authorName: "test2",
    description: "average",
    courseCode: "COMP2521",
    grade: 75,
    termTaken: "T2",
    createdTimestamp: new Date(),
    updatedTimestamp: new Date(),
    upvotes: ["z513131"],
    manageability: 3,
    enjoyability: 3,
    usefulness: 3,
    overallRating: 3,
  },
  {
    reviewId: "rev-123",
    zid: "z5555555",
    authorName: "test2",
    description: "average",
    courseCode: "COMP2521",
    grade: 75,
    termTaken: "T2",
    createdTimestamp: new Date(),
    updatedTimestamp: new Date(),
    upvotes: ["z513131"],
    manageability: 3,
    enjoyability: 3,
    usefulness: 3,
    overallRating: 3,
  },
];

const mockUser = {
  zid: "z5555555",
  isAdmin: false,
  bookmarkedCourses: mockCourses.slice(0, 2).map((course) => course.courseCode),
  bookmarkedReviews: ["rev-1234"],
  reports: [],
  reviews: ["rev-123"],
};

// Tests
const tests = async () => {
  try {
    const todos = await fetchTodos();
    if (todos.length === 200) {
      console.log("Yay! We got 200 todos!");
    } else {
      console.log("Oh no! We didn't get 200 todos!");
    }

    const first20Todos = await fetchFirst20Todos();
    if (first20Todos.length === 20) {
      console.log("Yay! We got 20 todos!");
    } else {
      console.log("Oh no! We didn't get 20 todos!");
    }

    const first20CompletedTodos = await fetchFirst20CompletedTodos();
    if (
      first20CompletedTodos.length === 20 &&
      first20CompletedTodos.every((todo) => todo.completed)
    ) {
      console.log("Yay! We got 20 completed todos!");
    } else {
      console.log("Oh no! We didn't get 20 completed todos!");
    }

    const genEdCourses = getGenEdCourses();
    if (genEdCourses.length === 16) {
      console.log("Yay! We got 16 gen ed courses!");
    } else {
      console.log("Oh no! We didn't get 16 gen ed courses!");
    }

    const bookmarks = getBookmarks();
    if (
      bookmarks.bookmarkedReviews[0].courseCode === "COMP2521" &&
      bookmarks.bookmarkedCourses.length === 4
    ) {
      console.log("Yay! We got the correct bookmarked reviews and courses!");
    } else {
      console.log(
        "Oh no! We didn't get the correct bookmarked reviews and courses!"
      );
    }
  } catch (err) {
    console.log("Tests failed!", err);
  }
};

tests();
