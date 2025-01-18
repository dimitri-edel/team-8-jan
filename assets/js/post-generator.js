document.addEventListener('DOMContentLoaded', function() {

    // Predefined posts for each category
    const posts = {
        "youth-focused": {
            text: "Youth are the future. Let's empower them to make the world a better place! #YouthPower #ChangeMakers",
            image: "assets/images/pexels-pixabay-236147.jpg"
        },
        "general-awareness": {
            text: "Awareness is the first step toward change. Let's educate and act. #Awareness #TakeAction",
            image: "assets/images/general-awareness.jpg"
        },
        "donation-appeals": {
            text: "Your donation can change lives. Join us in the fight against modern slavery. #DonateNow #HelpSaveLives",
            image: "assets/images/donation-appeals.jpg"
        },
        "awareness": {
            text: "Every person deserves to live in freedom. Spread the word, make a difference. #Awareness #EndModernSlavery",
            image: "assets/images/awareness.jpg"
        }
    };

    // Function to update the post content based on the selected category
    function updatePostContent(category) {
        const post = posts[category];

        // Check if the post exists in our predefined posts object
        if (!post) {
            console.error('No post found for this category!');
            return;
        }

        // Update the title, text, and image in the preview area
        document.getElementById('post-title').textContent = category.replace("-", " ").toUpperCase() + " Post";
        document.getElementById('post-text').value = post.text;
        document.getElementById('post-image').src = post.image;
    }

    // Set initial content to "youth-focused"
    updatePostContent("youth-focused");

    // Handle the tab button clicks
    const tabButtons = document.querySelectorAll('.nav-link');
    tabButtons.forEach(button => {
        button.addEventListener('click', function() {
            const category = button.id.replace('-btn', '');  // Extract category from button ID

            // Hide all content and remove active class from all buttons
            tabButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');

            // Update the content preview based on the selected category
            updatePostContent(category);
        });
    });

    // Handle "Copy Post Text" button click
    document.getElementById('copy-text').addEventListener('click', function() {
        const postText = document.getElementById('post-text').value;
        if (postText && postText !== "Your post content will appear here.") {
            navigator.clipboard.writeText(postText).then(function() {
                alert("Post text copied to clipboard!");
            }).catch(function(err) {
                console.error("Failed to copy text: ", err);
            });
        } else {
            alert("No post content available. Please select a category to generate content.");
        }
    });

    // Handle "Download Post Image" button click
    document.getElementById('download-image').addEventListener('click', function() {
        const postImage = document.getElementById('post-image');
        if (postImage.src && postImage.src !== "") {
            const link = document.createElement('a');
            link.href = postImage.src;
            link.download = 'generated-post.jpg';
            link.click();
        } else {
            alert("No post image available.");
        }
    });

    // Handle "Preview Your Post" button click
    document.getElementById('preview-post').addEventListener('click', function() {
        window.location.href = 'preview-post.html';
    });

});

// Function to post on Twitter
function postOnTwitter() {
    const image = document.getElementById('post-image').src;
    const text = document.getElementById('post-text').value;
    const headline = document.getElementById('post-title').textContent;

    const twitterUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(headline + " " + text)}&url=${encodeURIComponent(image)}`;
    window.open(twitterUrl, '_blank');
  }
  
  // Function to post on Facebook (simplified)
  function postOnFacebook() {    
    const image = document.getElementById('post-image').src;
    const text = document.getElementById('post-text').value;
    const headline = document.getElementById('post-title').textContent;

    const facebookUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(image)}&t=${encodeURIComponent(headline)}&quote=${encodeURIComponent(text)}`;
    window.open(facebookUrl, '_blank'); 
  }
  
  // Function to post on LinkedIn (simplified)
  function postOnLinkedIn() {
    const image = document.getElementById('post-image').src;
    const text = document.getElementById('post-text').value;
    const headline = document.getElementById('post-title').textContent;

    const linkedinUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(image)}&title=${encodeURIComponent(headline)}&text=${encodeURIComponent(text)}`;
  window.open(linkedinUrl, '_blank');
    window.open(linkedinUrl, '_blank');
  }