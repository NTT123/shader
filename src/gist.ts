const gh = new GitHub({ token: '___ 23729015f03bdc1f314154911de25b29c62a87fa .  ___' });
// Token: 23729015f03bdc1f314154911de25b29c62a87fa

let gist = gh.getGist(); // not a gist yet
gist.create({
  public: true,
  description: 'My first gist',
  files: {
    "file1.txt": {
      content: "Aren't gists great!"
    }
  }
}).then(function ({ data }) {
  // Promises!
  let createdGist = data;
  return gist.read();
}).then(function ({ data }) {
  let retrievedGist = data;
  // do interesting things
  console.log(data);

});

