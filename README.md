# Hope Shield Connect

## Contents
- [Project Overview](#project-overview)
- [Goals](#goals)
- [User Stories](#user-stories)
- [Wireframes](#wireframes)
- [Project Structure](#project-structure)
- [Pages](#pages)
- [Styles](#styles)
- [Images](#images)
- [Dependencies](#dependencies)
- [AI Usage](#ai-usage)
- [How to Run / Deployment](#how-to-run--deployment)
- [Contributing](#contributing)
- [License](#license)
- [Manual Tests](#manual-tests)
- [Validator Testing](#validator-testing)

## Project Overview
To create a website `Code To Protect` for national slavery and human trafficking prevention month. 

[Project Link](https://mathewisherwood.github.io/Mental-Health-Awareness/)

[Back to Contents](#contents)

## Goals

[Back to Contents](#contents)

## User Stories

### 1. Quickly Access Pre-Written Posts
**As a user**,  
I want to browse a library of pre-written trafficking prevention posts,  
So I can easily find and share impactful messages.  

**Acceptance Criteria**:  
- A minimum of 20 pre-written posts must be available.  
- Posts are organized into categories (e.g., general awareness, youth-focused, UK statistics).  
- Users can filter posts by platform (e.g., Twitter, Instagram).  

---

### 2. Relevant Hashtag Suggestions
**As a user**,  
I want to see relevant hashtags with each post,  
So that I can maximize its visibility on social media.  

**Acceptance Criteria**:  
- Suggested hashtags include 2-5 keywords relevant to anti-trafficking campaigns (e.g., #EndTrafficking, #ModernSlavery).  
- All hashtags are UK-specific where applicable.  
- Users can optionally customize hashtags before sharing.  

---

### 3. Easy Sharing and Downloading
**As a user**,  
I want to copy text or download an image with a single click,  
So I can quickly share content.  

**Acceptance Criteria**:  
- A "Copy Text" button copies both the post and hashtags to the clipboard.  
- A "Download Image" button downloads the associated image file.  
- Buttons are responsive, with hover/click effects for visual feedback.  

---

### 4. Real-Time Post Previews
**As a user**,  
I want to preview the post in real time,  
So I can see how it will appear on a social media platform.  

**Acceptance Criteria**:  
- Previews include text, hashtags, and the selected image.  
- The layout matches the style of the chosen platform (e.g., character limits for Twitter, image dimensions for Instagram).  
- The preview updates instantly as I change options.  

---

### 5. Localized Content
**As a charity or supporter in the UK**,  
I want the app to include UK-specific content,  
So the messages are relevant to my audience.  

**Acceptance Criteria**:  
- Posts reference UK statistics (e.g., 2023 trafficking data).  
- Links to at least 5 UK-based anti-trafficking organizations are included.  
- Content avoids jargon and uses language accessible to a general UK audience.  

---

### 6. Responsive Design
**As a mobile user**,  
I want the app to work seamlessly on my device,  
So I can share posts on the go.  

**Acceptance Criteria**:  
- The app functions on screen widths of 320px and larger.  
- Buttons and text are legible and usable on mobile, tablet, and desktop devices.  
- The design adheres to mobile-first principles, ensuring critical features are easy to access.  

---

### 7. Clear Calls-to-Action
**As a first-time visitor**,  
I want clear instructions and action buttons,  
So I know how to use the app.  

**Acceptance Criteria**:  
- The homepage features a brief explanation of the app’s purpose (max 2 sentences).  
- Prominent buttons for "Generate Post," "Download Image," and "Share Now."  
- Tooltips or popups briefly explain buttons on hover or first use.  

---



[Back to Contents](#contents)

## Wireframes

![Landing Page](/documentation/wireframes/Landing%20Page.png)

The landing page explains the value of out project

![Learn More](/documentation/wireframes/Learn%20More.png)

The laearn more page 

![Post Generator](/documentation/wireframes/Post%20Generator.png)

The page contains pre-written posts that can be shared on social-media

![Post Preview](/documentation/wireframes/Post%20Preview.png)

The page allows users to see what their post will look like on the targeted platform

![Resources](/documentation/wireframes/Resources.png)

The page contains information on organizations that deal with modern slavery

[Back to Contents](#contents)

## Project Structure
```
The project is organized as follows:

HopeShieldConnect/
├── documentation/
│   ├── wireframes/
│   │   ├── Landing Page.png
│   │   ├── Learn More.png
│   │   ├── Post Generator.png
│   │   ├── Post Preview.png
│   │   └── Resources.png
├── src/
│   ├── css/
│   │   └── styles.css
│   ├── images/
│   │   └── various image files
│   ├── js/
│   │   └── scripts.js
│   ├── index.html
│   └── other HTML files
├── .gitignore
├── README.md
└── LICENSE
```
[Back to Contents](#contents)

## Pages
```
about.html
index.html
learn-more.html
post-generator.html
post-preview.html
resources.html
```

[Back to Contents](#contents)

## Styles
```
about.css
header.css
learn-more.css
post-generator.css
post-preview.css
resources.css
styles.css
```

[Back to Contents](#contents)

## Images
```
assets/images/
├── logo.png
├── banner.jpg
├── icons/
│   ├── facebook.png
│   ├── twitter.png
│   ├── instagram.png
│   └── linkedin.png
├── posts/
│   ├── post1.jpg
│   ├── post2.jpg
│   ├── post3.jpg
│   └── post4.jpg
└── backgrounds/
    ├── bg1.jpg
    ├── bg2.jpg
    └── bg3.jpg
```
[Back to Contents](#contents)

## Dependencies
No dependencies in this current build, however for a better social post experience we could integrate an API for each social media platform however this would require subscriptions we did not have time for in this project.

[Back to Contents](#contents)

## AI Usage
AI has been used to help create some of the images on this project. We have also used AI to help us with some of the edits of our code to speed up production in the project.

[Back to Contents](#contents)

## How to Run / Deployment
1. Clone the repository:
    ```sh
    git clone https://github.com/dimitri-edel/team-8-jan.git
    ```
2. Open `index.html` in your web browser to view the website.

[Back to Contents](#contents)

## Contributing
Contributions are welcome! Please fork the repository and create a pull request with your changes.

[Back to Contents](#contents)

## License
This project is licensed under the MIT License.

[Back to Contents](#contents)

## Manual Tests

### Navigation Bar

| TEST                   | ACTION                                | EXPECTATION                              | RESULT    |
|------------------------|---------------------------------------|------------------------------------------|-----------|
| **About Us Link**   | User clicks on the **About Us** link in the Navigation Bar | The **About Us** page opens            | **SUCCESS** |
| **Resources Link** | User clicks on the **Resources Link** link in the Navigation Bar | The **Resources** page pens            | **SUCCESS** |
| **Learn More Link**   | User clicks on the **Learn More** link in the Navigation Bar | The **Learn More** page opens            | **SUCCESS** |
| **Post Generator Link**   | User clicks on the **Post Generator** link in the Navigation Bar | The **Post Generator** page opens            | **SUCCESS** |
| **Home Link**   | User clicks on the **Home** link in the Navigation Bar | The **Home** page opens            | **SUCCESS** |
| **Respoonsive Design**   | User opens the website on a small mobile device | The navigation menu becomes collpsible | **SUCCESS** |

### Post Generator Page

| TEST                   | ACTION                                | EXPECTATION                              | RESULT    |
|------------------------|---------------------------------------|------------------------------------------|-----------|
|  **Pre-writen Posts selection** | User clicks on one of the four tabs for different categories  | A different message and a different image appear |  **SUCCESS**  |
| **Copy Post Text** button | User clicks on the button | The post message is copied to the clip-board |  **SUCCESS**  |
| **Download Post Image** button | User clicks on the button | The image gets downloaded by the user's browser | **SUCCESS**  |
| 

### Learn More Page

| TEST                   | ACTION                                | EXPECTATION                              | RESULT    |
|------------------------|---------------------------------------|------------------------------------------|-----------|
|   |   |   |   |

### Resources Page

| TEST                   | ACTION                                | EXPECTATION                              | RESULT    |
|------------------------|---------------------------------------|------------------------------------------|-----------|
|   |   |   |   |


### About Us Page

| TEST                   | ACTION                                | EXPECTATION                              | RESULT    |
|------------------------|---------------------------------------|------------------------------------------|-----------|
|   |   |   |   |

[Back to Contents](#contents)

## Validator Testing
1. HTML
https://validator.w3.org/nu

2. CSS
https://jigsaw.we.org/css-validator/validator

3. Lighthouse.

[Back to Contents](#contents)