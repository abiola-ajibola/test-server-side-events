# Server Side Events

Server Side Events or SSE enable a client to make a single http request and keep the connection open for multiple responses from the server.

It has a limitation of 6 concurrent connection from a single client when using http/1.x, with http/2 the default concurrent connections is 100.