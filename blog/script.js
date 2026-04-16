/* ========================================
   MODERN BLOG WEBSITE - JAVASCRIPT
   ======================================== */

// Sample Blog Posts Data
const blogPosts = [
    {
        id: 1,
        title: "The Future of Web Development",
        excerpt: "Explore the latest trends and technologies shaping the web development landscape.",
        category: "technology",
        author: "Sarah Anderson",
        date: "March 15, 2026",
        image: "https://picsum.photos/seed/web-development-future/800/500",
        content: "Web development is evolving at an unprecedented pace with AI, edge computing, WebAssembly, advanced frameworks, and security-first approaches transforming the industry. Learn about the technologies shaping the future of web development and how they impact modern applications."
    },
    {
        id: 2,
        title: "Mastering Remote Work",
        excerpt: "Tips and tricks for staying productive while working from home in 2026.",
        category: "lifestyle",
        author: "Michael Chen",
        date: "March 12, 2026",
        image: "https://picsum.photos/seed/remote-work/800/500",
        content: "Remote work has become the new normal for many professionals. This comprehensive guide covers productivity tips, setting up an ergonomic workspace, managing distractions, maintaining work-life balance, connecting with colleagues virtually, and building a sustainable remote work routine that keeps you motivated and focused."
    },
    {
        id: 3,
        title: "Digital Marketing Strategies",
        excerpt: "Unlock the secrets to successful digital marketing campaigns in the modern era.",
        category: "business",
        author: "Emma Watson",
        date: "March 10, 2026",
        image: "https://picsum.photos/seed/digital-marketing/800/500",
        content: "Discover proven digital marketing strategies including content marketing, social media engagement, email campaigns, SEO optimization, paid advertising, influencer partnerships, and data analytics. Learn how to build an integrated marketing approach that drives real results and measurable ROI for your business."
    },
    {
        id: 4,
        title: "Travel Guide: European Adventure",
        excerpt: "Discover the hidden gems and must-visit destinations across Europe.",
        category: "travel",
        author: "John Mitchell",
        date: "March 8, 2026",
        image: "https://picsum.photos/seed/europe-travel/800/500",
        content: "Europe offers incredible diversity with historic cities, stunning landscapes, and rich cultural experiences. This comprehensive travel guide covers top destinations like Paris, Rome, Barcelona, Amsterdam, and Prague, including travel tips, best times to visit, budget recommendations, local cuisines, and hidden gems off the beaten path."
    },
    {
        id: 5,
        title: "AI and Machine Learning Basics",
        excerpt: "A beginner's guide to understanding artificial intelligence and machine learning.",
        category: "technology",
        author: "Dr. Lisa Park",
        date: "March 5, 2026",
        image: "https://picsum.photos/seed/ai-machine-learning/800/500",
        content: "Demystify artificial intelligence and machine learning with this beginner-friendly guide. Learn fundamental concepts including supervised learning, unsupervised learning, neural networks, deep learning, natural language processing, and computer vision. Understand practical applications and how AI is transforming industries worldwide."
    },
    {
        id: 6,
        title: "Sustainable Living Tips",
        excerpt: "Learn practical ways to live a more sustainable and eco-friendly lifestyle.",
        category: "lifestyle",
        author: "Green Life Advocate",
        date: "March 1, 2026",
        image: "https://picsum.photos/seed/sustainable-living/800/500",
        content: "Make a positive environmental impact through sustainable living practices. Discover practical tips for reducing waste, conserving energy, sustainable food choices, eco-friendly shopping, water conservation, reducing carbon footprint, supporting green businesses, and making conscious consumer choices that benefit the planet."
    },
    {
        id: 7,
        title: "Startup Funding Guide",
        excerpt: "Everything you need to know about securing funding for your startup.",
        category: "business",
        author: "Alex Turner",
        date: "February 28, 2026",
        image: "https://picsum.photos/seed/startup-funding/800/500",
        content: "Navigate the startup funding landscape with this comprehensive guide covering seed funding, angel investors, venture capital, crowdfunding, grants, and loans. Learn about pitch decks, valuation, due diligence, negotiation strategies, and post-funding steps to successfully raise capital for your venture."
    },
    {
        id: 8,
        title: "Best Beaches Around the World",
        excerpt: "Discover the world's most beautiful and pristine beaches for your next vacation.",
        category: "travel",
        author: "Adventure Seeker",
        date: "February 25, 2026",
        image: "https://picsum.photos/seed/world-beaches/800/500",
        content: "Explore the world's most stunning beaches offering crystal-clear waters, white sand, vibrant coral reefs, and unforgettable experiences. From tropical paradises in the Maldives and Bora Bora to unique beaches in Santorini and Iceland, discover hidden coastal gems perfect for relaxation, adventure, and creating lifelong memories."
    },
    {
        id: 9,
        title: "Cryptocurrency and Blockchain Guide",
        excerpt: "Understanding the fundamentals of blockchain technology and digital currencies.",
        category: "technology",
        author: "David Kumar",
        date: "February 20, 2026",
        image: "https://picsum.photos/seed/crypto-blockchain/800/500",
        content: "Explore the world of cryptocurrency and blockchain technology. Learn about Bitcoin, Ethereum, smart contracts, and decentralized finance. Understand how blockchain works, its applications beyond crypto, risks and security considerations, and the future of digital payments."
    },
    {
        id: 10,
        title: "Healthy Eating for Busy Professionals",
        excerpt: "Quick and nutritious meal ideas for your hectic lifestyle.",
        category: "lifestyle",
        author: "Jessica Moore",
        date: "February 18, 2026",
        image: "https://picsum.photos/seed/healthy-eating/800/500",
        content: "Discover how to maintain a healthy diet despite a busy schedule. Meal prep strategies, quick recipes, nutrition tips, eating out guidelines, and supplements for busy professionals. Learn to balance health and productivity without sacrificing taste or convenience."
    },
    {
        id: 11,
        title: "E-Commerce Platform Best Practices",
        excerpt: "Build a successful online store with proven strategies and tools.",
        category: "business",
        author: "Rachel Green",
        date: "February 15, 2026",
        image: "https://picsum.photos/seed/ecommerce-store/800/500",
        content: "Master the fundamentals of e-commerce success. Customer experience optimization, payment gateway integration, inventory management, marketing strategies, analytics, and scaling your online business. Real examples from successful stores and actionable steps for your journey."
    },
    {
        id: 12,
        title: "Adventure Travel: Off the Beaten Path",
        excerpt: "Explore unique and less-known destinations for true adventurers.",
        category: "travel",
        author: "Marcus Wilson",
        date: "February 10, 2026",
        image: "https://picsum.photos/seed/adventure-travel/800/500",
        content: "Go beyond typical tourist destinations. Discover hidden gems in South America, Southeast Asia, and Africa. Adventure travel tips, safety considerations, budget travel hacks, and authentic cultural experiences. Real traveler stories and insider recommendations for unforgettable adventures."
    },
    {
        id: 13,
        title: "Cloud Computing Essentials",
        excerpt: "A comprehensive guide to cloud platforms and services.",
        category: "technology",
        author: "Tom Rodriguez",
        date: "February 5, 2026",
        image: "https://picsum.photos/seed/cloud-computing/800/500",
        content: "Understand cloud computing fundamentals. AWS, Google Cloud, and Azure comparison. Scalability, security, cost optimization, and migration strategies. Learn how enterprises are transforming with cloud technology and practical implementation steps for your organization."
    },
    {
        id: 14,
        title: "Work-Life Balance Strategies",
        excerpt: "Achieve harmony between career ambitions and personal life.",
        category: "lifestyle",
        author: "Patricia Lee",
        date: "January 30, 2026",
        image: "https://picsum.photos/seed/work-life-balance/800/500",
        content: "Master the art of work-life balance. Time management techniques, boundary setting, stress management, mindfulness practices, and self-care routines. Discover how successful professionals maintain mental health while achieving their career goals."
    },
    {
        id: 15,
        title: "Personal Finance and Investment Basics",
        excerpt: "Build wealth with smart financial decisions and investment strategies.",
        category: "business",
        author: "Catherine Hayes",
        date: "January 25, 2026",
        image: "https://picsum.photos/seed/personal-finance/800/500",
        content: "Master personal finance. Budgeting, saving strategies, investment fundamentals, stock market basics, and wealth building. Learn from financial experts and avoid common mistakes. Create a roadmap to financial independence and long-term wealth."
    },
    {
        id: 16,
        title: "Southeast Asia Travel Bucket List",
        excerpt: "Must-visit destinations and experiences in Southeast Asia.",
        category: "travel",
        author: "Natalie Brooks",
        date: "January 20, 2026",
        image: "https://picsum.photos/seed/southeast-asia-travel/800/500",
        content: "Comprehensive Southeast Asia travel guide. Thailand, Vietnam, Cambodia, Indonesia, and Philippines. Cultural experiences, food recommendations, budget tips, and best travel seasons. Connect with local communities and create unforgettable memories."
    }
];

