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
