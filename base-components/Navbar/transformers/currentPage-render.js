function(page) {
  this.originalData = page;
  return { "aria-current": page === this.dataset.page ? "page" : "false" };
}
