# aki
***welp htmx is bloat***<br>

**minified (~265 B)**<br>

a little hypermedia framework that is super tiny and very simple to use no bs.

### installation
just copy the contents from `https://raw.githubusercontent.com/vilgacx/aki/main/index.min.js` and then use it as `aki.js`

##### simplest way to install (using curl):
```
curl https://raw.githubusercontent.com/vilgacx/aki/main/index.min.js > aki.js
```

### setup
```html
<script src="<path>/aki.js"></script>
```
*(that's it)*

### how to use ?
pick any element that you wanna make **aki-ed** and add two attributes: `url` (the GET url) and `fn` (the type of function on which things will implemented [for e.g.: onclick, onfocus]).

```html
<h1>hello world</h1>
<button url="http://.../<get-method-url>" fn="onclick">click</button>
```

##### to response to a action, on server side the response structure should look like this:
```json
{
  "element-selector-1": {
    "property-1-1": "value-1-1",
    "property-1-n": "value-1-n"
  },
  'element-selector-n': {
    "property-n-1": "value-n-1",
    "property-n-i": "value-n-i"
  }
}
```

##### for e.g.:

```json
{
  "h1": {
    "style": "color:gray;",
    "innerText": "you have been aki-ed"
  },
}
```
![akitest.gif](./static/akitest.gif)
