$(document).ready(function() {
  pageInit();
});

function pageInit() {
  //centerBlocks();
}

function centerBlocks() {
  setTimeout(
    function() {
      centerBlock('#intro');
      centerBlock('#use');
      centerBlock('#passion');
      centerBlock('#contacts');
      centerBlock('#intro .left');
      centerBlock('#use .left');
      centerBlock('#passion .left');
      centerBlock('#contacts .left');
      centerBlock('#contacts .center');

    }, 150);
}

function centerBlock(target) {
  var parent = $(target).parent();
  var blockHeight;
  var blockMargin;
  if (parent.prop("tagName") === 'BODY') {
    target = $(target).children('.block');
    blockHeight = target.height();
    blockMargin = (window.innerHeight - blockHeight) / 2;
    target.css('margin-top', blockMargin);
  } else {
    blockHeight = $(target).height();
    blockMargin = ($(target).parent().height() - blockHeight) / 2;
    $(target).css('margin-top', blockMargin);
  }
}
