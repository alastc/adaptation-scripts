# Adaptation Scripts
A set of user-scripts for adapting the view of websites for people with low-vision.

The aim is that these demonstrate what can be achieved via the browser for adapting layout, fonts, colors and spacing. These support <a href="https://github.com/w3c/wcag21/labels/LVTF">potential WCAG guidelines</a>, and enable us to establish what website designers &amp; developers need to do (or avoid) to enable that adaptation.

It is implemented as a script rather user-stylesheets or appending a new stylesheet to the page because a script allows more nuance in detecting different elements, and more power for over-riding the site styles.

## Status

Very early, one proof of concept that linearizes the page you are looking at.

## Demo

Open this <a href="https://alastairc.uk/tests/layouts/pixels.html">test-layout page</a> and select one of the 'linearise' links on the right.

You can save the Linearize link on the demo page to you browser's bookmarks and apply it to any site. 

Well, unless the site has a <a href="https://developer.mozilla.org/en-US/docs/Web/HTTP/CSP">Content Security Policy</a> preventing external scripts, in which case it won't work. Like Github does.

## To Do

Lots, initially to create equivalents for:

- Changing colors.
- Changing font-family.
- Adjusting spacing around text / elements.

For the technical implementation, I'm not a programmer by trade but I assume it would be best to:

- Remove the jQuery dependency (would need to create an equivalent to the `:visible` selector).
- Add user-configurable options.
- (Eventually) move these into a browser extension rather than rely on bookmarklets.

## Credits

Originally created by <a href="https://alastairc.ac">Alastair Campbell</a> working on &amp; with the <a href="https://www.w3.org/WAI/GL/low-vision-a11y-tf/">Low Vision Task Force</a>, but hoping that many others will join in and contribute!
