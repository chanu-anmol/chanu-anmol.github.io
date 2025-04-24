// Sample photo data - replace with your actual photos
const photos = [
    { src: "images/image1.jpg", caption: "Our first meet" },
    { src: "images/image2.jpg", caption: "Our first meet" },
    { src: "images/image3.jpg", caption: "Our first meet" },
    { src: "images/image4.jpg", caption: "Our first meet" },
    { src: "images/image4.jpg", caption: "Our first meet" },
    { src: "images/Ghibli.PNG", caption: "Our first Ghibli" },
    { src: "images/image5.jpg", caption: "" },
    { src: "images/image6.jpg", caption: "" },
    { src: "images/image7.jpg", caption: "" },
    { src: "images/image8.jpg", caption: "Prittiest" },
    { src: "images/her.gif", caption: "Dayum Hair Flick" },
    { src: "images/flower.jpg", caption: "First Flower" },
    // { src: "/api/placeholder/600/800", caption: "Road trip memories" }
];

// Sample journal entries - replace with your actual entries
const journalEntries = [
    {
        title: "The Day We Met",
        date: "March, 2025",
        author: "Anmol",
        preview: "I never expected that would change my life forever",
        fullContent: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores ut nihil voluptates eligendi doloribus sequi ipsa voluptatum dignissimos, quis rerum nobis eius, magnam alias reprehenderit deleniti quam dolore facilis nulla eveniet fuga saepe! Tenetur obcaecati consectetur itaque illum amet assumenda ipsam ex illo recusandae qui, dicta architecto aliquid omnis laboriosam! Voluptatem adipisci saepe vero, consequuntur voluptas pariatur quasi odio atque, amet eum voluptatibus tenetur! Aliquid voluptate esse odit! Deserunt, corrupti dolorum, dolorem officia iste dignissimos facere accusantium laudantium rem aut quas quo et iure qui blanditiis suscipit delectus sequi perferendis debitis, obcaecati reiciendis architecto praesentium sit? Incidunt error possimus magni!"
    },
    {
        title: "Lorem Ipsum dolor sit amet",
        date: "March, 2025",
        author: "Anmol",
        preview: "",
        fullContent: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores ut nihil voluptates eligendi doloribus sequi ipsa voluptatum dignissimos, quis rerum nobis eius, magnam alias reprehenderit deleniti quam dolore facilis nulla eveniet fuga saepe! Tenetur obcaecati consectetur itaque illum amet assumenda ipsam ex illo recusandae qui, dicta architecto aliquid omnis laboriosam! Voluptatem adipisci saepe vero, consequuntur voluptas pariatur quasi odio atque, amet eum voluptatibus tenetur! Aliquid voluptate esse odit! Deserunt, corrupti dolorum, dolorem officia iste dignissimos facere accusantium laudantium rem aut quas quo et iure qui blanditiis suscipit delectus sequi perferendis debitis, obcaecati reiciendis architecto praesentium sit? Incidunt error possimus magni!"
    },
    {
        title: "lorem ipsem dolor sit amet",
        date: "March, 2025",
        author: "Riddhi",
        preview: "",
        fullContent: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores ut nihil voluptates eligendi doloribus sequi ipsa voluptatum dignissimos, quis rerum nobis eius, magnam alias reprehenderit deleniti quam dolore facilis nulla eveniet fuga saepe! Tenetur obcaecati consectetur itaque illum amet assumenda ipsam ex illo recusandae qui, dicta architecto aliquid omnis laboriosam! Voluptatem adipisci saepe vero, consequuntur voluptas pariatur quasi odio atque, amet eum voluptatibus tenetur! Aliquid voluptate esse odit! Deserunt, corrupti dolorum, dolorem officia iste dignissimos facere accusantium laudantium rem aut quas quo et iure qui blanditiis suscipit delectus sequi perferendis debitis, obcaecati reiciendis architecto praesentium sit? Incidunt error possimus magni!"
    }
];

// Load photos into the grid
const photoGrid = document.getElementById('photoGrid');

