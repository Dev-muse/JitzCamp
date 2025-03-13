# Jiu Jitsu Postcard App

A full-stack Node.js web application that allows users to share their Jiu Jitsu experiences from around the world. Users can upload images, pin locations on a map, and provide details about their visit to various Jiu Jitsu gyms, academies, and training spots.

## Features

✅ Upload images and descriptions of Jiu Jitsu spots
✅ Pin locations using Geolocation API
✅ Browse and discover new Jiu Jitsu destinations worldwide
✅ Interactive map for visual exploration
✅ User authentication for secure submissions
✅ Responsive UI built with Tailwind CSS

## Tech Stack

- **Frontend:** Tailwind CSS
- **Backend:** Node.js, Express.js
- **Database:** MongoDB with Mongoose
- **Geolocation Services:** Mapbox API / Google Maps API
- **Image Uploads:** Cloudinary / Multer

## Installation

1. Clone the repository:

```bash
git clone https://github.com/dev-muse/jitzcamp.git
cd jitzcamp
```

2. Install dependencies:

```bash
npm install
```

3. Set up environment variables:

Create a `.env` file in the root directory and add the following:

```
PORT=3000
MONGO_URI=your_mongodb_connection_string
CLOUDINARY_CLOUD_NAME=your_cloudinary_cloud_name
CLOUDINARY_API_KEY=your_cloudinary_api_key
CLOUDINARY_API_SECRET=your_cloudinary_api_secret
MAPBOX_API_KEY=your_mapbox_api_key
```

4. Run the development server:

```bash
npm run dev
```

5. Open your browser and visit `http://localhost:3000`

## Usage

1. **Sign Up/Login:** Create an account to start adding Jiu Jitsu spots.
2. **Add a Spot:** Pin a location on the map, upload images, and add a description.
3. **Explore:** Browse other users' Jiu Jitsu postcards to discover new training destinations.

## Folder Structure

```
/jiu-jitsu-postcards
├── /public        # Static assets (CSS, images, etc.)
├── /routes        # Express routes for CRUD operations
├── /models        # Mongoose schemas and models
├── /controllers   # Business logic and data handling
├── /views         # EJS templates (if using server-side rendering)
├── /uploads       # Temporary image storage for uploads
├── .env           # Environment variables
├── .gitignore     # Files to ignore in version control
├── package.json   # Project dependencies and scripts
├── server.js      # Application entry point
```

## Contributing

Contributions are welcome! If you'd like to improve this project:
- Fork the repository
- Create a new branch (`git checkout -b feature/new-feature`)
- Commit your changes (`git commit -m "Add new feature"`)
- Push the branch (`git push origin feature/new-feature`)
- Create a pull request

## Future Improvements

- User comments and reviews for each Jiu Jitsu spot
- Ratings and ranking system for gyms
- Social sharing features
- Improved image gallery layout

## License

This project is licensed under the [MIT License](LICENSE).

## Contact

For inquiries or suggestions, feel free to reach out:
- **Email:** a.muse@rapidmuse.com
- **GitHub:** [@dev-muse](https://github.com/dev-muse)

