# HTML Tutorial

## HTML Elements

### Never Skip the End Tag

```html
<html>
  <body>
    <!-- Some HTML elements will display correctly, even if you forget the end tag: -->
    <!-- <p>This is a paragraph -->
    <!-- However, never rely on this! Unexpected results and errors may occur if you forget the end tag! -->
    <p>This is a paragraph</p>
  </body>
</html>
```

### Empty HTML Elements

``

```html
<!-- HTML elements with no content are called empty elements.
The <br> tag defines a line break, and is an empty element without a closing tag: -->
<p>
  This is a <br />
  paragraph with a line break.
</p>
```

### HTML is Not Case Sensitive

HTML tags are not case sensitive: &lt;P&gt; means the same as &lt;p&gt;.The HTML standard does not require lowercase tags, but W3C recommends lowercase in HTML, and demands lowercase for stricter document types like XHTML.

## HTML Attributes

- All HTML elements can have attributes
- Attributes provide additional information about elements
- Attributes are always specified in the start tag
- Attributes usually come in name/value pairs like: name="value"

### We Suggest: Always Quote Attribute Values

The HTML standard does not require quotes around attribute values.

However, W3C recommends quotes in HTML, and demands quotes for stricter document types like XHTML.

```html
<!-- good -->
<a href="https://www.w3schools.com/html/">Visit our HTML tutorial</a>
<!-- bad -->
<a href=https://www.w3schools.com/html/>Visit our HTML tutorial</a>

```

### Single or Double Quotes?

Double quotes around attribute values are the most common in HTML, but single quotes can also be used.

In some situations, when the attribute value itself contains double quotes, it is necessary to use single quotes:

```html
<p title='John "ShotGun" Nelson'></p>
<!-- or -->
<p title="John 'ShotGun' Nelson"></p>
```

## HTML Headings

### HTML Headings

HTML headings are defined **with** the `<`h1`>` to `<`h6`>` tags.

`<`h1`>` defines the most important heading. `<`h6`>` defines the least important heading.

> Note: Browsers automatically add some white space (a margin) before and after a heading.

### Headings Are Important

Search engines use the headings to index the structure and content of your web pages.

Users often skim a page by its headings. It is important to use headings to show the document structure.

`<`h1`>` headings should be used for main headings, followed by `<`h2`>` headings, then the less important `<`h3`>`, and so on.

> Note: Use HTML headings for headings only. Don't use headings to make text BIG or bold.

## HTML Paragraphs

### HTML Paragraphs

The HTML `<p>` element defines a paragraph.

> A paragraph always starts on a new line, and browsers automatically add some white space (a margin) before and after a paragraph.

### HTML Display

You cannot be sure how HTML will be displayed.

Large or small screens, and resized windows will create different results.

With HTML, you cannot change the display by adding extra spaces or extra lines in your HTML code.

The browser will automatically remove any extra spaces and lines when the page is displayed:

```html
<p>
  <!-- This paragraph -->
  <!-- contains a lot of lines -->
  <!-- in the source code, -->
  <!-- but the browser -->
  <!-- ignores it. -->
  <!-- like follow -->
  This paragraph contains a lot of lines in the source code, but the browser
  ignores it.
</p>

<p>
  <!-- This paragraph -->
  <!-- contains         a lot of spaces -->
  <!-- in the source         code, -->
  <!-- but the        browser -->
  <!-- ignores it. -->
  <!-- like follow -->
  This paragraph contains a lot of lines in the source code, but the browser
  ignores it.
</p>
```

**display:**

<p>
  <!-- This paragraph -->
  <!-- contains         a lot of spaces -->
  <!-- in the source         code, -->
  <!-- but the        browser -->
  <!-- ignores it. -->
  <!-- like follow -->
  This paragraph contains a lot of lines in the source code, but the browser
  ignores it.
</p>
### HTML Horizontal Rules

The `<hr>` tag defines a thematic break in an HTML page, and is most often displayed as a horizontal rule.

The `<hr>` element is used to separate content (or define a change) in an HTML page:

```html
<h1>This is heading 1</h1>
<p>This is some text.</p>
<hr />
<h2>This is heading 2</h2>
<p>This is some other text.</p>
<hr />
```

**display:**

