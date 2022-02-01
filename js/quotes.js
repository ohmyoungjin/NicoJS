const quotes = [
    {
        quote : "good2",
        author : "maeng2",
    },
    {
        quote : "good3",
        author : "maeng3",
    },
    {
        quote : "good4",
        author : "maeng4",
    },
    {
        quote : "good5",
        author : "maeng5",
    },
    {
        quote : "good6",
        author : "maeng6",
    },
    {
        quote : "good7",
        author : "maeng7",
    },
    {
        quote : "good8",
        author : "maeng8",
    },
    {
        quote : "good9",
        author : "maeng9",
    },
    {
        quote : "good10",
        author : "maeng10",
    },
    {
        quote : "good11",
        author : "maeng11",
    },

];
const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");
const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];
author.innerText = todaysQuote.author;
quote.innerText = todaysQuote.quote;

