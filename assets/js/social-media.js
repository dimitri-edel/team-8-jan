// Function to post on Twitter
function postOnTwitter(headline, text, image) {
    const twitterUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(headline + " " + text)}&url=${encodeURIComponent(image)}`;
    window.open(twitterUrl, '_blank');
  }
  
  // Function to post on Facebook (simplified)
  function postOnFacebook(headline, text, image) {
    const facebookUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(image)}`;
    window.open(facebookUrl, '_blank'); 
  }
  
  // Function to post on LinkedIn (simplified)
  function postOnLinkedIn(headline, text, image) {
    const linkedinUrl = `https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(image)}&title=${encodeURIComponent(headline)}&summary=${encodeURIComponent(text)}`;
    window.open(linkedinUrl, '_blank');
  }