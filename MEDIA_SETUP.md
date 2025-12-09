# Media Page Setup Guide

This guide will help you configure the Media page for your Junova.io website to display YouTube videos and Medium articles.

## Overview

The Media page automatically pulls and displays:
- **YouTube Videos**: From your specified playlist
- **Medium Articles**: From your RSS feed (@nicole_68130)

## Quick Start

### 1. YouTube API Setup

The YouTube integration requires a Google API key to fetch videos from your playlist.

#### Get a YouTube API Key:

1. Go to the [Google Cloud Console](https://console.cloud.google.com/)
2. Create a new project or select an existing one
3. Enable the **YouTube Data API v3**:
   - Click "Enable APIs and Services"
   - Search for "YouTube Data API v3"
   - Click "Enable"
4. Create credentials:
   - Click "Create Credentials" → "API Key"
   - Copy your API key
5. (Recommended) Restrict your API key:
   - Click on the API key to edit
   - Under "API restrictions", select "Restrict key"
   - Choose "YouTube Data API v3"
   - Under "Application restrictions", you can restrict by HTTP referrers to your domain
   - Save

#### Configure Your API Key:

1. Copy the example environment file:
   ```bash
   cp .env.local.example .env.local
   ```

2. Edit `.env.local` and add your YouTube API key:
   ```
   YOUTUBE_API_KEY=your_actual_api_key_here
   ```

3. **Important**: Never commit `.env.local` to git (it's already in `.gitignore`)

### 2. Medium RSS Feed

The Medium integration works automatically - no API key needed! It pulls from:
```
https://medium.com/feed/@nicole_68130
```

The RSS feed is public and updates automatically when you publish new articles.

## File Structure

```
junova-site/
├── app/
│   ├── media/
│   │   └── page.tsx              # Main media page component
│   └── api/
│       ├── youtube/
│       │   └── route.ts          # YouTube API endpoint
│       └── medium/
│           └── route.ts          # Medium RSS parser endpoint
├── components/
│   └── NavBar.tsx                # Updated with Media link
├── .env.local.example            # Environment template
└── MEDIA_SETUP.md               # This file
```

## Features

### YouTube Videos
- Displays up to 12 most recent videos from your playlist
- Shows video thumbnails, titles, descriptions, and publication dates
- Click to watch on YouTube
- Cached for 1 hour to reduce API calls
- Responsive grid layout (3 columns on desktop, 2 on tablet, 1 on mobile)

### Medium Articles
- Automatically fetches articles from your RSS feed
- Displays article titles, excerpts, featured images, and dates
- Shows article categories/tags
- Links directly to Medium for full reading experience
- Cached for 1 hour for better performance
- Same responsive grid layout

### Design Features
- Matches Junova brand colors (purple to green gradient)
- Dark theme with slate background
- Smooth hover animations
- Loading states with skeleton screens
- Error handling with user-friendly messages
- Fully responsive design

## Customization

### Change the Playlist

Edit `app/api/youtube/route.ts`:
```typescript
const PLAYLIST_ID = "YOUR_PLAYLIST_ID_HERE";
```

To find your playlist ID:
1. Go to YouTube and open your playlist
2. Look at the URL: `youtube.com/playlist?list=PLAYLIST_ID`
3. Copy the part after `list=`

### Change Number of Videos

Edit `app/api/youtube/route.ts`:
```typescript
const url = `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&playlistId=${PLAYLIST_ID}&maxResults=12&key=${YOUTUBE_API_KEY}`;
```

Change `maxResults=12` to your desired number (max 50).

### Change Medium Author

Edit `app/api/medium/route.ts`:
```typescript
const MEDIUM_RSS_URL = "https://medium.com/feed/@your_username";
```

## Troubleshooting

### YouTube Videos Not Loading

1. **Check your API key**: Make sure it's correctly set in `.env.local`
2. **Restart the dev server**: After adding `.env.local`, restart with `npm run dev`
3. **Check API quota**:
   - Google provides 10,000 quota units/day for free
   - Each playlist request costs ~3 units
   - Check usage in [Google Cloud Console](https://console.cloud.google.com/apis/api/youtube.googleapis.com/quotas)
4. **Verify the playlist ID**: Make sure the playlist is public
5. **Check browser console**: Look for error messages

### Medium Articles Not Loading

1. **Verify RSS URL**: Visit `https://medium.com/feed/@nicole_68130` in your browser
2. **Check if articles exist**: Make sure you have published articles on Medium
3. **CORS issues**: The API route handles this server-side to avoid CORS problems
4. **Check browser console**: Look for error messages

### Styling Issues

The page uses Tailwind CSS classes that match your existing site. If styles look off:
1. Make sure Tailwind is properly configured
2. Check that `globals.css` is imported in `layout.tsx`
3. Verify the gradient colors in `tailwind.config.js`

## Performance Notes

- Both APIs cache responses for 1 hour (`s-maxage=3600`)
- Images are lazy-loaded using Next.js Image component
- Edge runtime for fast response times
- Stale-while-revalidate strategy keeps content fresh

## API Costs

- **YouTube API**: Free tier includes 10,000 quota units/day
  - With 12 videos and hourly caching, you'll use ~72 units/day
  - Well within free limits
- **Medium RSS**: Completely free, no API key required

## Security Best Practices

1. Never commit `.env.local` to version control
2. Restrict your YouTube API key to specific APIs and domains
3. Rotate API keys periodically
4. Monitor API usage in Google Cloud Console

## Support

For issues specific to:
- **YouTube API**: [YouTube Data API Documentation](https://developers.google.com/youtube/v3)
- **Medium RSS**: [Medium RSS Documentation](https://help.medium.com/hc/en-us/articles/214874118-RSS-feeds)
- **Next.js**: [Next.js Documentation](https://nextjs.org/docs)

## License

This implementation is part of the Junova.io website and follows the same license as the main project.
