import type { QuoteType } from '$lib/types'

export const getQuote = (): QuoteType[] => {
  const getRandomIndex = () => Math.floor(Math.random()*10);
  return [
    {quote: "The only way to do great work is to love what you do.", author: "Steve Jobs"},
    {quote: "Innovation distinguishes between a leader and a follower.", author: "Steve Jobs"},
    {quote: "Choose a job you love, and you will never have to work a day in your life.", author: "Confucius"},
    {quote: "Success is not the key to happiness. Happiness is the key to success. If you love what you are doing, you will be successful.", author: "Albert Schweitzer"},
    {quote: "Don't watch the clock; do what it does. Keep going.", author: "Sam Levenson"},
    {quote: "The future belongs to those who believe in the beauty of their dreams.", author: "Eleanor Roosevelt"},
    {quote: "The secret of getting ahead is getting started.", author: "Mark Twain"},
    {quote: "The only limit to our realization of tomorrow will be our doubts of today.", author: "Franklin D. Roosevelt"},
    {quote: "The best way to predict the future is to create it.", author: "Abraham Lincoln"},
    {quote: "Believe you can and you're halfway there.", author: "Theodore Roosevelt"}
][getRandomIndex()]
}