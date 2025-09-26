// Unsplash API Utility Module

const ACCESS_KEY = 'aUDnMdyrajky10B6DDBOOT7Yn47kS0NQb6H76A-GflU';
const imageCache = new Map();
const usedImageUrls = new Set(); // ✅ Track used images to avoid repetition

// Technology-specific default images
const defaultImages = {
  JavaScript: [
    'https://images.unsplash.com/photo-1627398242454-45a1465c2479?q=80&w=1600&h=900&fit=crop',
    'https://images.unsplash.com/photo-1559027615-5c1c25ec5c93?q=80&w=1600&h=900&fit=crop',
  ],
  TypeScript: [
    'https://images.unsplash.com/photo-1599507593499-a3f7d7d97667?q=80&w=1600&h=900&fit=crop',
    'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=1600&h=900&fit=crop',
  ],
  React: [
    'https://images.unsplash.com/photo-1633356122102-3fe601e05bd2?q=80&w=1600&h=900&fit=crop',
    'https://images.unsplash.com/photo-1633356122544-f134324a6cee?q=80&w=1600&h=900&fit=crop',
  ],
  NextJS: [
    'https://images.unsplash.com/photo-1648737963503-1a26da876aca?q=80&w=1600&h=900&fit=crop',
  ],
  HTML: [
    'https://images.unsplash.com/photo-1621839673705-6617adf9e890?q=80&w=1600&h=900&fit=crop',
  ],
  CSS: [
    'https://images.unsplash.com/photo-1523437113738-bbd3cc89fb19?q=80&w=1600&h=900&fit=crop',
  ],
  Node: [
    'https://images.unsplash.com/photo-1561736778-92e52a7769ef?q=80&w=1600&h=900&fit=crop',
  ],
  Express: [
    'https://images.unsplash.com/photo-1520085601670-ee14aa5fa3e8?q=80&w=1600&h=900&fit=crop',
  ],
  MongoDB: [
    'https://images.unsplash.com/photo-1544383835-bda2bc66a55d?q=80&w=1600&h=900&fit=crop',
  ],
  Database: [
    'https://images.unsplash.com/photo-1544383835-bda2bc66a55d?q=80&w=1600&h=900&fit=crop',
  ],
  API: [
    'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=1600&h=900&fit=crop',
  ],
  Mobile: [
    'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?q=80&w=1600&h=900&fit=crop',
  ],
  Portfolio: [
    'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?q=80&w=1600&h=900&fit=crop',
  ],
  default: [
    'https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=1600&h=900&fit=crop',
    'https://images.unsplash.com/photo-1481277542470-605612bd2d61?q=80&w=1600&h=900&fit=crop',
  ]
};

// Technology keyword mapping for better search results
const technologyKeywords = {
  javascript: 'javascript code programming',
  typescript: 'typescript code programming',
  react: 'react javascript web development',
  nextjs: 'next.js web development',
  vue: 'vue.js web development',
  angular: 'angular web development',
  node: 'node.js server backend',
  express: 'express.js server api',
  mongodb: 'mongodb database',
  mysql: 'mysql database',
  postgresql: 'postgresql database',
  graphql: 'graphql api',
  rest: 'rest api',
  html: 'html web development',
  css: 'css web styling',
  sass: 'sass css styling',
  tailwind: 'tailwind css web design',
  bootstrap: 'bootstrap web design',
  material: 'material design ui',
  mobile: 'mobile app development',
  android: 'android app development',
  ios: 'ios app development',
  flutter: 'flutter mobile development',
  react_native: 'react native mobile development',
  portfolio: 'portfolio website showcase',
  ecommerce: 'ecommerce online shop',
  blog: 'blog content management',
  dashboard: 'dashboard analytics',
  game: 'game development',
  ai: 'artificial intelligence',
  ml: 'machine learning',
  blockchain: 'blockchain technology',
  crypto: 'cryptocurrency blockchain',
  cloud: 'cloud computing',
  aws: 'aws cloud services',
  azure: 'microsoft azure cloud',
  docker: 'docker container',
  kubernetes: 'kubernetes orchestration',
  devops: 'devops automation',
  testing: 'software testing',
  security: 'cybersecurity protection',
};

