# base62js
Convert numbers to case-sensitive-alpha-numeric (base62) strings, and back.

This is useful for when you've got long numerical ids and you want to compress it to make neater URLs. It's also useful if you know that your storage layer is going to treat the number as a string, in which case you might as well compress it and hydrate when needed.