photos.forEach(photo => {
    const photoItem = document.createElement('div');
    photoItem.className = 'photo-item';
    
    const img = document.createElement('img');
    img.src = photo.src;
    img.alt = photo.caption;
    
    const caption = document.createElement('div');
    caption.className = 'photo-caption';
    caption.textContent = photo.caption;
    
    photoItem.appendChild(img);
    photoItem.appendChild(caption);
    photoGrid.appendChild(photoItem);
    
    // Add click event to open modal
    photoItem.addEventListener('click', function() {
        openModal(photo.src, photo.caption);
    });
});

// Load journal entries
const journalEntriesContainer = document.getElementById('journalEntries');

journalEntries.forEach((entry, index) => {
    const entryElement = document.createElement('div');
    entryElement.className = 'journal-entry';
    
    const journalHeader = document.createElement('div');
    journalHeader.className = 'journal-header';
    
    const titleElement = document.createElement('h3');
    titleElement.textContent = entry.title;
    
    const dateElement = document.createElement('div');
    dateElement.className = 'journal-date';
    dateElement.textContent = entry.date;
    
    const authorElement = document.createElement('div');
    authorElement.className = 'journal-author';
    authorElement.textContent = 'By ' + entry.author;
    
    const contentElement = document.createElement('div');
    contentElement.className = 'journal-content';
    contentElement.textContent = entry.preview;
    
    const readMoreBtn = document.createElement('a');
    readMoreBtn.href = '#';
    readMoreBtn.className = 'read-more-btn';
    readMoreBtn.textContent = 'Read More';
    readMoreBtn.addEventListener('click', function(e) {
        e.preventDefault();
        openJournalModal(entry);
    });
    
    journalHeader.appendChild(titleElement);
    journalHeader.appendChild(dateElement);
    
    contentElement.appendChild(document.createElement('br'));
    contentElement.appendChild(authorElement);
    contentElement.appendChild(document.createElement('br'));
    contentElement.appendChild(readMoreBtn);
    
    entryElement.appendChild(journalHeader);
    entryElement.appendChild(contentElement);
    
    journalEntriesContainer.appendChild(entryElement);
});

// Modal functionality for photos
const modal = document.getElementById('photoModal');
const modalImg = document.getElementById('modalImg');
const modalCaption = document.getElementById('modalCaption');

function openModal(src, caption) {
    modal.style.display = 'flex';
    modalImg.src = src;
    modalCaption.textContent = caption;
}

function closeModal() {
    modal.style.display = 'none';
}

// Modal functionality for journal entries
const journalModal = document.getElementById('journalModal');
const journalModalTitle = document.getElementById('journalModalTitle');
const journalModalDate = document.getElementById('journalModalDate');
const journalModalAuthor = document.getElementById('journalModalAuthor');
const journalModalBody = document.getElementById('journalModalBody');

function openJournalModal(entry) {
    journalModal.style.display = 'flex';
    journalModalTitle.textContent = entry.title;
    journalModalDate.textContent = entry.date;
    journalModalAuthor.textContent = 'By ' + entry.author;
    journalModalBody.textContent = entry.fullContent;
}

function closeJournalModal() {
    journalModal.style.display = 'none';
}

// Show "Add New Entry" functionality (placeholder)
document.getElementById('newEntryBtn').addEventListener('click', function(e) {
    e.preventDefault();
    alert('This would open a form to add a new journal entry. You can implement this functionality by adding a form modal.');
});

// Close modals when clicking outside of content
window.addEventListener('click', function(event) {
    if (event.target === modal) {
        closeModal();
    }
    if (event.target === journalModal) {
        closeJournalModal();
    }
});


// Smooth scrolling for navigation links
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        window.scrollTo({
            top: targetElement.offsetTop - 70,
            behavior: 'smooth'
        });
    });
});

// Update timeline items to alternate sides
const updateTimelineResponsive = () => {
    if (window.innerWidth <= 768) {
        document.querySelectorAll('.timeline-item').forEach(item => {
            item.style.left = '0';
        });
    } else {
        document.querySelectorAll('.timeline-item:nth-child(odd)').forEach(item => {
            item.style.left = '0';
        });
        document.querySelectorAll('.timeline-item:nth-child(even)').forEach(item => {
            item.style.left = '50%';
        });
    }
};

// Call initially and on window resize
updateTimelineResponsive();
window.addEventListener('resize', updateTimelineResponsive);