// Negative keywords to avoid in image searches
const negativeKeywords = ['php', 'wordpress', 'drupal', 'joomla'];

/**
 * Extract meaningful keywords from a repository description
 */
const extractKeywords = (description: string): string[] => {
  if (!description) return [];

  // Remove common words and punctuation
  const stopWords = [
    'the', 'a', 'an', 'and', 'or', 'but', 'is', 'are', 'in', 'to', 'with', 'for',
    'of', 'on', 'at', 'by', 'this', 'that', 'these', 'those', 'from', 'as', 'has',
    'have', 'had', 'was', 'were', 'be', 'been', 'being', 'do', 'does', 'did', 'will',
    'would', 'should', 'could', 'can', 'may', 'might', 'must', 'shall'
  ];

  const words = description.toLowerCase()
    .replace(/[^\w\s]/g, '')
    .split(/\s+/)
    .filter(word => word.length > 2 && !stopWords.includes(word));

  // Identify technology keywords with higher priority
  const techKeywords = words.filter(word =>
    Object.keys(technologyKeywords).some(tech =>
      word === tech || word.includes(tech) || tech.includes(word)
    )
  );

  // Combine tech keywords with other meaningful words
  const allKeywords = [...techKeywords];

  // Add remaining keywords that aren't already included
  words.forEach(word => {
    if (!allKeywords.includes(word)) {
      allKeywords.push(word);
    }
  });

  // Return up to 5 most relevant keywords, prioritizing tech keywords
  return [...new Set(allKeywords)].slice(0, 5);
};

/**
 * Detect primary technology from project metadata
 */
const detectPrimaryTechnology = (project: any): string => {
  const { name, description, language, topics = [] } = project;

  // Check if any technology is explicitly mentioned in topics
  for (const topic of topics) {
    const techKey = Object.keys(technologyKeywords).find(tech =>
      topic.toLowerCase() === tech || topic.toLowerCase().includes(tech)
    );
    if (techKey) return techKey;
  }

  // Check project name for technology indicators
  const nameLower = name.toLowerCase();
  for (const tech of Object.keys(technologyKeywords)) {
    if (nameLower === tech || nameLower.includes(tech)) {
      return tech;
    }
  }

  // Check description for technology indicators
  if (description) {
    const descLower = description.toLowerCase();
    for (const tech of Object.keys(technologyKeywords)) {
      if (descLower.includes(tech)) {
        return tech;
      }
    }
  }

  // Use language as fallback
  if (language) {
    const langLower = language.toLowerCase();
    const techKey = Object.keys(technologyKeywords).find(tech =>
      langLower === tech || langLower.includes(tech)
    );
    if (techKey) return techKey;
  }

  // Default to generic technology based on project type
  if (nameLower.includes('web') || topics.some((t: string) => t.includes('web'))) {
    return 'web';
  } else if (nameLower.includes('app') || nameLower.includes('mobile')) {
    return 'mobile';
  } else if (nameLower.includes('api') || nameLower.includes('server')) {
    return 'api';
  } else if (nameLower.includes('data') || nameLower.includes('db')) {
    return 'database';
  }

  return language?.toLowerCase() || 'code';
};

/**
 * Returns a non-duplicate image URL from the Unsplash API
 */