<h1>This is heading 1</h1>
<p>This is some text.</p>
<hr />
<h2>This is heading 2</h2>
<p>This is some other text.</p>
<hr />

### HTML Line Breaks

The HTML `<br>` element defines a line break.

Use `<br>` if you want a line break (a new line) without starting a new paragraph:

```html
<p>This is<br />a paragraph<br />with line breaks.</p>
```

**display:**

<p>This is<br />a paragraph<br />with line breaks.</p>

### Solution - The HTML `<pre>` Element

The HTML `<pre>` element defines preformatted text.

The text inside a `<pre>` element is displayed in a **fixed-width font** (usually Courier), and it **preserves both spaces and line breaks**:

```html
<pre>
  My Bonnie lies over the ocean.

  My Bonnie lies over the sea.

  My Bonnie lies over the ocean.

  Oh, bring back my Bonnie to me.
</pre>
```

**display:**

<pre>
  My Bonnie lies over the ocean.

  My Bonnie lies over the sea.

  My Bonnie lies over the ocean.

  Oh, bring back my Bonnie to me.
</pre>

## HTML style

### HTML style

The HTML style attribute is used to add styles to an element, such as color, font, size, and more.

### The HTML Style Attribute

The HTML style attribute has the following syntax:

```html
<tagname style="property:value;"></tagname>
```

The property is a CSS property. The value is a CSS value.

### Background Color

The CSS background-color property defines the background color for an HTML element.

```html
<body>
  <h1 style="background-color:powderblue;">This is a heading</h1>
  <p style="background-color:tomato;">This is a paragraph.</p>
</body>
```

### Text Color

The CSS color property defines the text color for an HTML element:

```html
<h1 style="color:blue;">This is a heading</h1>
<p style="color:red;">This is a paragraph.</p>
```

### Fonts

The CSS font-family property defines the font to be used for an HTML element:

```html
<h1 style="font-family:verdana;">This is a heading</h1>
<p style="font-family:courier;">This is a paragraph.</p>
```

### Text Size

The CSS font-size property defines the text size for an HTML element:

```html
<h1 style="font-size:300%;">This is a heading</h1>
<p style="font-size:160%;">This is a paragraph.</p>
```

### Text Alignment

The CSS text-align property defines the horizontal text alignment for an HTML element:

```html
<h1 style="text-align:center;">Centered Heading</h1>
<p style="text-align:center;">Centered paragraph.</p>
```

## HTML Text Formatting

HTML contains several elements for defining text with a special meaning.

### HTML Formatting Elements

Formatting elements were designed to display special types of text:

- `<b>` - Bold text
- `<strong>` - Important text
- `<i>` - Italic text
- `<em>` - Emphasized text
- `<mark>` - Marked text
- `<small>` - Smaller text
- `<del>` - Deleted text
- `<ins>` - Inserted text
- `<sub>`- Subscript text
- `<sup>` - Superscript text

### HTML `<b>` and `<strong>` Elements

The HTML `<b>` element defines bold text, without any extra importance.

`<b>This text is bold</b>`

<b>This text is bold</b>

`<strong>This text is important!</strong> `

<strong>This text is important!</strong>

### HTML `<i>` and `<em>` Elements

The HTML `<i>` element defines a part of text in an alternate voice or mood. The content inside is typically displayed in italic.

> Tip: The <i> tag is often used to indicate a technical term, a phrase from another language, a thought, a ship name, etc.

Example

`<i>This text is italic</i>`

<i>This text is italic</i>

### HTML `<mark>` Element

The HTML `<mark>` element defines text that should be marked or highlighted:

Example

`<p>Do not forget to buy <mark>milk</mark> today.</p>`

<p>Do not forget to buy <mark>milk</mark> today.</p>

### HTML `<del>` Element

The HTML `<del>` element defines text that has been deleted from a document.Browsers will usually strike a line through deleted text:

Example

`<p>My favorite color is <del>blue</del> red.</p>`

<p>My favorite color is <del>blue</del> red.</p>

### HTML `<ins>` Element

The HTML `<ins>` element defines a text that has been inserted into a document.Browsers will usually underline inserted text:

Example

`<p>My favorite color is <del>blue</del> <ins>red</ins>.</p>`

<p>My favorite color is <del>blue</del> <ins>red</ins>.</p>

### HTML `<sub>` Element

