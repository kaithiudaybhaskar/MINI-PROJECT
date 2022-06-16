function pasteFromClipboard () {
  var pasteText = document.querySelector('myInput')
  navigator.clipboard.readText().then(text => {
    alert('code copied')
  })
}
