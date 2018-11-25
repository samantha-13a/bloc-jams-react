import React, { Component } from 'react';

class PlayerBar extends Component {
  formatTime(duration) {
    const minutes = Math.floor(duration / 60);
    const seconds = ('0' + Math.floor(duration - (minutes * 60))).slice(-2);
    return minutes + ':' + seconds;
  }

  render() {
    return (
      <section className="player-bar">
        <section id="buttons">
          <button id="previous" onClick={this.props.handlePrevClick}>
            <span className="ion-md-skip-backward"></span>
          </button>
          <button id="play-pause" onClick={this.props.handleSongClick} >
            <span className={this.props.isPlaying ? 'ion-md-pause' : 'ion-md-play'}></span>
          </button>
          <button id="next" onClick={this.props.handleNextClick}>
            <span className="ion-md-skip-forward"></span>
          </button>
        </section>
        <section id="time-control">
          <span className="current-time">{this.formatTime(this.props.currentTime)}</span>
          <input 
            type="range" 
            className="seek-bar" 
            value={(this.props.currentTime / this.props.duration) || 0}
            max="1"
            min="0"
            step="0.01"
            onChange={this.props.handleTimeChange}
          />
          <span className="total-time">{this.formatTime(this.props.duration)}</span>
        </section>
        <section id="volume-control">
          <span className="icon ion-md-volume-low"></span>
          <input
            type="range"
            className="seek-bar" 
            value={(this.props.currentVolume)}
            max="1"
            min="0"
            step="0.01"
            onChange={this.props.handleVolumeChange}
          />
          <span className="icon ion-md-volume-high"></span>
        </section>
      </section>
    );
  }
}

export default PlayerBar;