export const fetchUnsplashImage = async (query: string, options = {}) => {
  const {
    orientation = 'landscape',
    count = 10,
    width = 800,
    height = 600,
    excludeTerms = [],
  }: {
    orientation?: string;
    count?: number;
    width?: number;
    height?: number;
    excludeTerms?: string[];
  } = options;

  // Filter out negative keywords from the query
  const queryTerms = query.toLowerCase().split(/\s+/);
  const filteredTerms = queryTerms.filter(term =>
    !negativeKeywords.includes(term) &&
    !excludeTerms.includes(term)
  );

  // Ensure we have a valid query after filtering
  const finalQuery = filteredTerms.length > 0 ? filteredTerms.join(' ') : query;

  try {
    console.log(`Fetching Unsplash image for: "${finalQuery}"`);

    const response = await fetch(
      `https://api.unsplash.com/search/photos?query=${encodeURIComponent(finalQuery)}&per_page=${count}&orientation=${orientation}`,
      {
        headers: {
          Authorization: `Client-ID ${ACCESS_KEY}`,
        },
      }
    );

    if (!response.ok) {
      throw new Error('Failed to fetch image from Unsplash');
    }

    const data = await response.json();
    const results = data.results || [];

    // If no results, try a more generic search
    if (results.length === 0) {
      console.log('No results found, trying more generic search');
      const genericTerm = finalQuery.split(' ')[0] + ' programming';
      return fetchUnsplashImage(genericTerm, options);
    }

    for (const result of results) {
      const imageUrl = result.urls?.regular + `&w=${width}&h=${height}&fit=crop&crop=entropy`;
      if (!usedImageUrls.has(imageUrl)) {
        usedImageUrls.add(imageUrl);
        return imageUrl;
      }
    }

    // If all images are used, pick a random one anyway
    if (results.length > 0) {
      const randomIndex = Math.floor(Math.random() * results.length);
      const imageUrl = results[randomIndex].urls?.regular + `&w=${width}&h=${height}&fit=crop&crop=entropy`;
      return imageUrl;
    }

    throw new Error('No new images found for the query');
  } catch (error) {
    console.error('Error fetching Unsplash image:', error);
    return null;
  }
};

/**
 * Get a relevant image for a GitHub project
 */
export const getProjectImage = async (project: GitHubProject): Promise<string> => {
  const cacheKey = `unsplash_image_${project.name}`;

  if (imageCache.has(cacheKey)) {
    return imageCache.get(cacheKey);
  }

  try {
    const cachedImage = localStorage.getItem(cacheKey);
    if (cachedImage && !usedImageUrls.has(cachedImage)) {
      usedImageUrls.add(cachedImage);
      imageCache.set(cacheKey, cachedImage);
      return cachedImage;
    }
  } catch (error) {
    console.warn('Error accessing localStorage:', error);
  }

  // Detect primary technology for this project
  const primaryTech = detectPrimaryTechnology(project);

  // Get technology-specific search terms if available
  const techSearchTerms = technologyKeywords[primaryTech] || '';

  // Build search query with prioritized keywords
  let searchQuery = '';

  // Start with technology-specific terms
  if (techSearchTerms) {
    searchQuery = techSearchTerms;
  }

  // Add keywords from project description if available
  if (project.description) {
    const keywords = extractKeywords(project.description);
    // Add up to 3 keywords from description
    if (keywords.length > 0) {
      searchQuery += ' ' + keywords.slice(0, 3).join(' ');
    }
  }

  // Add topics as additional context if available
  if (project.topics && project.topics.length > 0) {
    const relevantTopics = project.topics
      .filter((topic: string) => !negativeKeywords.includes(topic.toLowerCase()))
      .slice(0, 2);

    if (relevantTopics.length > 0) {
      searchQuery += ' ' + relevantTopics.join(' ');
    }
  }

  // If we still don't have a good query, use project name and language
  if (!searchQuery.trim()) {
    searchQuery = `${project.language || 'code'} ${project.name.replace(/-/g, ' ')}`;
  }

  // Add context based on project type
  const hasWebTopic = project.topics && project.topics.some((t: string) => t.includes('web'));

  if (project.name.toLowerCase().includes('web') || hasWebTopic) {
    searchQuery += ' website interface';
  } else if (project.language && ['JavaScript', 'TypeScript'].includes(project.language)) {
    searchQuery += ' javascript application';
  } else if (project.name.toLowerCase().includes('app')) {
    searchQuery += ' mobile application interface';
  } else {
    searchQuery += ' programming code';
  }

  // Exclude negative keywords
  const excludeTerms = [...negativeKeywords];

  // If project doesn't use PHP, exclude PHP from search
  const hasPhpTopic = project.topics && project.topics.some((t: string) => t.toLowerCase().includes('php'));

  if (project.language !== 'PHP' &&
    !project.name.toLowerCase().includes('php') &&
    !hasPhpTopic) {
    excludeTerms.push('php');
  }

  console.log(`Generated search query for ${project.name}: "${searchQuery}"`);

  // Try to get an image from Unsplash
  const imageUrl = await fetchUnsplashImage(searchQuery, {
    width: 800,
    height: 450,
    excludeTerms
  });

  if (imageUrl) {
    try {
      localStorage.setItem(cacheKey, imageUrl);
    } catch (error) {
      console.warn('Error writing to localStorage:', error);
    }
    imageCache.set(cacheKey, imageUrl);
    return imageUrl;
  }

  // Fallback image logic (non-repeating)
  // First try language-specific fallback
  let fallbackPool: string[] = [];

  if (project.language && project.language in defaultImages) {
    fallbackPool = defaultImages[project.language as keyof typeof defaultImages];
  }

  // Then try technology-specific fallback
  if (fallbackPool.length === 0 && primaryTech) {
    const techKey = Object.keys(defaultImages).find(key =>
      key.toLowerCase() === primaryTech ||
      primaryTech.includes(key.toLowerCase())
    );

    if (techKey) {
      fallbackPool = defaultImages[techKey as keyof typeof defaultImages];
    }
  }

  // Finally use default fallback
  if (fallbackPool.length === 0) {
    fallbackPool = defaultImages.default;
  }

  // Find an unused image if possible
  const fallbackImage = fallbackPool.find((img: string) => !usedImageUrls.has(img)) || fallbackPool[0];

  usedImageUrls.add(fallbackImage);
  imageCache.set(cacheKey, fallbackImage);
  try {
    localStorage.setItem(cacheKey, fallbackImage);
  } catch (error) {
    console.warn('Error writing fallback image to localStorage:', error);
  }

  return fallbackImage;
};

