// Left Sidebar HTML Generator
function generateLeftSidebar() {
    return `
        <aside class="sidebar-left">
            <div class="logo">
                <img src="logo.png" alt="NCMTHub Logo" class="logo-image">
                <p>Connect. Share. Thrive.</p>
            </div>
            
            <nav class="nav-menu">
                    <span class="icon">🏠</span> Home
                </a>
                <a href="explore.html" class="nav-item">
                    <span class="icon">🔍</span> Explore
                </a>
                <a href="notifications.html" class="nav-item">
                    <span class="icon">🔔</span> Notifications
                    <span class="badge">3</span>
                </a>
                <a href="reel.html" class="nav-item">
                    <span class="icon">📹</span> Reels
                </a>
                <a href="create.html" class="nav-item">
                    <span class="icon">🔥</span> Create Post
                </a>
                <a href="profile.html" class="nav-item">
                    <span class="icon">👤</span> Profile
                </a>
            </nav>
            
            <button class="btn-create-post">+ Create Post</button>
            
            <div class="user-profile">
                <img src="https://via.placeholder.com/40" alt="Profile">
                <div>
                    <h4>Alex Johnson</h4>
                    <p>@alexj</p>
                </div>
            </div>
        </aside>
    `;
}

// Right Sidebar HTML Generator
function generateRightSidebar() {
    return `
        <aside class="sidebar-right">
            <div class="search-box">
                <input type="text" placeholder="Search NCMTHub...">
            </div>

            <div class="trending-section">
                <h3>Trending on Campus</h3>
                <div class="trending-item">
                    <h4>#FinalsSeason</h4>
                    <p>2,345 posts</p>
                </div>
                <div class="trending-item">
                    <h4>#CampusEvents</h4>
                    <p>1,234 posts</p>
                </div>
                <div class="trending-item">
                    <h4>#StudyTips</h4>
                    <p>987 posts</p>
                </div>
                <div class="trending-item">
                    <h4>#CollegeLife</h4>
                    <p>876 posts</p>
                </div>
                <div class="trending-item">
                    <h4>#Graduation2024</h4>
                    <p>654 posts</p>
                </div>
            </div>

            <div class="people-section">
                <h3>People to Follow</h3>
                
                <div class="people-item">
                    <img src="https://via.placeholder.com/40" alt="Mike Torres">
                    <div class="people-info">
                        <h4>Mike Torres</h4>
                        <p>@mtorres</p>
                    </div>
                    <button class="btn-follow">Follow</button>
                </div>

                <div class="people-item">
                    <img src="https://via.placeholder.com/40" alt="Emma Williams">
                    <div class="people-info">
                        <h4>Emma Williams</h4>
                        <p>@emmaw</p>
                    </div>
                    <button class="btn-follow">Follow</button>
                </div>

                <div class="people-item">
                    <img src="https://via.placeholder.com/40" alt="James Park">
                    <div class="people-info">
                        <h4>James Park</h4>
                        <p>@jamesp</p>
                    </div>
                    <button class="btn-follow">Follow</button>
                </div>

                <div class="people-item">
                    <img src="https://via.placeholder.com/40" alt="Lisa Martinez">
                    <div class="people-info">
                        <h4>Lisa Martinez</h4>
                        <p>@lsam</p>
                    </div>
                    <button class="btn-follow">Follow</button>
                </div>

                <a href="#" class="show-more">Show more</a>
            </div>

            <div class="footer-links">
                <a href="#">Terms</a>
                <a href="#">Privacy</a>
                <a href="#">Help</a>
            </div>
        </aside>
    `;
}

// Generate Sidebars Wrapper
function generateAsiders() {
    return generateLeftSidebar() + generateRightSidebar();
}

