'use strict';

import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';
import GigmatePlayer from './GigmatePlayer.component';

const setLists = JSON.parse(`[
  {
    "title": "Test Setlist",
    "songs": [
      {
        "title": "Test Song",
        "bpm": 120,
        "parts": [
          {
            "name": "GET TEMPO", "description": "4 beats to get the tempo going 1", "subdivisionsPerBar": 4, "subdivision": 4, "bars": 1
          },
          {
            "name": "COUNT IN THE BAND", "description": "4 beats to count in the band 1", "subdivisionsPerBar": 4, "subdivision": 4, "bars": 1
          },
          {
            "name": "PROGGY PART 1", "description": "Look, this thing can go prog. 6 bars of 9/16", "subdivisionsPerBar": 9, "subdivision": 16, "bars": 6
          },
          {
            "name": "VERSE 1", "description": "Ok, you've gone crazy eough. Just chill and let the vocalist do his thing.", "subdivisionsPerBar": 4, "subdivision": 4, "bars": 4
          },
          {
            "name": "PROGGY PART 2", "description": "Going proggy again, this time in 11/8. 4 bars.", "subdivisionsPerBar": 11, "subdivision": 8, "bars": 4
          },
          {
            "name": "BRIDGE", "description": "Follow the bassline and build up for the final Chorus.", "subdivisionsPerBar": 4, "subdivision": 4, "bars": 4
          },
          {
            "name": "CHORUS 2", "description": "Just groove it and do an epic ending", "subdivisionsPerBar": 4, "subdivision": 4, "bars": 4
          }
        ]
      },
      {
        "title": "My Song",
        "bpm": 120,
        "parts": [
          {
            "name": "GET TEMPO", "description": "4 beats to get the tempo going 1", "subdivisionsPerBar": 4, "subdivision": 4, "bars": 1
          },
          {
            "name": "COUNT IN THE BAND", "description": "4 beats to count in the band 1", "subdivisionsPerBar": 4, "subdivision": 4, "bars": 1
          },
          {
            "name": "INTRO", "description": "No drums, do a cool triplet fill at the end", "subdivisionsPerBar": 4, "subdivision": 4, "bars": 2
          },
          {
            "name": "PROGGY PART 1", "description": "Look, this thing can go prog. 6 bars of 9/16", "subdivisionsPerBar": 9, "subdivision": 16, "bars": 6
          },
          {
            "name": "VERSE 1", "description": "Ok, you've gone crazy eough. Just chill and let the vocalist do his thing.", "subdivisionsPerBar": 4, "subdivision": 4, "bars": 4
          },
          {
            "name": "PROGGY PART 2", "description": "Going proggy again, this time in 11/8. 4 bars.", "subdivisionsPerBar": 11, "subdivision": 8, "bars": 4
          },
          {
            "name": "CHORUS 1", "description": "Here's the chorus. Keep it steady and groovy!", "subdivisionsPerBar": 4, "subdivision": 4, "bars": 4
          },
          {
            "name": "VERSE 2", "description": "Back to verse, the vocalist does his thing again.", "subdivisionsPerBar": 4, "subdivision": 4, "bars": 4
          },
          {
            "name": "BRIDGE", "description": "Follow the bassline and build up for the final Chorus.", "subdivisionsPerBar": 4, "subdivision": 4, "bars": 4
          },
          {
            "name": "CHORUS 2", "description": "Just groove it and do an epic ending", "subdivisionsPerBar": 4, "subdivision": 4, "bars": 8
          }
        ]
      },
      {
        "title": "My Song 2",
        "bpm": 90,
        "parts": [
          {
            "name": "GET TEMPO", "description": "4 beats to get the tempo going", "subdivisionsPerBar": 4, "subdivision": 4, "bars": 1
          },
          {
            "name": "COUNT IN THE BAND", "description": "4 beats to count in the band", "subdivisionsPerBar": 4, "subdivision": 4, "bars": 1
          },
          {
            "name": "CHORUS", "description": "This noe starts wth the chorus", "subdivisionsPerBar": 4, "subdivision": 4, "bars": 8
          },
          {
            "name": "VERSE", "description": "The Verse", "subdivisionsPerBar": 4, "subdivision": 4, "bars": 16
          },
          {
            "name": "CHORUS", "description": "This noe starts wth the chorus", "subdivisionsPerBar": 4, "subdivision": 4, "bars": 8
          }
        ]
      }
    ]
  },
  {
    "title": "SSC - General",
    "songs": [
      {
        "title": "Uncount what counts",
        "bpm": 128,
        "parts": [
          {
            "name": "GET TEMPO", "description": "4 beats to get the tempo going", "subdivisionsPerBar": 4, "subdivision": 4, "bars": 1
          },
          {
            "name": "COUNT IN THE BAND", "description": "4 beats to count in the band", "subdivisionsPerBar": 4, "subdivision": 4, "bars": 1
          },
          {
            "name": "INTRO TOBE", "description": "Drums only", "subdivisionsPerBar": 4, "subdivision": 4, "bars": 2
          },
          {
            "name": "VERSE", "description": "The Verse", "subdivisionsPerBar": 4, "subdivision": 4, "bars": 16
          },
          {
            "name": "CHORUS", "description": "The Chorus", "subdivisionsPerBar": 4, "subdivision": 4, "bars": 16
          },
          {
            "name": "DRUMS ONLY", "description": "Drums only", "subdivisionsPerBar": 4, "subdivision": 4, "bars": 2
          },
          {
            "name": "VERSE", "description": "The verse", "subdivisionsPerBar": 4, "subdivision": 4, "bars": 14
          },
          {
            "name": "SNARE ONLY", "description": "Snare only", "subdivisionsPerBar": 4, "subdivision": 4, "bars": 8
          },
          {
            "name": "VERSE", "description": "The Verse", "subdivisionsPerBar": 4, "subdivision": 4, "bars": 16
          },
          {
            "name": "BRIDGE - GUITAR ONLY", "description": "Bridge", "subdivisionsPerBar": 7, "subdivision": 8, "bars": 4
          },
          {
            "name": "BRIDGE - + DRUMS", "description": "Bridge", "subdivisionsPerBar": 7, "subdivision": 8, "bars": 12
          },
          {
            "name": "BRIDGE - + VOCALS", "description": "Bridge", "subdivisionsPerBar": 7, "subdivision": 8, "bars": 16
          },
          {
            "name": "PRE CHORUS", "description": "Pre Chorus", "subdivisionsPerBar": 4, "subdivision": 4, "bars": 12
          },
          {
            "name": "CHORUS", "description": "The Chorus", "subdivisionsPerBar": 4, "subdivision": 4, "bars": 16
          }
        ]
      },
      {
        "title": "Foxy Lady",
        "bpm": 125,
        "parts": [
          {
            "name": "GET TEMPO", "description": "4 beats to get the tempo going", "subdivisionsPerBar": 4, "subdivision": 4, "bars": 1
          },
          {
            "name": "COUNT IN THE BAND", "description": "4 beats to count in the band", "subdivisionsPerBar": 4, "subdivision": 4, "bars": 1
          },
          {
            "name": "INTRO GUITAR", "description": "No drums", "subdivisionsPerBar": 4, "subdivision": 4, "bars": 8
          },
          {
            "name": "INTRO WITH DRUMS", "description": "Intro with drums", "subdivisionsPerBar": 4, "subdivision": 4, "bars": 10
          },
          {
            "name": "VERSE", "description": "The Verse", "subdivisionsPerBar": 4, "subdivision": 4, "bars": 16
          },
          {
            "name": "CHORUS", "description": "The Chorus", "subdivisionsPerBar": 4, "subdivision": 4, "bars": 10
          },
          {
            "name": "BOSA", "description": "Bosa Bridge", "subdivisionsPerBar": 4, "subdivision": 4, "bars": 6
          },
          {
            "name": "VERSE", "description": "The Verse", "subdivisionsPerBar": 4, "subdivision": 4, "bars": 16
          },
          {
            "name": "CHORUS", "description": "The Chorus", "subdivisionsPerBar": 4, "subdivision": 4, "bars": 18
          },
          {
            "name": "BRIDGE", "description": "The Bridge", "subdivisionsPerBar": 4, "subdivision": 4, "bars": 12
          },
          {
            "name": "CHORUS", "description": "The Chorus", "subdivisionsPerBar": 4, "subdivision": 4, "bars": 10
          },
          {
            "name": "OUTRO GUITAR", "description": "No drums", "subdivisionsPerBar": 4, "subdivision": 4, "bars": 4
          }
        ]
      }
    ]
  },
  {
    "title": "Theory of Mind - General",
    "songs": [
      {
        "title": "When I dream of you (TAMBURINA)",
        "bpm": 117,
        "parts": [
          {
            "name": "GET TEMPO", "description": "4 beats to get the tempo going", "subdivisionsPerBar": 4, "subdivision": 4, "bars": 1
          },
          {
            "name": "COUNT IN THE BAND", "description": "4 beats to count in the band", "subdivisionsPerBar": 4, "subdivision": 4, "bars": 1
          },
          {
            "name": "VERSE NO VOCALS", "description": "NO right hand on hats, just feet", "subdivisionsPerBar": 4, "subdivision": 4, "bars": 4
          },
          {
            "name": "VERSE", "description": "NO right hand on hats, just feet", "subdivisionsPerBar": 4, "subdivision": 4, "bars": 16
          },
          {
            "name": "CHORUS", "description": "HOUSE BEAT", "subdivisionsPerBar": 4, "subdivision": 4, "bars": 16
          },
          {
            "name": "VERSE NO VOCALS", "description": "NO right hand on hats, just feet", "subdivisionsPerBar": 4, "subdivision": 4, "bars": 4
          },
          {
            "name": "VERSE", "description": "NO right hand on hats, just feet", "subdivisionsPerBar": 4, "subdivision": 4, "bars": 8
          },
          {
            "name": "VERSE INSTRUMENTAL", "description": "ADD TAMBOURINE", "subdivisionsPerBar": 4, "subdivision": 4, "bars": 8
          },
          {
            "name": "CHORUS", "description": "HOUSE BEAT", "subdivisionsPerBar": 4, "subdivision": 4, "bars": 32
          },
          {
            "name": "OUTRO", "description": "HOUSE BEAT", "subdivisionsPerBar": 4, "subdivision": 4, "bars": 6
          }
        ]
      },
      {
        "title": "Shaking Mind",
        "bpm": 133,
        "parts": [
          {
            "name": "GET TEMPO", "description": "4 beats to get the tempo going", "subdivisionsPerBar": 4, "subdivision": 4, "bars": 1
          },
          {
            "name": "COUNT IN THE BAND", "description": "4 beats to count in the band", "subdivisionsPerBar": 4, "subdivision": 4, "bars": 1
          },
          {
            "name": "INTRO - NO DRUMS", "description": "NO DRUMS", "subdivisionsPerBar": 4, "subdivision": 4, "bars": 24
          },
          {
            "name": "CHORUS", "description": "Open HH, Snare - B-SS--S-", "subdivisionsPerBar": 4, "subdivision": 4, "bars": 18
          },
          {
            "name": "BRIDGE - NO DRUMS", "description": "No drums", "subdivisionsPerBar": 4, "subdivision": 4, "bars": 8
          },
          {
            "name": "VOCALS - NO DRUMS", "description": "No drums", "subdivisionsPerBar": 4, "subdivision": 4, "bars": 10
          },
          {
            "name": "CHORUS", "description": "Open HH, Snare - B-SS--S-, no crash at the end", "subdivisionsPerBar": 4, "subdivision": 4, "bars": 36
          }
        ]
      }
    ]
  },
  {
    "title": "ToM - Cluj (Yolka) - 14 Nov 2016",
    "songs": [
      {
        "title": "Andromeda",
        "bpm": 113,
        "parts": [
          {
            "name": "GET TEMPO", "description": "4 beats to get the tempo going", "subdivisionsPerBar": 2, "subdivision": 4, "bars": 1
          },
          {
            "name": "COUNT IN THE BAND", "description": "4 beats to count in the band", "subdivisionsPerBar": 4, "subdivision": 4, "bars": 1
          },
          {
            "name": "INTRO GUITAR", "description": "NO DRUMS", "subdivisionsPerBar": 4, "subdivision": 4, "bars": 4
          },
          {
            "name": "CHORUS", "description": "Ride, 16ths in between on the snare", "subdivisionsPerBar": 4, "subdivision": 4, "bars": 16
          },
          {
            "name": "VERSE", "description": "HH, Snare on every beat", "subdivisionsPerBar": 4, "subdivision": 4, "bars": 11
          },
          {
            "name": "BRIDGE", "description": "HH, 16ths pattern on HH", "subdivisionsPerBar": 4, "subdivision": 4, "bars": 16
          },
          {
            "name": "CHORUS", "description": "Ride, 16ths in between on the snare", "subdivisionsPerBar": 4, "subdivision": 4, "bars": 16
          },
          {
            "name": "VERSE", "description": "HH, Snare on every beat, pause on the last 2 measures", "subdivisionsPerBar": 4, "subdivision": 4, "bars": 11
          },
          {
            "name": "BRIDGE", "description": "HH, 16ths pattern on HH", "subdivisionsPerBar": 4, "subdivision": 4, "bars": 16
          },
          {
            "name": "BRIDGE", "description": "HH, 16ths pattern on HH", "subdivisionsPerBar": 4, "subdivision": 4, "bars": 16
          }
        ]
      },
      {
        "title": "Daydream - tamburina",
        "bpm": 126,
        "parts": [
          {
            "name": "GET TEMPO", "description": "4 beats to get the tempo going", "subdivisionsPerBar": 2, "subdivision": 4, "bars": 1
          },
          {
            "name": "COUNT IN THE BAND", "description": "4 beats to count in the band", "subdivisionsPerBar": 4, "subdivision": 4, "bars": 1
          },
          {
            "name": "INTRO GUITAR - NO DRUMS", "description": "NO DRUMS", "subdivisionsPerBar": 4, "subdivision": 4, "bars": 4
          },
          {
            "name": "VERSE", "description": "Closed HH", "subdivisionsPerBar": 4, "subdivision": 4, "bars": 20
          },
          {
            "name": "CHORUS", "description": "Cazan - HH on 2 and 4", "subdivisionsPerBar": 4, "subdivision": 4, "bars": 16
          },
          {
            "name": "VERSE", "description": "Closed HH", "subdivisionsPerBar": 4, "subdivision": 4, "bars": 16
          },
          {
            "name": "CHORUS", "description": "Cazan - HH on 2 and 4", "subdivisionsPerBar": 4, "subdivision": 4, "bars": 16
          },
          {
            "name": "BRIDGE", "description": "Shuffle, Ride", "subdivisionsPerBar": 4, "subdivision": 4, "bars": 24
          },
          {
            "name": "GUITAR ONLY", "description": "NO DRUMS", "subdivisionsPerBar": 4, "subdivision": 4, "bars": 4
          },
          {
            "name": "CHORUS 1", "description": "Cazan - HH on 2 and 4", "subdivisionsPerBar": 4, "subdivision": 4, "bars": 16
          },
          {
            "name": "CHORUS 2", "description": "Cazan - HH on every beat, mai aglomerat pe toms", "subdivisionsPerBar": 4, "subdivision": 4, "bars": 16
          }
        ]
      },
      {
        "title": "Under the sea",
        "bpm": 73,
        "parts": [
          {
            "name": "GET TEMPO", "description": "4 beats to get the tempo going", "subdivisionsPerBar": 2, "subdivision": 4, "bars": 1
          },
          {
            "name": "COUNT IN THE BAND", "description": "4 beats to count in the band", "subdivisionsPerBar": 4, "subdivision": 4, "bars": 1
          },
          {
            "name": "INTRO GUITAR", "description": "NO DRUMS", "subdivisionsPerBar": 4, "subdivision": 4, "bars": 4
          },
          {
            "name": "VERSE", "description": "HH, small snare", "subdivisionsPerBar": 4, "subdivision": 4, "bars": 12
          },
          {
            "name": "BREAK", "description": "STOP", "subdivisionsPerBar": 4, "subdivision": 8, "bars": 1
          },
          {
            "name": "CHORUS", "description": "Main snare, ride", "subdivisionsPerBar": 4, "subdivision": 4, "bars": 8
          },
          {
            "name": "BRIDGE - IMPRO", "description": "Quiest impro", "subdivisionsPerBar": 4, "subdivision": 4, "bars": 8
          },
          {
            "name": "VERSE", "description": "HH, small snare", "subdivisionsPerBar": 4, "subdivision": 4, "bars": 4
          },
          {
            "name": "BREAK", "description": "STOP", "subdivisionsPerBar": 4, "subdivision": 8, "bars": 1
          },
          {
            "name": "CHORUS", "description": "Main snare, ride", "subdivisionsPerBar": 4, "subdivision": 4, "bars": 16
          },
          {
            "name": "BREAK - NO DRUMS", "description": "NO DRUMS", "subdivisionsPerBar": 4, "subdivision": 4, "bars": 4
          },
          {
            "name": "OUTRO", "description": "Ride, ghost notes on the hats", "subdivisionsPerBar": 4, "subdivision": 4, "bars": 8
          }
        ]
      },
      {
        "title": "Summer waves - tamburina",
        "bpm": 120,
        "parts": [
          {
            "name": "GET TEMPO", "description": "4 beats to get the tempo going", "subdivisionsPerBar": 2, "subdivision": 4, "bars": 1
          },
          {
            "name": "COUNT IN THE BAND", "description": "4 beats to count in the band", "subdivisionsPerBar": 4, "subdivision": 4, "bars": 1
          },
          {
            "name": "INTRO WITH DRUMS", "description": "NO VOCALS", "subdivisionsPerBar": 4, "subdivision": 4, "bars": 8
          },
          {
            "name": "VERSE", "description": "HH", "subdivisionsPerBar": 4, "subdivision": 4, "bars": 8
          },
          {
            "name": "VERSE VARIATION", "description": "Variation on HH + tambourine - pause @ the end", "subdivisionsPerBar": 4, "subdivision": 4, "bars": 8
          },
          {
            "name": "CHORUS", "description": "Ride, some 16ths on the HH", "subdivisionsPerBar": 4, "subdivision": 4, "bars": 16
          },
          {
            "name": "PRE VERSE", "description": "HH", "subdivisionsPerBar": 4, "subdivision": 4, "bars": 8
          },
          {
            "name": "VERSE", "description": "HH", "subdivisionsPerBar": 4, "subdivision": 4, "bars": 8
          },
          {
            "name": "VERSE VARIATION", "description": "Variation on HH + tambourine - pause @ the end", "subdivisionsPerBar": 4, "subdivision": 4, "bars": 8
          },
          {
            "name": "BRIDGE - OPEN HH", "description": "HH", "subdivisionsPerBar": 4, "subdivision": 4, "bars": 8
          },
          {
            "name": "CHORUS", "description": "Ride, some 16ths on the HH", "subdivisionsPerBar": 4, "subdivision": 4, "bars": 16
          },
          {
            "name": "CHORUS INSTRUMENTAL", "description": "Ride, ghost notes on the HH", "subdivisionsPerBar": 4, "subdivision": 4, "bars": 16
          }
        ]
      },
      {
        "title": "Weightless (Emily)",
        "bpm": 118,
        "parts": [
          {
            "name": "GET TEMPO", "description": "4 beats to get the tempo going", "subdivisionsPerBar": 2, "subdivision": 4, "bars": 1
          },
          {
            "name": "INTRO DRUM FILL", "description": "Fill on the last 2 beats", "subdivisionsPerBar": 4, "subdivision": 4, "bars": 1
          },
          {
            "name": "CHORUS", "description": "16ths tambourine - Vocals start at half - gentle smashes on 16th", "subdivisionsPerBar": 4, "subdivision": 4, "bars": 16
          },
          {
            "name": "VERSE", "description": "8ths HH - Tambourine gently in the bg - STOP on beat 2 last measure", "subdivisionsPerBar": 4, "subdivision": 4, "bars": 16
          },
          {
            "name": "CHORUS", "description": "16ths tambourine - gentle smashes on 16th", "subdivisionsPerBar": 4, "subdivision": 4, "bars": 8
          },
          {
            "name": "VERSE", "description": "8ths HH - Tambourine gently in the bg - drum fill at the end", "subdivisionsPerBar": 4, "subdivision": 4, "bars": 16
          },
          {
            "name": "CHORUS", "description": "16ths tambourine - gentle smashes on 16th", "subdivisionsPerBar": 4, "subdivision": 4, "bars": 16
          },
          {
            "name": "BRIDGE - NO DRUMS", "description": "Half tempo - 8ths ride - de la jumate drept pe ride si HH in contra", "subdivisionsPerBar": 4, "subdivision": 4, "bars": 8
          },
          {
            "name": "BRIDGE", "description": "16ths tambourine - gentle smashes on 16th - end on FT", "subdivisionsPerBar": 4, "subdivision": 4, "bars": 32
          }
        ]
      },
      {
        "title": "Sunshine",
        "bpm": 74,
        "parts": [
          {
            "name": "GET TEMPO", "description": "4 beats to get the tempo going", "subdivisionsPerBar": 2, "subdivision": 4, "bars": 1
          }
        ]
      },
      {
        "title": "Vertigo",
        "bpm": 125,
        "parts": [
          {
            "name": "GET TEMPO", "description": "4 beats to get the tempo going", "subdivisionsPerBar": 2, "subdivision": 4, "bars": 1
          },
          {
            "name": "COUNT IN THE BAND", "description": "4 beats to count in the band", "subdivisionsPerBar": 4, "subdivision": 4, "bars": 1
          },
          {
            "name": "INTRO GUITAR - NO DRUMS", "description": "NO DRUMS", "subdivisionsPerBar": 4, "subdivision": 4, "bars": 4
          },
          {
            "name": "CHORUS", "description": "Open HH, Snare, follow the accents", "subdivisionsPerBar": 4, "subdivision": 4, "bars": 16
          },
          {
            "name": "VERSE", "description": "HH with the foot", "subdivisionsPerBar": 4, "subdivision": 4, "bars": 16
          },
          {
            "name": "CHORUS", "description": "Open HH, Snare, follow the accents", "subdivisionsPerBar": 4, "subdivision": 4, "bars": 4
          },
          {
            "name": "VERSE", "description": "HH with the foot", "subdivisionsPerBar": 4, "subdivision": 4, "bars": 16
          },
          {
            "name": "BRIDGE", "description": "SNARE - B--S--S-|B-S-B-S-", "subdivisionsPerBar": 4, "subdivision": 4, "bars": 8
          },
          {
            "name": "CHORUS", "description": "Open HH, Snare, follow the accents", "subdivisionsPerBar": 4, "subdivision": 4, "bars": 16
          },
          {
            "name": "VERSE VARIATION", "description": "HH with the foot", "subdivisionsPerBar": 4, "subdivision": 4, "bars": 8
          },
          {
            "name": "VERSE", "description": "HH with the foot", "subdivisionsPerBar": 4, "subdivision": 4, "bars": 16
          },
          {
            "name": "BRIDGE", "description": "SNARE - B--S--S-|B-S-B-S-", "subdivisionsPerBar": 4, "subdivision": 4, "bars": 8
          },
          {
            "name": "CHORUS", "description": "Open HH, Snare, follow the accents, choke crash at the end", "subdivisionsPerBar": 4, "subdivision": 4, "bars": 16
          }
        ]
      },
      {
        "title": "I felt the sun",
        "bpm": 119,
        "parts": [
          {
            "name": "GET TEMPO", "description": "4 beats to get the tempo going", "subdivisionsPerBar": 2, "subdivision": 4, "bars": 1
          },
          {
            "name": "COUNT IN THE BAND", "description": "4 beats to count in the band", "subdivisionsPerBar": 4, "subdivision": 4, "bars": 1
          },
          {
            "name": "INTRO GUITAR", "description": "NO DRUMS", "subdivisionsPerBar": 4, "subdivision": 4, "bars": 4
          },
          {
            "name": "VERSE", "description": "2nd snare, HH", "subdivisionsPerBar": 4, "subdivision": 4, "bars": 15
          },
          {
            "name": "PRE CHORUS", "description": "16ths, no snare", "subdivisionsPerBar": 4, "subdivision": 4, "bars": 2
          },
          {
            "name": "CHORUS", "description": "16ths on open HH", "subdivisionsPerBar": 4, "subdivision": 4, "bars": 15
          },
          {
            "name": "PRE VERSE", "description": "NO DRUMS", "subdivisionsPerBar": 4, "subdivision": 4, "bars": 2
          },
          {
            "name": "VERSE", "description": "2nd snare, HH", "subdivisionsPerBar": 4, "subdivision": 4, "bars": 31
          },
          {
            "name": "PRE CHORUS", "description": "16ths, no snare", "subdivisionsPerBar": 4, "subdivision": 4, "bars": 2
          },
          {
            "name": "CHORUS", "description": "16ths on open HH", "subdivisionsPerBar": 4, "subdivision": 4, "bars": 31
          }
        ]
      },
      {
        "title": "Lonely Ghost",
        "bpm": 91,
        "parts": [
          {
            "name": "GET TEMPO", "description": "4 beats to get the tempo going", "subdivisionsPerBar": 2, "subdivision": 4, "bars": 1
          },
          {
            "name": "COUNT IN THE BAND", "description": "4 beats to count in the band", "subdivisionsPerBar": 4, "subdivision": 4, "bars": 1
          },
          {
            "name": "GUITAR INTRO", "description": "No drums", "subdivisionsPerBar": 4, "subdivision": 4, "bars": 4
          },
          {
            "name": "VERSE", "description": "HH", "subdivisionsPerBar": 4, "subdivision": 4, "bars": 8
          },
          {
            "name": "CHORUS", "description": "Ride", "subdivisionsPerBar": 4, "subdivision": 4, "bars": 8
          },
          {
            "name": "VERSE", "description": "HH", "subdivisionsPerBar": 4, "subdivision": 4, "bars": 8
          },
          {
            "name": "CHORUS", "description": "Ride", "subdivisionsPerBar": 4, "subdivision": 4, "bars": 8
          },
          {
            "name": "CHORUS 2", "description": "Ride", "subdivisionsPerBar": 4, "subdivision": 4, "bars": 16
          },
          {
            "name": "PAUSE", "description": "NO DRUMS", "subdivisionsPerBar": 4, "subdivision": 4, "bars": 4
          },
          {
            "name": "VERSE", "description": "HH", "subdivisionsPerBar": 4, "subdivision": 4, "bars": 8
          },
          {
            "name": "CHORUS", "description": "Ride", "subdivisionsPerBar": 4, "subdivision": 4, "bars": 8
          },
          {
            "name": "CHORUS 2", "description": "Ride, finish on last snare", "subdivisionsPerBar": 4, "subdivision": 4, "bars": 16
          }
        ]
      },
      {
        "title": "Solitude",
        "bpm": 98,
        "parts": [
          {
            "name": "GET TEMPO", "description": "4 beats to get the tempo going", "subdivisionsPerBar": 2, "subdivision": 4, "bars": 1
          },
          {
            "name": "COUNT IN THE BAND", "description": "4 beats to count in the band", "subdivisionsPerBar": 4, "subdivision": 4, "bars": 1
          },
          {
            "name": "GUITAR RIFF", "description": "No drums", "subdivisionsPerBar": 4, "subdivision": 4, "bars": 4
          },
          {
            "name": "VERSE", "description": "HH, snare", "subdivisionsPerBar": 4, "subdivision": 4, "bars": 8
          },
          {
            "name": "CHORUS", "description": "Open HH", "subdivisionsPerBar": 4, "subdivision": 4, "bars": 8
          },
          {
            "name": "GUITAR RIFF", "description": "No drums", "subdivisionsPerBar": 4, "subdivision": 4, "bars": 4
          },
          {
            "name": "CHORUS", "description": "Open HH", "subdivisionsPerBar": 4, "subdivision": 4, "bars": 8
          },
          {
            "name": "VERSE - THE IT", "description": "HH, open HH on every beat", "subdivisionsPerBar": 4, "subdivision": 4, "bars": 16
          },
          {
            "name": "GUITAR RIFF", "description": "No drums", "subdivisionsPerBar": 4, "subdivision": 4, "bars": 4
          },
          {
            "name": "BRIDGE", "description": "Just HH and snare", "subdivisionsPerBar": 4, "subdivision": 4, "bars": 8
          },
          {
            "name": "CHORUS", "description": "Open HH", "subdivisionsPerBar": 4, "subdivision": 4, "bars": 8
          },
          {
            "name": "VERSE - THE IT", "description": "HH, open HH on every beat", "subdivisionsPerBar": 4, "subdivision": 4, "bars": 16
          },
          {
            "name": "OUTRO", "description": "Just open HH", "subdivisionsPerBar": 4, "subdivision": 4, "bars": 16
          }
        ]
      },
      {
        "title": "In my head",
        "bpm": 112,
        "parts": [
          {
            "name": "GET TEMPO", "description": "4 beats to get the tempo going", "subdivisionsPerBar": 2, "subdivision": 4, "bars": 1
          },
          {
            "name": "COUNT IN THE BAND", "description": "4 beats to count in the band", "subdivisionsPerBar": 4, "subdivision": 4, "bars": 1
          },
          {
            "name": "INTRO GUITAR - NO DRUMS", "description": "NO DRUMS", "subdivisionsPerBar": 4, "subdivision": 4, "bars": 4
          },
          {
            "name": "INTRO WITH DRUMS", "description": "Ride, Loud", "subdivisionsPerBar": 4, "subdivision": 4, "bars": 16
          },
          {
            "name": "Verse 1 - Rama", "description": "HH, Rama", "subdivisionsPerBar": 4, "subdivision": 4, "bars": 16
          },
          {
            "name": "Chorus", "description": "Ride, Loud", "subdivisionsPerBar": 4, "subdivision": 4, "bars": 16
          },
          {
            "name": "Verse 2 - Rama", "description": "HH, Rama", "subdivisionsPerBar": 4, "subdivision": 4, "bars": 16
          },
          {
            "name": "Chorus", "description": "Ride, Loud STOPURI", "subdivisionsPerBar": 4, "subdivision": 4, "bars": 32
          }
        ]
      },
      {
        "title": "Skin",
        "bpm": 86,
        "parts": [
          {
            "name": "GET TEMPO", "description": "4 beats to get the tempo going", "subdivisionsPerBar": 2, "subdivision": 4, "bars": 1
          },
          {
            "name": "COUNT IN THE BAND", "description": "4 beats to count in the band", "subdivisionsPerBar": 4, "subdivision": 4, "bars": 1
          },
          {
            "name": "PRE VERSE", "description": "HH, Rim, 16ths", "subdivisionsPerBar": 4, "subdivision": 4, "bars": 4
          },
          {
            "name": "VERSE", "description": "HH, Snare, 16ths", "subdivisionsPerBar": 4, "subdivision": 4, "bars": 8
          },
          {
            "name": "CHORUS", "description": "HH, Snare, 8ths, Syncopated", "subdivisionsPerBar": 4, "subdivision": 4, "bars": 8
          },
          {
            "name": "PRE VERSE", "description": "HH, Rim, 16ths", "subdivisionsPerBar": 4, "subdivision": 4, "bars": 4
          },
          {
            "name": "VERSE", "description": "HH, Snare, 16ths", "subdivisionsPerBar": 4, "subdivision": 4, "bars": 8
          },
          {
            "name": "CHORUS", "description": "HH, Snare, 8ths, Syncopated", "subdivisionsPerBar": 4, "subdivision": 4, "bars": 8
          },
          {
            "name": "PRE VERSE", "description": "HH, Rim, 16ths", "subdivisionsPerBar": 4, "subdivision": 4, "bars": 4
          },
          {
            "name": "VERSE", "description": "HH, Snare, 16ths", "subdivisionsPerBar": 4, "subdivision": 4, "bars": 16
          },
          {
            "name": "OUTRO", "description": "Ride, wash", "subdivisionsPerBar": 4, "subdivision": 4, "bars": 32
          }
        ]
      },
      {
        "title": "Melting Clouds (cu final)",
        "bpm": 120,
        "parts": [
          {
            "name": "GET TEMPO", "description": "4 beats to get the tempo going", "subdivisionsPerBar": 2, "subdivision": 4, "bars": 1
          },
          {
            "name": "COUNT IN THE BAND", "description": "4 beats to count in the band", "subdivisionsPerBar": 4, "subdivision": 4, "bars": 1
          },
          {
            "name": "INTRO GUITAR", "description": "NO DRUMS", "subdivisionsPerBar": 4, "subdivision": 4, "bars": 4
          },
          {
            "name": "CHORUS", "description": "HH, 4th notes", "subdivisionsPerBar": 4, "subdivision": 4, "bars": 8
          },
          {
            "name": "CHORUS - INSTRUMENTAL", "description": "HH, 4th notes, also play open HH with left hand", "subdivisionsPerBar": 4, "subdivision": 4, "bars": 8
          },
          {
            "name": "VERSE", "description": "Ride, Rim, 8ths", "subdivisionsPerBar": 4, "subdivision": 4, "bars": 16
          },
          {
            "name": "CHORUS", "description": "HH, 4th notes", "subdivisionsPerBar": 4, "subdivision": 4, "bars": 16
          },
          {
            "name": "CHORUS - INSTRUMENTAL", "description": "HH, 4th notes", "subdivisionsPerBar": 4, "subdivision": 4, "bars": 8
          },
          {
            "name": "VERSE", "description": "RIDE, Rim, 8ths", "subdivisionsPerBar": 4, "subdivision": 4, "bars": 16
          },
          {
            "name": "CHORUS", "description": "HH, 4th notes", "subdivisionsPerBar": 4, "subdivision": 4, "bars": 16
          },
          {
            "name": "CHORUS - INSTRUMENTAL", "description": "HH, 4th notes", "subdivisionsPerBar": 4, "subdivision": 4, "bars": 8
          }
        ]
      },
      {
        "title": "Brown eyes",
        "bpm": 74,
        "parts": [
          {
            "name": "GET TEMPO", "description": "4 beats to get the tempo going", "subdivisionsPerBar": 2, "subdivision": 4, "bars": 1
          },
          {
            "name": "COUNT IN THE BAND", "description": "4 beats to count in the band", "subdivisionsPerBar": 4, "subdivision": 4, "bars": 1
          },
          {
            "name": "INTRO GUITAR", "description": "NO DRUMS", "subdivisionsPerBar": 4, "subdivision": 4, "bars": 4
          },
          {
            "name": "VERSE 1", "description": "NO DRUMS", "subdivisionsPerBar": 4, "subdivision": 4, "bars": 17
          },
          {
            "name": "BRIDGE", "description": "HH Only", "subdivisionsPerBar": 4, "subdivision": 4, "bars": 4
          },
          {
            "name": "VERSE 2", "description": "HH, 8ths, Rim", "subdivisionsPerBar": 4, "subdivision": 4, "bars": 17
          },
          {
            "name": "CHORUS", "description": "Snare, open HH - pana la jumate accent pe patrime, de la jumate drept", "subdivisionsPerBar": 4, "subdivision": 4, "bars": 16
          }
        ]
      },
      {
        "title": "The Spell",
        "bpm": 120,
        "parts": [
          {
            "name": "GET TEMPO", "description": "4 beats to get the tempo going", "subdivisionsPerBar": 2, "subdivision": 4, "bars": 1
          },
          {
            "name": "COUNT IN THE BAND", "description": "4 beats to count in the band", "subdivisionsPerBar": 4, "subdivision": 4, "bars": 1
          },
          {
            "name": "INTRO - NO DRUMS", "description": "Vocals + guitar only", "subdivisionsPerBar": 4, "subdivision": 4, "bars": 20
          },
          {
            "name": "BRIDGE", "description": "BRIDGE", "subdivisionsPerBar": 4, "subdivision": 4, "bars": 8
          },
          {
            "name": "VERSE", "description": "Verse", "subdivisionsPerBar": 4, "subdivision": 4, "bars": 16
          },
          {
            "name": "BRIDGE", "description": "Bridge", "subdivisionsPerBar": 4, "subdivision": 4, "bars": 8
          },
          {
            "name": "NO DRUMS", "description": "No Drums", "subdivisionsPerBar": 4, "subdivision": 4, "bars": 8
          },
          {
            "name": "CHORUS", "description": "Chorus", "subdivisionsPerBar": 4, "subdivision": 4, "bars": 16
          },
          {
            "name": "NO DRUMS", "description": "No drums", "subdivisionsPerBar": 4, "subdivision": 4, "bars": 12
          },
          {
            "name": "BRIDGE", "description": "Bridge", "subdivisionsPerBar": 4, "subdivision": 4, "bars": 8
          },
          {
            "name": "NO DRUMS", "description": "No drums", "subdivisionsPerBar": 4, "subdivision": 4, "bars": 8
          },
          {
            "name": "CHORUS", "description": "Chorus", "subdivisionsPerBar": 4, "subdivision": 4, "bars": 32
          }
        ]
      },
      {
        "title": "Inner friend",
        "bpm": 122,
        "parts": [
          {
            "name": "GET TEMPO", "description": "4 beats to get the tempo going", "subdivisionsPerBar": 2, "subdivision": 4, "bars": 1
          },
          {
            "name": "COUNT IN THE BAND", "description": "4 beats to count in the band", "subdivisionsPerBar": 4, "subdivision": 4, "bars": 1
          },
          {
            "name": "INTRO GUITAR", "description": "NO DRUMS", "subdivisionsPerBar": 4, "subdivision": 4, "bars": 4
          },
          {
            "name": "VERSE", "description": "NO DRUMS", "subdivisionsPerBar": 4, "subdivision": 4, "bars": 16
          },
          {
            "name": "CHORUS", "description": "HH and Tambourine", "subdivisionsPerBar": 4, "subdivision": 4, "bars": 16
          },
          {
            "name": "VERSE - NO DRUMS", "description": "Start on the last bar, crazy ride / rim pattern", "subdivisionsPerBar": 4, "subdivision": 4, "bars": 4
          },
          {
            "name": "VERSE", "description": "Crazy ride / rim pattern", "subdivisionsPerBar": 4, "subdivision": 4, "bars": 12
          },
          {
            "name": "CHORUS", "description": "HH and Tambourine", "subdivisionsPerBar": 4, "subdivision": 4, "bars": 16
          },
          {
            "name": "BRIDGE - RAMA", "description": "HH and Tambourine", "subdivisionsPerBar": 4, "subdivision": 4, "bars": 8
          },
          {
            "name": "BRIDGE - SNARE", "description": "HH and Tambourine", "subdivisionsPerBar": 4, "subdivision": 4, "bars": 16
          },
          {
            "name": "CHORUS", "description": "HH and Tambourine", "subdivisionsPerBar": 4, "subdivision": 4, "bars": 16
          }
        ]
      },
      {
        "title": "Maggie",
        "bpm": 110,
        "parts": [
          {
            "name": "GET TEMPO", "description": "4 beats to get the tempo going", "subdivisionsPerBar": 2, "subdivision": 4, "bars": 1
          },
          {
            "name": "COUNT IN THE BAND", "description": "4 beats to count in the band", "subdivisionsPerBar": 4, "subdivision": 4, "bars": 1
          },
          {
            "name": "CHORUS", "description": "Open HH B-SBB-SBB-SBBS-- | B-SBB-SBB-SBBSS-", "subdivisionsPerBar": 4, "subdivision": 4, "bars": 16
          },
          {
            "name": "VERSE", "description": "HH, Rim", "subdivisionsPerBar": 4, "subdivision": 4, "bars": 20
          },
          {
            "name": "BRIDGE", "description": "HH, Rim", "subdivisionsPerBar": 13, "subdivision": 4, "bars": 2
          },
          {
            "name": "PAUSE - NO DRUMS", "description": "HH, Rim", "subdivisionsPerBar": 4, "subdivision": 4, "bars": 1
          },
          {
            "name": "VERSE", "description": "HH, Rim", "subdivisionsPerBar": 4, "subdivision": 4, "bars": 16
          },
          {
            "name": "BRIDGE", "description": "HH, Rim", "subdivisionsPerBar": 13, "subdivision": 4, "bars": 2
          },
          {
            "name": "CHORUS", "description": "Open HH B-SBB-SBB-SBBS-- | B-SBB-SBB-SBBSS-", "subdivisionsPerBar": 4, "subdivision": 4, "bars": 16
          },
          {
            "name": "BRIDGE INSTRUMENTAL", "description": "Ride Wash", "subdivisionsPerBar": 4, "subdivision": 4, "bars": 8
          },
          {
            "name": "CHORUS", "description": "Open HH B-SBB-SBB-SBBS-- | B-SBB-SBB-SBBSS-", "subdivisionsPerBar": 4, "subdivision": 4, "bars": 16
          }
        ]
      },
      {
        "title": "Anna",
        "bpm": 76,
        "parts": [
          {
            "name": "GET TEMPO", "description": "4 beats to get the tempo going", "subdivisionsPerBar": 2, "subdivision": 4, "bars": 1
          },
          {
            "name": "COUNT IN THE BAND", "description": "4 beats to count in the band", "subdivisionsPerBar": 4, "subdivision": 4, "bars": 1
          },
          {
            "name": "INTRO", "description": "NO DRUMS", "subdivisionsPerBar": 4, "subdivision": 4, "bars": 2
          },
          {
            "name": "VERSE 1", "description": "Rama", "subdivisionsPerBar": 4, "subdivision": 4, "bars": 6
          },
          {
            "name": "GUITAR SOLO", "description": "Open HH - 2 tobe mari", "subdivisionsPerBar": 4, "subdivision": 4, "bars": 8
          },
          {
            "name": "VERSE 2", "description": "Rama", "subdivisionsPerBar": 4, "subdivision": 4, "bars": 8
          },
          {
            "name": "CHORUS", "description": "Snare, Ride - 2 tobe mari", "subdivisionsPerBar": 4, "subdivision": 4, "bars": 8
          },
          {
            "name": "BRIDGE", "description": "NO DRUMS", "subdivisionsPerBar": 4, "subdivision": 4, "bars": 2
          },
          {
            "name": "GUITAR SOLO", "description": "Open HH - 2 tobe mari", "subdivisionsPerBar": 4, "subdivision": 4, "bars": 8
          },
          {
            "name": "CHORUS", "description": "Snare, Ride - 2 tobe mari", "subdivisionsPerBar": 4, "subdivision": 4, "bars": 8
          },
          {
            "name": "GUITAR SOLO", "description": "Open HH - 2 tobe mari", "subdivisionsPerBar": 4, "subdivision": 4, "bars": 8
          }
        ]
      }
    ]
  }
]`);

class AnotherRoute extends Component {
  render() {
    return (
      <GigmatePlayer setLists={setLists} />
    );
  }
}

export default AnotherRoute;
