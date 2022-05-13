var mutationObserver = new MutationObserver(function (mutations) {
  mutations.forEach(function (mutation) {
    if (
      mutation.target ===
      document.querySelector("div[jsname='WjL7X']").firstChild.firstChild
    ) {
      if (
        mutation.target.attributes.getNamedItem("aria-label").value ===
        "Você está apresentando"
      )
        console.log("Usuário está apresentando");
    }
  });
});

mutationObserver.observe(document, {
  attributes: true,
  characterData: true,
  childList: true,
  subtree: true,
  attributeOldValue: true,
  characterDataOldValue: true,
});