// Sample Testimonials Data
const testimonials = [
    {
        name: "Jessica Morgan",
        title: "Content Creator",
        rating: 5,
        review: "ModernBlog has completely transformed how I share my content! The platform is intuitive, beautiful, and my articles reach more people than ever before."
    },
    {
        name: "James Wilson",
        title: "Tech Entrepreneur",
        rating: 5,
        review: "As someone who blogs regularly, this platform stands out. The design is modern, and the performance is lightning-fast. Highly recommended!"
    },
    {
        name: "Amanda Rodriguez",
        title: "Travel Blogger",
        rating: 5,
        review: "I love the responsive design and beautiful typography. My travel stories look amazing on this platform. Best blogging decision I've made!"
    },
    {
        name: "David Chen",
        title: "Business Consultant",
        rating: 5,
        review: "Professional, clean, and effective. ModernBlog is the perfect platform for business blogs. My engagement has increased significantly!"
    }
];

// Initialize the page
document.addEventListener('DOMContentLoaded', function() {
    renderBlogPosts();
    renderTestimonials();
    setupEventListeners();
    setupMobileMenu();
    setupImageLoading();
});

/* ========================================
   RENDER BLOG POSTS
   ======================================== */

function renderBlogPosts(filter = 'all') {
    const postsGrid = document.getElementById('postsGrid');
    postsGrid.innerHTML = '';

    const filteredPosts = filter === 'all' 
        ? blogPosts 
        : blogPosts.filter(post => post.category === filter);

    filteredPosts.forEach((post, index) => {
        const postCard = createPostCard(post);
        postsGrid.appendChild(postCard);
        
        // Add animation delay
        setTimeout(() => {
            postCard.style.animation = 'fadeInUp 0.6s ease-out forwards';
        }, index * 100);
    });
}

