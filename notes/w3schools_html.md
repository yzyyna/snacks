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

HTML headings are defined with the `<h1>` to `<h6>` tags.

`<h1>` defines the most important heading. `<h6>` defines the least important heading.
