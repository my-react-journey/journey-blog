---
title: "Programming Jokes 🦄"
date: "2022-08-18"
---

![](/assets/programmingjokes.webp)

I just found out this awesome API that serves jokes with a simple REST API.

And I thought, mmmmm, maybe I can use that to display some programming jokes since the API categorizes them.

First, I tried with just a functional component `App`. Used `useEffect` to fetch the jokes and display them. But for some reason, the web app fetched the Jokes API twice and the jokes would render twice. I thought I was using the `useEffect` incorrectly and tried multiple times. But still, it was doing the same, fetching twice.

And then I saw this video by Ben Awad, [Fetch Data from an API in React.js - Part 12](https://www.youtube.com/watch?v=T3Px88x_PsA) where he shows how to use a class component by extending `React.component`. I thought maybe this could fix the problem. But I couldn't get it to work.

And then I stumbled upon this reddit post [Why is my fetch getting called twice?](https://www.reddit.com/r/reactjs/comments/ugzopd/why_is_my_fetch_getting_called_twice/) and this stackoverflow question [Render is called twice when fetching data from a REST API](https://stackoverflow.com/questions/54384871/render-is-called-twice-when-fetching-data-from-a-rest-api) and came to the conclusion that **React does this double fetching in Development mode**. 

I have no idea why this happens, but this is one heck of a problem. Problem? Not sure though. I'll have to ask someone else.

Finally after building and serving the **production** version, it worked. Finally fetched **once**.

With the help of this video by JavaScript Mastery, [Build and Deploy a React PWA - Why Progressive Web Apps are the Future of the Web](https://www.youtube.com/watch?v=IaJqMcOMuDM), I learnt how to add offline capabilitites to a react app. I already made a service worker generator a little while ago. [Create New Service Worker](https://coolsw.pages.dev/) - Where you can generate service worker code for any web app. 

It has many options including 
- Cache Strategies, 
- Lifecycle Events customization, 
- Ability to include Progressive enhancement APIs like Background Fetch and Periodic Background Check easily, 
- Choose whether to respect user mobile data 
- Create offline html pages and more. 

It is much simpler than working with [Workbox](https://developer.chrome.com/docs/workbox/). Intuitive and easy to use for beginners. One small step to make every web app work offline.

[Check this out 🚀](https://new-programming-jokes.netlify.app/)

[Source Code - GitHub](https://github.com/my-react-journey/programming-jokes)

Thanks for reading! 🤝