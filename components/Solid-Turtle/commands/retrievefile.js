async function(form, values) {
  editor.pageData.retrieveStatus = 'Retrieving index.ttl…';
  try {
    const turtleFile = await simplyApp.actions.retrieveFile(values.solidProvider, values.websiteName);
    console.log(turtleFile);
    editor.pageData.retrieveStatus = 'Retrieved index.ttl.';
  } catch (error) {
    editor.pageData.retrieveStatus = error.message;
  }
}