function createPostCard(post) {
    const card = document.createElement('div');
    card.className = 'post-card';
    card.innerHTML = `
        <div class="post-image">
            <img src="${post.image}" alt="${post.title}" loading="lazy" decoding="async" data-lazy-image>
            <span class="post-category">${post.category.toUpperCase()}</span>
        </div>
        <div class="post-content">
            <h3>${post.title}</h3>
            <p class="post-excerpt">${post.excerpt}</p>
            <div class="post-meta">
                <span class="post-author">${post.author}</span>
                <span>${post.date}</span>
            </div>
        </div>
    `;

    const postImage = card.querySelector('img[data-lazy-image]');
    if (postImage) {
        bindImageLoadingState(postImage);
    }
    
    // Add click event to open blog detail
    card.addEventListener('click', () => {
        openBlogDetail(post);
    });
    
    return card;
}

function setupImageLoading() {
    const images = document.querySelectorAll('img[data-lazy-image]');

    images.forEach(bindImageLoadingState);
}

function bindImageLoadingState(img) {
    const frame = img.closest('.featured-image, .post-image, .about-image, .blog-detail-image');

    img.classList.remove('is-loaded');
    if (frame) {
        frame.classList.remove('is-loaded');
    }

    const markLoaded = () => {
        img.classList.add('is-loaded');
        if (frame) {
            frame.classList.add('is-loaded');
        }
    };

    if (img.complete) {
        markLoaded();
        return;
    }

    img.addEventListener('load', markLoaded, { once: true });
    img.addEventListener('error', markLoaded, { once: true });
}