// Footer Navigation HTML Generator
function generateFooterNav() {
    return `
        <nav class="footer-nav">
            <a href="index.html" class="nav-item active">
                <span class="icon">🏠</span>
            </a>
            <a href="reel.html" class="nav-item active">
                <span class="icon">📹</span>
            </a>
            <a href="create.html" class="nav-item active">
                <span class="icon">➕</span>
            </a>
            <a href="notifications.html" class="nav-item">
                <span class="icon">🔔</span>
                <span class="badge">3</span>
            </a>
            <a href="profile.html" class="nav-item">
                <span class="icon">👤</span>
            </a>
        </nav>
    `;
}



// Reel Container Generator
function generateReelContainer(reelData = {}) {
            
           ` <nav class="nav-menu">
                        <h3 class="username">${username}</h3>
                        <p class="user-caption">${caption}</p>
                        <p class="music-info">
                            <span class="music-icon">♪</span>
                            ${music}
                        </p>
                    </div>
                </div>
                <button class="follow-btn">Follow</button>
            </div>

            <!-- Engagement Metrics (Right Side) -->
            <div class="engagement-metrics">
                <div class="metric-item likes">
                    <svg class="metric-icon" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
                    </svg>
                    <span class="metric-count">${likes}</span>
                </div>

                <div class="metric-item comments">
                    <svg class="metric-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
                    </svg>
                    <span class="metric-count">${comments}</span>
                </div>

                <div class="metric-item share">
                    <svg class="metric-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <circle cx="18" cy="5" r="3"/>
                        <circle cx="6" cy="12" r="3"/>
                        <circle cx="18" cy="19" r="3"/>
                        <line x1="8.59" y1="13.51" x2="15.42" y2="17.49"/>
                        <line x1="15.41" y1="6.51" x2="8.59" y2="10.49"/>
                    </svg>
                    <span class="metric-label">Share</span>
                </div>

                <div class="metric-item bookmark">
                    <svg class="metric-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <path d="M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2z"/>
                        <polyline points="17 1 12 5 7 1"/>
                    </svg>
                </div>
            </div>
        </div>
    `;
}


// Profile Page Generator
function generateProfile(profileData = {}) {
    const {
        profileImage = 'https://via.placeholder.com/120/db2777/ffffff?text=JD',
        username = 'johndoe',
        fullName = 'John Doe',
        posts = '42',
        followers = '1.2K',
        following = '890',
        location = 'Stanford University \'26',
        bio = 'Computer Science major 💻 | Photography enthusiast 📷 | Coffee addict ☕',
        website = 'campusvibe.com/johndoe',
        stories = [
            { name: 'Travel', icon: '✈️' },
            { name: 'Campus', icon: '🏛️' },
            { name: 'Food', icon: '🍕' },
            { name: 'Study', icon: '📚' }
        ],
        posts_list = [
            'https://via.placeholder.com/250/87ceeb/ffffff?text=Beach',
            'https://via.placeholder.com/250/228b22/ffffff?text=Lake',
            'https://via.placeholder.com/250/ff69b4/ffffff?text=Pink',
            'https://via.placeholder.com/250/87ceeb/ffffff?text=Sky',
            'https://via.placeholder.com/250/9370db/ffffff?text=Purple',
            'https://via.placeholder.com/250/228b22/ffffff?text=Nature',
            'https://via.placeholder.com/250/c0c0c0/ffffff?text=Gray',
            'https://via.placeholder.com/250/ffd700/ffffff?text=Gold',
            'https://via.placeholder.com/250/ff6347/ffffff?text=Tomato'
        ]
    } = profileData;

    return 
        `<div class="profile-container">
            <!-- Profile Header -->
            <div class="profile-header">
                <div class="profile-top">
                    <img src="${profileImage}" alt="${username}" class="profile-image">
                    <div class="profile-stats">
                        <div class="stat-item">
                            <span class="stat-number">${posts}</span>
                            <span class="stat-label">Posts</span>
                        </div>
                        <div class="stat-item">
                            <span class="stat-number">${followers}</span>
                            <span class="stat-label">Followers</span>
                        </div>
                        <div class="stat-item">
                            <span class="stat-number">${following}</span>
                            <span class="stat-label">Following</span>
                        </div>
                    </div>
                    <button class="profile-settings">⚙️</button>
                </div>

                <!-- Profile Info -->
                <div class="profile-info">
                    <h1 class="profile-name">${fullName}</h1>
                    <p class="profile-location">📍 ${location}</p>
                    <p class="profile-bio">${bio}</p>
                    <a href="#" class="profile-website">${website}</a>
                </div>

                <!-- Action Buttons -->
                <div class="profile-actions">
                    <button class="btn-edit-profile">✏️ Edit Profile</button>
                    <button class="btn-share-profile">Share Profile</button>
                </div>
            </div>

            <!-- Story Highlights -->
            <div class="story-highlights">
                ${stories.map((story, index) => `
                    <div class="story-item">
                        <div class="story-icon">${story.icon}</div>
                        <p class="story-name">${story.name}</p>
                    </div>
                `).join('')}
                <div class="story-item new-story">
                    <div class="story-icon">+</div>
                    <p class="story-name">New</p>
                </div>
            </div>

            <!-- Posts Filter Tabs -->
            <div class="posts-tabs">
                <button class="tab-btn active" data-tab="posts">
                    📋
                </button>
                <button class="tab-btn" data-tab="tagged">
                    🏷️
                </button>
                <button class="tab-btn" data-tab="bookmarks">
                    🔖
                </button>
            </div>

            <!-- Posts Grid -->
            <div class="posts-grid">
                ${posts_list.map((post, index) => `
                    <div class="post-item">
                        <img src="${post}" alt="Post ${index + 1}" class="post-image">
                    </div>
                `).join('')}
            </div>
        </div>
    `;
}