/**
 * Interface for GitHub repository project
 */
interface GitHubProject {
  id: number;
  name: string;
  description?: string;
  language?: string;
  topics?: string[];
  html_url?: string;
  homepage?: string;
  stargazers_count?: number;
  forks_count?: number;
  updated_at?: string;
}

/**
 * Type for image callback function
 */
type ImageCallback = (projectName: string, imageUrl: string) => void;

/**
 * Load a single project image and call callback
 */
export const loadProjectImage = async (project: GitHubProject, callback?: ImageCallback): Promise<string | null> => {
  if (!project?.name) return null;
  try {
    const imageUrl = await getProjectImage(project);
    if (typeof callback === 'function') {
      callback(project.name, imageUrl);
    }
    return imageUrl;
  } catch (error) {
    console.error(`Error loading image for project ${project.name}:`, error);
    return null;
  }
};

/**
 * Preload images for multiple projects (non-repeating)
 */
export const preloadProjectImages = async (projects: GitHubProject[]): Promise<Record<string, string>> => {
  const imageMap: Record<string, string> = {};

  projects.forEach(project => {
    const cacheKey = `unsplash_image_${project.name}`;
    if (imageCache.has(cacheKey)) {
      imageMap[project.name] = imageCache.get(cacheKey);
    } else {
      try {
        const cachedImage = localStorage.getItem(cacheKey);
        if (cachedImage && !usedImageUrls.has(cachedImage)) {
          usedImageUrls.add(cachedImage);
          imageCache.set(cacheKey, cachedImage);
          imageMap[project.name] = cachedImage;
        }
      } catch (error) {
        console.warn('Error reading from localStorage in preload:', error);
      }
    }
  });

  const projectsToLoad = projects.filter(project => !imageMap[project.name]);
  if (projectsToLoad.length === 0) return imageMap;

  const batchSize = 3;
  for (let i = 0; i < projectsToLoad.length; i += batchSize) {
    const batch = projectsToLoad.slice(i, i + batchSize);

    const batchResults = await Promise.all(batch.map(async (project) => {
      const url = await getProjectImage(project);
      return { name: project.name, url };
    }));

    batchResults.forEach(({ name, url }) => {
      imageMap[name] = url;
    });

    if (i + batchSize < projectsToLoad.length) {
      // Add a small delay between batches to avoid rate limiting
      await new Promise(resolve => setTimeout(resolve, 800));
    }
  }

  return imageMap;
};