/* ========================================
   RENDER TESTIMONIALS
   ======================================== */

function renderTestimonials() {
    const testimonialsList = document.getElementById('testimonialsList');
    testimonialsList.innerHTML = '';

    testimonials.forEach((testimonial, index) => {
        const stars = '★'.repeat(testimonial.rating) + '☆'.repeat(5 - testimonial.rating);
        const card = document.createElement('div');
        card.className = 'testimonial-card';
        card.innerHTML = `
            <div class="testimonial-stars">${stars}</div>
            <p class="testimonial-text">"${testimonial.review}"</p>
            <div class="testimonial-author">
                <div class="author-avatar">${testimonial.name.charAt(0)}</div>
                <div class="author-info">
                    <h4>${testimonial.name}</h4>
                    <p>${testimonial.title}</p>
                </div>
            </div>
        `;
        testimonialsList.appendChild(card);
        
        // Add animation delay
        setTimeout(() => {
            card.style.animation = 'fadeInUp 0.6s ease-out forwards';
        }, index * 100);
    });
}

/* ========================================
   CATEGORY FILTERING
   ======================================== */

function setupCategoryFiltering() {
    const categoryBtns = document.querySelectorAll('.category-btn');
    
    categoryBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            // Remove active class from all buttons
            categoryBtns.forEach(b => b.classList.remove('active'));
            
            // Add active class to clicked button
            this.classList.add('active');
            
            // Get category and filter posts
            const category = this.dataset.category;
            renderBlogPosts(category);
        });
    });
}

/* ========================================
   SEARCH FUNCTIONALITY
   ======================================== */

function setupSearchFunctionality() {
    const searchInput = document.getElementById('searchInput');
    const searchBtn = document.querySelector('.search-btn');

    function performSearch() {
        const searchTerm = searchInput.value.toLowerCase().trim();
        
        if (searchTerm === '') {
            renderBlogPosts();
            return;
        }

        const postsGrid = document.getElementById('postsGrid');
        postsGrid.innerHTML = '';

        const searchResults = blogPosts.filter(post => 
            post.title.toLowerCase().includes(searchTerm) ||
            post.excerpt.toLowerCase().includes(searchTerm) ||
            post.author.toLowerCase().includes(searchTerm)
        );

        if (searchResults.length === 0) {
            postsGrid.innerHTML = '<p style="grid-column: 1/-1; text-align: center; padding: 2rem;">No posts found matching your search.</p>';
            return;
        }

        searchResults.forEach((post, index) => {
            const postCard = createPostCard(post);
            postsGrid.appendChild(postCard);
            
            setTimeout(() => {
                postCard.style.animation = 'fadeInUp 0.6s ease-out forwards';
            }, index * 100);
        });
    }

    searchInput.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            performSearch();
        }
    });

    searchBtn.addEventListener('click', performSearch);
}

/* ========================================
   REVIEW FORM VALIDATION AND SUBMISSION
   ======================================== */

