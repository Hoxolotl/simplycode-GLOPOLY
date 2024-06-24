async function(params) {
  await simplyApp.actions.start()
  await simplyApp.actions.hhsConnectSpace([params.word1, params.word2, params.word3])
  document.location.hash=params.nextHash
}