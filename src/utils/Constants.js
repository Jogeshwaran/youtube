const API_KEY = "AIzaSyArQkmS8qVzidivlFiQ71s47EhXf4cvpH8";
export const YOUTUBE_VIDEO_CATEGORIES = "https://youtube.googleapis.com/youtube/v3/videoCategories?part=snippet&max_results=10&regionCode=US&key="+API_KEY;
export const GET_YOUTUBE_VIDEOS = "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=IN&key="+API_KEY;
export const YOUTUBE_SUGGESTION_URL = 'http://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q=' ;
export const LIVE_CHAT_COUNT = 10;