// Explore Page Generator
function generateExplore(exploreData = {}) {
    const {
        hashtags = [
            { tag: '#CampusLife', icon: '📚' },
            { tag: '#StudyGram', icon: '✏️' },
            { tag: '#CollegeVibes', icon: '🎉' },
            { tag: '#ClassOf2026', icon: '🎓' },
            { tag: '#Trending', icon: '📈' }
        ],
        carouselItems = [
            'https://via.placeholder.com/800x400/2d3748/ffffff?text=Carousel+1',
            'https://via.placeholder.com/800x400/2d3748/ffffff?text=Carousel+2',
            'https://via.placeholder.com/800x400/2d3748/ffffff?text=Carousel+3'
        ],
        exploreItems = [
            { image: 'https://via.placeholder.com/250/87ceeb/ffffff?text=Code', isVideo: false },
            { image: 'https://via.placeholder.com/250/2d3748/ffffff?text=Dev', isVideo: true },
            { image: 'https://via.placeholder.com/250/ff6347/ffffff?text=Art', isVideo: false },
            { image: 'https://via.placeholder.com/250/228b22/ffffff?text=Gym', isVideo: false },
            { image: 'https://via.placeholder.com/250/4b5563/ffffff?text=Work', isVideo: true },
            { image: 'https://via.placeholder.com/250/87ceeb/ffffff?text=Beach', isVideo: false },
            { image: 'https://via.placeholder.com/250/ffd700/ffffff?text=Book', isVideo: false },
            { image: 'https://via.placeholder.com/250/228b22/ffffff?text=Nature', isVideo: false },
            { image: 'https://via.placeholder.com/250/ff1493/ffffff?text=Music', isVideo: true }
        ]
    } = exploreData;

    return `
        <div class="explore-container">
            <!-- Search Bar -->
            <div class="explore-search">
                <input type="text" placeholder="Search students, posts, hashtags..." class="search-input">
                <span class="search-icon">🔍</span>
            </div>

            <!-- Trending Hashtags -->
            <div class="trending-hashtags">
                <div class="hashtag-scroll">
                    ${hashtags.map((item, index) => `
                        <button class="hashtag-btn">
                            <span class="hashtag-icon">${item.icon}</span>
                            ${item.tag}
                        </button>
                    `).join('')}
                </div>
                <button class="scroll-nav prev">‹</button>
                <button class="scroll-nav next">›</button>
            </div>

            <!-- Carousel Slider -->
            <div class="explore-carousel">
                <div class="carousel-container">
                    ${carouselItems.map((item, index) => `
                        <div class="carousel-item ${index === 0 ? 'active' : ''}">
                            <img src="${item}" alt="Carousel slide ${index + 1}">
                        </div>
                    `).join('')}
                </div>
                <button class="carousel-nav prev">‹</button>
                <button class="carousel-nav next">›</button>
                <div class="carousel-dots">
                    ${carouselItems.map((_, index) => `
                        <span class="dot ${index === 0 ? 'active' : ''}"></span>
                    `).join('')}
                </div>
            </div>

            <!-- Content Tabs -->
            <div class="explore-tabs">
                <button class="tab-button active" data-tab="all">
                    📋 All
                </button>
                <button class="tab-button" data-tab="reels">
                    ▶️ Reels
                </button>
            </div>

            <!-- Explore Grid -->
            <div class="explore-grid">
                ${exploreItems.map((item, index) => `
                    <div class="explore-card">
                        <img src="${item.image}" alt="Post ${index + 1}" class="card-image">
                        ${item.isVideo ? `
                            <div class="video-overlay">
                                <div class="play-button">▶</div>
                            </div>
                        ` : ''}
                    </div>
                `).join('')}
            </div>
        </div>
    `;
}

