-- phpMyAdmin SQL Dump
-- version 3.4.10.1deb1
-- http://www.phpmyadmin.net
--
-- Host: localhost
-- Generation Time: Dec 06, 2016 at 09:19 AM
-- Server version: 5.5.53
-- PHP Version: 5.3.10-1ubuntu3.25

SET SQL_MODE="NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- Database: `webbiblioteka`
--

-- --------------------------------------------------------

--
-- Table structure for table `IZDAVAC`
--

CREATE TABLE IF NOT EXISTS `IZDAVAC` (
  `IZDAVAC_ID` int(11) NOT NULL AUTO_INCREMENT,
  `IZDAVAC_NAZIV` varchar(50) COLLATE utf8_unicode_ci DEFAULT NULL,
  `IZDAVAC_MESTO` varchar(50) COLLATE utf8_unicode_ci DEFAULT NULL,
  `IZDAVAC_DRZAVA` varchar(50) COLLATE utf8_unicode_ci DEFAULT NULL,
  PRIMARY KEY (`IZDAVAC_ID`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci AUTO_INCREMENT=22 ;

--
-- Dumping data for table `IZDAVAC`
--

INSERT INTO `IZDAVAC` (`IZDAVAC_ID`, `IZDAVAC_NAZIV`, `IZDAVAC_MESTO`, `IZDAVAC_DRZAVA`) VALUES
(2, 'O''Reilly Media', 'Sebastopol', 'USA'),
(3, 'Addison-Wesley', 'Boston', 'USA'),
(4, 'Peachpit Press', 'San Francisco', 'USA'),
(5, 'Cengage Learning Independent', 'Boston', 'USA'),
(6, 'McGraw-Hill Education', 'New York', 'USA'),
(7, 'CreateSpace Independent', 'Seattle', 'USA'),
(8, 'Mike Murach ', 'Fresno', 'USA'),
(9, 'Microsoft Press', 'Seattle', 'USA'),
(10, 'Wiley', 'New Jersey', 'USA'),
(11, 'No Starch Press', 'San Francisco', 'USA'),
(12, 'Pragmatic Bookshelf', 'Releigh', 'USA'),
(13, 'Packt Publishing', 'Birmingham', 'UK'),
(14, 'Apress', 'New York', 'USA'),
(15, 'CareerCup', 'New York', 'USA'),
(16, 'Wrox Press', 'Birmingham', 'UK'),
(17, 'Pearson', 'London', 'UK'),
(18, 'Prentice Hall', 'New Jersey', 'USA'),
(19, 'Big Nerd Ranch Guides', 'Atlanta', 'USA'),
(20, 'Visual Steps Publishing', 'Dallas', 'USA'),
(21, 'Glasnevin Publishing', 'Dublin', 'Ireland');

-- --------------------------------------------------------

--
-- Table structure for table `KNJIGA`
--

CREATE TABLE IF NOT EXISTS `KNJIGA` (
  `KNJIGA_ID` int(11) NOT NULL AUTO_INCREMENT,
  `PISAC_ID` int(11) DEFAULT NULL,
  `IZDAVAC_ID` int(11) DEFAULT NULL,
  `KNJIGA_ISBN` varchar(15) COLLATE utf8_unicode_ci DEFAULT NULL,
  `KNJIGA_NASLOV` varchar(100) COLLATE utf8_unicode_ci DEFAULT NULL,
  `KNJIGA_BROJ_STRANA` int(11) DEFAULT NULL,
  `KNJIGA_BROJ_IZDANJA` int(11) DEFAULT NULL,
  `KNJIGA_GODINA_IZDANJA` int(11) DEFAULT NULL,
  `KNJIGA_OBLAST` varchar(50) COLLATE utf8_unicode_ci DEFAULT NULL,
  `KNJIGA_OPIS` text COLLATE utf8_unicode_ci,
  `KNJIGA_BR_PREGLEDA` int(11) DEFAULT '0',
  PRIMARY KEY (`KNJIGA_ID`),
  KEY `FK_IZDAVAC_KNJIGA` (`IZDAVAC_ID`),
  KEY `FK_PISAC_KNJIGA` (`PISAC_ID`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci AUTO_INCREMENT=68 ;

--
-- Dumping data for table `KNJIGA`
--

INSERT INTO `KNJIGA` (`KNJIGA_ID`, `PISAC_ID`, `IZDAVAC_ID`, `KNJIGA_ISBN`, `KNJIGA_NASLOV`, `KNJIGA_BROJ_STRANA`, `KNJIGA_BROJ_IZDANJA`, `KNJIGA_GODINA_IZDANJA`, `KNJIGA_OBLAST`, `KNJIGA_OPIS`, `KNJIGA_BR_PREGLEDA`) VALUES
(8, 10, 3, '9780321884497', 'Database Design for Mere Mortals', 672, 3, 2013, 'Baze Podataka', 'The #1 Easy, Commonsense Guide to Database Design! Michael J. Hernandez`s best-selling Database Design for Mere Mortals has earned worldwide respect as the clearest, simplest way to learn relational database design. Now, he is made this hands-on, software-independent tutorial even easier.', 13),
(9, 11, 3, '9780321992475', 'SQL Queries for Mere Mortals', 792, 3, 2014, 'Baze Podataka', 'SQL Queries for Mere Mortals has earned worldwide praise as the clearest, simplest tutorial on writing effective SQL queries. The authors have updated this hands-on classic to reflect new SQL standards and database applications and teach valuable new techniques.', 0),
(10, 12, 2, '9780596009762', 'SQL Cookbook', 636, 1, 2005, 'Baze Podataka', 'You know the rudiments of the SQL query language, yet you feel you aren''t taking full advantage of SQL''s expressive power. You''d like to learn how to do more work with SQL inside the database before pushing data across the network to your applications. You''d like to take your SQL skills to the next level.', 0),
(11, 13, 4, '9780321553577', 'SQL Visual QuickStart Guide', 496, 3, 2008, 'Baze Podataka', 'SQL is a standard interactive and programming language for querying and modifying data and managing databases. This task-based tutorial and reference guide takes the mystery out learning and applying SQL. After going over the relational database model and SQL syntax in the first few chapters, veteran author Chris Fehily immediately launches into the tasks that will get readers comfortable with SQL.', 0),
(12, 14, 5, '9781435457515', 'The Language of SQL', 239, 1, 2010, 'Baze Podataka', 'Most SQL texts attempt to serve as an encyclopedic reference on SQL syntax - an approach that is counterproductive, since this information is readily available in online references published by the major database vendors. For SQL beginners, it''s more important for a book to focus on general concepts and offer clear explanations and examples of what the various statements can accomplish.', 1),
(13, 15, 6, '9780071747998', 'Databases Demystified', 448, 2, 2010, 'Baze Podataka', 'Learning DATABASE fundamentals just got a whole lot EASIER! Now you can design, build, and manage a fully functional database with ease. Thoroughly updated to cover the latest technologies and techniques, Databases Demystified, Second Edition gives you the hands-on help you need to get started.', 1),
(14, 16, 7, '9781481942720', 'Six-Step Relational Database Design', 232, 2, 2013, 'Baze Podataka', 'Six-Step Relational Database DesignTM bridges the gaps between database theory, database modeling, and database implementation by outlining a simple but reliable six-step process for accurately modeling user data on a Crow''s Foot Relational Model Diagram, and then demonstrating how to implement this model on any relational database management system.', 1),
(15, 17, 7, '9781519555212', 'SQL: The Ultimate Beginner''s Guide!', 138, 1, 2015, 'Baze Podataka', 'SQL... Master It Today! This book will teach you the basics of SQL and database operations. Since SQL is a language used to manage databases, you have to familiarize yourself with its basics and nuances. Dont worry if you have never used SQL before: this book will turn you from a beginner to an efficient SQL-user.', 0),
(16, 18, 7, '9781508767480', 'SQL QuickStart Guide', 76, 1, 2015, 'Baze Podataka', 'Structured Query Language or SQL (pronounced sequel by many) is the most widely used programming language used in database management and is the standard language for Relational Database Management Systems (RDBMS). SQL programming allows users to return, analyze, create, manage and delete data within a database all within a few commands.', 0),
(17, 21, 2, '9780596514266', 'MySQL Pocket Reference', 134, 2, 2007, 'Baze Podataka', 'To help you be more efficient in your work, this handy pocket reference gives you instant reminders on how to use important MySQL functions, especially in conjunction with key parts of the LAMP open source infrastructure. This powerful database system is so rich in features that no administrator or programmer can stay familiar with all of them.', 0),
(18, 22, 2, '9781449314286', 'High Performance MySQL', 826, 3, 2012, 'Baze Podataka', 'How can you bring out MySQLs full power? With High Performance MySQL, you will learn advanced techniques for everything from designing schemas, indexes, and queries to tuning your MySQL server, operating system, and hardware to their fullest potential. This guide also teaches you safe and practical ways to scale applications through replication, load balancing, high availability, and failover.', 6),
(19, 23, 8, '9781890774820', 'Murachs MySQL', 612, 2, 2015, 'Baze Podataka', 'Now, this 2nd Edition has been updated and improved throughout. As a result, it is easier than ever to use for learning MySQL from scratch, for switching to MySQL from another flavor of SQL (like MS SQL Server or Oracle), or for quickly looking up the forgotten details that are so essential as you develop database applications.', 1),
(20, 24, 2, '9781449370190', 'Learning Web App Development', 306, 1, 2014, 'Web Programiranje', 'Grasp the fundamentals of web application development by building a simple database-backed app from scratch, using HTML, JavaScript, and other open source tools. Through hands-on tutorials, this practical guide shows inexperienced web app developers how to create a user interface, write a server, build client-server communication, and use a cloud-based service to deploy the application.', 0),
(21, 25, 2, '9781491918661', 'Learning Php, Mysql, Javascript, Css ', 812, 4, 2014, 'Web Programiranje', 'Build interactive, data-driven websites with the potent combination of open-source technologies and web standards, even if you only have basic HTML knowledge. With this popular hands-on guide, you will tackle dynamic web programming with the help of today''s core technologies: PHP, MySQL, JavaScript, jQuery, CSS, and HTML5.', 0),
(22, 26, 7, '9781522792147', 'The Joy of PHP', 182, 3, 2015, 'Web Programiranje', 'Third Edition now with bonus chapters. Have you ever wanted to design your own website or browser application but thought it would be too difficult or just didn''t know where to start? Have you found the amount of information on the Internet either too daunting or not geared for your skill set or worse just plain boring? Are you interested in learning to program PHP and have some fun along the way? If so, then The Joy of PHP by Alan Forbes is the book for you!', 1),
(23, 27, 7, '9781497408180', 'A Smarter Way to Learn JavaScript', 254, 1, 2014, 'Web Programiranje', 'Written for beginners, useful for experienced developers who want to sharpen their skills and don''t mind covering some ground they already know. (Feel free to skip early chapters that cover elementary topics like alerts, variables, and strings). Step-by-step, you learn the fundamentals of JavaScript as well as some advanced concepts including constructors and prototypes.', 0),
(24, 28, 9, '9781509300013', 'Modern Web Development', 448, 1, 2016, 'Web Programiranje', 'Master powerful new approaches to web architecture, design, and user experience  This book presents a pragmatic, problem-driven, user-focused approach to planning, designing, and building dynamic web solutions. You will learn how to gain maximum value from Domain-Driven Design (DDD), define optimal supporting architecture, and succeed with modern UX-first design approaches.', 0),
(25, 29, 10, '9781118531648', 'JavaScript and JQuery: Interactive Front-End Web Development', 640, 1, 2014, 'Web Programiranje', 'By the end of the book, not only will you be able to use the thousands of scripts, JavaScript APIs, and jQuery plugins that are freely available on the web, and be able to customize them - you will also be able to create your own scripts from scratch.', 1),
(26, 30, 11, '9781593275846', 'Eloquent JavaScript: A Modern Introduction to Programming', 472, 2, 2014, 'Web Programiranje', 'JavaScript lies at the heart of almost every modern web application, from social apps to the newest browser-based games. Though simple for beginners to pick up and play with, JavaScript is a flexible, complex language that you can use to build full-scale applications.', 5),
(27, 31, 2, '9780596517748', 'JavaScript: The Good Parts 1st Edition', 176, 1, 2008, 'Web Programiranje', 'Most programming languages contain good and bad parts, but JavaScript has more than its share of the bad, having been developed and released in a hurry before it could be refined. This authoritative book scrapes away these bad features to reveal a subset of JavaScript that`s more reliable, readable, and maintainable than the language as a whole - a subset you can use to create truly extensible and efficient code.', 1),
(28, 32, 12, '9781937785734', 'Node.js the Right Way', 148, 1, 2013, 'Web Programiranje', 'Get to the forefront of server-side JavaScript programming by writing compact, robust, fast, networked Node applications that scale. Ready to take JavaScript beyond the browser, explore dynamic languages features and embrace evented programming? Explore the fun, growing repository of Node modules provided by npm. Work with multiple protocols, load-balanced RESTful web services, express, 0MQ, Redis, CouchDB, and more.', 0),
(29, 33, 7, '9781532916144', 'Unraveling AngularJS 1.5', 588, 1, 2015, 'Web Programiranje', 'This is the book to Learn AngularJS (v1.5) from! AngularJS is a great technology to create dynamic web sites with the Single Page Application model. From this book you can learn not only the fundamentals, but you will also grasp the essence of internal mechanisms that drive Angular.', 0),
(30, 34, 13, '9781783283354', 'AngularJS Web Application Development Cookbook', 319, 1, 2015, 'Web Programiranje', 'Understand how to design and organize your AngularJS application to make it efficient, performant, and scaleable. Discover patterns and strategies that will give your insights into the best ways to construct production AngularJS applications.Get the most out of AngularJS by gaining exposure to real-world examples.', 0),
(31, 34, 14, '9781430264484', 'Pro AngularJS', 688, 1, 2014, 'Web Programiranje', 'AngularJS is the leading framework for building dynamic JavaScript applications that take advantage of the capabilities of modern browsers and devices. AngularJS, which is maintained by Google, brings the power of the Model-View-Controller (MVC) pattern to the client, providing the foundation for complex and rich web apps. It allows you to build applications that are smaller, faster, and with a lighter resource footprint than ever before.', 1),
(32, 36, 15, '9780984782857', 'Cracking the Coding Interview', 687, 6, 2015, 'Programski Jezici', 'Cracking the Coding Interview, 6th Edition is here to help you through this process, teaching you what you need to know and enabling you to perform at your very best. I''ve coached and interviewed hundreds of software engineers. The result is this book.', 0),
(33, 37, 6, '9780071809252', 'Java: A Beginner`s Guide', 728, 6, 2014, 'Programski Jezici', 'Fully updated for Java Platform, Standard Edition 8 (Java SE 8), Java: A Beginner`s Guide, Sixth Edition gets you started programming in Java right away. Bestselling programming author Herb Schildt begins with the basics, such as how to create, compile, and run a Java program. He then moves on to the keywords, syntax, and constructs that form the core of the Java language.', 0),
(34, 38, 2, '9780596009205', 'Head First Java', 688, 2, 2005, 'Programski Jezici', 'Learning a complex new language is no easy task especially when it s an object-oriented computer programming language like Java. You might think the problem is your brain. It seems to have a mind of its own, a mind that doesn`t always want to take in the dry, technical stuff you''re forced to study.', 0),
(35, 39, 2, '9780596008673', 'Head First Object-Oriented Analysis and Design', 636, 1, 2006, 'Programski Jezici', 'Head First Object-Oriented Analysis & Design shows you how to analyze, design, and write serious object-oriented software: software that is easy to reuse, maintain, and extend; software that does not hurt your head; software that lets you add new features without breaking the old ones.', 0),
(36, 40, 3, '9780201633610', 'Design Patterns', 395, 1, 1994, 'Programski Jezici', 'These texts cover the design of object-oriented software and examine how to investigate requirements, create solutions and then translate designs into code, showing developers how to make practical use of the most significant recent developments. A summary of UML notation is included.', 0),
(37, 41, 2, '9781491903995', 'Effective Modern C  ', 336, 1, 2014, 'Programski Jezici', 'Coming to grips with C  11 and C  14 is more than a matter of familiarizing yourself with the features they introduce (e.g., auto type declarations, move semantics, lambda expressions, and concurrency support). The challenge is learning to use those features effectively-so that your software is correct, efficient, maintainable, and portable.', 0),
(38, 42, 9, '9781509301041', 'Microsoft Visual C# Step by Step', 816, 8, 2015, 'Programski Jezici', 'Guide to Microsoft Visual C# fundamentals with Visual Studio 2015  Expand your expertise-and teach yourself the fundamentals of programming with the latest version of Visual C# with Visual Studio 2015. If you are an experienced software developer, you`ll get all the guidance, exercises, and code you need to start building responsive, scalable Windows 10 and Universal Windows Platform applications with Visual C#.', 0),
(39, 43, 16, '9781119068051', 'Professional Visual Studio 2015', 1320, 1, 2015, 'Programski Jezici', 'Professional Visual Studio 2015 is the leading pro`s guide to new and upgraded features of Microsoft Visual Studio. With a unique IDE-centric approach and deep dive into the software`s many nooks and crannies, this book will bring you up to speed quickly on everything Visual Studio 2015 has to offer. Whether you`re new to Visual Studio or just upgrading, you`ll appreciate in-depth, professional explanation of updates, features, and support.', 0),
(40, 44, 3, '9780134141046', 'Essential C# 6.0', 1008, 5, 2015, 'Programski Jezici', 'Essential C# 6.0 is a well-organized, no-fluff guide to the latest versions of C# for programmers at all levels of experience. Fully updated to reflect new C# 6.0 and .NET 4.6 features and patterns, it will help you write C# code that`s simple, powerful, robust, secure, and maintainable.', 0),
(41, 45, 3, '9780321563842', 'The C++ Programming Language', 1368, 4, 2013, 'Programski Jezici', 'C++ 11 has arrived: thoroughly master it, with the definitive new guide from C++ creator Bjarne Stroustrup, C++  Programming Language, Fourth Edition! The brand-new edition of the world`s most trusted and widely read guide to C++, it has been comprehensively updated for the long-awaited CC++ 11 standard.', 4),
(42, 46, 17, '9780133943023', 'Concepts of Programming Languages', 792, 11, 2015, 'Programski Jezici', 'Evaluating the Fundamentals of Computer Programming Languages  Concepts of Computer Programming Languages introduces students to the fundamental concepts of computer programming languages and provides them with the tools necessary to evaluate contemporary and future languages. An in-depth discussion of programming language structures, such as syntax and lexical and syntactic analysis, also prepares readers to study compiler design. ', 0),
(43, 47, 17, '9780134190440', 'The Go Programming Language', 400, 1, 2015, 'Programski Jezici', 'The Go Programming Language is the authoritative resource for any programmer who wants to learn Go. It shows how to write clear and idiomatic Go to solve real-world problems. The book does not assume prior knowledge of Go nor experience with any specific language, so you`ll find it accessible whether you`re most comfortable with JavaScript, Ruby, Python, Java, or C++.', 0),
(44, 48, 17, '9780133591620', 'Modern Operating Systems', 1136, 4, 2014, 'Operativni Sistemi', 'Modern Operating Systems, Fourth Edition, is intended for introductory courses in Operating Systems in Computer Science, Computer Engineering, and Electrical Engineering programs. It also serves as a useful reference for OS professionals. ', 0),
(45, 49, 11, '9781593273897', 'The Linux Command Line: A Complete Introduction', 480, 1, 2012, 'Operativni Sistemi', 'You`ve experienced the shiny, point-and-click surface of your Linux computer-now dive below and explore its depths with the power of the command line. The Linux Command Line takes you from your very first terminal keystrokes to writing full programs in Bash, the most popular Linux shell. ', 3),
(46, 50, 11, '9781593275679', 'How Linux Works', 392, 2, 2014, 'Operativni Sistemi', 'Unlike some operating systems, Linux doesn`t try to hide the important bits from you-it gives you full control of your computer. But to truly master Linux, you need to understand its internals, like how the system boots, how networking works, and what the kernel actually does. In this completely revised second edition of the perennial best seller How Linux Works, author Brian Ward makes the concepts behind Linux internals accessible.', 0),
(47, 51, 18, '9780131480056', 'UNIX and Linux System Administration Handbook', 1344, 4, 2010, 'Operativni Sistemi', 'This book approaches system administration in a practical way and is an invaluable reference for both new administrators and experienced professionals. It details best practices for every facet of system administration, including storage management, network design and administration, email, web hosting, scripting, software configuration management...', 0),
(48, 52, 2, '9780596100292', 'Unix in a Nutshell', 904, 4, 2005, 'Operativni Sistemi', 'As an open operating system, Unix can be improved on by anyone and everyone: individuals, companies, universities, and more. As a result, the very nature of Unix has been altered over the years by numerous extensions formulated in an assortment of versions. Today, Unix encompasses everything from Sun`s Solaris to Apple`s Mac OS X and more varieties of Linux than you can easily name.', 0),
(49, 53, 2, '9780130465535', 'UNIX for Programmers and Users', 687, 3, 2003, 'Operativni Sistemi', 'For an introductory course on UNIX. UNIX for Programmers and Users, Third Edition follows in the tradition of previous editions to provide students with complete, up-to-date coverage of UNIX. In this new edition they will find information on basic concepts, popular utilities, shells, networking, systems programming, internals, system administration, and much more.', 0),
(50, 54, 2, '9781491947173', 'Windows 10: The Missing Manual', 690, 1, 2015, 'Operativni Sistemi', 'With Windows 8, Microsoft completely reimagined the graphical user interface for its operating system, which now runs on both desktop PCs and tablets, but the overhaul was not without hitches and its dueling UIs (one designed for touch, the other for keyboards and mice) created significant confusion for users.', 0),
(51, 55, 9, '9780735697966', 'Windows 10 Inside Out', 900, 1, 2015, 'Operativni Sistemi', 'Dive into Windows 10-and really put your Windows expertise to work. Focusing on the most powerful and innovative features of Windows 10, this supremely organized reference packs hundreds of timesaving solutions, tips, and workarounds. From the new Microsoft Edge browser to the personal assistant Cortana, from security to the enhanced Start menu, discover how the experts tackle essential Windows 10 tasks.', 0),
(52, 56, 19, '9780134390734', 'iOS Programming', 416, 5, 2015, 'Operativni Sistemi', 'iOS Programming: The Big Nerd Ranch Guide leads you through the essential concepts, tools, and techniques for developing iOS applications. After completing this book, you will have the know-how and the confidence you need to tackle iOS projects of your own. Based on Big Nerd Ranch`s popular iOS Bootcamp course and its well-tested materials and methodology, this bestselling guide teaches iOS concepts and coding in tandem.', 0),
(53, 54, 2, '9780596806392', 'Windows 7: The Missing Manual', 908, 1, 2010, 'Operativni Sistemi', 'In early reviews, geeks raved about Windows 7. But if you`re an ordinary mortal, learning what this new system is all about will be challenging. Fear not: David Pogue`s Windows 7: The Missing Manual comes to the rescue. Like its predecessors, this book illuminates its subject with reader-friendly insight, plenty of wit, and hardnosed objectivity for beginners as well as veteran PC users.', 0),
(54, 55, 9, '9780735626652', 'Windows 7 Inside Out', 1056, 1, 2009, 'Operativni Sistemi', 'You`re beyond the basics, so now dive in and really put your PC to work! This supremely organized reference is packed with hundreds of timesaving solutions, troubleshooting tips, and workarounds. It`s all muscle and no fluff. Discover how the experts tackle Windows 7-and challenge yourself to new levels of mastery! ', 0),
(55, 57, 9, '9781118826232', 'Teach Yourself VISUALLY Windows 8.1', 352, 1, 2013, 'Operativni Sistemi', 'A practical guide for visual learners eager to get started with Windows 8.1 If you learn more quickly when you can see how things are done, this Visual guide is the easiest way to get up and running on Windows 8.1. It covers more than 150 essential Windows tasks, using full-color screen shots and step-by-step instructions to show you just what to do. Learn your way around the interface and how to install programs...', 0),
(56, 58, 19, '9780134171456', 'Android Programming', 600, 2, 2015, 'Mobilne Aplikacije', 'Based on Big Nerd Ranch`s popular Android Bootcamp course, this guide will lead you through the wilderness using hands-on example apps combined with clear explanations of key concepts and APIs. This book focuses on practical techniques for developing apps compatible with Android 4.1 (Jelly Bean) and up, including coverage of Lollipop and material design.', 0),
(57, 59, 13, '9781785883262', 'Android Programming for Beginners', 698, 1, 2015, 'Mobilne Aplikacije', 'Are you trying to start a career in programming, but haven`t found the right way in? Do you have a great idea for an app, but don`t know how to make it a reality? Or maybe you`re just frustrated that `to learn Android, you must know java.` If so, Android Programming for Beginners is for you. You don`t need any programming experience to follow along with this book, just a computer and a sense of adventure.', 0),
(58, 60, 21, '9781908689269', 'The Beginner`s Guide to Android Game Development', 438, 1, 2014, 'Mobilne Aplikacije', 'Android Game Development Made Easy. If you`ve always wanted to make Android games but didn`t know where to start, this book is for you. Whether you are an absolute beginner with no programming experience or an experienced Java developer wanting to get started with game development, this comprehensive book will help you accomplish your goals and teach you how to build your own games from scratch-no game engines needed.', 0),
(59, 61, 10, '9781118394151', 'Android Design Patterns', 456, 1, 2013, 'Mobilne Aplikacije', 'With Android 4, Google brings the full power of its Android OS to both smartphone and tablet computing. Designing effective user interfaces that work on multiple Android devices is extremely challenging. This book provides more than 75 patterns that you can use to create versatile user interfaces for both smartphones and tablets, saving countless hours of development time.', 0),
(60, 62, 10, '9780134191409', 'Android User Interface Design', 448, 2, 2015, 'Mobilne Aplikacije', 's Android development has matured and grown increasingly competitive, developers have recognized the crucial importance of good design. With Material Design, Google introduced its most radical visual changes ever, and made effective design even more essential. Android 6 and the design support library continue to push mobile design forward.', 0),
(61, 63, 14, '9781430233008', 'The Business of iPhone and iPad App Development', 480, 2, 2011, 'Mobilne Aplikacije', 'The phenomenal success of the iPhone, iPad and the iPod touch has ushered in a `gold rush` for developers, but with well over 300,000 apps in the highly competitive App Store, it has become increasingly difficult for new apps to stand out in the crowd. Achieving consumer awareness and sales longevity for your iOS app requires a lot of organization and some strategic planning.', 0),
(62, 64, 2, '9781449381653', 'Tapworthy: Designing Great iPhone Apps', 322, 1, 2010, 'Mobilne Aplikacije', 'So you`ve got an idea for an iPhone app - along with everyone else on the planet. Set your app apart with elegant design, efficient usability, and a healthy dose of personality. This accessible, well-written guide shows you how to design exceptional user experiences for the iPhone and iPod Touch through practical principles and a rich collection of visual examples.', 0),
(63, 65, 2, '9781449316570', 'Head First iPhone and iPad Development', 368, 3, 2014, 'Mobilne Aplikacije', 'Whether you`re a seasoned Mac developer who wants to jump into the App store, or someone with strong object-oriented programming skills but no Mac experience, this book is a complete learning experience for creating eye-catching, top-selling iPhone and iPad applications.', 0),
(64, 66, 11, '9781593276010', 'iOS Application Security', 296, 1, 2016, 'Mobilne Aplikacije', 'Eliminating security holes in iOS apps is critical for any developer who wants to protect their users from the bad guys. In iOS Application Security, mobile security expert David Thiel reveals common iOS coding mistakes that create serious security problems and shows you how to find and fix them. After a crash course on iOS application structure and Objective-C design patterns, you`ll move on to spotting bad code and plugging the holes.', 0),
(65, 67, 13, '9781785886195', 'Android Application Development Cookbook', 428, 2, 2016, 'Mobilne Aplikacije', 'If you are new to Android development and want to take a hands-on approach to learning the framework, or if you are an experienced developer in need of clear working code to solve the many challenges in Android development, you can benefit from this book. Either way, this is a resource you''ll want to keep at your desk for a quick reference to solve new problems as you tackle more challenging projects.', 0),
(66, 68, 7, '9781519722089', 'Android Studio Development Essentials', 710, 1, 2015, 'Mobilne Aplikacije', 'Fully updated for Android 6, the goal of this book is to teach the skills necessary to develop Android based applications using the Android Studio Integrated Development Environment (IDE) and the Android 6 Software Development Kit (SDK).  Beginning with the basics, this book provides an outline of the steps necessary to set up an Android development and testing environment.', 0),
(67, 69, 16, '9781118705599', 'Beginning Android Programming with Android Studio', 456, 4, 2016, 'Mobilne Aplikacije', 'A hands-on introduction to the latest release of the Android OS and the easiest Android tools for developers As the dominant mobile platform today, the Android OS is a powerful and flexible platform for mobile device. The new Android 7 release (New York Cheesecake) boasts significant new features and enhancements for both smartphone and tablet applications.', 1);

-- --------------------------------------------------------

--
-- Table structure for table `KORISNIK`
--

CREATE TABLE IF NOT EXISTS `KORISNIK` (
  `KORISNIK_ID` int(11) NOT NULL AUTO_INCREMENT,
  `KORISNIK_IME` varchar(40) COLLATE utf8_unicode_ci NOT NULL,
  `KORISNIK_PREZIME` varchar(40) COLLATE utf8_unicode_ci NOT NULL,
  `KORISNIK_USERNAME` varchar(40) COLLATE utf8_unicode_ci NOT NULL,
  `KORISNIK_PASSWORD` varchar(150) COLLATE utf8_unicode_ci NOT NULL,
  `KORISNIK_ROLA` varchar(5) COLLATE utf8_unicode_ci DEFAULT 'user',
  `KORISNIK_TOKEN` varchar(128) COLLATE utf8_unicode_ci DEFAULT NULL,
  PRIMARY KEY (`KORISNIK_ID`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci AUTO_INCREMENT=15 ;

--
-- Dumping data for table `KORISNIK`
--

INSERT INTO `KORISNIK` (`KORISNIK_ID`, `KORISNIK_IME`, `KORISNIK_PREZIME`, `KORISNIK_USERNAME`, `KORISNIK_PASSWORD`, `KORISNIK_ROLA`, `KORISNIK_TOKEN`) VALUES
(1, 'Petar', 'Petrovic', 'petarp', 'e10adc3949ba59abbe56e057f20f883e', 'admin', '7a48bdd27dafbc8766f7c19902ff785c9902365f'),
(2, 'Jovan', 'Jovanic', 'jovanj', 'e10adc3949ba59abbe56e057f20f883e', 'user', NULL),
(4, 'Stojan', 'Stojanovic', 'stojans', 'e10adc3949ba59abbe56e057f20f883e', 'user', NULL),
(5, 'Stevan', 'Stevanovic', 'stevans', 'e10adc3949ba59abbe56e057f20f883e', 'user', NULL),
(6, 'Dragan', 'Draganic', 'dragand', 'e10adc3949ba59abbe56e057f20f883e', 'user', '7978b3ec352e08c1fb80a2522f5f00be0f14701b'),
(7, 'Marko', 'Markovic', 'markom', 'e10adc3949ba59abbe56e057f20f883e', 'user', '78a5f549c5463eeffec7d764d66b435b3101643c'),
(8, 'Janko', 'Jankovic', 'jankoj', 'e10adc3949ba59abbe56e057f20f883e', 'user', NULL),
(9, 'Ana', 'Anic', 'anaa', 'e10adc3949ba59abbe56e057f20f883e', 'user', NULL),
(10, 'Jovana', 'Jovanic', 'jovanaj', 'e10adc3949ba59abbe56e057f20f883e', 'user', NULL),
(11, 'Marija', 'Marijanovic', 'marijam', 'e10adc3949ba59abbe56e057f20f883e', 'user', NULL),
(13, 'Darko', 'Darkovic', 'darkod', 'e10adc3949ba59abbe56e057f20f883e', 'user', NULL),
(14, 'Ivana', 'Ivanic', 'ivanai', 'e10adc3949ba59abbe56e057f20f883e', 'user', NULL);

-- --------------------------------------------------------

--
-- Table structure for table `PISAC`
--

CREATE TABLE IF NOT EXISTS `PISAC` (
  `PISAC_ID` int(11) NOT NULL AUTO_INCREMENT,
  `PISAC_IME` varchar(40) COLLATE utf8_unicode_ci DEFAULT NULL,
  `PISAC_PREZIME` varchar(40) COLLATE utf8_unicode_ci DEFAULT NULL,
  `PISAC_GODINA_RODJENJA` int(11) DEFAULT NULL,
  `PISAC_BR_PREGLEDA` int(11) DEFAULT '0',
  `PISAC_DRZAVA` varchar(40) COLLATE utf8_unicode_ci DEFAULT NULL,
  PRIMARY KEY (`PISAC_ID`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci AUTO_INCREMENT=71 ;

--
-- Dumping data for table `PISAC`
--

INSERT INTO `PISAC` (`PISAC_ID`, `PISAC_IME`, `PISAC_PREZIME`, `PISAC_GODINA_RODJENJA`, `PISAC_BR_PREGLEDA`, `PISAC_DRZAVA`) VALUES
(10, 'Michael', 'Hernandez', 1969, 25, 'USA'),
(11, 'John', 'Viescas', 1964, 0, 'USA'),
(12, 'Anthony', 'Molinaro', 1972, 0, 'USA'),
(13, 'Chris', 'Fehily', 1977, 0, 'USA'),
(14, 'Larry', 'Rockoff', 1975, 1, 'USA'),
(15, 'Andy', 'Oppel', 1968, 1, 'USA'),
(16, 'Fidel', 'Captain', 1976, 1, 'USA'),
(17, 'Andrew', 'Johansen', 1984, 0, 'USA'),
(18, 'ClydeBank', 'Technology', 1988, 1, 'USA'),
(21, 'George', 'Reese', 1969, 0, 'USA'),
(22, 'Peter', 'Zaitsev', 1965, 6, 'Russia'),
(23, 'Joel', 'Murach', 1966, 1, 'USA'),
(24, 'Semmy', 'Purewal', 1964, 0, 'USA'),
(25, 'Robin', 'Nixon', 1970, 0, 'USA'),
(26, 'Alan', 'Forbes', 1971, 1, 'USA'),
(27, 'Mark', 'Myers', 1968, 0, 'USA'),
(28, 'Dino', 'Esposito', 1967, 0, 'Italia'),
(29, 'Jon', 'Duckett', 1962, 1, 'UK'),
(30, 'Marijn', 'Haverbeke', 1973, 5, 'USA'),
(31, 'Douglas', 'Crockford', 1970, 1, 'USA'),
(32, 'Jim', 'Wilson', 1969, 0, 'USA'),
(33, 'Istvan', 'Novak', 1965, 0, 'USA'),
(34, 'Matt', 'Frisbie', 1969, 1, 'USA'),
(35, 'Adam', 'Freeman', 1975, 0, 'USA'),
(36, 'Gayle', 'Laakmann McDowell', 1977, 0, 'USA'),
(37, 'Herbert', 'Schildt', 1964, 0, 'USA'),
(38, 'Kathy', 'Sierra', 1972, 0, 'USA'),
(39, 'Brett', 'McLaughlin', 1975, 0, 'USA'),
(40, 'Erich', 'Gamma', 1974, 0, 'USA'),
(41, 'Scott', 'Meyers', 1970, 0, 'USA'),
(42, 'John', 'Sharp', 1976, 0, 'USA'),
(43, 'Bruce', 'Johnson', 1971, 0, 'USA'),
(44, 'Mark', 'Michaelis', 1968, 0, 'USA'),
(45, 'Bjarne', 'Stroustrup', 1965, 4, 'Sweden'),
(46, 'Robert', 'Sebesta', 1966, 0, 'USA'),
(47, 'Alan', 'Donovan', 1965, 0, 'USA'),
(48, 'Andrew', 'Tanenbaum', 1969, 0, 'USA'),
(49, 'William', 'Shotts', 1972, 3, 'USA'),
(50, 'Brian', 'Ward', 1970, 0, 'USA'),
(51, 'Evi', 'Nemeth', 1968, 0, 'USA'),
(52, 'Arnold', 'Robbins', 1964, 0, 'USA'),
(53, 'Graham', 'Glass', 1970, 0, 'USA'),
(54, 'David', 'Pogue', 1971, 0, 'UK'),
(55, 'Ed', 'Bott', 1973, 0, 'UK'),
(56, 'Christian', 'Keur', 1975, 0, 'UK'),
(57, 'Paul', 'McFedries', 1969, 0, 'UK'),
(58, 'Bill', 'Phillips', 1970, 0, 'USA'),
(59, 'John', 'Horton', 1968, 0, 'USA'),
(60, 'James', 'Cho', 1972, 0, 'USA'),
(61, 'Greg', 'Nudelman', 1974, 0, 'USA'),
(62, 'Ian', 'Clifton', 1973, 0, 'UK'),
(63, 'Dave', 'Wooldridge', 1978, 0, 'UK'),
(64, 'Josh', 'Clark', 1972, 0, 'USA'),
(65, 'Dan', 'Pilone', 1967, 0, 'USA'),
(66, 'David', 'Thiel', 1967, 0, 'USA'),
(67, 'Rick', 'Boyer', 1969, 0, 'USA'),
(68, 'Neil', 'Smyth', 1971, 0, 'USA'),
(69, 'Jerome', 'DiMarzio', 1973, 1, 'USA'),
(70, 'Vadim', 'Tkachenko', 1969, 0, 'Russia');

--
-- Constraints for dumped tables
--

--
-- Constraints for table `KNJIGA`
--
ALTER TABLE `KNJIGA`
  ADD CONSTRAINT `FK_IZDAVAC_KNJIGA` FOREIGN KEY (`IZDAVAC_ID`) REFERENCES `IZDAVAC` (`IZDAVAC_ID`),
  ADD CONSTRAINT `FK_PISAC_KNJIGA` FOREIGN KEY (`PISAC_ID`) REFERENCES `PISAC` (`PISAC_ID`);

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
