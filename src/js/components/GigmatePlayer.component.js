'use strict';

import React, {Component, PropTypes} from 'react';
import jquery from 'jquery';

let songPartTimeoutPromise;
const beatWidth = 20;
// bg colors for song parts
const songPartBackgrounds = [
  'rgba(150, 100, 50, .5)',
  'rgba(50, 150, 100, .5)',
  'rgba(100, 50, 150, .5)',
  'rgba(175, 175, 50, .5)',
  'rgba(50, 175, 175, .5)',
  'rgba(175, 50, 175, .5)'
];

class GigmatePlayer extends Component {
  constructor() {
    super();
    
    this.updateCurrentSongPart = this.updateCurrentSongPart.bind(this);
    this.completeHandler = this.completeHandler.bind(this);
    this.prevSong = this.prevSong.bind(this);
    this.nextSong = this.nextSong.bind(this);
    this.nextSetlist = this.nextSetlist.bind(this);
    this.prevSetlist = this.prevSetlist.bind(this);
    this.startSong = this.startSong.bind(this);
    this.handleKeyDown = this.handleKeyDown.bind(this);
    
    this.state = {
      currentSong: 0,
      currentSetlist: 0,
      currentSongPart: 0
    };
    
    jquery(document).on('keydown', this.handleKeyDown);
  }
  
  handleKeyDown(e) {
    // TODO only prevent default if certain keys are pressed
    e.preventDefault();
    switch (e.which) {
      case 37:
        this.prevSong();
        break;
      case 39:
        this.nextSong();
        break;
      case 38:
        this.nextSetlist();
        break;
      case 40:
        this.prevSetlist();
        break;
      case 32:
        this.startSong();
        break;
      default: return;
    }
  }
  
  // returns a reference to the current setlist
  getCurrentSetList() {
    return this.props.setLists[this.state.currentSetlist];
  }
  
  // returns a reference to the current song
  getCurrentSong() {
    return this.getCurrentSetList().songs[this.state.currentSong];
  }
  
  // returns the current song part
  getCurrentSongPart() {
    return this.getCurrentSong().parts[this.state.currentSongPart];
  }
  
  // returns the description for the current (playing) song part
  getCurrentSongPartDescription() {
    return this.getCurrentSongPart().description;
  }
  
  // returns the description for the next song part
  getNextSongPartDescription() {
    if (this.state.currentSongPart >= this.getCurrentSong().parts.length - 1) {
      return '';
    }
    
    return this.getCurrentSong().parts[this.state.currentSongPart + 1].description;
  }
  
  // returns the name for the current (playing) song part
  getCurrentSongPartName() {
    return this.getCurrentSongPart().name;
  }
  
  // returns the name for the next song part
  getNextSongPartName() {
    if (this.state.currentSongPart >= this.getCurrentSong().parts.length - 1) {
      return '';
    }
    
    return this.getCurrentSong().parts[this.state.currentSongPart + 1].name;
  }
  
  // Returns the beat width
  getBeatWidth() {
    return beatWidth;
  }
  
  // gets the number of beats (4th notes) in a given song part
  getBeatsInSongPart(songPart) {
    return (songPart.bars * songPart.subdivisionsPerBar) * (4 / songPart.subdivision);
  }
  
  // given the song part, returns the correct subdivision width (depending on the time signature)
  getSubdivisionWidthForSongPart(songPart) {
    // width is 20 for 4th note, 10 for 8th note and 5 for 16th note
    // the width for 4th note is the default
    let width = 20;
    
    if (songPart.subdivision === 8) {
      width = 10;
    } else if (songPart.subdivision === 16) {
      width = 5;
    }
    
    return width;
  }
  
  // depending on the subdivision of the part, returns the appropriate bg image
  getBgImageForSongPart(songPart) {
    const height = 1;
    const width = this.getSubdivisionWidthForSongPart(songPart);
    
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');
    canvas.width = width;
    canvas.height = height;
    
    ctx.fillStyle = 'rgba(100, 100, 100, 0.4)';
    ctx.fillRect(0, 0, width, height);
    
    ctx.strokeStyle = 'rgb(0, 0, 0)';
    ctx.beginPath();
    ctx.moveTo(0, 0);
    ctx.lineTo(0, height);
    ctx.stroke();
    
    return canvas.toDataURL();
  }
  
  // returns the song's width when rendered
  getCurrentSongWidth() {
    return this.getSongTotalBeats(this.getCurrentSong()) * this.getBeatWidth();
  }
  
  // returns the color for a given song part
  getColorForSongPart(songPartIndex) {
    return songPartBackgrounds[songPartIndex % songPartBackgrounds.length];
  }
  
  // itterates through all the parts in the song and computes the total number of beats (4th notes)
  getSongTotalBeats(song) {
    let  totalBeats = 0;
    for (let i = 0; i < song.parts.length; i += 1) {
      totalBeats += this.getBeatsInSongPart(song.parts[i]);
    }

    return totalBeats;
  }
  
  // returns the duration of a song part (in minutes)
  getCurrentSongPartDuration() {
    // TODO check the result of this (floating point issues)
    return this.getBeatsInSongPart(this.getCurrentSongPart()) / this.getCurrentSong().bpm * 1000 * 60;
  }
  
  // depending on the number of beats (4th notes) in the song, calculates the song's duration
  getSongDuration(song) {
    return this.getSongTotalBeats(song) / song.bpm;
  }
  
  // depending on the number of beats (4th notes) in the song, calculates the song's duration and returns a string mm:ss
  getSongDurationMinsSecs(song) {
    return this.convertMinsToMinsSecs(this.getSongDuration(song));
  }
  
