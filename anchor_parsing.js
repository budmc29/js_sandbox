function externalLink(anchor) {
  let hrefRegex = new RegExp('href=(\'|\")(.*)(\'|\")');

  console.log(anchor)
  console.log(hrefRegex.test(anchor))

  if (hrefRegex.test(anchor)) {
    return hrefRegex.exec(anchor)[2];
  }
}

function parseAnchor(string) {
  let stripped = string.replace(/\[(.+)\]\(.+\)/gi, '$1').replace(/(<([^>]+)>)/ig, '');
  let clean = stripped.replace(/`/g, '');
  let id = clean.replace(/[^\w\u4e00-\u9fa5]+/g, '-').toLowerCase();

  return {
    title: clean,
    id: id
  };
}

heading = function(text, level, raw) {
  let parsed = parseAnchor(raw);
  let id = parsed.id;
  let title = parsed.title;
  let href = externalLink(text);
  let pageLink = `#${id}`;
  let span;

  // console.log(parsed)

  if (typeof href === 'undefined') {
    span = `<span class="text">${title}</span>`
  } else {
    span = `<span class="text"><a href="${href}">${title}</a></span>`
  }

  return (
    `<h${level} class="headerXXX">
      <a class="anchor" aria-hidden="true" href="${pageLink}" id="${id}"></a>
      ${span}
      <a aria-label="${title}" class="icon-link" href="${pageLink}"></a>
    </h${level}>\n`
  );
};

// let text = "Extracting Boilerplate"
// let level = 2
// let raw = 'Extracting <a href="#test">lin</a> Boilerplate'



// let text = '<a href="https://raw.githubusercontent.com/webpack-contrib/mini-css-extract-plugin/master/LICENSE">MIT</a>'
// let raw = '[MIT](https://raw.githubusercontent.com/webpack-contrib/mini-css-extract-plugin/master/LICENSE)'

// let text = '<a href="https://raw.githubusercontent.com/webpack-contrib/terser-webpack-plugin/master/.github/CONTRIBUTING">CONTRIBUTING</a>'
// let raw = '[CONTRIBUTING](https://raw.githubusercontent.com/webpack-contrib/terser-webpack-plugin/master/.github/CONTRIBUTING)'

let text = '<a href="https://raw.githubusercontent.com/webpack-contrib/terser-webpack-plugin/master/LICENSE">MIT</a>'
let raw = '[MIT](https://raw.githubusercontent.com/webpack-contrib/terser-webpack-plugin/master/LICENSE)'

// let text = '<a href="https://github.com/peerigon/extract-loader/tree/master/examples/index-html">Extracting the index.html</a>'
// let raw = '[Extracting the index.html](https://github.com/peerigon/extract-loader/tree/master/examples/index-html)'

// let text = '<a href="https://couto.mit-license.org/">License</a>'
// let raw = '[License](https://couto.mit-license.org/)'


console.log(heading(text, 2, raw))
// console.log(parseAnchor(text))