function setupReviewForm() {
    const reviewForm = document.getElementById('reviewForm');
    const starRating = document.getElementById('starRating');
    const ratingInput = document.getElementById('ratingInput');
    const stars = starRating.querySelectorAll('.star');

    // Star rating functionality
    stars.forEach(star => {
        star.addEventListener('click', function() {
            const rating = this.dataset.value;
            ratingInput.value = rating;
            
            stars.forEach(s => s.classList.remove('active'));
            for (let i = 0; i < rating; i++) {
                stars[i].classList.add('active');
            }
        });

        star.addEventListener('mouseover', function() {
            const rating = this.dataset.value;
            stars.forEach(s => s.classList.remove('active'));
            for (let i = 0; i < rating; i++) {
                stars[i].classList.add('active');
            }
        });
    });

    starRating.addEventListener('mouseleave', function() {
        const currentRating = ratingInput.value;
        stars.forEach(s => s.classList.remove('active'));
        for (let i = 0; i < currentRating; i++) {
            stars[i].classList.add('active');
        }
    });

    // Form submission
    reviewForm.addEventListener('submit', function(e) {
        e.preventDefault();

        // Validate form
        if (!validateReviewForm()) {
            return;
        }

        // Get form data
        const formData = {
            name: document.getElementById('reviewName').value,
            email: document.getElementById('reviewEmail').value,
            rating: ratingInput.value,
            message: document.getElementById('reviewMessage').value
        };

        // Simulate form submission
        console.log('Review submitted:', formData);
        
        // Show success message
        showSuccessMessage('Thank you for your review! It has been submitted successfully.');
        
        // Reset form
        reviewForm.reset();
        ratingInput.value = '0';
        stars.forEach(s => s.classList.remove('active'));
    });
}

function validateReviewForm() {
    const name = document.getElementById('reviewName');
    const email = document.getElementById('reviewEmail');
    const rating = document.getElementById('ratingInput');
    const message = document.getElementById('reviewMessage');
    
    let isValid = true;

    // Name validation
    if (name.value.trim() === '') {
        showFieldError(name, 'Please enter your name');
        isValid = false;
    } else if (name.value.trim().length < 2) {
        showFieldError(name, 'Name must be at least 2 characters');
        isValid = false;
    } else {
        clearFieldError(name);
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (email.value.trim() === '') {
        showFieldError(email, 'Please enter your email');
        isValid = false;
    } else if (!emailRegex.test(email.value)) {
        showFieldError(email, 'Please enter a valid email address');
        isValid = false;
    } else {
        clearFieldError(email);
    }

    // Rating validation
    if (rating.value === '0' || rating.value === '') {
        const ratingGroup = document.querySelector('.star-rating').closest('.form-group');
        const errorMsg = ratingGroup.querySelector('.error-message');
        errorMsg.textContent = 'Please select a rating';
        isValid = false;
    } else {
        const ratingGroup = document.querySelector('.star-rating').closest('.form-group');
        const errorMsg = ratingGroup.querySelector('.error-message');
        errorMsg.textContent = '';
    }

    // Message validation
    if (message.value.trim() === '') {
        showFieldError(message, 'Please write your review');
        isValid = false;
    } else if (message.value.trim().length < 10) {
        showFieldError(message, 'Review must be at least 10 characters');
        isValid = false;
    } else {
        clearFieldError(message);
    }

    return isValid;
}

function showFieldError(field, message) {
    const errorMsg = field.closest('.form-group').querySelector('.error-message');
    errorMsg.textContent = message;
    field.style.borderColor = '#DC2626';
}

function clearFieldError(field) {
    const errorMsg = field.closest('.form-group').querySelector('.error-message');
    errorMsg.textContent = '';
    field.style.borderColor = '#D1D5DB';
}

function showSuccessMessage(message) {
    const formWrapper = document.querySelector('.form-wrapper');
    const successDiv = document.createElement('div');
    successDiv.className = 'success-message';
    successDiv.textContent = message;
    formWrapper.insertBefore(successDiv, formWrapper.firstChild);

    setTimeout(() => {
        successDiv.style.animation = 'fadeInUp 0.3s ease-out';
    }, 100);

    setTimeout(() => {
        successDiv.remove();
    }, 5000);
}

/* ========================================
   MOBILE MENU
   ======================================== */

function setupMobileMenu() {
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');
    const navLinks = document.querySelectorAll('.nav-menu a');

    hamburger.addEventListener('click', () => {
        navMenu.style.display = navMenu.style.display === 'flex' ? 'none' : 'flex';
        hamburger.style.animation = navMenu.style.display === 'flex' ? 'rotate 0.3s ease' : 'none';
    });

    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            navMenu.style.display = 'none';
        });
    });
}

/* ========================================
   SMOOTH SCROLL AND ANIMATIONS
   ======================================== */

