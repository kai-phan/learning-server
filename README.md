# Learning basic about server
## Server
### 1. What is server?
A server is a computer or system that provides resources, data, services, or programs to other computers, known as clients, over a network. In theory, whenever computers share resources with client machines they are considered servers. There are many types of servers, including web servers, mail servers, and virtual servers.

### 2. What is web server?
A web server is a computer that runs websites. It's a computer program that distributes web pages as they are requisitioned. The basic objective of the web server is to store, process and deliver web pages to the users. This intercommunication is done using Hypertext Transfer Protocol (HTTP).

## Web address
### 1. What is web address?
A web address is a unique name that identifies a website on the Internet. Web addresses are also known as URLs (Uniform Resource Locators). A web address consists of two parts: a protocol and a domain name.

### 2. What does a web address look like?
In order to communicate with a web server and retrieve a web page, a web browser needs to know the web address of the web server. A web address consists of two parts: a protocol and a domain name. The protocol tells the web browser how to communicate with the web server. The domain name tells the web browser where the web server is located.

### 3. IP
IP stands for Internet Protocol. It is a set of rules that governs the communication between any two devices on the Internet. Every device on the Internet has at least one IP address that uniquely identifies it from all other computers on the Internet.

### 4. What does IP address look like?
An IP address is a unique string of numbers separated by periods that identifies each computer using the Internet Protocol to communicate over a network. An IP address consists of four numbers (each between 0 and 255) separated by periods. Each number can be zero to 255. For example,
- `8.13.156.7`: IPv4 each number is between 0 and 255, separated by dots.
- `2001:0db8:85a3:0000:0000:8a2e:0370:7334`: IPv6 each number is between 0 and 65535, separated by colons. => IPv4 is out of IP address, so IPv6 is created. Same principle applies.

### 5. DNS
DNS stands for Domain Name System. It is a system that translates domain names to IP addresses. DNS is a hierarchical decentralized naming system for computers, services, or other resources connected to the Internet or a private network. It associates various information with domain names assigned to each of the participating entities.

- User can not remember IP address, so DNS is created to help user remember domain name.
- DNS is like a phone book for the Internet. When you type a web address in your browser, the browser looks at the DNS to find the website's real address before it can retrieve the website.
- DNS maps domain names to IP addresses, looking up the IP address of a domain name is called a DNS lookup.
- Normally, DNS is provided by ISP (Internet Service Provider). However, user can change DNS provider to improve performance or security.

There are some DNS providers:
- Google
- Cloudflare
- OpenDNS