  // get the mm:ss duration for a given setlist
  getSetlistDurationMinsSecs(setList) {
    let totalMins = 0;
    for (let i = 0; i < setList.songs.length; i += 1) {
      totalMins += this.getSongDuration(setList.songs[i]);
    }
    
    return this.convertMinsToMinsSecs(totalMins);
  }
  
  convertMinsToMinsSecs(totalMins) {
    let secs = parseInt(totalMins * 60, 10);
    let mins = Math.floor(secs / 60);
    secs = secs % 60;
    mins < 10 ?  mins = `0${mins}` : mins;
    secs < 10 ?  secs = `0${secs}` : secs;
    return `${mins}:${secs}`;
  }
  
  // updates the song part on the scope to the current song part
  updateCurrentSongPart() {
    // TODO - clear this timeout, AKA, make it so that this doesn't get called if the song stopped playing
    if (this.state.currentSongPart >= this.getCurrentSong().parts.length - 1) {
      this.nextSong();
      return;
    }
    
    this.setState({
      currentSongPart: this.state.currentSongPart + 1
    });
    
    songPartTimeoutPromise = setTimeout(
      this.updateCurrentSongPart,
      this.getCurrentSongPartDuration()
    );
  }
  
  nextSong() {
    this.stopSong();
    this.setState({
      currentSongPart: 0
    });
    
    if (this.state.currentSong < this.getCurrentSetList().songs.length - 1) {
      this.setState({
        currentSong: this.state.currentSong + 1
      });
    }
  }
  
  prevSong() {
    this.stopSong();
    
    this.setState({
      currentSongPart: 0
    });
    
    if (this.state.currentSong > 0) {
      this.setState({
        currentSong: this.state.currentSong - 1
      });
    }
  }
  
  nextSetlist() {
    this.stopSong();
    
    this.setState({
      currentSongPart: 0,
      currentSong: 0
    });
    
    if (this.state.currentSetlist < this.props.setLists.length - 1) {
      this.setState({
        currentSetlist: this.state.currentSetlist + 1
      });
    }
  }
  
  prevSetlist() {
    this.stopSong();
    
    this.setState({
      currentSongPart: 0,
      currentSong: 0
    });
    
    if (this.state.currentSetlist > 0) {
      this.setState({
        currentSetlist: this.state.currentSetlist - 1
      });
    }
  }
  
  stopSong() {
    clearTimeout(songPartTimeoutPromise);
    jquery('.parts-wrapper').stop();
    jquery('.parts-wrapper').css('margin-left', '0px');
    
    // if($scope.currentSong > 0 || $scope.currentSong < setLists[$scope.currentSetlist].songs.length - 1) {
    // $scope.currentSongPart = 0;
    // }
  }
  
  startSong() {
    jquery('.parts-wrapper').animate(
      {
        marginLeft: `-${this.getCurrentSongWidth()}px`
      },
      this.getSongDuration(this.getCurrentSong()) * 1000 * 60, 'linear', this.completeHandler
    );
    // TODO - see why I'm getting an error at the end of the song if I uncomment this.
    songPartTimeoutPromise = setTimeout(
      this.updateCurrentSongPart,
      this.getCurrentSongPartDuration()
    );
  }
  
  completeHandler() {
    console.log('DONE');
  }
  
  render() {
    const currentSetList = this.getCurrentSetList();
    const beatWidth = this.getBeatWidth();
    
    const songParts = this.getCurrentSong().parts.map((songPart, songPartIndex) => {
      const beatsInCrtSongPart = this.getBeatsInSongPart(songPart);
      
      const barsJSX = [];
      for (let barIndex = 0; barIndex < songPart.bars; barIndex += 1) {
        barsJSX.push(
          <div
            key={songPartIndex + '-' + barIndex}
            className="bar-wrapper"
            style={{
              width: beatsInCrtSongPart * beatWidth / songPart.bars
            }}
          />
        );
      }
      
      return (
        <div
          key={songPartIndex}
          className="song-part-wrapper"
          style={{
            width: this.getBeatsInSongPart(songPart) * beatWidth,
            backgroundImage: `url(${this.getBgImageForSongPart(songPart)})`,
            backgroundColor: this.getColorForSongPart(songPartIndex)
          }}
        >
          <div className="song-part-inner">
            <span className="song-name">{songPart.name}</span>
          </div>
          
          {barsJSX}
        </div>
      );
    });
    
    return (
      <div className="gigmate-player-wrapper">
        <div className="main-wrapper">
          <div className="header">
            {currentSetList.title} ({this.getSetlistDurationMinsSecs(currentSetList)}) &#62; {this.state.currentSong + 1}. {this.getCurrentSong().title} | ({this.getSongDurationMinsSecs(this.getCurrentSong())}) {this.getCurrentSong().bpm} BPM
          </div>
          
          <div className="main-parts-wrapper">
            <div className="parts-wrapper" style={{width: this.getCurrentSongWidth()}}>
              {songParts}
            </div>
          </div>
          
          <div className="parts-details-wrapper clearfix">
            <div className="current-part-wrapper">
              <p className="current-next-title">Current<br/>{this.getCurrentSongPartName()}</p>
              <span className="current-next-description">{this.getCurrentSongPartDescription()}</span>
            </div>
            <div className="next-part-wrapper">
              <p className="current-next-title">Next<br/>{this.getNextSongPartName()}</p>
              <span className="current-next-description">{this.getNextSongPartDescription()}</span>
            </div>
          </div>

          <div className="controls">
            <div className="prev-btn" onClick={this.prevSong}>&#60;</div>
            <div className="start-btn" onClick={this.startSong}>START</div>
            <div className="next-btn" onClick={this.nextSong}>&#62;</div>
          </div>
        </div>
      </div>
    );
  }
}

GigmatePlayer.propTypes = {
  setLists: PropTypes.array.isRequired
};

export default GigmatePlayer;