The HTML `<sub>` element defines subscript text. Subscript text appears half a character below the normal line, and is sometimes rendered in a smaller font. Subscript text can be used for chemical formulas, like H2O:

Example

`<p>This is <sub>subscripted</sub> text.</p>`

<p>This is <sub>subscripted</sub> text.</p>

### HTML`<sup>` Element

The HTML `<sup>` element defines superscript text. Superscript text appears half a character above the normal line, and is sometimes rendered in a smaller font. Superscript text can be used for footnotes, like WWW<sup>[1]</sup>:

Example

`<p>This is <sup>superscripted</sup> text.</p>`

<p>This is <sup>superscripted</sup> text.</p>

## HTML Quotation and Citation Elements

> In this chapter we will go through the `<blockquote>`,`<q>`,` <abbr>`, `<address>`, `<cite>`, and `<bdo>` HTML elements.

### HTML `<blockquote>` for Quotations

The HTML `<blockquote>` element defines a section that is quoted from another source.

> Browsers usually indent `<blockquote>` elements.

Example

```html
<p>Here is a quote from WWF's website:</p>
<blockquote cite="http://www.worldwildlife.org/who/index.html">
  For 60 years, WWF has worked to help people and nature thrive. As the world's
  leading conservation organization, WWF works in nearly 100 countries. At every
  level, we collaborate with people around the world to develop and deliver
  innovative solutions that protect communities, wildlife, and the places in
  which they live.
</blockquote>
```

<p>Here is a quote from WWF's website:</p>
<blockquote cite="http://www.worldwildlife.org/who/index.html">
For 60 years, WWF has worked to help people and nature thrive. As the world's leading conservation organization, WWF works in nearly 100 countries. At every level, we collaborate with people around the world to develop and deliver innovative solutions that protect communities, wildlife, and the places in which they live.
</blockquote>

### HTML `<q>` for Short Quotations

The HTML `<q>` tag defines a short quotation.

> Browsers normally insert quotation marks around the quotation.

Example

`<p>WWF's goal is to: <q>Build a future where people live in harmony with nature.</q></p>`
`<p>WWF's goal is to: <q>Build a future where people live in harmony with nature.</q></p>

### HTML `<abbr>` for Abbreviations

The HTML `<abbr>` tag defines an abbreviation or an acronym, like "HTML", "CSS", "Mr.", "Dr.", "ASAP", "ATM".

Marking abbreviations can give useful information to browsers, translation systems and search-engines.

> Tip: Use the global title attribute to show the description for the abbreviation/acronym when you mouse over the element.

Example

`<p>The <abbr title="World Health Organization">WHO</abbr> was founded in 1948.</p>`

<p>The <abbr title="World Health Organization">WHO</abbr> was founded in 1948.</p>

### HTML `<address>` for Contact Information

The HTML `<address>` tag defines the contact information for the author/owner of a document or an article.

The contact information can be an email address, URL, physical address, phone number, social media handle, etc.

The text in the `<address>` element usually renders in italic, and browsers will always add a line break before and after the `<address>` element.

Example

```html
<address>
  Written by John Doe.<br />
  Visit us at:<br />
  Example.com<br />
  Box 564, Disneyland<br />
  USA
</address>
```

<address>
Written by John Doe.<br>
Visit us at:<br>
Example.com<br>
Box 564, Disneyland<br>
USA
</address>

### HTML `<cite>` for Work Title

The HTML `<cite>` tag defines the title of a creative work (e.g. a book, a poem, a song, a movie, a painting, a sculpture, etc.).

> Note: A person's name is not the title of a work.

> The text in the <cite> element usually renders in italic.

Example

`<p><cite>The Scream</cite> by Edvard Munch. Painted in 1893.</p>`

<p><cite>The Scream</cite> by Edvard Munch. Painted in 1893.</p>

### HTML `<bdo>` for Bi-Directional Override

BDO stands for Bi-Directional Override.

The HTML `<bdo>` tag is used to override the current text direction:

Example

`<bdo dir="rtl">This text will be written from right to left</bdo>`
`<bdo dir="ltr">This text will be written from right to left</bdo>`
<bdo dir="rtl">This text will be written from right to left</bdo>

<bdo dir="ltr">This text will be written from left to right</bdo>--