// Notifications Page Generator
function generateNotifications(notificationsData = {}) {
    const {
        notifications = [
            {
                id: 1,
                username: 'emma_wilson',
                avatar: 'https://via.placeholder.com/50/db2777/ffffff?text=EW',
                action: 'liked your photo',
                time: '2m',
                thumbnail: 'https://via.placeholder.com/80/87ceeb/ffffff?text=Photo',
                actionType: 'like'
            },
            {
                id: 2,
                username: 'alex_tech',
                avatar: 'https://via.placeholder.com/50/4b5563/ffffff?text=AT',
                action: 'started following you',
                time: '15m',
                actionType: 'follow'
            },
            {
                id: 3,
                username: 'sarah_art',
                avatar: 'https://via.placeholder.com/50/228b22/ffffff?text=SA',
                action: 'commented: "This is amazing! 🔥"',
                time: '1h',
                thumbnail: 'https://via.placeholder.com/80/2d3748/ffffff?text=Code',
                actionType: 'comment'
            },
            {
                id: 4,
                username: 'mike_johnson',
                avatar: 'https://via.placeholder.com/50/ff6347/ffffff?text=MJ',
                action: 'mentioned you in a comment',
                time: '2h',
                thumbnail: 'https://via.placeholder.com/80/4b5563/ffffff?text=Work',
                actionType: 'mention'
            },
            {
                id: 5,
                username: 'lisa_photography',
                avatar: 'https://via.placeholder.com/50/8b0000/ffffff?text=LP',
                action: 'and 5 others liked your reel',
                time: '3h',
                thumbnail: 'https://via.placeholder.com/80/ffd700/ffffff?text=Reel',
                actionType: 'like'
            },
            {
                id: 6,
                username: 'david_music',
                avatar: 'https://via.placeholder.com/50/4169e1/ffffff?text=DM',
                action: 'started following you',
                time: '5h',
                actionType: 'follow'
            }
        ]
    } = notificationsData;

    return `
        <div class="notifications-container">
            <!-- Notifications Header -->
            <div class="notifications-header">
                <h1 class="notifications-title">Notifications</h1>
            </div>

            <!-- Notifications List -->
            <div class="notifications-list">
                ${notifications.map((notification) => `
                    <div class="notification-item">
                        <div class="notification-left">
                            <img src="${notification.avatar}" alt="${notification.username}" class="notification-avatar">
                            <div class="notification-content">
                                <p class="notification-text">
                                    <span class="notification-username">${notification.username}</span>
                                    <span class="notification-action">${notification.action}</span>
                                </p>
                                <p class="notification-time">${notification.time}</p>
                            </div>
                        </div>

                        <div class="notification-right">
                            ${notification.actionType === 'follow' ? `
                                <button class="notification-btn follow-btn">Follow</button>
                            ` : `
                                <img src="${notification.thumbnail}" alt="Notification preview" class="notification-thumbnail">
                            `}
                        </div>
                    </div>
                `).join('')}
            </div>
        </div>
    `;
}