function observeElements() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.animation = 'fadeInUp 0.6s ease-out forwards';
            }
        });
    }, {
        threshold: 0.1
    });

    document.querySelectorAll('.post-card, .testimonial-card').forEach(el => {
        observer.observe(el);
    });
}

/* ========================================
   BLOG DETAIL PAGE
   ======================================== */

function openBlogDetail(post) {
    // Store the blog post data in localStorage
    localStorage.setItem('selectedBlog', JSON.stringify(post));
    // Navigate to blog detail page
    window.location.href = 'blog-detail.html';
}

function updateMetaTag(name, content) {
    let metaTag = document.querySelector(`meta[name="${name}"]`);

    if (!metaTag) {
        metaTag = document.createElement('meta');
        metaTag.setAttribute('name', name);
        document.head.appendChild(metaTag);
    }

    metaTag.setAttribute('content', content);
}

function updateBlogMeta(blog) {
    const titleKeywords = blog.title
        .toLowerCase()
        .replace(/[^a-z0-9\s]/g, '')
        .split(/\s+/)
        .filter(Boolean);
    const keywordSet = new Set([
        blog.title.toLowerCase(),
        `${blog.category} blog`,
        `${blog.category} article`,
        `trending ${blog.category}`,
        'viral blog post',
        'modern blog',
        'expert insights',
        ...titleKeywords
    ]);

    updateMetaTag('description', `${blog.excerpt} Read expert insights on ${blog.title} at ModernBlog.`);
    updateMetaTag('keywords', Array.from(keywordSet).join(', '));
}

