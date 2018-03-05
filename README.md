# musicapp

*** Lillian Shieh / Feb 26, 2018 ***  

# MusicApp Proposal  
## What is my app?  (Brief description of the game, why you're choosing to make it)  
  It's a music lyric app that creates playlist and keeps track of tracks containing lyrics taken from an API

## Initial thoughts on structure  (Write out what challenges you expect to encounter, or ideas you want to come up with)
  I want to be able to create multiple playlist for each user but I'm not sure how complicated that will end up being.  The most basic version of my app with just one playlist per user will be very similar to the favorites charts we used previously.  I will be accessing the tracks through the Spotify API and create playlists through that. I also plan on searching based on category where I will list out the tracks based on artist, genre, etc.  
  
Ended up changing app with no users and mainly two levels with playlist and tracks in each playlist.  Then I would show lyrics.

## Phases of Completion  (The steps or phases you expect to go through, and the tasks that you'll need to accomplish to reach each step. These should resemble the acceptance criteria we were working through earlier.)  
Accessing information in Spotify API

Writing out the basic structure with Express and the MVC pattern

Writing out the methods for creating, deleting, editing

Pull lyrics from lyrics.ovh API

## Technologies Used
-JavaScript
-Express
-SQL/Promise
-HTML/EJS
-CSS

## Installation Instruction
'''
npm i
'''
'''
npm run dev
'''
## Unsolved Problems
I'm just hoping to improve this app so it can actually play music in the playlists and completely figure out the Spotify API.


## Links and Resources  (Anything you've looked up so far or are thinking about using.)
'''
		request(url, (error,response,body) => {
			let parsed = JSON.parse(body)
			req.body.lyrics = parsed.lyrics
			trackDB.save(req.body).then(track => {
				res.locals.track = track
				next()
			}).catch(err => {
				next(err)
			})
		})
'''
https://lyrics.ovh/, http://docs.lyricsovh.apiary.io/
https://getbootstrap.com/ (used a little bit... probably not enough)