// Create Post Modal Generator
function generateCreatePostModal() {
    return `
        <div class="create-post-modal">
            <!-- Modal Header -->
            <div class="modal-header">
                <h2 class="modal-title">Create Post</h2>
                <button class="modal-close" onclick="closeCreatePostModal()">✕</button>
            </div>

            <!-- Post Type Tabs -->
            <div class="post-type-tabs">
                <button class="tab-option active" data-type="photo" onclick="switchPostType('photo')">
                    <div class="tab-icon">📷</div>
                    <span class="tab-label">Photo</span>
                </button>
                <button class="tab-option" data-type="reel" onclick="switchPostType('reel')">
                    <div class="tab-icon">🎬</div>
                    <span class="tab-label">Reel</span>
                </button>
                <button class="tab-option" data-type="story" onclick="switchPostType('story')">
                    <div class="tab-icon">📸</div>
                    <span class="tab-label">Story</span>
                </button>
            </div>

            <!-- Upload Area -->
            <div class="upload-container" id="uploadContainer">
                <div class="upload-area" id="uploadArea" ondrop="handleDrop(event)" ondragover="handleDragOver(event)" ondragleave="handleDragLeave(event)">
                    <div class="upload-icon">⬆️</div>
                    <h3 class="upload-title">Upload your photo</h3>
                    <p class="upload-subtitle">Drag and drop or click to browse</p>
                    <button class="upload-btn" onclick="document.getElementById('fileInput').click()">Select from gallery</button>
                    <input type="file" id="fileInput" style="display: none;" accept="image/*,video/*" onchange="handleFileSelect(event)">
                </div>
            </div>

            <!-- Post Content Section (Hidden by default) -->
            <div class="post-content-section" style="display: none;">
                <div class="preview-area">
                    <img id="previewImage" style="max-width: 100%; border-radius: 8px;">
                </div>
                <textarea class="post-caption" placeholder="What's on your mind?"></textarea>
                <div class="post-options">
                    <button class="btn-secondary" onclick="cancelPost()">Cancel</button>
                    <button class="btn-primary">Share</button>
                </div>
            </div>
        </div>
    `;
}


// Create Post Modal Functions
function switchPostType(type) {
    // Update active tab
    document.querySelectorAll('.tab-option').forEach(tab => {
        tab.classList.remove('active');
    });
    document.querySelector(`[data-type="${type}"]`).classList.add('active');
}

function handleDragOver(event) {
    event.preventDefault();
    document.getElementById('uploadArea').classList.add('drag-over');
}

function handleDragLeave(event) {
    event.preventDefault();
    document.getElementById('uploadArea').classList.remove('drag-over');
}

function handleDrop(event) {
    event.preventDefault();
    document.getElementById('uploadArea').classList.remove('drag-over');
    const files = event.dataTransfer.files;
    if (files.length > 0) {
        handleFileSelect({ target: { files: files } });
    }
}

function handleFileSelect(event) {
    const file = event.target.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = function(e) {
            document.getElementById('previewImage').src = e.target.result;
            document.getElementById('uploadContainer').style.display = 'none';
            document.querySelector('.post-content-section').style.display = 'block';
        };
        reader.readAsDataURL(file);
    }
}

function cancelPost() {
    document.getElementById('uploadContainer').style.display = 'block';
    document.querySelector('.post-content-section').style.display = 'none';
    document.getElementById('uploadArea').classList.remove('drag-over');
}

function closeCreatePostModal() {
    const modal = document.querySelector('.create-post-modal');
    if (modal) {
        modal.style.display = 'none';
    }
}

// Function to open create post modal
function openCreatePostModal() {
    const modal = document.querySelector('.create-post-modal');
    if (modal) {
        modal.style.display = 'block';
    }
}


