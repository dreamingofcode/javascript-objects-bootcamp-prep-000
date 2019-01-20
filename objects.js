
var playlist= {artistName,songTitle};

function updatePlaylist(playlist,artistName,songTitle){
  playlist [artistName]=songTitle;
  return playlist}


function updatePlaylist(playlist,artistName,songTitle){
  playlist[artistName]=songTitle
  return playlist
}

var playlist = {
  artistName: "Slowdive",
  songTitle: "Alison",
}

function updatePlaylist(playlist, artistName, songTitle) {
  playlist['Phil Ochs'] = "Here's to the State of Mississippi"
  return playlist
}

function removeFromPlaylist(playlist, artistName) {
  delete playlist[artistName]
  return playlist
}