// Load blog detail content when on blog-detail page
function loadBlogDetail() {
    const selectedBlog = localStorage.getItem('selectedBlog');
    
    if (!selectedBlog) {
        // If no blog is selected, redirect back to home
        window.location.href = 'index.html#posts';
        return;
    }
    
    const blog = JSON.parse(selectedBlog);
    
    // Update page title
    document.title = `${blog.title} - ModernBlog`;
    updateBlogMeta(blog);
    
    // Update blog detail content
    const title = document.querySelector('.blog-detail-title');
    const meta = document.querySelector('.blog-detail-meta');
    const image = document.querySelector('.blog-detail-image img');
    const content = document.querySelector('.blog-detail-content');
    const authorName = document.querySelector('.author-info h4');
    const authorBio = document.querySelector('.author-info p');
    
    if (title) title.textContent = blog.title;
    
    if (meta) {
        meta.innerHTML = `
            <span>By <strong>${blog.author}</strong></span>
            <span>${blog.date}</span>
            <span>${Math.ceil(blog.content.split(' ').length / 200)} min read</span>
        `;
    }
    
    if (image) {
        bindImageLoadingState(image);
        image.src = blog.image;
        image.alt = blog.title;
    }
    
    if (authorName) authorName.textContent = blog.author;
    
    // Update content sections dynamically based on blog
    if (content) {
        let htmlContent = `
            <p>${blog.content}</p>
            
            <h2>Key Insights</h2>
            <p>This comprehensive guide explores the essential aspects of ${blog.title.toLowerCase()}. Whether you're a beginner looking to get started or an experienced professional seeking to deepen your knowledge, this article provides valuable insights and practical advice.</p>
        `;
        
        // Add category-specific content
        if (blog.category === 'technology') {
            htmlContent += `
                <h2>Technology Trends to Watch</h2>
                <p>The technology landscape continues to evolve rapidly. Staying updated with the latest developments is crucial for success. From cloud computing to artificial intelligence, blockchain to quantum computing, the opportunities are endless.</p>
                <ul>
                    <li>Emerging technologies transforming industries</li>
                    <li>Best practices for implementation</li>
                    <li>Future roadmap and predictions</li>
                    <li>Resources for continued learning</li>
                </ul>
                
                <h2>Getting Started</h2>
                <p>The best time to start exploring these technologies is now. Begin with foundational knowledge, practice with real projects, and gradually expand your expertise. Join communities, attend conferences, and network with other professionals in your field.</p>
            `;
        } else if (blog.category === 'lifestyle') {
            htmlContent += `
                <h2>Practical Implementation</h2>
                <p>Making changes to your lifestyle requires commitment and persistence. Start small with manageable goals, track your progress, and celebrate your achievements along the way. Remember that change doesn't happen overnight, but consistent effort yields remarkable results over time.</p>
                <ul>
                    <li>Set realistic and measurable goals</li>
                    <li>Create accountability systems</li>
                    <li>Track progress regularly</li>
                    <li>Adjust strategies as needed</li>
                </ul>
                
                <h2>Long-Term Success</h2>
                <p>Sustaining lifestyle changes requires building new habits and mindsets. Focus on the positive outcomes, surround yourself with supportive people, and regularly remind yourself of your motivation for making these changes.</p>
            `;
        } else if (blog.category === 'business') {
            htmlContent += `
                <h2>Strategic Implementation</h2>
                <p>Successful business initiatives require careful planning and execution. Develop a comprehensive strategy, allocate resources effectively, and measure results consistently. Learn from both successes and failures to continuously improve your approaches.</p>
                <ul>
                    <li>Define clear business objectives</li>
                    <li>Allocate resources strategically</li>
                    <li>Monitor key performance indicators</li>
                    <li>Adapt strategies based on market feedback</li>
                </ul>
                
                <h2>Success Metrics</h2>
                <p>Measure success through relevant KPIs that align with your business goals. Regular analysis and reporting help identify opportunities for optimization and growth in your business operations.</p>
            `;
        } else if (blog.category === 'travel') {
            htmlContent += `
                <h2>Travel Planning Tips</h2>
                <p>Successful travel experiences require thoughtful planning. Research destinations thoroughly, book accommodations in advance, and create flexible itineraries that allow for spontaneous discoveries. Always prioritize safety and respect for local cultures.</p>
                <ul>
                    <li>Research visa requirements and entry policies</li>
                    <li>Book accommodations and transportation early</li>
                    <li>Create detailed but flexible itineraries</li>
                    <li>Pack smart and travel light</li>
                    <li>Respect local customs and traditions</li>
                </ul>
                
                <h2>Travel Resources</h2>
                <p>Utilize travel guides, travel communities, and local recommendations to enhance your journey. Invest in travel insurance and maintain good documentation for a smooth and worry-free travel experience.</p>
            `;
        }
        
        htmlContent += `
            <h2>Conclusion</h2>
            <p>Whether you're exploring ${blog.title.toLowerCase()} for the first time or deepening your existing knowledge, remember that growth is a continuous journey. Stay curious, keep learning, and embrace new opportunities that come your way. Share your experiences and insights with others to create a supportive community.</p>
        `;
        
        content.innerHTML = htmlContent;
    }
}

/* ========================================
   EVENT LISTENERS SETUP
   ======================================== */

function setupEventListeners() {
    setupCategoryFiltering();
    setupSearchFunctionality();
    setupReviewForm();
    observeElements();
    setupContactForm();
}

/* ========================================
   CONTACT FORM
   ======================================== */

function setupContactForm() {
    const contactForm = document.querySelector('.contact-form');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form data
            const formData = new FormData(this);
            
            // Show success message
            alert('Thank you for your message! We will get back to you soon.');
            
            // Reset form
            this.reset();
        });
    }
}

/* ========================================
   SCROLL TO TOP FUNCTIONALITY
   ======================================== */

// Create a scroll to top button (optional enhancement)
window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 100) {
        navbar.style.boxShadow = '0 5px 20px rgba(0, 31, 77, 0.1)';
    } else {
        navbar.style.boxShadow = '0 2px 10px rgba(0, 31, 77, 0.05)';
    }
});

/* ========================================
   LOADING ANIMATION
   ======================================== */

// Add initial animation to page load
window.addEventListener('load', function() {
    // Fade in hero section
    const hero = document.querySelector('.hero');
    if (hero) {
        hero.style.animation = 'fadeInUp 0.8s ease-out';
    }
});
