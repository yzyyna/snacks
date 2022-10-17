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