// On DOM Load, insert the generated HTML into respective containers
document.addEventListener('DOMContentLoaded', function() {
    // Insert left sidebar into asider-left-show wrapper
    const asiderLeftShow = document.querySelector('.asider-left-show');
    if (asiderLeftShow) {
        asiderLeftShow.innerHTML = generateLeftSidebar();
    }
    
    // Insert right sidebar into asider-right-show wrapper
    const asiderRightShow = document.querySelector('.asider-right-show');
    if (asiderRightShow) {
        asiderRightShow.innerHTML = generateRightSidebar();
    }

    // Insert notifications container into notifications-box
    const notificationsBox = document.querySelector('.notifications-box');
    if (notificationsBox) {
        notificationsBox.innerHTML = generateNotifications();
    }

    // Insert explore container into explore-box
    const exploreBox = document.querySelector('.explore-box');
    if (exploreBox) {
        exploreBox.innerHTML = generateExplore();
    }

    // Insert profile container into profile-box
    const profileBox = document.querySelector('.profile-box');
    if (profileBox) {
        profileBox.innerHTML = generateProfile();
    }

    // Insert reel container into reel-box
    const reelBox = document.querySelector('.reel-box');
    if (reelBox) {
        reelBox.innerHTML = generateReelContainer();
    }
    
    // Insert create post modal into create-post-box
    const createPostBox = document.querySelector('.create-post-box');
    if (createPostBox) {
        createPostBox.innerHTML = generateCreatePostModal();
    }

    // Insert footer nav into foot-nav-box
    const footNavBox = document.querySelector('.foot-nav-box');
    if (footNavBox) {
        footNavBox.innerHTML = generateFooterNav();
    }
});



// for login and signup page
const container = document.getElementById("container");
const registerBtn = document.getElementById("register");
const loginBtn = document.getElementById("login");

registerBtn.addEventListener("click", () => {
  container.classList.add("active");
});

loginBtn.addEventListener("click", () => {
  container.classList.remove("active");
});

// --- API helpers and auth wiring ---
const apiTokenKey = 'app_token';
function getToken() {
    return localStorage.getItem(apiTokenKey);
}

function apiFetch(url, opts = {}) {
    opts.headers = opts.headers || {};
    if (!(opts.body instanceof FormData)) opts.headers['Content-Type'] = 'application/json';
    const token = getToken();
    if (token) opts.headers['Authorization'] = 'Bearer ' + token;
    return fetch(url, opts);
}

document.addEventListener('DOMContentLoaded', () => {
    // Signup form (create account)
    const signupForm = document.querySelector('.sign-up form');
    if (signupForm) {
        signupForm.addEventListener('submit', async (e) => {
            e.preventDefault();
            const inputs = signupForm.querySelectorAll('input');
            const username = inputs[0].value.trim();
            const email = inputs[1].value.trim();
            const password = inputs[2].value;
            try {
                const res = await fetch('/api/signup', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({ username, email, password })
                });
                if (!res.ok) {
                    const err = await res.json().catch(()=>({error:'Signup failed'}));
                    return alert(err.error || 'Signup failed');
                }
                const data = await res.json();
                localStorage.setItem(apiTokenKey, data.token);
                window.location = '/index.html';
            } catch (err) {
                console.error(err);
                alert('Signup error');
            }
        });
    }

    // Login form (intercept default POST)
    const loginForm = document.querySelector('.sign-in form');
    if (loginForm) {
        loginForm.addEventListener('submit', async (e) => {
            e.preventDefault();
            const email = loginForm.querySelector('input[name="email"]').value.trim();
            const password = loginForm.querySelector('input[name="password"]').value;
            try {
                const res = await fetch('/api/login', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({ email, password })
                });
                if (!res.ok) {
                    const err = await res.json().catch(()=>({error:'Login failed'}));
                    return alert(err.error || 'Login failed');
                }
                const data = await res.json();
                localStorage.setItem(apiTokenKey, data.token);
                window.location = '/index.html';
            } catch (err) {
                console.error(err);
                alert('Login error');
            }
        });
    }
});