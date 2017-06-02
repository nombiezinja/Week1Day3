var library = {
  tracks: { t01: { id: "t01",
                   name: "Code Monkey",
                   artist: "Jonathan Coulton",
                   album: "Thing a Week Three" },
            t02: { id: "t02",
                   name: "Model View Controller",
                   artist: "James Dempsey",
                   album: "WWDC 2003"},
            t03: { id: "t03",
                   name: "Four Thirty-Three",
                   artist: "John Cage",
                   album: "Woodstock 1952"}
          },
  playlists: { p01: { id: "p01",
                      name: "Coding Music",
                      tracks: ["t01", "t02"]
                    },
               p02: { id: "p02",
                      name: "Other Playlist",
                      tracks: ["t03"]
                    }
              },

  printTracks: function() {
    for (var tracks in this.tracks) {
      var numTracks = this.tracks[tracks];
      console.log(numTracks.id + ": " + numTracks.name + " by " + numTracks.artist + " (" + numTracks.album + ")");
    }
  },


  printPlaylists: function () {
  for (var list in this.playlists) {
    var numList = this.playlists[list];
    console.log(numList.id + ": " + numList.name + " - " + numList.tracks.length + " tracks");
    }
  },

  printPlaylist: function (playlistId) {
  const id = this.playlists[playlistId]
  console.log(id.id + ": " + id.name + " - " + id.tracks.length + " tracks");
  for (var i = 0; i < id.tracks.length; i++) {
    let callTrack = this.tracks[id.tracks[i]];
    console.log(callTrack.id + ": " + callTrack.name + " by " + callTrack.artist + " (" + callTrack.album + ")");
    }
  },

  addTrackToPlaylist: function (trackId, playlistId) {
    const callTrack = this.playlists[playlistId].tracks
    if (callTrack.indexOf(trackId) < 0) {
      this.playlists[playlistId].tracks.push(trackId)
    }
    return this.playlists;
  },


  addTrack: function (name, artist, album) {
    var uid = function() {
      return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
    }
    var trackId = uid()
      this.tracks[trackId]= {id: trackId, name: name, artist: artist, album: album}
      return this.tracks
  },

  addPlaylist: function (name) {
    var uid = function() {
      return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
    }
    var playlistId = uid()
    this.playlists[playlistId] = {id: playlistId, name: name, tracks:[]}
    return this.playlists
  }





}

// library.printTracks();

// library.printPlaylists();

// library.printPlaylist("p01");

// console.log(library.addTrackToPlaylist("t02", "p02" ))


// console.log(library.addTrack("hello", "John Singer", "New Album"))

console.log(library.addPlaylist("New Playlist"));

