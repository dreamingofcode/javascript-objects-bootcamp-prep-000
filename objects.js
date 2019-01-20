var playlist = {
  artistName: "Slowdive",
  songTitle: "Alison",
}

function updatePlaylist(playlist, artistName, songTitle) {
  playlist['Phil Ochs'] = "Here's to the State of Mississippi"
  return playlist
}
var playlist= {artistName,songTitle};

function updatePlaylist(playlist,artistName,songTitle){
  playlist [artistName]='songTitle';
  return object.assign({},artistName,songTitle)
}