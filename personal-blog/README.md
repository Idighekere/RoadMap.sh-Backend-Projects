# Personal Blog Platform 🚀📝✨

A Node.js-powered blog platform built with Express and EJS templating engine. This project allows for managing and publishing blog posts with Markdown support and secure admin authentication. 🛡️📖🔑

## Features 🎯🚀🔥

- 📝 Markdown-based blog posts
- 🔒 Admin authentication
- 📱 Responsive design
- 🎨 Clean and modern UI
- 📊 Admin dashboard
<!-- - 🔍 Article search functionality -->
<!-- - 📅 Date-based article organization -->
<!-- - 🖼️ Image support in blog posts -->

## Tech Stack 💻⚙️🛠️

- **Backend**: Node.js, Express.js
- **View Engine**: EJS
- **Database**: File-based storage with Markdown
- **Authentication**: HTTP Basic Auth
- **Markdown Processing**: Marked
- **Styling**: Custom CSS with Flexbox
<!-- - **Security**: bcryptjs for password hashing -->

## Prerequisites 📌⚠️📢

Before running this project, make sure you have:

- Node.js (v14 or higher)
- npm (Node Package Manager)
- Git (for version control)

## Installation 🚀📥🔧

1. Clone the repository:

```bash
git clone https://github.com/Idighekere/personal-blog.git
cd personal-blog
```

2. Install dependencies:

```bash
pnpm install
```

3. Create a `.env` file in the root directory:

```env
USER_NAME=your_username
PASSWORD=your_password
PORT=3000
```

4. Start the server:

```bash
pnpm run dev
```

## Project Structure 📂🗂️🔍

```
personal-blog/
├── articles/            # Markdown files for blog posts
├── public/
│   ├── css/            # Stylesheets
│   ├── images/         # Image assets
│   └── js/            # Client-side JavaScript
├── views/
│   ├── admin/         # Admin panel templates
│   ├── articles/      # Article view templates
│   └── partials/      # Reusable template parts
├── routes/            # Express routes
├── middleware/        # Custom middleware
├── utils/            # Utility functions
├── config/           # Configuration files
└── app.js           # Application entry point
```

## Features in Detail ✨🔍📚

### Blog Posts 📝🖋️📢

- Write posts in Markdown format
<!-- - Support for images and code blocks -->
<!-- - Auto-generated excerpts -->
- Metadata support (title, date, author)

### Admin Dashboard 🔑⚙️🖥️

- basic authentication
- Create, edit, and delete posts
<!-- - Preview posts before publishing -->
<!-- - Manage blog metadata -->

### Security Features 🔒🛡️🚨

- Basic authentication for admin routes
<!-- - Password hashing -->
<!-- - Rate limiting for login attempts -->
<!-- - Secure session handling -->

## API Routes 🌐🔗🛠️

### Public Routes 🏞️📖👥

- `GET /` - Home page with latest posts
- `GET /articles` - List all articles
- `GET /articles/:slug` - View single article

### Admin Routes 🛠️🔑👨‍💻

- `GET /admin/dashboard` - Admin dashboard
- `GET /admin/articles/new` - Create new article
- `POST /admin/articles` - Save new article
- `GET /admin/articles/:slug/edit` - Edit article
- `POST /admin/articles/:slug` - Update article
- `POST /admin/articles/:slug/delete` - Delete article

## Styling 🎨🖌️💡

The project uses custom CSS with Flexbox for responsive layouts. Key features include:

- Responsive navigation
- Mobile-friendly tables
- Flexible content layouts
- Accessible color schemes
- Interactive UI elements

## Contributing 🤝📌🚀

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## Development 🛠️📈📌

To start the development server with hot reload:

```bash
pnpm run dev
```

## Deployment 🚀☁️🔧

1. Update environment variables for production
2. Build assets if needed
3. Deploy to your hosting platform
4. Set up HTTPS
5. Configure your domain

## License 📜⚖️🔓

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Author ✍️👤💡

**Idighekere**

- Created: 2025-02-24
- GitHub: [Idighekere](https://github.com/Idighekere)

## Acknowledgments 🙌💡📚

- Express.js documentation
- EJS documentation
- RoadMap.sh Projects
- Markdown-it library
- Node.js community

## Future Improvements 🔮🚀✨

- [ ] Add user comments
- [ ] Implement tags/categories
- [ ] Add search functionality
- [ ] Implement image optimization
- [ ] Add RSS feed
- [ ] Add social sharing
- [ ] Implement SEO improvements

---
<!-- Last updated: 2025-02-24 18:04:34 UTC 🔄📆⏳ -->