[//]: # (## HTTP protocol)

[//]: # ()
[//]: # (### 1. What is protocol?)

[//]: # (Protocol is a set of rules that computers use to communicate with each other. It defines how messages are formatted and transmitted, and what actions Web servers and browsers should take in response to various commands.)

[//]: # ()
[//]: # (### 2. What is HTTP?)

[//]: # (HTTP stands for HyperText Transfer Protocol. It is a protocol that allows the fetching of resources, such as HTML documents. It is the foundation of any data exchange on the Web and it is a client-server protocol, which means requests are initiated by the recipient, usually the Web browser.)

[//]: # ()
[//]: # (### 3. Why HTTP?)

[//]: # (Each time we visit a web page, we tell browser to access the url with prefix `http://` or `https://`. The browser will send a request to the server and the server will send back a response. The browser will then render the response and display the web page to us.)

[//]: # (HTTP is not the only protocol that can be used to access the web. There are other protocols such as FTP, Gopher, and torrent. However, HTTP is the most widely used protocol to access the web.)

[//]: # ()
[//]: # (### 4. URI &#40;scheme&#41;)

[//]: # (URI stands for Uniform Resource Identifier. It is a string of characters that identifies a resource. A URI can be further classified as a locator, a name, or both. A URI is a superset of a URL, so many people use the two terms interchangeably.)

[//]: # (- URL: Uniform Resource Locator)

[//]: # (- URN: Uniform Resource Name)

[//]: # ()
[//]: # (### 5. URL)

[//]: # (URL stands for Uniform Resource Locator. It is a reference &#40;an address&#41; to a resource on the Internet. A complete URL consists of the following parts:)

[//]: # (- `subdomain`: the subdomain &#40;is optional&#41; to distinguish between different services running on the same domain)

[//]: # (- `protocol`: the protocol)

[//]: # (- `authority`: the domain name)

[//]: # (- `port`: the port &#40;is optional, default is 80 for HTTP and 443 for HTTPS&#41;)

[//]: # (- `path`: the path)

[//]: # (- `query`: the query string)

[//]: # (- `fragment`: the fragment identifier)

[//]: # ()
[//]: # (```)

[//]: # (https://developer.mozilla.org/en-US/docs/Learn)

[//]: # (- subdomain: developer)

[//]: # (- protocol: https)

[//]: # (- authority: mozilla.org)

[//]: # (- port: 443)

[//]: # (- path: /en-US/docs/Learn)

[//]: # (- origin: https://developer.mozilla.org)

[//]: # (- query: null)

[//]: # (- fragment: null)

[//]: # ()
[//]: # (postgres://user:password@localhost:5432/mydb)

[//]: # (- subdomain: null)

[//]: # (- protocol: postgres)

[//]: # (- authority: localhost)

[//]: # (- port: 5432)

[//]: # (- path: /mydb)

[//]: # (- origin: postgres://localhost:5432)

[//]: # ()
[//]: # ()
[//]: # (tel:+1-816-555-1212)

[//]: # (ftp://example.org/resource.txt)

[//]: # (urn:isbn:9780141036144)

[//]: # (mailto:help@supercyberhelpdesk.info)

[//]: # (ssh://example.com:22/)

[//]: # (ws://example.com:8000/)

[//]: # (wss://example.com:8000/)

[//]: # (file:///etc/fstab)

[//]: # (data:text/plain;base64,SGVsbG8sIFdvcmxkIQ%3D%3D)

[//]: # (```)

[//]: # ()
[//]: # (Not all URI are URL. For example, `mailto:`, `tel:`, `urn:` are URI but not URL. The `://` is optional in URL and only included for schemes having a `authority` component.)

[//]: # ()
[//]: # (### 6. HTTP URL)

[//]: # (URL stands for Uniform Resource Locator. It is a reference &#40;an address&#41; to a resource on the Internet. A complete URL consists of the following parts:)

[//]: # (`http://www.example.com:80/path/to/myfile.html?key1=value1&key2=value2#SomewhereInTheDocument`)

[//]: # (- `http://`: the protocol)

[//]: # (- `www.example.com`: the domain name or authority &#40;ref: https://developer.mozilla.org/en-US/docs/Web/API/URL/URL&#41;)

[//]: # (- `:80`: the port &#40;is optional, default is 80&#41;)

[//]: # (- `/path/to/myfile.html`: the path)

[//]: # (- `?key1=value1&key2=value2`: the query string)

[//]: # (- `#SomewhereInTheDocument`: the fragment identifier)

[//]: # ()
[//]: # (### 7. Client and Server)

[//]: # (If the computer or device or web browser are sending the request, it is called the client. )

[//]: # (If the computer receiving the request, it is called the server.)

[//]: # ()
[//]: # (### 8. HTTP Request)

[//]: # (HTTP request can perform by `Fetch API` or `XMLHttpRequest` or `curl` or `Postman` or `browser`.)

[//]: # (- `Fetch API`: https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API)

[//]: # (- `XMLHttpRequest`: https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest)

[//]: # (- `curl`: https://curl.se/)

[//]: # (- `Postman`: https://www.postman.com/)

[//]: # (- `browser`: https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch)

[//]: # ()
[//]: # (Main parts of HTTP request:)

[//]: # (- `headers`: the headers)

[//]: # (- `method`: the method &#40;GET, POST, PUT, DELETE, PATCH, HEAD, OPTIONS&#41;)

[//]: # (- `url`: the url)

[//]: # (- `body`: the body)

[//]: # ()
[//]: # (#### 1. HTTP headers)

[//]: # (The HTTP headers API allows us to perform a various actions on HTTP request and response headers, like add metadata. The headers are represented as a `Headers` object, which is a simple multi-map of names to values.)

[//]: # (Header Object in browser: https://developer.mozilla.org/en-US/docs/Web/API/Headers)

[//]: # (Header Object in NodeJS: https://nodejs.org/api/http.html#http_class_http_clientrequest)
